"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
//img
import { flowOne, flowTwo, flowThree, flowFour } from "@/public/renshi";
//文本json
import content from "./personnel.json";
function flowPath() {
  const data = [
    { image: flowOne, title: "专业化顾问团队" },
    { image: flowTwo, title: "标准化服务流程" },
    { image: flowThree, title: "数字化管理平台" },
    { image: flowFour, title: "多元化解决方案" },
  ];
  //render
  const renderCom = (img: StaticImageData, title: string): JSX.Element => {
    return (
      <div className="h-[49%] flex  justify-between items-center">
        <Image className="w-32 h-32" loading="lazy" src={img} alt="icon" />
        <h4 className="text-xl">{title}</h4>
      </div>
    );
  };
  return (
    <div>
      {/* //pc端 */}
      <div
        className="hidden  xl:flex mb-20 w-[80%] m-auto rounded-xl h-[500px] 2xl:h-[540px]  justify-center items-center"
        style={{ background: "#F8FAFD" }}
      >
        <div className="w-[80%] h-[400px] flex justify-between items-center m-auto">
          <div className="w-[49%] flex flex-col justify-between items-center">
            {renderCom(data[0].image, content.topic["topic-first"])}
            <div className="block h-[2px] w-[112px] rounded-sm bg-gray-200 "></div>
            {renderCom(data[1].image, content.topic["topic-second"])}
          </div>
          <div className="block w-[2px] h-[112px] rounded-sm bg-gray-200 "></div>
          <div className="w-[49%] flex flex-col justify-between items-center">
            {renderCom(data[2].image, content.topic["topic-third"])}
            <div className="h-[2px] w-[112px] rounded-sm bg-gray-200 "></div>
            {renderCom(data[3].image, content.topic["topic-fourth"])}
          </div>
        </div>
      </div>
      {/* //移动端 */}
      <div className="md:hidden w-[80%] h-auto mb-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-around items-center p-4">
            <Image
              className="w-[60px] h-[60px]"
              loading="lazy"
              src={item.image}
              alt="icon"
            />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
      {/* //平板端 */}
      <div className="hidden xl:hidden md:grid  grid-cols-2 gap-4 w-[60%] mb-10 m-auto h-auto flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="m-auto flex justify-around items-center p-4"
          >
            <Image
              className="w-[110px] h-[110px]"
              loading="lazy"
              src={item.image}
              alt="icon"
            />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default flowPath;
