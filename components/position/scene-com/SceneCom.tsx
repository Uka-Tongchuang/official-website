import React from "react";
//  json
import content from "../position.json";
// coms
import BubbleChartComponent from "./ScenCardCom";
const SceneCom = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div className="w-full h-full bg-white flex justify-center items-center relative">
      <BubbleChartComponent obj={content.scenarioArr}/>
    </div>
  </div>
  
  
  );
};

export default SceneCom;
