import React, { PropTypes } from 'react'
import isEqual from 'lodash.isequal'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    if (this.props.ownerUsername) {
      this.props.fetchTweets(this.props.ownerUsername)
    } else {
      this.props.fetchHomeFeed(this.props.token)
    }
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps)
  }

  componentDidUpdate() {
    if (this.props.ownerUsername) {
      this.props.fetchTweets(this.props.ownerUsername)
    } else {
      this.props.fetchHomeFeed(this.props.token)
    }
  }

  render() {
    return (
      <div className={'tweet-list'}>
        {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
      </div>
    )
  }
}

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object),
  ownerUsername: PropTypes.string,
  fetchTweets: PropTypes.func.isRequired,
  fetchHomeFeed: PropTypes.func.isRequired,
  token: PropTypes.string,
}
TweetList.defaultProps = {
  tweets: [],
}
export default TweetList
