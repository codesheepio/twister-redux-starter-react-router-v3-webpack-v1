import { FETCH_TWEETS_SUCCESS, TWEET_POST_SUCCESS } from './types'
import fetch from 'isomorphic-fetch'
const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: {
    tweets,
  },
})

const fetchTweets = username => (dispatch) => {
  const uri = `http://localhost:3000/api/Tweets?filter={"where":{"username":"${username}"}}`
  return fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
  .catch(err => console.error(err))
}

const fetchHomeFeed = token => (dispatch) => {
  const uri = `http://localhost:3000/api/Tweets/homefeed?access_token=${token}`
  return fetch(uri)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
  .catch(err => console.error(err))
}

const postTweetSuccess = (name, username, tweetText, timestamp) => ({
  type: TWEET_POST_SUCCESS,
  payload: {
    name,
    username,
    tweetText,
    timestamp,
  },
})

const postTweet = (name, username, tweetText, token) => (dispatch) => {
  const uri = 'http://localhost:3000/api/Tweets'

  fetch(uri, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      name,
      username,
      tweetText,
    }),
  })
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  })
  .then(json => dispatch(
    postTweetSuccess(json.name, json.username, json.tweetText, json.timestamp)
  ))
  .catch(err => console.error(err))
}

export {
  fetchTweets,
  fetchHomeFeed,
  postTweet,
}
