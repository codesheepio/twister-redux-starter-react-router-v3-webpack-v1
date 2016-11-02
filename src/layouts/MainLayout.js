import React, { PropTypes } from 'react'
import NavBar from '../containers/NavBar'

const MainLayout = props => (
  <div>
    <NavBar />
    { props.children }
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.element,
}

export default MainLayout
