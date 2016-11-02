import React from 'react'

const ProfileDetail = ({ numTweets, numFollowers, numFollowings }) => {
  return (
    <div className="detail">
      <div className="col">
        <div className="text">Tweets</div>
        <div className="number">{numTweets}</div>
      </div>
      <div className="col">
        <div className="text">Followers</div>
        <div className="number">{numFollowers}</div>
      </div>
      <div className="col">
        <div className="text">Followings</div>
        <div className="number">{numFollowings}</div>
      </div>
    </div>
  )
}

ProfileDetail.propTypes = {
  numTweets: React.PropTypes.number,
  numFollowers: React.PropTypes.number,
  numFollowings: React.PropTypes.number,
}

ProfileDetail.defaultProps = {
  numTweets: 0,
  numFollowers: 0,
  numFollowings: 0,
}

export default ProfileDetail
