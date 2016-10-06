import React from 'react'
import ReactDOM from 'react-dom'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import routes from './routes'
import { loadState, saveState } from './utils/localStorage'
import './styles/custom.scss'
import './styles/main.scss'

const preloadedState = loadState()

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    reduxReactRouter({
      routes,
      createHistory,
    })
  )
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  })
})

const App = (
  <Provider store={store}>
    <ReduxRouter>
      { routes }
    </ReduxRouter>
  </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
