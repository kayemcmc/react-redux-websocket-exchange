import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { Switch, Route, withRouter } from "react-router-dom";
import Loadable from "react-loadable";

// function Loading({ error }) {
//   if (error) {
//     return "Opps there was an error, please refresh your webpage!";
//   } else {
//     return <h3>Loading...</h3>;
//   }
// }

// const dashboard = Loadable({
//   loader: () => import("./components/Dashboard"),
//   loading: Loading
// });

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={props => <Home />} />
          <Route path="/dashboard" component={props => <Dashboard />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
