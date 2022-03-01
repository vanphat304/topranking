import React, { Component } from "react";

import { connect } from "react-redux";
import TopUser from "../topUser/TopUser";
class TopRanking extends Component {
  topRanking = [];
  render() {
    {
      this.props.time == "monthly"
        ? (this.topRanking = this.props.listUser
            .sort((userA, userB) => {
              return (
                userB.posts - userA.posts &&
                userB.postTime.monthly - userA.postTime.monthly
              );
            })
            .slice(0, 3))
        : (this.topRanking = this.props.listUser
            .sort((userA, userB) => {
              return userB.posts - userA.posts;
            })
            .slice(0, 3));
    }
    return this.topRanking.length !== 0 ? (
      <TopUser topUser={this.topRanking} />
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

export default connect(mapStateToProps)(TopRanking);
