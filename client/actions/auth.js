import { push } from 'redux-router'
import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './types'
import fetch from 'isomorphic-fetch'
const loginSuccess = (username, name, token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    username,
    name,
    token,
  },
})

const login = (username, password) => (dispatch) => {
  const uri = 'http://localhost:3000/api/TwisterUsers/login'

  fetch(uri, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(authInfo => dispatch(loginSuccess(authInfo.username, authInfo.name, authInfo.token)))
  .catch(err => console.error(err))
}

const signup = (username, name, email, password) => (dispatch) => {
  const uri = 'http://localhost:3000/api/TwisterUsers'

  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      username,
      name,
      email,
      password,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(() => dispatch(push('/')))
  .catch(err => console.err(err))
}

const logout = () => ({
  type: AUTH_LOGOUT,
})

export {
  login,
  signup,
  logout,
}
