import { FOLLOW_FETCH_STATUS_SUCCESS } from './types'

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

export {
  fetchFollowStatus, // eslint-disable-line
}
