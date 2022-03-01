import React, { Component } from "react";
import { connect } from "react-redux";
import TopUser from "../topUser/TopUser";

class WantToGo extends Component {
  topWantToGo = [];

  render() {
    {
      this.props.time == "monthly"
        ? (this.topWantToGo = this.props.listUser
            .sort((userA, userB) => {
              return userB.postTime.yearly - userA.postTime.yearly;
            })
            .slice(0, 3))
        : (this.topWantToGo = this.props.listUser
            .sort((userA, userB) => {
              return userB.wanttogo - userA.wanttogo;
            })
            .slice(0, 3));
    }

    return this.topWantToGo.length !== 0 ? (
      <TopUser isWantToGo={true} topUser={this.topWantToGo} />
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listUser: state.userReducer.userList,
    time: state.userReducer.time,
  };
};
export default connect(mapStateToProps)(WantToGo);
