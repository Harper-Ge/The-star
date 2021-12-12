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
        <div id="smallbox2">
        <Bigitem />
        <Bigitem />
        </div>
        
        <div id="container">
          <Bottom />
        </div>
      </div>
    );
  }
}
