"use client";
import React from "react";
import "./index.css";
import Image from "next/image";
//img
import ImgO from "@/public/labor/so.png";
import ImgT from "@/public/labor/st.png";
import ImgTh from "@/public/labor/sth.png";
import ImgF from "@/public/labor/sf.png";

import IconO from "@/public/labor/icono.png";
import IconT from "@/public/labor/icont.png";
import IconTh from "@/public/labor/iconth.png";
import IconF from "@/public/labor/iconf.png";
function CardCom() {
  return (
    <div className="w-full h-[496px] box">
      <h2 className="text-[32px] w-full text-center font-bold mt-[70px]">
        服务模式
      </h2>
      <div className="w-[80%] m-auto h-[300px] item_boxs">
        <div>
          <Image className="w-[42px] h-[42px] mb-[40px]" src={ImgO} alt="" />
          <h4 className="text-lg font-bold">转移派遣服务</h4>
          <p className="text-sm text-gray-300 mt-[6px]">Transfer Dispatch Service</p>
          <Image className="w-[16px] h-[16px] ml-[90%]" src={IconO} alt="" />
        </div>
        <div>
          <Image className="w-[42px] h-[42px] mb-[40px]" src={ImgT} alt="" />
          <h4 className="text-lg font-bold">转移派遣服务</h4>
          <p className="text-sm text-gray-300 mt-[6px]">Transfer Dispatch Service</p>
          <Image className="w-[16px] h-[16px] ml-[90%]" src={IconT} alt="" />
        </div>
        <div>
          <Image className="w-[42px] h-[42px] mb-[40px]" src={ImgTh} alt="" />
          <h4 className="text-lg font-bold">转移派遣服务</h4>
          <p className="text-sm text-gray-300 mt-[6px]">Transfer Dispatch Service</p>
          <Image className="w-[16px] h-[16px] ml-[90%]" src={IconTh} alt="" />
        </div>
        <div>
          <Image className="w-[42px] h-[42px] mb-[40px]" src={ImgF} alt="" />
          <h4 className="text-lg font-bold">转移派遣服务</h4>
          <p className="text-sm text-gray-300 mt-[6px]">Transfer Dispatch Service</p>
          <Image className="w-[16px] h-[16px] ml-[90%]" src={IconF} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardCom;
