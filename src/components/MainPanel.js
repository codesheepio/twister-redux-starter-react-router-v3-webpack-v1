import React, { Component } from 'react'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Arnupharp Viratnapanu',
      username: 'topscores',
      tweets: [],
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }
  addToTweetList(tweet) {
    this.setState({
      tweets: [
        ...this.state.tweets,
        tweet,
      ]
    })
  }
  render() {
    let { name, username, tweets } = this.state
    return (
      <div className='main-panel'>
        <NewTweet
          name={ name }
          username={ username }
          addToTweetList={ this.addToTweetList }
        />
        <TweetList tweets={ tweets } />
      </div>
    )
  }
}

export default MainPanel