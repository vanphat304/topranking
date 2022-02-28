import React, { Component } from "react";

export default class TopUserItem extends Component {
  render() {
    return (
      <div className={"topUser__item" + " " + this.props.data.css}>
        <img className="ranking-icon" src={this.props.data.icon} alt="true" />
        <h2 className="ranking">No.{this.props.data.rank}</h2>
        <img
          className="rankingImg"
          src={this.props.data.img + Math.floor(Math.random() * 22)}
          alt="true"
        />
        <p className="rankingName">{this.props.data.name}</p>
        <p className="postNumber">
          {this.props.time == "monthly"
            ? this.props.data.postTime.monthly
            : this.props.data.posts}{" "}
          <span>posts</span>
        </p>
      </div>
    );
  }
}
