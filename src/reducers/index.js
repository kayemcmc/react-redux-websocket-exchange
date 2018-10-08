import { combineReducers } from "redux";
import binanceReducer from "./binance";
import socketReducer from "./socket";

const reducers = combineReducers({
  binance: binanceReducer,
  socket: socketReducer
});

export default reducers;
