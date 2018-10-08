import React from "react";
import "./WidgetSmall.css";

export default ({ url, title, btcunit, btcprice, percentage }) => {
  return (
    <div className="box box-body bg-hexagons-white pull-up">
      <div className="media align-items-center p-0">
        <div className="text-center pr-3">
          <img src={url} style={{ width: "25px" }} alt="cryptologo" />
        </div>
        <div>
          <h3 className="no-margin">{title}</h3>
        </div>
      </div>
      <div className="flexbox align-items-center mt-25">
        <div>
          <p className="no-margin">
            <span style={{ color: "rgb(237, 203, 43)" }}> {btcunit}</span>{" "}
            <span className="text-gray mr-2">{title}</span>{" "}
            <span className="text-info">${btcprice}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="no-margin">
            <span className="text-success">+{percentage}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
