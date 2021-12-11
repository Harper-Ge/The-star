import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class Bottom extends Component {
  render() {
    return (
      <div>
        {/* 注册路由 */}

        <div id="bottom-box">
          <div className="small-box">
            <NavLink
              className="button"
              to="/auth/homepage"
              id="zhuyebtn"
            ></NavLink>{" "}
            <span className="text2">主页</span>
          </div>
          <div className="small-box">
            <NavLink
              className="button"
              to="/auth/shequ"
              id="shequbtn"
            ></NavLink>{" "}
            <span className="text2">社区</span>
          </div>
          <div className="small-box">
            <NavLink
              className="button"
              to="/auth/myactivity"
              id="wodebtn"
            ></NavLink>
            <span className="text2">我的活动</span>
          </div>
          <div className="small-box">
            <NavLink
              className="button"
              to="/auth/mypage"
              id="gerenbtn"
            ></NavLink>{" "}
            <span className="text2">个人页面</span>
          </div>
        </div>
      </div>
    );
  }
}
