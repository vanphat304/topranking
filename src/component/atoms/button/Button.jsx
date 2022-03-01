import React, { Component } from "react";
import "./button.css";
export default class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.action}
        className={this.props.flag ? "btn btn-primary" : "btn btn-transparent"}
      >
        {this.props.text}
      </button>
    );
  }
}
