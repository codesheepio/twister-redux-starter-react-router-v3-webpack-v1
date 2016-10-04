import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import { ReduxRouter } from 'redux-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import routes from './routes'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = (
  <Provider store={store}>
    <ReduxRouter>
      { routes }
    </ReduxRouter>
  </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
