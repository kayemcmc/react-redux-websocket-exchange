import configureStore from "redux-mock-store";

// Actions to be tested
import reducer from "./socket";
import intitialState from "./socket";

const mockStore = configureStore();
const store = mockStore();

describe("intitialState", () => {
  test("is correct", () => {
    const action = { type: "dummy_action" };

    expect(selectReducer(undefined, action)).toMatchSnapshot();
  });
});
