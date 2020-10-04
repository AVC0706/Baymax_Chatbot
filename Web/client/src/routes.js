import React from 'react';
import { Route, Switch } from 'react-router-dom';
import login from './pages/login/login.page';
import HealthForm from './pages/healthForm/userHealthForm';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/" exact component={HomePage} />*/}
        <Route exact path='/login' component={login} />
        <Route exact path='/healthform' component={HealthForm}></Route>
      </Switch>
    );
  }
}

export default Routes;
