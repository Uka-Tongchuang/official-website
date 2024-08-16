import React from "react";
import Image from "next/image";
// img
import { bg } from "@/public/labor";
// json
import content from "./labor.json";
function AdvantageCom() {
  return (
    <div className="w-[90%] m-auto  bg-a-color">
      <div className="w-[60%] m-auto">
        <Image src={bg} alt="" />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">{content.benefits.title}</h4>
        {content.benefits.cards.map((item, index) => (
          <div key={index} className="w-[90%] m-auto h-36 mt-4 bg-white rounded-lg shadow-md p-4">
            <p className="text-md font-bold">{item.title}</p>
            <p className="text-sm">{item.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvantageCom;
