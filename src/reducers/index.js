import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import tweetsReducer from './tweets'
import authReducer from './auth'

const rootReducer = combineReducers({
  router: routerStateReducer,
  tweets: tweetsReducer,
  auth: authReducer,
})

export default rootReducer
