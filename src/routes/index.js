import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from '../components/BodyContainer'
import LoginForm from '../containers/LoginForm'

const routes = (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={BodyContainer} />
    <Route path="login" component={LoginForm} />
    <Route path=":ownerUsername" component={BodyContainer} />
  </Route>
)

export default routes
