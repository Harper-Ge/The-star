import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import SheQu from "../../Pages/SheQu";
import MyActivity from "../../Pages/MyActivity";
import MyPage from "../../Pages/MyPage";
import "./index.css";

export default class Bottom extends Component {
  render() {
    return (
      <div id>
        {/* 注册路由 */}
        <Routes>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/shequ" element={<SheQu />}></Route>
          <Route path="/myactivity" element={<MyActivity />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <div id="bottom-box">
          <div className="small-box">
            <NavLink className="button" to="/homepage" id="zhuyebtn"></NavLink>{" "}
            <span className="text2">主页</span>
          </div>
          <div className="small-box">
            <NavLink className="button" to="/shequ" id="shequbtn"></NavLink>{" "}
            <span className="text2">社区</span>
          </div>
          <div className="small-box">
            <NavLink className="button" to="/myactivity" id="wodebtn"></NavLink>
            <span className="text2">我的活动</span>
          </div>
          <div className="small-box">
            <NavLink className="button" to="/mypage" id="gerenbtn"></NavLink>{" "}
            <span className="text2">个人页面</span>
          </div>
        </div>
      </div>
    );
  }
}
