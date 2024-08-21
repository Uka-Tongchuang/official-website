import React from "react";
//  json
import content from "../position.json";
// coms
import CircleCom from "../circle-com/CircleCom";
const SceneCom = () => {
  return (
    <div className="md:h-[40rem] relative w-full m-0 p-0 ">
      {content.scenearr.map((item, index) => (
        <CircleCom key={index} title={item.label} icon={item.icon} line={item.line as string} styles={item.style}/>
      ))}
    </div>
  );
};

export default SceneCom;
