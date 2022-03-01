import React, { Component } from "react";
import kingicon from "../../../img/icon/ranking_gradient.svg";
import whiteicon from "../../../img/icon/ranking_white.svg";
import silverIcon from "../../../img/icon/icon_score_master_sliver-45.svg";
import bronzeIcon from "../../../img/icon/icon_score_master_bronze-45.svg";
import { connect } from "react-redux";
import "./topUser.css";
import YourRank from "../../molecules/yourRank/YourRank";
import TimeRanking from "../../molecules/timeRanking/TimeRanking";
import TopUserItem from "../../atoms/topUserItem/TopUserItem";
class TopUser extends Component {
  render() {
    let rankings = [];
    if (this.props.time == "monthly") {
      if (
        this.props.topUser[0].postTime.monthly ==
          this.props.topUser[2].postTime.monthly &&
        this.props.topUser[0].postTime.monthly ==
          this.props.topUser[1].postTime.monthly
      ) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
      } else if (
        this.props.topUser[0].postTime.monthly ==
        this.props.topUser[1].postTime.monthly
      ) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
      } else if (
        this.props.topUser[1].postTime.monthly ==
        this.props.topUser[2].postTime.monthly
      ) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
      } else {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
      }
    } else {
      if (this.props.topUser[0].posts == this.props.topUser[2].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
      } else if (this.props.topUser[0].posts == this.props.topUser[1].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
      } else if (this.props.topUser[1].posts == this.props.topUser[2].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
      } else {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
      }
    }
    let countItemArray = this.props.topUser.length;
    let mergeArray = [];
    for (let index = 0; index < countItemArray; index++) {
      mergeArray.push({ ...this.props.topUser[index], ...rankings[index] });
    }

    const renderTopUser = (myArray) => {
      let renderList = [];
      let index = Math.floor(myArray.length / 2);
      for (let count = 0; count < myArray.length; count++) {
        renderList.push(<TopUserItem data={myArray[index]} key={count} />);
        index++;
        if (index == myArray.length - 1) {
          index = 0;
        }
      }
      return renderList;
      // return myArray.map((item, index) => {
      //   return <TopUserItem data={item} key={index} />;
      // });
    };

    return (
      <div className="content__items">
        <TimeRanking />
        <YourRank />
        <div className="topUser">{renderTopUser(mergeArray)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.userReducer.time,
  };
};

export default connect(mapStateToProps)(TopUser);