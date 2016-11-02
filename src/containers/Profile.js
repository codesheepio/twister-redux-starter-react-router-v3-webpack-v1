import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = state => ({
  fetchingUsername: state.router.params.ownerUsername || state.auth.username,
  username: state.profile.username,
  name: state.profile.name,
  numFollowers: state.profile.numFollowers,
  numFollowings: state.profile.numFollowings,
  numTweets: state.profile.numTweets,
})

export default connect(mapStateToProps, { fetchProfile })(Profile)
