import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import SheQu from './shequ';
import MyActivity from "../Pages/MyActivity/index.jsx";
import MyPage from "../Pages/MyPage/index.jsx";
import HomePage from "../Pages/HomePage/index.jsx";
import Denglu from "./denglu.jsx";
import Shouye from "./shouye.jsx";
import Zhuce from "./zhuce.jsx";
import SheQu from "../Pages/SheQu/index.jsx";

export default function Luyou() {
  return (
    <div className="Luyou">
      <Routes>
        <Route path="/" element={<Shouye />} />
        <Route path="/login" element={<Denglu />} />
        <Route path="/zhuce" element={<Zhuce />} />
        <Route path="/auth/homepage" element={<HomePage />} />
        <Route path="/auth/mypage" element={<MyPage />} />
        <Route path="/auth/myactivity" element={<MyActivity />} />
        <Route path="/auth/shequ" element={<SheQu />} />
      </Routes>
    </div>
  );
}
