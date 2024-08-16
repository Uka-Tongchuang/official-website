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
    <div className="w-full h-auto  bg-ghost-white">
      <div className="xl:w-[80%] md:w-[80%] h-auto m-auto  md:flex md:justify-between md:items-center xl:flex xl:justify-between xl:items-center">
        <div className="xl:w-[40%] md:w-[50%]">
          <h1 className="font-bold text-lg pt-8 h-10 flex justify-center items-center md:text-3xl md:mb-[54px] xl:text-4xl xl:mb-[54px]">
            {title}
          </h1>
          <p className="w-[80%] m-auto text-md  p-4 text-nav-font-color">{msg}</p>
        </div>
        <div className="w-[60%] mt-4 m-auto md:w-[40%] md:h-auto md:flex md:justify-center md:mt-[70px] md:p-2 xl:w-[38%] xl:h-auto xl:flex xl:justify-center xl:mt-[70px]">
          <Image className="object-contain xl:p-8 md:p-4" src={img} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default BannerCom;
