import * as React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Trade from "./components/Trade";

//Not a huge fan of snapshot testing unless its for routes!

describe("App", () => {
  describe("component", () => {
    let element;

    beforeEach(() => {
      element = <App />;
    });
    it("renders as expected", () => {
      const component = shallow(element);
      expect(component).toMatchSnapshot();
    });
    it("routes / to Home component", () => {
      const component = shallow(element);
      expect(
        component
          .find('Route[exact=true][path="/"]')
          .first()
          .prop("component")
      ).toBe(Home);
    });
    it("routes /dashboard to Dashboard", () => {
      const component = shallow(element);
      expect(
        component
          .find('Route[path="/dashboard"]')
          .first()
          .prop("component")
      ).toBe(Dashboard);
    });
    it("routes /trade/:symbol to Trade", () => {
      const component = shallow(element);
      expect(
        component
          .find('Route[path="/trade/:symbol"]')
          .first()
          .prop("component")
      ).toBe(Trade);
    });
  });
});
