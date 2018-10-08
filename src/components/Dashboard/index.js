import React from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { initializeSocket } from "../../reducers/socket.js";

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
  }
  componentDidMount() {
    this.props.initializeSocket();
  }

  render() {
    return (
      <div className="container pt-4">
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
          <div className="col-md-6" />
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
