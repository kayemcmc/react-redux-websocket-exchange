import React from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { Table } from "antd";
import Widget from "../Widget";
import WidgetSmall from "../WidgetSmall";
import { Link } from "react-router-dom";

import { initializeSocket } from "../../reducers/socket.js";
import axios from "axios";

import neo from "../../assets/img/1024.png";
import monero from "../../assets/img/monero-symbol-1280.png";

const columns = [
  {
    title: "Symbol",
    dataIndex: "s",
    render: (symbol, record) => (
      <Link to={"/trade/" + symbol} style={{ color: "#30d9f9" }}>
        {symbol}
      </Link>
    )
  },
  {
    title: "Open Price",
    dataIndex: "c"
  },
  {
    title: "High Price",
    dataIndex: "h"
  },
  {
    title: "Low Price",
    dataIndex: "l"
  }
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      binanceData: [],
      cryptos: []
    };
  }
  componentDidMount() {
    this.props.initializeSocket();
    this.fetchMultiSymbols();
  }

  fetchMultiSymbols = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,NEO,XMR&tsyms=BTC,USD,EUR,JPY"
      )
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({ cryptos: cryptos });
      });
  };

  render() {
    const alternatingColor = ["rgb(237, 203, 43)", "#30d9f9"];
    const widgetItem = Object.keys(this.state.cryptos).map((key, index) => (
      <Widget
        style={{
          backgroundColor: alternatingColor[index % alternatingColor.length]
        }}
        symbol={key}
        usd={this.state.cryptos[key].USD}
        eur={this.state.cryptos[key].EUR}
        jpy={this.state.cryptos[key].JPY}
      />
    ));
    return (
      <div className="container pt-4 mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <Table
                rowKey={record => record.s}
                columns={columns}
                dataSource={this.props.feed}
                size="small"
                pagination={false}
                style={{ color: "white" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-between">
              {widgetItem}
            </div>
            <div className="row">
              <div className="col-md-6">
                <WidgetSmall
                  url={neo}
                  title="NEO Coin"
                  btcprice="0.04"
                  percentage="1.35%"
                />
              </div>
              <div className="col-md-6">
                <WidgetSmall
                  url={monero}
                  title="Monero"
                  btcprice="0.017"
                  percentage="1.35%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.socket.feed
});

export default connect(
  mapStateToProps,
  { initializeSocket }
)(Dashboard);
