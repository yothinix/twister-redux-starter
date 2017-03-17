import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from './BodyContainer'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BodyContainer} />
        <Route path="/:ownerUsername" component={BodyContainer} />
      </Switch>
    </MainLayout>
  </ConnectedRouter>
)


export default App
