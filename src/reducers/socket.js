const SOCKET_CONNECTION_INIT = "SOCKET_CONNECTION_INIT";
const SOCKET_CONNECTION_SUCCESS = "SOCKET_CONNECTION_SUCCESS";
const SOCKET_CONNECTION_ERROR = "SOCKET_CONNECTION_ERROR";
const SOCKET_CONNECTION_CLOSED = "SOCKET_CONNECTION_CLOSED";
const SOCKET_MESSAGE = "SOCKET_MESSAGE";
const SOCKET_ORDERBOOK = "SOCKET_ORDERBOOK";

const initialState = {
  connected: false,
  readyState: false,
  socket: null,
  feed: [],
  orderBook: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SOCKET_CONNECTION_INIT:
      return Object.assign({}, state, {
        connected: false,
        socket: action.socket
      });

    case SOCKET_CONNECTION_SUCCESS:
      return Object.assign({}, state, {
        connected: true
      });

    case SOCKET_CONNECTION_ERROR:
      return Object.assign({}, state, {
        connected: false
      });

    case SOCKET_CONNECTION_CLOSED:
      return Object.assign({}, state, {
        connected: false,
        socket: null
      });

    case SOCKET_MESSAGE:
      return Object.assign({}, state, {
        readyState: true,
        feed: action.data
      });

    case SOCKET_ORDERBOOK:
      return Object.assign({}, state, {
        readyState: true,
        orderBook: action.data
      });

    default:
      return state;
  }
}

export function initializeSocket() {
  return dispatch => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    const socketOrderBook = new WebSocket(`wss://stream.binance.com:9443/ws/`);
    dispatch(socketConnectionInit(socket));

    socket.onopen = function() {
      dispatch(socketConnectionSuccess());
    };

    socket.onerror = function() {
      dispatch(socketConnectionError());
    };

    socket.onmessage = function(event) {
      let List = JSON.parse(event.data);
      dispatch(socketMessage(List));
    };

    socketOrderBook.onmessage = function(event) {
      let List = JSON.parse(event.data);
      dispatch(socketOrderBook(List));
    };

    socket.onclose = function() {
      dispatch(socketConnectionClosed());
    };
  };
}

function socketConnectionInit(socket) {
  return {
    type: SOCKET_CONNECTION_INIT,
    socket
  };
}

function socketConnectionSuccess() {
  return {
    type: SOCKET_CONNECTION_SUCCESS
  };
}

function socketConnectionError() {
  return {
    type: SOCKET_CONNECTION_ERROR
  };
}

function socketConnectionClosed() {
  return {
    type: SOCKET_CONNECTION_CLOSED
  };
}

function socketMessage(data) {
  return {
    type: SOCKET_MESSAGE,
    data
  };

  function socketOrderBook(data) {
    return {
      type: SOCKET_ORDERBOOK,
      data
    };
  }
}
