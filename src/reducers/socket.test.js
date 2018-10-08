import * as feedListActions from "./socket";

//test redux actions

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
