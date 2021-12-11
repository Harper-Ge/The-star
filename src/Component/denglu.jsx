import { Link } from "react-router-dom";
import "../css/login.css";
import React, { useState } from "react";
import axios from "axios";
import classNames from "classnames";

export default function Denglu() {
  const [emailorid, setEmailorid] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    axios
      .post("/api1/login", {
        emailorid: emailorid,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          const token = res.data.data.token;
          console.log(token);
          window.localStorage.setItem("token", "Bearer " + token);
          axios.defaults.headers.post["Authorization"] =
            window.localStorage.getItem("token");
          if (token) {
            alert("登录成功");
            window.history.pushState({}, undefined, "/auth/homepage");
            window.location.reload();
          }
        }
      })
      .catch((error) => {
        console.log("登录失败", error);
        alert("登录失败");
      });
  }
  return (
    <div className="backGround-denglu">
      <div>
        <Link className="huiTui" to="/">
          返回
        </Link>
      </div>
      <div className="buju-denglu">
        <form action="#" className="form-denglu" id="form-denglu">
          <h1>Sign in</h1>
          <p className="p1">您的学号/邮箱：</p>
          <input
            id="input-username"
            type="text"
            className={classNames("input", {
              "is-invalid": emailorid ? false : true,
            })}
            value={emailorid}
            onChange={(e) => {
              setEmailorid(e.target.value);
            }}
          ></input>
          <p className="p1">您的密码：</p>
          <input
            id="input-password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            立即登录
          </button>
        </form>
      </div>
    </div>
  );
}
