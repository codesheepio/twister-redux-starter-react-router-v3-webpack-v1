import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweets, fetchHomeFeed } from '../actions/tweet'

const mapStateToProps = state => ({
  ownerUsername: state.router.params.ownerUsername,
  tweets: state.tweets,
  token: state.auth.token,
})

export default connect(mapStateToProps, { fetchTweets, fetchHomeFeed })(TweetList)
