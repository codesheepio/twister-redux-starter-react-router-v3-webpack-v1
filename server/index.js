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

const app = express()

const getMarkup = html => (
`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Twister</title>
</head>
<body>
  <div id="react-root">
    ${html}
  </div>
  <script src="/dist/bundle.js"></script>
</body>
</html>
  `
)

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
      console.log(routerState)

      res.status(200).send('server side rendering')
    }))
  })
}

app.listen(8080, () => {
  console.log('Server start listening at http://localhost:8080')
})