import React, { PropTypes } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

const MainPanel = ({ name, username, tweets, enableTweet, addToTweetList }) => (
  <div className='main-panel'>
    { enableTweet
        ? <NewTweet
            name={ name }
            username={ username }
            addToTweetList={ addToTweetList }
          />
        :null
    }
    <TweetList tweets={ tweets } />
  </div>
)

MainPanel.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  addToTweetList: PropTypes.func,
  enableTweet: PropTypes.bool,
}

MainPanel.defaultProps = {
  enableTweet: false,
}

export default MainPanel