import React from 'react'
import NavBar from '../components/Navbar'

const MainLayout = (props) => (
  <div>
    <NavBar />
    { props.children }
  </div>
)

export default MainLayout