import * as feedListActions from "./socket";

//Actions

//Socket init
describe("Socket Connect Init Action", () => {
  it("should create an action to initialize socket connect", () => {
    const socket = { url: "wss://stream.binance.com:9443/ws/!ticker@arr" };
    const expectedAction = {
      type: feedListActions.SOCKET_CONNECTION_INIT,
      socket
    };
    expect(feedListActions.socketConnectionInit(socket)).toEqual(
      expectedAction
    );
  });
});

//socket success
describe("Socket Connect Succcess Action", () => {
  it("should create an action to show socket connect success", () => {
    const expectedAction = {
      type: feedListActions.SOCKET_CONNECTION_SUCCESS
    };
    expect(feedListActions.socketConnectionSuccess()).toEqual(expectedAction);
  });
});

//socket error

describe("Socket Connect Succcess Error", () => {
  it("should create an action to show socket connect error", () => {
    const expectedAction = {
      type: feedListActions.SOCKET_CONNECTION_ERROR
    };
    expect(feedListActions.socketConnectionError()).toEqual(expectedAction);
  });
});

//socket data feed
const mockCoin = [{ a: 1 }];
describe("Coin Feed List Action", () => {
  it("should create an action to receive the con feed from binance", () => {
    const data = mockCoin;
    const expectedAction = {
      type: feedListActions.SOCKET_MESSAGE,
      data
    };
    expect(feedListActions.socketMessage(data)).toEqual(expectedAction);
  });
});
