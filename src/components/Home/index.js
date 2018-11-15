import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { initializeSocket } from "../../reducers/socket.js";
import homeimg from "../../assets/img/bg-binance.png";
import computer from "../../assets/img/happy-computer.png";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.initializeSocket();
  }

  render() {
    const { socket } = this.props;
    const online = socket.connected ? (
      <div className="connected">
        <img src={computer} alt="success" style={{ width: "15%" }} /> You are
        now connected to Binance
      </div>
    ) : (
      <div className="connected">Connecting to Binance stream...</div>
    );
    return (
      <div data-test="home-display">
        <div className="container">
          <div className="row">
            <div className="col-md-6 home-copy">
              <h1>
                Cryptocurrency Exchange
                <br />
                <em>Largest coin selection</em>
              </h1>
              {online}
              <div>
                <Link to="/dashboard">
                  <button className="btn primary" data-test="button-display">
                    Start trading
                  </button>
                </Link>
              </div>
            </div>

            <div className="col-md-6 home-img">
              <img src={homeimg} alt="blockchain" style={{ width: "450px" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  socket: state.socket
});

export default connect(
  mapStateToProps,
  { initializeSocket }
)(Home);
