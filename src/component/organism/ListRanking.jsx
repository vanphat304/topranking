import React, { Component } from "react";
import UserRanking from "../molecules/UserRanking";
// import UserRanking from "./UserRanking";
class ListRanking extends Component {
  render() {
    return (
      <div className="listUser">
        {this.props.isPost
          ? this.props.time == "monthly"
            ? this.props.listUser
                .sort((userA, userB) => {
                  return userB.postTime.monthly - userA.postTime.monthly;
                })
                .slice(3)
                .map((item, index, array) => {
                  return (
                    <UserRanking
                      key={index}
                      index={index}
                      nth={index + 3}
                      arrayData={array}
                      data={item}
                      isPost={this.props.isPost}
                      time={this.props.time}
                    />
                  );
                })
            : this.props.listUser
                .sort((userA, userB) => {
                  return userB.posts - userA.posts;
                })
                .slice(3)
                .map((item, index, array) => {
                  return (
                    <UserRanking
                      key={index}
                      index={index}
                      arrayData={array}
                      nth={index + 3}
                      data={item}
                      isPost={this.props.isPost}
                      time={this.props.time}
                    />
                  );
                })
          : this.props.time == "monthly"
          ? this.props.listUser
              .sort((userA, userB) => {
                return userB.postTime.yearly - userA.postTime.yearly;
              })
              .slice(3)
              .map((item, index, array) => {
                return (
                  <UserRanking
                    key={index}
                    index={index}
                    arrayData={array}
                    nth={index + 3}
                    data={item}
                    isPost={this.props.isPost}
                    time={this.props.time}
                  />
                );
              })
          : this.props.listUser
              .sort((userA, userB) => {
                return userB.wanttogo - userA.wanttogo;
              })
              .slice(3)
              .map((item, index, array) => {
                return (
                  <UserRanking
                    key={index}
                    index={index}
                    arrayData={array}
                    nth={index + 3}
                    data={item}
                    isPost={this.props.isPost}
                    time={this.props.time}
                  />
                );
              })}
      </div>
    );
  }
}

export default ListRanking;
