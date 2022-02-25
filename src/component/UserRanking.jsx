import React, { Component } from "react";
import { connect } from "react-redux";
import "./userRanking.css";
class UserRanking extends Component {
  render() {
    const { img, name, posts, postTime, id, wanttogo } = this.props.data;
    const idUserLogin = localStorage.getItem("idUserLogin");
    const arrayRank = this.props.arrayData;
    let rank = this.props.nth + 1;

    if (this.props.isPost) {
      if (this.props.time == "monthly") {
        for (let i = this.props.index - 1; i > 0; i--) {
          if (postTime.monthly == arrayRank[i].postTime.monthly) {
            rank--;
          }
        }
      } else {
        for (let i = this.props.index - 1; i > 0; i--) {
          if (posts == arrayRank[i].posts) {
            rank--;
          }
        }
      }
    } else {
      for (let i = this.props.index - 1; i > 0; i--) {
        if (wanttogo == arrayRank[i].wanttogo) {
          rank--;
        }
      }
    }
    return (
      <>
        {id == idUserLogin ? (
          <div className="listUser__item currentUser">
            <span className="userNth"> {rank}</span>
            {this.props.dispatchCurrentRanking(rank)}
            <img className="userAvartar" src={img + id} alt="true" />
            <div className="detail">
              <p className="userName">{name}</p>
              <p className="postNumber">
                {this.props.time == "monthly" ? postTime.monthly : posts}{" "}
                <span>posts</span>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="listUser__item">
          <span className="userNth"> {rank}</span>
          <img className="userAvartar" src={img + id} alt="true" />
          <div className="detail">
            <p className="userName">{name}</p>
            <p className="postNumber">
              {this.props.time == "monthly" ? postTime.monthly : posts}{" "}
              <span>posts</span>
            </p>
          </div>
          <i className="left-icon bx bx-chevron-right" />
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCurrentRanking: (ranking) => {
      dispatch({ type: "CURRENT__RANKING", data: ranking });
    },
  };
};

export default connect(null, mapDispatchToProps)(UserRanking);
