import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import MainPanel from './components/MainPanel'

const App = () => (
  <MainPanel />
)
ReactDOM.render(<App />, document.getElementById('react-root'))