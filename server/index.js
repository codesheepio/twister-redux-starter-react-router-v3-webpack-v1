import express from 'express'
import path from 'path'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.js'

// Create store
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter, match } from 'redux-router/server'
import { createMemoryHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from '../client/reducers'
import routes from '../client/routes'

// Create url
import qs from 'query-string'

// Render component to string
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

// Extract cookie
import cookie from 'cookie'

const app = express()

const getMarkup = store => {
  const initialState = JSON.stringify(store.getState())
  const html = renderToString(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  )
  return (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Twister</title>
  <link rel="stylesheet" type="text/css" href="/dist/styles.css" />
</head>
<body>
  <div id="react-root">
    ${html}
  </div>
  <script>window.__initialState = ${initialState}</script>
  <script src="/dist/manifest.js"></script>
  <script src="/dist/vendors.js"></script>
  <script src="/dist/app.js"></script>
</body>
</html>
  `
)
}

const isDeveloping = process.env.NODE_ENV !== 'production'
if (isDeveloping) {
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
  })
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.use((req, res) => {
    res.status(200).sendFile(path.resolve('index.html'))
  })
} else {
  app.use('/dist', express.static('./dist'))
  app.use((req, res) => {
    const store = createStore(
      rootReducer,
      compose(
        applyMiddleware(thunk),
        reduxReactRouter({
          routes,
          createHistory: createMemoryHistory,
        })
      )
    )
    const query = qs.stringify(req.query)
    const url = req.path + (query.length ? '?' + query : '')

    store.dispatch(match(url, (error, redirectLocation, routerState) => {
      const { location, params, components } = routerState

      if (error) {
        console.error('Router error:', error)
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (!routerState) {
        res.status(400).send('Not Found')
      } else {
        const cookies = cookie.parse(req.headers.cookie || '')
        if (!cookies.token && location !== '/signup') {
          store.dispatch(match('login', () => {
            res.status(200).send(getMarkup(store))
          }))
        } else {
          const { components } = routerState
          const leafComponent = components[components.length -1].WrappedComponent
          let fetchData = () => (Promise.resolve())
          if (leafComponent && leafComponent.fetchData) {
            fetchData = leafComponent.fetchData
          }
          fetchData({ store, location, params })
            .then(() => {
              res.status(200).send(getMarkup(store))
            })
        }
      }
    }))
  })
}

app.listen(8080, () => {
  console.log('Server start listening at http://localhost:8080')
})