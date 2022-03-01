import React, { Component } from "react";
import "./title.css";
export default class Title extends Component {
  render() {
    return <h1 className="titleTerm">{this.props.title}</h1>;
  }
}
