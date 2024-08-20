import React from "react";
//  json
import content from "../position.json";
// coms
import CircleCom from "../circle-com/CircleCom";
const SceneCom = () => {
  return (
    <div className="h-96 relative w-full">
      {content.scenearr.map((item, index) => (
        <CircleCom key={index} title={item.label} icon={item.icon} line={item.line as string} styles={item.style}/>
      ))}
    </div>
  );
};

export default SceneCom;
