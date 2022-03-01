import React, { Component } from "react";
import kingicon from "../../../img/icon/ranking_gradient.svg";
import whiteicon from "../../../img/icon/ranking_white.svg";
import { connect } from "react-redux";
class YourRank extends Component {
  render() {
    return (
      <div className="userRanking">
        <img src={kingicon} alt="true" />
        <h1>USER RANKING</h1>
        <p>Top 100 Users</p>
        <div className="yourRanking">
          <img src={whiteicon} alt="true" />
          <p>
            Your Current Ranking : <span>{this.props.currentRanking}th</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRanking: state.userReducer.currentRanking,
  };
};
export default connect(mapStateToProps)(YourRank);
