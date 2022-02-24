import React, { Component } from "react";
import kingicon from "../img/icon/ranking_gradient.svg";
import whiteicon from "../img/icon/ranking_white.svg";
import silverIcon from "../img/icon/icon_score_master_sliver-45.svg";
import bronzeIcon from "../img/icon/icon_score_master_bronze-45.svg";
import { connect } from "react-redux";
import TimeRanking from "./TimeRanking";
import Ranking from "../view/Ranking";

class TopUser extends Component {
  render() {
    let rankings = [];
    console.log("rankings", rankings);

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
        console.log("rankings mont 1", rankings);
      } else if (
        this.props.topUser[0].postTime.monthly ==
        this.props.topUser[1].postTime.monthly
      ) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
        console.log("rankings mon 2", this.props.topUser, rankings);
      } else if (
        this.props.topUser[1].postTime.monthly ==
        this.props.topUser[2].postTime.monthly
      ) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        console.log("rankings mon 3", this.props.topUser, rankings);
      } else {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
        console.log("rankings mon 4", this.props.topUser, rankings);
      }
    } else {
      if (this.props.topUser[0].posts == this.props.topUser[2].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        console.log("rankings 1 ", rankings);
      } else if (this.props.topUser[0].posts == this.props.topUser[1].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
        console.log("rankings 2 ", rankings);
      } else if (this.props.topUser[1].posts == this.props.topUser[2].posts) {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        console.log("rankings 3 ", rankings);
      } else {
        rankings.push({ rank: 1, icon: kingicon, css: " topUser__item__nth1" });
        rankings.push({ rank: 2, icon: silverIcon, css: "" });
        rankings.push({ rank: 3, icon: bronzeIcon, css: "" });
        console.log("rankings 4 ", rankings);
      }
    }

    return (
      <div className="content__items">
        <TimeRanking />
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
        <div className="topUser">
          <div className={"topUser__item" + " " + rankings[1].css}>
            <img className="ranking-icon" src={rankings[1].icon} alt="true" />
            <h2 className="ranking">No.{rankings[1].rank}</h2>
            <img
              className="rankingImg"
              src={this.props.topUser[1].img + Math.floor(Math.random() * 22)}
              alt="true"
            />
            <p className="rankingName">{this.props.topUser[1].name}</p>
            <p className="postNumber">
              {this.props.time == "monthly"
                ? this.props.topUser[1].postTime.monthly
                : this.props.topUser[1].posts}{" "}
              <span>posts</span>
            </p>
          </div>
          <div className={"topUser__item" + " " + rankings[0].css}>
            <img className="ranking-icon" src={rankings[0].icon} alt="true" />
            <h2 className="ranking">No.{rankings[0].rank}</h2>
            <img
              className="rankingImg"
              src={this.props.topUser[0].img + Math.floor(Math.random() * 22)}
              alt="true"
            />
            <p className="rankingName">{this.props.topUser[0].name}</p>
            <p className="postNumber">
              {this.props.time == "monthly"
                ? this.props.topUser[0].postTime.monthly
                : this.props.topUser[0].posts}{" "}
              <span>posts</span>
            </p>
          </div>
          <div className={"topUser__item" + " " + rankings[1].css}>
            <img className="ranking-icon" src={rankings[2].icon} alt="true" />
            <h2 className="ranking">No.{rankings[2].rank}</h2>
            <img
              className="rankingImg"
              src={this.props.topUser[2].img + Math.floor(Math.random() * 22)}
              alt="true"
            />
            <p className="rankingName">{this.props.topUser[2].name}</p>
            <p className="postNumber">
              {this.props.time == "monthly"
                ? this.props.topUser[2].postTime.monthly
                : this.props.topUser[2].posts}{" "}
              <span>posts</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentRanking: state.userReducer.currentRanking,
    time: state.userReducer.time,
  };
};

export default connect(mapStateToProps)(TopUser);
