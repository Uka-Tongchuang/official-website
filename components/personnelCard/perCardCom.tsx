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
    <div className="md:h-auto bg-gradient-to-b from-[#fff] to-[#FAFBFF]">
      <h2 className="h-10 flex justify-center items-center pt-8 md:pt-4 md:text-xl xl:w-[80%] m-auto xl:h-24 xl:text-3xl font-bold">
        {content.service.title}
      </h2>
      {/* //卡片 */}
      <div className="card_box grid grid-cols-3 gap-2 h-auto xs:grid-cols-3  xs::gap-4  md:w-[80%] md:grid-cols-3 md:gap-8 p-4 w-full xl:w-[80%] m-auto xl:grid xl:grid-cols-5 xl:gap-7">
        {content.service.cardarr.map((item, index) => (
          <div
            key={index}
            className="xl:relative flex flex-col-reverse justify-around items-center h-24 p-8 md:items-start md:p-4 md:w-full md:h-60 md:flex-col xl:flex-col xl:w-full xl:h-72 bg-gradient-to-b from-white to-[#fff] xl:p-8"
          >
            <h4 className="text-ironside-grey text-sm md:text-black font-bold  md:text-lg  xl:text-lg">
              {item.title}
            </h4>
            <p className="hidden md:pt-2 md:block xl:pt-2 xl:mb-32 text-sm text-ironside-grey w-[60%] h-10 mt-10 md:text-md">
              {item.en}
            </p>
            <Image
              className="w-14  md:mt-8 md:ml-[70%] md:w-20 md:h-20 xl:w-24 xl:h-24 xl:absolute xl:right-0 xl:bottom-0"
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
