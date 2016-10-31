import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignupForm extends Component {
  render() {
    return (
      <div className="signup-form">
        <div className="logo text-center">
          Sign up
        </div>
        <div className="form-group">
          <Field
            name="username"
            component="input"
            type="text"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <Field
            name="fullname"
            component="input"
            type="text"
            className="form-control"
            placeholder="Firstname Lastname"
          />
        </div>
        <div className="form-group">
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <div className="form-group text-right">
          <button className="btn btn-primary">Sign up</button>
        </div>
      </div>
    )
  }
}

const ReduxSignupForm = reduxForm({
  form: 'signup',
})(SignupForm)

export default ReduxSignupForm
