import React from "react";
import { shallow } from "enzyme";
import moxios from "moxios";
import Root from "../../Root";
import Dashboard from "./index";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,NEO,XMR&tsyms=BTC,USD,EUR,JPY",
    {
      status: 200,
      cryptos: { BTC: 0.001449, USD: 9.06, EUR: 7.99, JPY: 1023.54 }
    }
  );
});

it("can fetch a list of crypto prices and display them", () => {
  const dashboard = shallow(
    <Root>
      <Dashboard />
    </Root>
  );
  setTimeout(() => {
    expect(dashboard.find(".box-inverse").length).toEqual(1);
  }, 100);
});
