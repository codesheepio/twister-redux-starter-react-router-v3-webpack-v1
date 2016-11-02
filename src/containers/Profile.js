import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchProfile } from '../actions/profile'
import { fetchFollowStatus } from '../actions/follow'

const mapStateToProps = state => ({
  authUsername: state.auth.username,
  fetchingUsername: state.router.params.ownerUsername || state.auth.username,
  username: state.profile.username,
  name: state.profile.name,
  numFollowers: state.profile.numFollowers,
  numFollowings: state.profile.numFollowings,
  numTweets: state.profile.numTweets,
  isFollowing: state.profile.isFollowing,
  isOwnProfile: state.router.params.ownerUsername === state.auth.username
    || !state.router.params.ownerUsername,
})

export default connect(mapStateToProps, { fetchProfile, fetchFollowStatus })(Profile)
