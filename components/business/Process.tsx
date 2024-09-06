import React from "react";
import Image from "next/image";
// json
import content from "./business.json";
//imgs
import { lBg, lBgImgB, bgL, bgR } from "@/public/business";

function Process() {
  //业务外包

  //小拉片封装
  const cartTitle = (arr: Array<string>) => {
    return arr.map((item: string, index: number) => {
      return (
        <div key={index} className=" relative mt-[13%] pl-12 xl:pl-2 2xl:pl-6">
          <div className="
          w-8 h-[1px] 
          absolute left-[1rem] xl:left-[-1.5rem] top-[0.5rem] xl:top-[0.6rem] bg-gradient-to-r from-azul to-white 
          before:absolute before:w-2 before:h-2 before:border-[2px] before:top-[-3px] before:left-[-6px] before:border-azul before:rounded-full
          ">
          </div>
          <div >{item}</div>
        </div>
      );
    });
  };
  return (
    <div className="">
      {/* //移动  */}
      <div className="relative overflow-x-hidden overflow-y-hidden md:hidden bg-gradient-to-b from-white to-a-color pb-4">
        <Image
          className="absolute w-28 bottom-[-8%] right-[-8%]"
          src={lBg}
          alt="background"
          loading='lazy'
        />
        <Image
          className="absolute w-28 top-0 left-[-2%]"
          src={lBgImgB}
          alt="background"
          loading='lazy'
        />
        <h3 className="h-14 flex justify-center items-center font-bold my-2">
          服务流程
        </h3>
        <div className="w-[50%] rounded-md text-md font-medium m-auto flex justify-center items-center text-azul h-10 bg-gradient-to-r from-a-color to-lg-bg ">
          签订合作协议、交付成果
        </div>
        <div className="w-[50%] border-r-[1px] border-azul h-8"></div>
        <div className="w-[60%] m-auto h-4 border-[1px] border-azul border-b-0 mb-4"></div>
        {/* contents */}
        <div className="flex justify-between w-[74%] m-auto">
          <ul className="w-[48%] flex flex-col justify-between">
            {content.process.left.map((item, index) => {
              return (
                <li key={index} className="relative pl-4 mb-2 text-gray-700">
                  <span className="text-sm before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full before:transform before:-translate-y-1/2">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="w-[48%] flex flex-col justify-between">
            {content.process.right.map((item, index) => {
              return (
                <li key={index} className="relative pr-4 mb-2 text-gray-700">
                  <span className="text-sm text-right block after:absolute after:right-0 after:top-1/2 after:w-2 after:h-2 after:border after:border-blue-500 after:rounded-full after:transform after:-translate-y-1/2">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* //md xl */}
      <div className="hidden md:block w-full">
        <h3 className="text-lg xl:text-3xl  font-bold text-center my-10">
          服务流程
        </h3>
        <div className="relative w-[50%] m-auto flex justify-between">
          {/* 左侧图片 */}
          <div className="flex-1 relative">
            <Image
              className="object-contain w-full h-full"
              src={bgL}
              alt="background"
              loading='lazy'
            />
            <div className="absolute text-xs xl:text-md 2xl:text-lg pt-[15%] flex flex-col w-full h-full top-0 left-[10%]">{cartTitle(content.process.left)}</div>
          </div>
          {/* 右侧图片 */}
          <div className="flex-1 relative">
            <Image
              className="object-contain w-full h-full"
              src={bgR}
              alt="background"
              loading='lazy'
            />
              <div className="absolute text-xs xl:text-md 2xl:text-lg pt-[15%] flex flex-col w-full h-full top-0 left-[60%]">{cartTitle(content.process.right)}</div>
          </div>
          {/* 中间的绝对定位盒子 */}
          <div className="absolute flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-32 h-32  xl:w-72 xl:h-72 rounded-full bg-circle-bg">
            <div className="bg-a-color w-[85%] h-[85%] rounded-full  flex justify-center items-center">
              <div className="bg-white w-[85%] h-[85%] rounded-full  flex flex-col justify-center items-center">
                <span className="py-2 text-sm xl:text-xl">签订合作协议</span>
                <span className="py-2 text-sm xl:text-xl">支付成果</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
