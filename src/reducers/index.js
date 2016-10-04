import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import tweetsReducer from './tweets'

const rootReducer = combineReducers({
  router: routerStateReducer,
  tweets: tweetsReducer,
})

export default rootReducer
