"use client";
import React from "react";
import Image from "next/image";
//img
import { flowOne, flowTwo, flowThree, flowFour } from "@/public/renshi";
//文本json
import content from "./personnel.json";
function flowPath() {
  const data=[
    {image:flowOne,title:"专业化顾问团队"},
    {image:flowTwo,title:"标准化服务流程"},
    {image:flowThree,title:"数字化管理平台"},
    {image:flowFour,title:"多元化解决方案"},
  ]
  return (
    <div>
      {/* //线条考虑不map pc端 */}
      <div className="hidden md:hidden xl:h-[540px] xl:flex xl:justify-center xl:items-center" style={{ background: "#F8FAFD" }}>
      <div className="xl:w-[80%] xl:h-[400px] xl:flex xl:justify-between xl:items-center xl:m-auto"
      >
        <div className="xl:w-[49%] xl:flex xl:flex-col xl:justify-between items-center">
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="xl:w-[140px] xl:h-[140px]"
              loading="lazy"
              src={flowOne}
              alt=""
            />
            <h4 className="xl:text-xl">{content.topic["topic-first"]}</h4>
          </div>
          <div className="xl:block xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="xl:w-[140px] xl:h-[140px]"
              loading="lazy"
              src={flowTwo}
              alt=""
            />
            <h4 className="xl:text-xl">{content.topic["topic-second"]}</h4>
          </div>
        </div>
        <div className="xl:block xl:w-[2px] xl:h-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
        <div className="xl:w-[49%] xl:flex xl:flex-col xl:justify-between xl:items-center">
          <div className="xl:h-[49%] xl:flex xl:justify-between xl:items-center">
            <Image
              className="xl:w-[140px] xl:h-[140px]"
              src={flowThree}
              loading="lazy"
              alt=""
            />
            <h4 className="xl:text-xl">{content.topic["topic-third"]}</h4>
          </div>
          <div className="xl:h-[2px] xl:w-[112px] xl:rounded-sm xl:bg-gray-200 "></div>
          <div className="xl:h-[49%] xl:flex  xl:justify-between xl:items-center">
            <Image
              className="xl:w-[140px] xl:h-[140px]"
              loading="lazy"
              src={flowFour}
              alt=""
            />
            <h4 className="xl:text-xl">{content.topic["topic-fourth"]}</h4>
          </div>
        </div>
      </div>
    </div>
    {/* //移动端 */}
    <div className="xl:hidden md:hidden w-[80%] h-auto mb-4">
      {
        data.map((item, index) => (
          <div key={index} className="flex justify-around items-center p-4">
            <Image
              className="w-[60px] h-[60px]"
              loading="lazy"
              src={item.image}
              alt=""
            />
            <h4>{item.title}</h4>
          </div>
        ))
      }
    </div>
    {/* //平板端 */}
    <div className="hidden xl:hidden md:grid  grid-cols-2 gap-4 w-[60%] mb-10 m-auto h-auto flex-wrap">
    {
        data.map((item, index) => (
          <div key={index} className="m-auto flex justify-around items-center p-4">
            <Image
              className="w-[110px] h-[110px]"
              loading="lazy"
              src={item.image}
              alt=""
            />
            <h4>{item.title}</h4>
          </div>
        ))
      }
    </div>
    </div>
    
  );
}

export default flowPath;
