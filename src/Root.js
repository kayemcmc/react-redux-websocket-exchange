import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

const middleware = [ReduxThunk, logger];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
