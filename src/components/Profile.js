import React, { Component, PropTypes } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.toggleFollow = this.toggleFollow.bind(this)
  }
  componentDidMount() {
    this.props.fetchProfile(this.props.fetchingUsername)
    if (!this.props.isOwnProfile) {
      this.props.fetchFollowStatus(this.props.authUsername, this.props.username)
    }
  }

  componentDidUpdate() {
    this.props.fetchProfile(this.props.fetchingUsername)
    if (!this.props.isOwnProfile) {
      this.props.fetchFollowStatus(this.props.authUsername, this.props.username)
    }
  }

  toggleFollow() {
    this.props.toggleFollowStatus(
      this.props.authUsername, this.props.username, !this.props.isFollowing, this.props.token
    )
  }

  render() {
    const showProfileFollow = this.props.isOwnProfile ? '' :
      <ProfileFollow
        isFollowing={this.props.isFollowing}
        handleToggleFollow={this.toggleFollow}
      />

    return (
      <div className="profile">
        <ProfileHeader name={this.props.name} username={this.props.username} />
        <ProfileDetail
          numTweets={this.props.numTweets}
          numFollowers={this.props.numFollowers}
          numFollowings={this.props.numFollowings}
        />
        { showProfileFollow }
      </div>
    )
  }
}

Profile.propTypes = {
  authUsername: PropTypes.string,
  token: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  numTweets: PropTypes.number,
  numFollowers: PropTypes.number,
  numFollowings: PropTypes.number,
  isFollowing: PropTypes.bool.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  fetchingUsername: PropTypes.string.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  fetchFollowStatus: PropTypes.func.isRequired,
  toggleFollowStatus: PropTypes.func.isRequired,
}

export default Profile
