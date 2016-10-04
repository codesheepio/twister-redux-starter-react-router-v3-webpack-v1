import { combineReducer } from 'redux'
import tweetsReducer from './tweets'

const rootReducer = combineReducer({
  tweets: tweetsReducer,
})

export default rootReducer
