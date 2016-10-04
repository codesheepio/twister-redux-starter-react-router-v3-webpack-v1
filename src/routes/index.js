import { Route, IndexRoute } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from '../components/BodyContainer'

const routes = (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={BodyContainer} />
    <Route path=':ownerUsername' component={BodyContainer} />
  </Route>
)

export default routes
