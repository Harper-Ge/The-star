import React, { Component } from "react";
import Header from "./Header";
import Weikaishi from "./Weikaishi";
import "./index.css";

export default class MyActivity extends Component {
  render() {
    return (
      <div id="activity">
        <Header />
        <div id="container1">
          <div id="weikaishi">
            <div>
              <span className="title">未开始</span>
              <Weikaishi />
            </div>
          </div>
          <div id="daipingjia">
            <div>
              <span className="title">待评价</span>
              <Weikaishi />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
