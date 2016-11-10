import { FOLLOW_FETCH_STATUS_SUCCESS, FOLLOW_TOGGLE_STATUS_SUCCESS } from './types'
import fetch from 'isomorphic-fetch'
const fetchFollowStatusSuccess = (followedUsername, isFollowing) => ({
  type: FOLLOW_FETCH_STATUS_SUCCESS,
  payload: {
    followedUsername,
    isFollowing,
  },
})

const fetchFollowStatus = (username, followedUsername) => (dispatch) => {
  const uri = `http://localhost:3000/api/Follows/count?where={"username":"${username}","followedUsername":"${followedUsername}", "isFollowing": true}`

  fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then((json) => {
    if (json.count === 0) {
      dispatch(fetchFollowStatusSuccess(followedUsername, false))
    } else {
      dispatch(fetchFollowStatusSuccess(followedUsername, true))
    }
  })
  .catch(err => console.error(err))
}

const toggleFollowStatusSuccess = (followedUsername, isFollowing) => ({
  type: FOLLOW_TOGGLE_STATUS_SUCCESS,
  payload: {
    followedUsername,
    isFollowing,
  },
})

const toggleFollowStatus = (username, followedUsername, isFollowing, token) => (dispatch) => {
  const uri = `http://localhost:3000/api/Follows/upsertWithWhere?where={"username":"${username}","followedUsername":"${followedUsername}"}`

  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      isFollowing,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(json => dispatch(toggleFollowStatusSuccess(json.followedUsername, json.isFollowing)))
  .catch(err => console.error(err))
}

export {
  fetchFollowStatus,
  toggleFollowStatus,
}
