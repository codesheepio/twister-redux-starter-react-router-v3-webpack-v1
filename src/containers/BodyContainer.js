import { connect } from 'react-redux'
import { push } from 'redux-router'
import BodyContainer from '../components/BodyContainer'

const mapStateToProps = state => ({
  token: state.auth.token,
})

const mapDispatchToProps = dispatch => ({
  redirect: url => dispatch(push(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
