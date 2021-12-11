import React, { Component } from "react";
import "./index.css";
export default class Bigitem extends Component {
  render() {
    return (
      <div id="container2" className="maoboli">
        <div id="shang">
          <div id="wanye"></div>
          <div id="title2">
            <div id="name2">大猛子社</div>
            <div id="sign2">设计他真的很好</div>
          </div>
        </div>
        <div id="zhong">
          <div className="imgtext" id="time">
            {" "}
            <span className="text3">2077.13.32</span>
          </div>
          <div className="imgtext" id="place">
            <span className="text3">卢本伟广场</span>{" "}
          </div>
        </div>
        <div id="xia">
          <span id="renshu">233人已添加</span>
          <button id="additem">添加至 我的</button>
        </div>
      </div>
    );
  }
}
