import { AUTH_LOGIN_SUCCESS } from './types'

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
    })
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((authInfo) => dispatch(loginSuccess(authInfo.username, authInfo.name, authInfo.token)))
  .catch((err) => console.error(err))
}

export {
  login,
}
