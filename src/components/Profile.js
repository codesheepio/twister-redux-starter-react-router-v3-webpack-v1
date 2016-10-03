import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDetail'
import ProfileFollow from './ProfileFollow'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  componentDidMount() {
    this.props.fetchNumFollowers(this.props.username)
    this.props.fetchNumFollowings(this.props.username)
  }

  componentDidUpdate() {
    this.props.fetchNumFollowers(this.props.username)
    this.props.fetchNumFollowings(this.props.username)
    this.props.getFollowStatus(this.props.authUsername, this.props.username)
  }

  toggleFollow() {
    if (this.props.isFollowing) {
      this.props.unfollow(this.props.authUsername, this.props.username, this.props.token)
    } else {
      this.props.follow(this.props.authUsername, this.props.username, this.props.token)
    }
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
          isLastSection={this.props.isOwnProfile}
        />
        { showProfileFollow }
      </div>
    )
  }
}

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  authUsername: React.PropTypes.string.isRequired,
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
  isFollowing: React.PropTypes.bool.isRequired,
  fetchNumFollowers: React.PropTypes.func.isRequired,
  fetchNumFollowings: React.PropTypes.func.isRequired,
  getFollowStatus: React.PropTypes.func.isRequired,
  follow: React.PropTypes.func.isRequired,
  unfollow: React.PropTypes.func.isRequired,
  isOwnProfile: React.PropTypes.bool.isRequired,
  token: React.PropTypes.string,
}

Profile.defaultProps = {
  token: '',
}

export default Profile