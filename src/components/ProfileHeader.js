import React, { PropTypes } from 'react'

const ProfileHeader = ({name, username}) => (
  <div className="header">
    <div className="name">{name}</div>
    <div className="screen-name">@{username}</div>
  </div>
)

ProfileHeader.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
}

ProfileHeader.defaultProps = {
  name: 'N/A',
  username: '',
}

export default ProfileHeader
