import { FETCH_TWEETS_SUCCESS, TWEET_POST_SUCCESS } from '../actions/types'

const initialState = []

const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS: {
      return action.payload.tweets
    }
    case TWEET_POST_SUCCESS: {
      return [
        {
          name: action.payload.name,
          username: action.payload.username,
          tweetText: action.payload.tweetText,
          timestamp: action.payload.timestamp,
        },
        ...state,
      ]
    }
    default: {
      return state
    }
  }
}

export default tweetsReducer
