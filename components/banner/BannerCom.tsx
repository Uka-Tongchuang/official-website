"use client";
import React from "react";
import "./banner.css"
import Image, { StaticImageData } from "next/image";
type propsType = {
  title: string;
  msg: string;
  img: StaticImageData | string; // 修改img属性类型;
};

const BannerCom = ({ title, msg, img }: propsType): JSX.Element => {
  return (
    <div className="w-full h-auto xl:h-[465px] bg-ghost-white">
      <div className="xl:w-[80%] h-auto m-auto text-center xl:flex xl:justify-between xl:items-center">
        <div className="xl:w-[50%]">
          <h1 className="font-bold text-lg pt-4 h-10 flex justify-center items-center xl:text-4xl xl:mb-[54px]">
            {title}
          </h1>
          <p className="text-lg indent-2 leading-relaxed p-4 text-nav-font-color ">{msg}</p>
        </div>
        <div className="w-[90%] mt-4 m-auto xl:w-[390px] xl:h-[322px] xl:flex xl:justify-center xl:mt-[70px]">
          <Image className="object-contain" src={img} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default BannerCom;
