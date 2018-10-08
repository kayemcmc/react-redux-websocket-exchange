import { combineReducers } from "redux";
import socketReducer from "./socket";

const reducers = combineReducers({
  socket: socketReducer
});

export default reducers;
