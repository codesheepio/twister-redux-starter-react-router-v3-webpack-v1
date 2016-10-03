import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import NavBar from './components/NavBar'
import BodyContainer from './components/BodyContainer'

const App = (
  <div>
    <NavBar />
    <BodyContainer ownerName='Arnupharp Viratanapanu' ownerUsername='topscores' />
  </div>
)
ReactDOM.render(App, document.getElementById('react-root'))