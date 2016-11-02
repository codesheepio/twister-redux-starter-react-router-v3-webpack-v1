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
  }
  handleOnChange(event) {
    this.setState({
      tweetText: event.target.value,
    })
  }
  handleOnKeyDown(event) {
    if (event.keyCode !== 13) {
      return
    }
    event.preventDefault()
    this.props.postTweet(this.props.name, this.props.username, this.state.tweetText, this.props.token)
    this.setState({
      tweetText: '',
    })
  }
  handleOnClick(event) {
    event.preventDefault()
    this.props.postTweet(this.props.name, this.props.username, this.state.tweetText, this.props.token)
    this.setState({
      tweetText: '',
    })
  }

  render() {
    return (
      <div className="new-tweet">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="tweet-text col-sm-10">
              <input
                type="text"
                id="tweetText"
                className="form-control"
                placeholder="What's happening"
                onChange={this.handleOnChange}
                onKeyDown={this.handleOnKeyDown}
                value={this.state.tweetText}
              />
            </div>
            <div className="col-sm-2">
              <input
                type="button"
                className="btn btn-default"
                value="Tweet"
                onClick={this.handleOnClick}
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
  token: PropTypes.string.isRequired,
  postTweet: PropTypes.func.isRequired,
}
export default NewTweet
