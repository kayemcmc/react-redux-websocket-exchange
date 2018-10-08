import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Trade from "./components/Trade";
import { Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={props => <Home />} />
          <Route path="/dashboard" component={props => <Dashboard />} />
          <Route path="/trade/:symbol" component={Trade} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
