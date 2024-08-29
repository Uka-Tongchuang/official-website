"use client";
import React from "react";
import "./banner.css";
import Image, { StaticImageData } from "next/image";
type propsType = {
  title: string;
  title2?:string;
  msg: string;
  img: StaticImageData | string; // 修改img属性类型;
};

const BannerCom = ({ title, title2,msg, img }: propsType): JSX.Element => {
  return (
    <div
      className={`w-full h-auto mt-[70px] text-title-text-color py-4 ${
        title === "岗位外包"||"业务外包"
          ? "bg-gradient-to-b from-[#E8F1FF] to-[#fff]"
          : "bg-a-color"
      }`}
    >
      <div className="md:w-[80%] h-auto m-auto  md:flex md:justify-between md:items-center">
        <div className="xl:w-[40%] md:w-full">
          <h1 className="md:whitespace-nowrap py-2 my-1 text-center md:text-left m-auto font-bold text-lg pt-2 h-10  md:text-3xl md:mb-[54px] xl:text-4xl xl:pb-12">
            {title}
            <br className="xl:hidden"/>
            {title2}
          </h1>
          <p className="w-[80%] m-auto md:w-full text-md text-ironside-grey xl:text-lg">
            {msg}
          </p>
        </div>
        <div
          className={`w-[60%] mt-4 m-auto md:w-[40%] md:h-auto md:flex md:justify-center md:mt-[70px] md:p-2 xl:mt-24 ${
            title === "人事管理" ? "xl:w-[34%]" : "xl:w-[38%]"
          }`}
        >
          <Image
            className={`object-contain xl:p-10 md:p-8 md:mb-12 ${
              title === "客户为先，诚信为本，"
                ? "mt-10 p-8 xl:ml-[120%] 3xl:ml-[50%]"
                : ""
            }`}
            src={img}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCom;
