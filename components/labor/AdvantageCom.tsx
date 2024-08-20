import React from "react";
import Image from "next/image";
// img
import { bg } from "@/public/labor";
// json
import content from "./labor.json";
function AdvantageCom() {
  return (
    <div className="w-[90%] h-auto m-auto md:w-[80%] bg-a-color md:flex md:items-center md:mt-20 md:mb-20 md:rounded-xl">
      <div className="w-[60%] md:w-[40%] m-auto xl:p-4">
        <Image src={bg} alt="" className="object-contain" />
      </div>
      <div className="p-4 md:w-[58%]">
        <h4 className="font-bold text-lg md:text-lg xl:text-3xl">
          {content.benefits.title}
        </h4>
        {content.benefits.cards.map((item, index) => (
          <div
            key={index}
            className="w-[80%] m-auto h-36 md:h-40 mt-4 bg-white rounded-lg shadow-md p-4"
          >
            <p className="text-md font-bold xl:text-lg xl:h-10">{item.title}</p>
            <p className="text-sm xl:text-md md:text-ironside-grey">
              {item.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvantageCom;
