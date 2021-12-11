import React, { Component } from "react";
import ShequHeader from "../../components/ShequHeader";
import Bigitem from "../../components/BigItem";
import "./index.css";
import Bottom from "../../components/Bottom/index.jsx";

export default class SheQu extends Component {
  render() {
    return (
      <div id="shequ">
        <ShequHeader />

        <Bigitem />
        <Bigitem />
        <div id="container">
          <Bottom />
        </div>
      </div>
    );
  }
}
