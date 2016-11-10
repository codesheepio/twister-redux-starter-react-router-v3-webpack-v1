import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavBar = (props) => {
  const handleLogout = () => {
    console.log('logout')
    props.logout()
  }

  const authButtons = props.token ?
    <div className="navbar-form navbar-right">
      <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
    </div>
    :
    <div className="navbar-form navbar-right">
      <Link to="/login" className="btn btn-default">Log in</Link>
      <Link to="/signup" className="btn btn-primary">Sign up</Link>
    </div>

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">Twister</Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          { authButtons }
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  token: PropTypes.string,
  logout: PropTypes.func.isRequired,
}

export default NavBar
