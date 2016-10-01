import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import Tweet from './components/Tweet'

const App = () => (
  <Tweet
    name={'Supasate Choochaisri'}
    screenName={'kaizerwing'}
    tweetText={'Lorem ipsum'}
  />
)
ReactDOM.render(<App />, document.getElementById('react-root'))