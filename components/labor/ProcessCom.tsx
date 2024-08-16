"use client";
import Image from "next/image";
import React from "react";
//ui库
import { Carousel } from "antd";
// img
import {
  cdO,
  cdT,
  cdTh,
  cdF,
  cdW,
  cdS,
  cdSe,
  cdN,
  cdJ,
  cdTen,
  cdX,
  cdY,
  cdZ,
  swo,
  swt,
  swth,
  swf,
} from "@/public/labor";
// json
import content from "./labor.json";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function ProcessCom() {
  //补0函数
  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };
  //图片数组
  const imgArr = [
    cdO,
    cdT,
    cdTh,
    cdF,
    cdW,
    cdS,
    cdSe,
    cdN,
    cdJ,
    cdTen,
    cdX,
    cdY,
    cdZ,
  ];
  //轮播图img
  const swiperArr = [swo, swt, swth, swf];
  const cardFirstData=content.swipercard.slice(0,3)
  console.log(cardFirstData);
  
  const cardSecondData=content.swipercard.slice(3,5)
  const cardThirthData=content.swipercard.slice(6,8)
  const cardFourthData=content.swipercard.slice(9,12)
  return (
    <div>
      {/* //移动 */}
      <div className="md:hidden xl:hidden w-full m-auto p-4">
        <h2 className="w-full h-10 flex justify-center items-center text-lg font-bold">
          招聘需求和公开招聘
        </h2>
        <div className="w-full m-auto h-auto grid grid-cols-2 gap-4">
          {content.swipercard.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-10 flex bg-m-color rounded-md"
              >
                <div className="w-7 h-7 m-1.5 rounded-md bg-white flex justify-center items-center">
                  <Image
                    className="object-contain w-6 h-6"
                    src={imgArr[index]}
                    alt=""
                  />
                </div>
                <h4 className="text-sm flex items-center">
                  <span className="mr-1 ml-1">{padZero(index + 1)}</span>
                  {item}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      {/* //pc  平板 */}
      <div className="hidden md:block md:w-[90%] h-96 md:m-auto ">
  <Carousel
    arrows
    dotPosition="right"
    infinite={false}
    className="relative"
    dots={{ className: "slick-dots custom-dots" }}
  >
    {content.swiper.map((item, index) => {
      return (
        <div
          key={index}
          className="w-full h-full flex justify-between items-center bg-white rounded-lg shadow-lg p-6"
        >
          {/* 左侧文本部分 */}
          <div className="flex-1">
            <h3 className="text-xl text-center font-bold mb-4">{item.title}</h3>
            <p className="w-[80%] m-auto text-ironside-grey mb-4">{item.message}</p>
          </div>

          {/* 右侧图片部分 */}
          <div className="w-40 h-40 flex justify-center items-center">
            <Image
              className="object-contain w-full h-full p-6"
              src={swiperArr[index]}
              alt=""
            />
          </div>
        </div>
      );
    })}
  </Carousel>
</div>

    </div>
  );
}

export default ProcessCom;
