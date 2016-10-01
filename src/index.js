import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import TweetList from './components/TweetList'
import NewTweet from './components/NewTweet'

const tweets = [
  {
    id: 0,
    name: 'Supasate Choochaisri',
    screenName: 'kaizerwing',
    tweetText: 'Lorem Ipsum ...' 
  },
  {
    id: 1,
    name: 'Arnupharp Viratanapanu',
    screenName: 'topscores',
    tweetText: 'Lorem Ipsum ...' 
  },
]
const App = () => (
  <div>
    <NewTweet />
    <TweetList tweets={tweets} />
  </div>
)
ReactDOM.render(<App />, document.getElementById('react-root'))