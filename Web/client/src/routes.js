import React from "react";
import { Route, Switch } from "react-router-dom";
import login from "./pages/login/login.page";


class Routes extends React.Component {
  render() {
    return (
      <Switch>

        {/* <Route path="/" exact component={HomePage} />*/}
        <Route path="/login" component={login} /> 
       
      </Switch>
    );
  }
}

export default Routes;
