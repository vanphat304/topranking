import React, { Component } from "react";
import { connect } from "react-redux";
import "./timeRanking.css";
class TimeRanking extends Component {
  render() {
    return (
      <div className="time">
        <h4
          onClick={() => {
            this.props.changeTimeRanking("monthly");
          }}
          className={
            this.props.timeRanking == "monthly" ? "time-btn active" : "time-btn"
          }
        >
          MONTHLY
        </h4>
        <h4
          onClick={() => {
            this.props.changeTimeRanking("yearly");
          }}
          className={
            this.props.timeRanking == "yearly" ? "time-btn active" : "time-btn"
          }
        >
          YEARLY
        </h4>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTimeRanking: (time) => {
      dispatch({ type: "CHANGE__TIME__RANKING", data: time });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    timeRanking: state.userReducer.time,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeRanking);
