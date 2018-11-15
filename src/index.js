import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.getElementById("root")
);
