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
    <div className="w-full h-auto box">
      <h2 className="h-10 mt-4 xl:text-[32px] w-full text-center font-bold xl:mt-[70px]">
        {content.moduleData.title}
      </h2>
      <div className="w-[90%] m-auto grid grid-cols-2  gap-6 md:grid-cols-4 md:h-60 xl:w-[80%] xl:m-auto xl:h-[300px] item_boxs">
        {content.moduleData.card.map((item, index) => {
          return (
            <div key={index} className="flex h-52 flex-col items-center">
              <Image
                className="w-10 h-10 xl:w-[30px] xl:h-[30px] xl:mb-4"
                src={iconArr[index]}
                alt=""
              />
              <h4 className="xl:text-lg font-bold text-center">{item.title}</h4>
              <p className="text-sm text-gray-500 xl:text-sm xl:mt-2 text-center">
                {item.en}
              </p>
              <Image
                className="w-4 h-4 mt-6 ml-[90%] xl:w-4 xl:h-4 xl:mt-2"
                src={IconArrSecond[index]}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardCom;
