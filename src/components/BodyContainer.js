import React, { PropTypes } from 'react'
import LeftPanel from './LeftPanel'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'topscores',
      tweets: [],
      numFollowers: 0,
      numFollowings: 0,
      isFollowing: false,
    }
    this.addToTweetList = this.addToTweetList.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
    this.fetchTweets = this.fetchTweets.bind(this)
    this.fetchNumFollowers = this.fetchNumFollowers.bind(this)
    this.fetchNumFollowings = this.fetchNumFollowings.bind(this)
    this.getFollowStatus = this.getFollowStatus.bind(this)
  }
  componentDidMount() {
    const ownerUsername = (this.props.params.ownerUsername)
                        ? this.props.params.ownerUsername
                        : this.state.username
    const newState = {}
    this.fetchTweets(ownerUsername)
      .then(tweets => {
        newState.tweets = tweets
        return this.fetchNumFollowers(ownerUsername)
      })
      .then(numFollowers => {
        newState.numFollowers = numFollowers
        return this.fetchNumFollowings(ownerUsername)
      })
      .then(numFollowings => {
        newState.numFollowings = numFollowings
        this.setState(newState)
      })
  }
  componentDidUpdate() {
    const ownerUsername = (this.props.params.ownerUsername)
                    ? this.props.params.ownerUsername
                    : this.state.username
    const newState = {}
    this.fetchNumFollowers(ownerUsername)
      .then(numFollowers => {
        newState.numFollowers = numFollowers
        return this.fetchNumFollowings(ownerUsername)
      })
      .then(numFollowings => {
        newState.numFollowings = numFollowings
        this.setState(newState)
      })
  }
  addToTweetList(tweet) {
    this.setState({
      tweets: [
        ...this.state.tweets,
        tweet,
      ]
    })
  }
  fetchTweets(username) {
    return new Promise((resolve, reject) => {
      const uri='http://localhost:3000/api/tweets'
      const filter=`{ "where": { "username": "${username}" }}`
      fetch(`${uri}?filter=${filter}`)
        .then(response => response.json())
        .then(tweets => resolve(tweets))
    })
  }
  fetchNumFollowers(username) {
    return new Promise((resolve, reject) => {
      const uri = `http://localhost:3000/api/Follows/count?where={"followedUsername":"${username}","isFollowing":true}`
      fetch(uri)
        .then(response => response.json())
        .then(data => {
          resolve(data.count)
        })
    })
  }
  fetchNumFollowings(username) {
    return new Promise((resolve, reject) => {
      const uri = `http://localhost:3000/api/Follows/count?where={"username":"${username}","isFollowing":true}`
      fetch(uri)
        .then(response => response.json())
        .then(data => resolve(data.count))
    })
  }
  getFollowStatus(username, followedUsername) {
    const uri = `http://localhost:3000/api/Follows?filter={"where":{"username":"${username}", "followedUsername":"${followedUsername}"}}`
    fetch(uri)
      .then(response => response.json)
      .then((data) => {
        const isFollowing = data.length !== 0 && data[0].isFollowing
        return isFollowing
      })
  }
  toggleFollow() {
    if (this.state.isFollowing) {
      this.unfollow(this.state.username, this.props.ownerUsername)
    }
    else {
      this.follow(this.state.username, this.props.ownerUsername)
    }
  }
  follow(username, followedUsername) {
    const uri = `http://localhost:3000/api/Follows/upsertWithWhere?where={"username":"${username}", "followedUsername":"${followedUsername}"}`
    fetch(uri, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        followedUsername,
        isFollowing: true,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      this.setState({
        isFollowing: true,
      })
    })
    .catch(err => console.log(err))
  }
  unfollow(username, followedUsername) {
    const uri = `http://localhost:3000/api/Follows/upsertWithWhere?where={"username":"${username}","followedUsername":"${followedUsername}"}`
    fetch(uri, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        followedUsername,
        isFollowing: false,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      this.setState({
        isFollowing: false,
      })
    })
    .catch(err => console.log(err))
  }
  render() {
    const ownerUsername = (this.props.params.ownerUsername)
                    ? this.props.params.ownerUsername
                    : this.state.username
    const nameMap = {
      'kaizerwing': 'Supasate Choochaisri',
      'topscores': 'Arnupharp Viratanapanu',
      'jjirawute': 'Jirawute Cheungsirakulwit',
    }
    const ownerName = nameMap[[ownerUsername]]
    const isOwnProfile = this.state.username === ownerUsername
    return (
      <div className="container body">
        <LeftPanel
          {...this.state}
          name={ownerName}
          username={ownerUsername}
          isOwnProfile={isOwnProfile}
          numTweets={this.state.tweets.length}
          toggleFollow={this.toggleFollow}
        />
        <MainPanel
          name={ownerName}
          username={ownerUsername}
          tweets={this.state.tweets}
          addToTweetList={this.addToTweetList}
          enableTweet={isOwnProfile}
        />
      </div>
    )
  }
}

export default BodyContainer