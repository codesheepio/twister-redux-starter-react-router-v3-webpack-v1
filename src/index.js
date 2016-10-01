import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import TweetList from './components/TweetList'

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
  <TweetList tweets={tweets} />
)
ReactDOM.render(<App />, document.getElementById('react-root'))