import axios from "axios";
import { FETCH_PRICES } from "./constants";
import Websocket from "ws";

const apiEndpoint = "https://api.binance.com/api/";
const wsEndpoint = "wss://stream.binance.com:9443/ws/";

// export const fetchPrices = id => dispatch => {
//   axios
//     .get(`http://localhost:5000/api/address/${id}`)
//     .then(res =>
//       dispatch({
//         type: FETCH_PRICES,
//         payload: res.data.result
//       })
//     )
//     .catch(err => console.error(err));
// };

export const fetchPrices = dispatch => {
  axios
    .get("#", {
      crossdomain: true
    })
    .then(res =>
      dispatch({
        type: FETCH_PRICES,
        payload: res.data.result
      })
    )
    .catch(err => console.error(err));
};
