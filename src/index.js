import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import MainPanel from './components/MainPanel'
import NavBar from './components/NavBar'

const App = () => (
  <div className='container body'>
    <NavBar />
    <MainPanel />
  </div>
)
ReactDOM.render(<App />, document.getElementById('react-root'))