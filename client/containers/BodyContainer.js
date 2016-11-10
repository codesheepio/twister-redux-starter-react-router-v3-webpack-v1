import { connect } from 'react-redux'
import { push } from 'redux-router'
import BodyContainer from '../components/BodyContainer'
import { fetchTweets } from '../actions/tweet'
import { fetchProfile } from '../actions/profile'

const mapStateToProps = state => ({
  token: state.auth.token,
  enableTweet: state.router.params.ownerUsername ? false : true, // eslint-disable-line
})

const mapDispatchToProps = dispatch => ({
  redirect: url => dispatch(push(url)),
})

BodyContainer.fetchData = ({store, params}) => {
  return store.dispatch(fetchTweets(params.ownerUsername))
    .then(() => store.dispatch(fetchProfile(params.ownerUsername)))
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
