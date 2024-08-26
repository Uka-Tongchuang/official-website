import React from "react";
//  json
import content from "../position.json";
// coms
import BubbleChartComponent from "./ScenCardCom";
const SceneCom = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
    <div className="w-full h-[40rem] bg-white flex justify-center items-center relative">
      {
        content.scenearr.map((item,index)=>{
          return <BubbleChartComponent key={index} obj={item}/>
        })
      }
      
    </div>
  </div>
  
  
  );
};

export default SceneCom;
