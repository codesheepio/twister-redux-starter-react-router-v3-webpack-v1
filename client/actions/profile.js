import { PROFILE_FETCH_SUCCESS } from './types'
import fetch from 'isomorphic-fetch'
const fetchProfileSuccess = ({
  username,
  name,
  email,
  numFollowers,
  numFollowings,
  numTweets,
}) => ({
  type: PROFILE_FETCH_SUCCESS,
  payload: {
    username,
    name,
    email,
    numFollowers,
    numFollowings,
    numTweets,
  },
})

const fetchProfile = username => (dispatch) => {
  const uri = `http://localhost:3000/api/TwisterUsers/${username}`

  return fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(profile => dispatch(fetchProfileSuccess(profile)))
  .catch(err => console.error(err))
}

export {
  fetchProfile, // eslint-disable-line import/prefer-default-export
}
