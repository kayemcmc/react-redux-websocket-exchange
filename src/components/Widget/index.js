import React from "react";

export default () => {
  return (
    <div>
      <div class="box-body text-center">
        <h2 className="mb-0 text-bold">
          <span className="text-black">ETH</span>
        </h2>
        <h4>
          <span className="text-black">Ethereum</span>
        </h4>
        <ul className="flexbox flex-justified text-center mt-30 bb-1 border-dark pb-20">
          <li className="br-1 border-dark">
            <div className="text-black">USD</div>
            <small className="font-size-18">
              <span className="text-black">2.153</span>
            </small>
          </li>

          <li className="br-1 border-dark">
            <div className="text-black">EUR</div>
            <small className="font-size-18">
              <span className="text-black">3.9232</span>
            </small>
          </li>

          <li>
            <div className="text-black">GBP</div>
            <small className="font-size-18">
              <span className="text-black">3.8202</span>
            </small>
          </li>
        </ul>
        <ul className="flexbox flex-justified text-center mt-20">
          <li className="br-1 border-dark">
            <div className="text-black">% 1h</div>
            <small className="font-size-18">
              <span className="text-black">
                <i className="fa fa-arrow-up pr-5" />
                0.4
              </span>
            </small>
          </li>

          <li className="br-1 border-dark">
            <div className="text-black">% 24h</div>
            <small className="font-size-18">
              <span className="text-black">
                <i className="fa fa-arrow-up pr-5" />
                9.29
              </span>
            </small>
          </li>

          <li>
            <div className="text-black">% 7d</div>
            <small className="font-size-18">
              <span className="text-black">
                <i className="fa fa-arrow-up pr-5" />
                50.77
              </span>
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
};
