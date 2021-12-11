import React, { Component } from "react";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <div id="header-box">
        <div className="search">
          <input type="text" />
          <div id="img"></div>
          <div id="tixing"></div>
        </div>
      </div>
    );
  }
}
