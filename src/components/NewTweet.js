import React, { Component, PropTypes } from 'react'

class NewTweet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.addTweet = this.addTweet.bind(this)
  }
  addTweet(tweet) {
    fetch('http://localhost:3000/api/tweets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.props.name,
        username: this.props.username,
        tweetText: this.state.tweetText,
      })
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) => {
      this.setState({
        tweetText: '',
      })
      this.props.addToTweetList(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  handleOnChange(event) {
    this.setState({
      tweetText: event.target.value,
    })
  }
  handleOnKeyDown(event) {
    if (event.keyCode != 13) {
      return
    }
    event.preventDefault()
    this.addTweet({
      name: this.props.name,
      username: this.props.username,
      tweetText: this.state.tweetText,
    })
  }
  handleOnClick(event) {
    event.preventDefault()
    this.addTweet({
      name: this.props.name,
      username: this.props.username,
      tweetText: this.state.tweetText,
    })
  }

  render() {
    return (
      <div className={'new-tweet'}>
        <form className={'form-horizontal'}>
          <div className={'form-group'}>
            <div className={'tweet-text col-sm-10'}>
              <input
                type={'text'}
                id={'tweetText'}
                className={'form-control'}
                placeholder={`What's happening`}
                onChange={ this.handleOnChange }
                onKeyDown={ this.handleOnKeyDown }
                value={ this.state.tweetText }
              />
            </div>
            <div className={'col-sm-2'}>
              <input
                type={'button'}
                className={'btn btn-default'}
                value={'Tweet'}
                onClick={ this.handleOnClick }
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

NewTweet.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  addToTweetList: PropTypes.func,
}
export default NewTweet