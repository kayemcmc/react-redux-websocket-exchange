import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./Trade.css";
import { Table } from "antd";
import axios from "axios";
import { initializeSocket } from "../../reducers/socket.js";

import ReactHighcharts from "react-highcharts";
import theme from "../Chart/highchartsTheme";
import highchartsConfig from "../Chart/highchartsConfig";

ReactHighcharts.Highcharts.setOptions(theme());

const columns = [
  {
    title: "Id",
    dataIndex: "a"
  },
  {
    title: "Price",
    dataIndex: "p"
  },
  {
    title: "Quantity",
    dataIndex: "q"
  }
];

class Trade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: [],
      loading: true
    };
  }

  async componentDidMount() {
    let symbol = this.props.match.params.symbol.toLowerCase();

    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v1/aggTrades?limit=50&symbol=${
        this.props.match.params.symbol
      }`
    }).then(data => {
      this.setState({ orderData: data.data });
    });
  }

  render() {
    if (!this.state.loading) {
      return <h2>Loading..</h2>;
    }
    console.log(
      "yoooooo",
      this.props.match.params.symbol,
      this.state.orderData
    );
    return (
      <Fragment>
        <div className="container">
          <div className="row pt-4 mt-4">
            <div className="" style={{ width: "100%" }}>
              <h2 className="trade-title">
                Latest Trade History for{" "}
                <b className="text-white">{this.props.match.params.symbol}</b>{" "}
                Pair
              </h2>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-5">
              <div className="box">
                <Table
                  rowKey={record => record.s}
                  columns={columns}
                  dataSource={this.state.orderData}
                  size="small"
                  pagination={false}
                  style={{ color: "white" }}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="box text-white text-center">
                Fancy interactive graphs in the works <span>😊</span>
                <div className="pt-3">
                  <ReactHighcharts config={highchartsConfig.call(this)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  orderBook: state.socket.orderBook
});

export default connect(
  mapStateToProps,
  { initializeSocket }
)(Trade);
