import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import routes from './routes'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory,
    })
  )
)

const App = (
  <Provider store={store}>
    <ReduxRouter>
      { routes }
    </ReduxRouter>
  </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
