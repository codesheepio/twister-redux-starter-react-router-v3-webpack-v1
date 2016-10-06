import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import { reducer as formReducer } from 'redux-form'
import tweetsReducer from './tweets'
import authReducer from './auth'

const rootReducer = combineReducers({
  router: routerStateReducer,
  tweets: tweetsReducer,
  auth: authReducer,
  form: formReducer,
})

export default rootReducer
