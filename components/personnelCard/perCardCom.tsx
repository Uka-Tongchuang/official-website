"use client";
// 内置模块
import React from "react";
import Image from "next/image";
import "./index.css";
//img
import {
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
  cardFive,
} from "@/public/renshi";
//页面 文本--data
import content from "./personnel.json";
function perCardCom() {
  const imgs = [cardOne, cardTwo, cardThree, cardFour, cardFive];
  return (
    <div className="md:h-auto xl:h-[418px] bg-gradient-to-b from-[#FAFBFF] to-[#FAFBFF] text-microsoftYahei">
      <h2 className="h-10 flex justify-center items-center pt-8 md:pt-4 md:text-xl xl:w-[80%] m-auto xl:h-[148px] xl:text-[32px] font-bold xl:flex xl:justify-center xl:items-center">
        {content.servers.title}
      </h2>
      {/* //卡片 */}
      <div className="card_box grid grid-cols-2 gap-4  md:w-[80%] md:grid md:grid-cols-3 md:gap-8 p-4 w-full xl:w-[80%] m-auto xl:flex xl:justify-between xl:items-center">
        {content.servers.cardarr.map((item, index) => (
          <div
            key={index}
            className="p-4 md:p-4 xl:p-4 md:w-56 md:h-60 xl:flex xl:flex-col xl:w-56 xl:h-60 bg-gradient-to-b from-white to-[#fff]"
          >
            <h4 className="font-bold text-md md:text-lg xl:text-lg">{item.title}</h4>
            <p className="text-sm text-ccc w-[60%] h-10 mt-10 md:text-md xl:text-lg">{item.en}</p>
            <Image
              className="w-16 mt-8 ml-[70%] md:w-[80px] md:h-[80px] xl:w-[80px] xl:h-[80px] "
              src={imgs[index]}
              loading="lazy"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default perCardCom;
