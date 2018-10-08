import React from "react";
import "./Widget.css";

export default ({ style, symbol, name, usd, jpy, eur }) => {
  return (
    <div
      className="box box-inverse text-black bg-hexagons-dark pull-up"
      style={style}
    >
      <div className="box-body text-center">
        <h2 className="mb-0 text-bold">
          <span className="text-black">{symbol}</span>
        </h2>
        <h4>
          <span className="text-black">{name}</span>
        </h4>
        <ul className="flexbox flex-justified text-center mt-30 bb-1 border-dark pb-20">
          <li className="br-1 border-dark">
            <div className="text-black">USD</div>
            <small className="font-size-18">
              <span className="text-black">{usd}</span>
            </small>
          </li>

          <li className="br-1 border-dark">
            <div className="text-black">EUR</div>
            <small className="font-size-18">
              <span className="text-black">{eur}2</span>
            </small>
          </li>

          <li>
            <div className="text-black">JPY</div>
            <small className="font-size-18">
              <span className="text-black">{jpy}</span>
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
};
