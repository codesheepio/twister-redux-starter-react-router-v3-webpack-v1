import React from 'react'
import NavBar from '../containers/NavBar'

const MainLayout = props => (
  <div>
    <NavBar />
    { props.children }
  </div>
)

export default MainLayout
