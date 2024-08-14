"use client";
import React from "react";
import Image from "next/image";
//img
import teamImg from "@/public/renshi/flowone.png";
import serverImg from "@/public/renshi/flowtwo.png";
import numImg from "@/public/renshi/flowthree.png";
import proImg from "@/public/renshi/flowfour.png";
function flowPath() {
  return (
    <div className="w-full xl:h-[540px] xl:flex xl:justify-center xl:items-center">
      <div
        className="xl:w-[80%] xl:h-[400px] xl:flex xl:justify-between xl:items-center xl:m-auto"
        style={{ background: "#F8FAFD" }}
      >
        <div className="xl:w-[49%] xl:flex xl:flex-col xl:justify-between items-center">
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image className="xl:w-[120px] xl:h-[120px]" src={teamImg} alt="" />
            <h4>专业化顾问团队</h4>
          </div>
          <div className="xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image className="xl:w-[120px] xl:h-[120px]" src={numImg} alt="" />
            <h4>标准化服务流程</h4>
          </div>
        </div>
        <div className="xl:w-[2px] xl:h-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
        <div className="xl:w-[49%] xl:flex xl:flex-col xl:justify-between items-center">
          <div className="xl:h-[49%] xl:flex xl:justify-between xl:items-center">
            <Image
              className="xl:w-[120px] xl:h-[120px]"
              src={serverImg}
              alt=""
            />
            <h4>数字化管理平台</h4>
          </div>
          <div className="xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image className="xl:w-[120px] xl:h-[120px]" src={proImg} alt="" />
            <h4>多元化解决方案</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default flowPath;
