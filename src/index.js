import React from 'react'
import ReactDOM from 'react-dom'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'

const App = () => (
  <div className='container'>
    <div className='jumbotron'>
      <h1 style={{ color: '#000' }}>Hello, world!</h1>
      <p>...</p>
      <p><a className='btn btn-primary btn-lg' href='#' role='button'>Learn more</a></p>
    </div>
  </div>
)
ReactDOM.render(<App />, document.getElementById('react-root'))