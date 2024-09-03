"use client";
import React from "react";
import "./index.css";
import Image from "next/image";
//img
import {
  msO,
  msT,
  msTh,
  msF,
  iconO,
  iconT,
  iconTh,
  iconF,
} from "@/public/labor";
// json
import content from "./labor.json";
function CardCom() {
  const iconArr = [msO, msT, msTh, msF];
  const IconArrSecond = [iconO, iconT, iconTh, iconF];
  return (
    <div className="w-full h-auto box p-8">
      <h2 className="h-10 mt-4 xl:text-3xl w-full text-center font-bold xl:mt-20">
        {content.moduleData.title}
      </h2>
      <div className="">
        <div className="w-[90%] m-auto h-[90%] bg-white shadow-2xl rounded-xl shadow-[#eef3fc] grid grid-cols-2  gap-6 md:w-[80%] md:grid-cols-4 md:h-60 md:gap-10 xl:gap-20 xl:h-auto item_boxs xl:p-8">
          {content.moduleData.card.map((item, index) => {
          return (
            <div
              key={index}
              className="flex h-52 xl:mt-10 xl:h-64 2xl:h-72 3xl:h-96 flex-col items-center xl:items-start"
            >
              <Image
                className="w-10 h-10 xl:w-20 xl:h-20 xl:mb-4 xl:ml-4"
                src={iconArr[index]}
                alt=""
              />
              <h4 className="xl:text-xl font-bold text-center xl:ml-4">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 xl:text-left xl:text-lg xl:mt-2 xl:ml-4 text-center">
                {item.en}
              </p>
              <Image
                className="w-4 h-4 mt-6 ml-[90%] xl:w-6 xl:h-6 xl:mt-2"
                src={IconArrSecond[index]}
                alt=""
              />
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default CardCom;
