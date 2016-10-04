import React from 'react'
import NavBar from '../components/NavBar'

const MainLayout = (props) => (
  <div>
    <NavBar />
    {props.children}
  </div>
)

export default MainLayout
