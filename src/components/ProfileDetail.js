import React from 'react'
import classnames from 'classnames'

const ProfileDetail = (props) => {
  const detailClass = classnames('detail', {
    'last-section': props.isLastSection,
  })
  return (
    <div className={detailClass}>
      <div className="col">
        <div className="text">Tweets</div>
        <div className="number">{props.numTweets}</div>
      </div>
      <div className="col">
        <div className="text">Followers</div>
        <div className="number">{props.numFollowers}</div>
      </div>
      <div className="col">
        <div className="text">Followings</div>
        <div className="number">{props.numFollowings}</div>
      </div>
    </div>
  )
}

ProfileDetail.propTypes = {
  numTweets: React.PropTypes.number.isRequired,
  numFollowers: React.PropTypes.number.isRequired,
  numFollowings: React.PropTypes.number.isRequired,
  isLastSection: React.PropTypes.bool,
}

ProfileDetail.defaultProps = {
  isLastSection: false,
}

export default ProfileDetail