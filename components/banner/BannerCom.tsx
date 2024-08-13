"use client";
import React from "react";
import Image from "next/image";
type propsType = {
  title: string;
  msg: string;
  img: any;
};

const BannerCom = ({ title, msg, img }: propsType): JSX.Element => {
  return (
    <div className="w-full h-[465px] bg-ghost-white">
      <div className="w-[80%] m-auto flex justify-between items-center">
        <div className="w-[50%]">
          <h1 className="font-bold text-4xl mb-[54px]">{title}</h1>
          <p className="text-md">{msg}</p>
        </div>
        <div className="w-[390px] h-[322px] flex justify-center mt-[70px]">
          <Image src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BannerCom;
