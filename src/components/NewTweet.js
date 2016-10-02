import React, { Component, PropTypes } from 'react'

class NewTweet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetText: '',
    }
    this.changeTweetText = this.changeTweetText.bind(this)
    this.addTweet = this.addTweet.bind(this)
  }
  changeTweetText(event) {
    this.setState({
      tweetText: e.target.value,
    })
  }
  addTweet(event) {
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
                onChange={ this.changeTweetText }
                value={ this.state.tweetText }
              />
            </div>
            <div className={'col-sm-2'}>
              <input
                type={'button'}
                className={'btn btn-default'}
                value={'Tweet'}
                onClick={ this.addTweet }
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