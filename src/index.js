import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainLayout from './layouts/MainLayout'
import BodyContainer from './components/BodyContainer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={MainLayout}>
        <IndexRoute component={BodyContainer} />
        <Route path=':ownerUsername' component={BodyContainer} />
      </Route>
    </Router>
  </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
