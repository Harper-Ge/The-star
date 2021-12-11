import React, { Component } from "react";
import "./style.css";

export default class ShequHeader extends Component {
  render() {
    return (
      <div id="header-box">
        <div className="search">
          <input type="text" />
          <div id="img"></div>
        </div>
      </div>
    );
  }
}
