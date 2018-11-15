import React from "react";
import { shallow } from "enzyme";
import Home from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "../../Root";

describe("Home", () => {
  const home = shallow(
    <Root>
      <Home />
    </Root>
  );

  it("renders properly", () => {
    expect(home.find("[data-test='home-display']"));
  });
  it("renders a button", () => {
    expect(home.find("[data-test='button-display']"));
  });
});
