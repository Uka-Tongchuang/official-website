"use client";
import React from "react";
import Image from "next/image";
//img
import { flowOne, flowTwo, flowThree, flowFour } from "@/public/renshi";
//文本json
import content from "./personnel.json";
function flowPath() {
  return (
    <div className="w-full h-auto mt-10 xl:h-[540px] xl:flex xl:justify-center xl:items-center" style={{ background: "#F8FAFD" }}>
      <div className="w-[80%] m-auto xl:w-[80%] xl:h-[400px] xl:flex xl:justify-between xl:items-center xl:m-auto"
      >
        <div className="h-56 flex flex-col xl:w-[49%] xl:flex xl:flex-col xl:justify-between items-center">
          <div className="w-full flex justify-between items-end xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="w-32 h-32 xl:w-[120px] xl:h-[120px]"
              loading="lazy"
              src={flowOne}
              alt=""
            />
            <h4 className="mb-6">{content.topic["topic-first"]}</h4>
          </div>
          <div className="hidden xl:block xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="w-full flex justify-between items-end xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="w-32 h-32 xl:w-[120px] xl:h-[120px]"
              loading="lazy"
              src={flowTwo}
              alt=""
            />
            <h4 className="mb-6">{content.topic["topic-second"]}</h4>
          </div>
        </div>
        <div className="hidden xl:block xl:w-[2px] xl:h-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
        <div className="h-60 flex flex-col xl:w-[49%] xl:flex xl:flex-col xl:justify-between items-center">
          <div className="w-full flex justify-between items-end xl:h-[49%] xl:flex xl:justify-between xl:items-center">
            <Image
              className="w-32 h-32 xl:w-[120px] xl:h-[120px]"
              src={flowThree}
              loading="lazy"
              alt=""
            />
            <h4 className="mb-6">{content.topic["topic-third"]}</h4>
          </div>
          <div className="xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="w-full flex justify-between items-end xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="w-32 h-32 xl:w-[120px] xl:h-[120px]"
              loading="lazy"
              src={flowFour}
              alt=""
            />
            <h4 className="mb-6">{content.topic["topic-fourth"]}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default flowPath;
