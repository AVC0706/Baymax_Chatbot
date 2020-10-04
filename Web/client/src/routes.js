import React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from './pages/login/login.page';
import HealthForm from './pages/healthForm/userHealthForm';
import Landing from './pages/landing/landing';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route exact path='/login' component={login} />
        <Route exact path='/healthform' component={HealthForm}></Route>
      </Switch>
    );
  }
}

export default Routes;
