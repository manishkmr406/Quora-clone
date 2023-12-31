import React from "react";
// import Feed from "./Feed.js";
import QHeader from "../header/QHeader";
import "./Quora.css";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widget from "../Widget/Widget";
// import Widget from "./Widget.js";

function Quora() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Quora;