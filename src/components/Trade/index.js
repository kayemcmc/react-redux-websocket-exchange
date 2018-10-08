import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./Trade.css";
import { Table } from "antd";
import axios from "axios";
import { initializeSocket } from "../../reducers/socket.js";

const columns = [
  {
    title: "Symbol",
    dataIndex: "s"
  },
  {
    title: "Order Trade Id",
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

  async componentWillMount() {
    let symbol = this.props.match.params.symbol.toLowerCase();

    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v1/aggTrades?limit=100&symbol=${
        this.props.match.params.symbol
      }`
    }).then(data => {
      this.setState({ orderData: data });
    });
    this.setState({ loading: false });
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
            <div className="text-center">
              <h2 className="trade-title">
                Detailed Trade History for{" "}
                <b className="text-white">{this.props.match.params.symbol}</b>{" "}
                Pair
              </h2>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-8">
              <div className="box">
                {this.state.loading === false ? (
                  <Table
                    rowKey={record => record.s}
                    columns={columns}
                    dataSource={this.state.data.data}
                    size="small"
                    pagination={false}
                    style={{ color: "white" }}
                  />
                ) : (
                  "Loading"
                )}
              </div>
            </div>
            <div className="col-md-4">two</div>
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
