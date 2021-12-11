import React, { Component } from "react";
import Header from "../../components/Header";
import Bigitem from "../../components/BigItem";
import "./index.css";
export default class HomePage extends Component {
  render() {
    return (
      <div id="homepage">
        <Header />
        <div id="container1">
          <div id="woguanzhude">
            <div>
              <span className="title">我关注的</span>
            </div>
            <Bigitem />
          </div>
          <div id="tuijian">
            <div>
              <span className="title">推荐</span>
            </div>
            <Bigitem />
            <Bigitem />
            <Bigitem />
            <Bigitem />
          </div>
        </div>
      </div>
    );
  }
}
