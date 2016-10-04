import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  componentDidMount() {
    const mockTweets = [
      { id: 1, name: 'Supasate Choochaisri', username: 'kaizerwing', timestamp: '1234' },
      { id: 2, name: 'Arnupharp Viratanapanu', username: 'topscores', timestamp: '5678' },
    ]
    this.props.fetchTweetsSuccess(mockTweets)
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
  tweets: PropTypes.arrayOf(PropTypes.object)
}
TweetList.defaultProps = {
  tweets: [],
}
export default TweetList
