import React from 'react'
import classnames from 'classnames'

class ProfileFollow extends React.Component {
  render() {
    const btnClass = classnames('btn btn-lg', {
      'btn-danger': this.props.isFollowing,
      'btn-default': !this.props.isFollowing,
    })

    const followToggleBtn = this.props.isFollowing ?
      <input
        type="button"
        className={btnClass}
        value="Unfollow"
        onClick={this.props.handleToggleFollow}
      />
      :
      <input
        type="button"
        className={btnClass}
        value="Follow"
        onClick={this.props.handleToggleFollow}
      />

    return (
      <div className="action last-section">
        { followToggleBtn }
      </div>
    )
  }
}

ProfileFollow.propTypes = {
  isFollowing: React.PropTypes.bool,
  handleToggleFollow: React.PropTypes.func.isRequired,
}

ProfileFollow.defaultProps = {
  isFollowing: false,
}

export default ProfileFollow
