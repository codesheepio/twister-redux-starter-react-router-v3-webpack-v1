import React, { PropTypes } from 'react'

const Tweet = ({ name, screenName, tweetText }) => (
  <div className={'tweet'}>
    <div className={'name'}>{ name }</div>
    <div className={'screen-name'}>@{ screenName }</div>
    <div className={'tweet-text'}>{ tweetText }</div>
  </div>
)

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired,
}

export default Tweet