import React from "react";
import Header from "./Header";
import Feed from "./Feed";
import Badge from "./Badge";
import Trends from "./Trends";

var leftColumn = {
  width: "30%",
  float: "left"
}
var middleColumn = {
  width: "30%",
  marginLeft: "30%"
}

var rightColumn = {
  width: "30%",
  marginLeft: "65%",
  border: "1px solid"
}

function App(){
  return (
    <div className="row">
      <div>
        <Header/>
      </div>
      <div style={leftColumn}>
        <Badge/>
      </div>
      <div style={middleColumn}>
        <Feed/>
      </div>
      <div style={rightColumn}>
        <Trends/>
      </div>
    </div>
  );
}

export default App;

// <Feed/>
//
// <Suggestions/>
//
