"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
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

interface swiperItm {
  img: StaticImageData;
  title: string;
  num: number; // 序号
}

type swiperArr = Array<swiperItm>;
type swiperData = Array<swiperArr>;
function ProcessCom() {
  //补0函数
  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };
  //轮播图小卡片数据
  const swiperObject = content.swipercard;
  //整合数据
  const swiperArrData: swiperData = [
    [
      { img: cdO, title: swiperObject.first[0], num: 1 },
      { img: cdT, title: swiperObject.first[1], num: 2 },
      { img: cdTh, title: swiperObject.first[2], num: 3 },
    ],
    [
      { img: cdF, title: swiperObject.second[0], num: 4 },
      { img: cdW, title: swiperObject.second[1], num: 5 },
      { img: cdS, title: swiperObject.second[2], num: 6 },
    ],
    [
      { img: cdSe, title: swiperObject.third[0], num: 7 },
      { img: cdN, title: swiperObject.third[1], num: 8 },
      { img: cdJ, title: swiperObject.third[2], num: 9 },
    ],
    [
      { img: cdTen, title: swiperObject.fourth[0], num: 10 },
      { img: cdX, title: swiperObject.fourth[1], num: 11 },
      { img: cdY, title: swiperObject.fourth[2], num: 12 },
    ],
    [{ img: cdZ, title: swiperObject.last[0], num: 13 }],
  ];
  const swiperArrDataPc: swiperData = [
    [
      { img: cdO, title: swiperObject.first[0], num: 1 },
      { img: cdT, title: swiperObject.first[1], num: 2 },
      { img: cdTh, title: swiperObject.first[2], num: 3 },
    ],
    [
      { img: cdF, title: swiperObject.second[0], num: 4 },
      { img: cdW, title: swiperObject.second[1], num: 5 },
      { img: cdS, title: swiperObject.second[2], num: 6 },
    ],
    [
      { img: cdSe, title: swiperObject.third[0], num: 7 },
      { img: cdN, title: swiperObject.third[1], num: 8 },
      { img: cdJ, title: swiperObject.third[2], num: 9 },
    ],
    [
      { img: cdTen, title: swiperObject.fourth[0], num: 10 },
      { img: cdX, title: swiperObject.fourth[1], num: 11 },
      { img: cdY, title: swiperObject.fourth[2], num: 12 },
      { img: cdZ, title: swiperObject.last[0], num: 13 },
    ],
  ];
  //轮播图img
  const swiperArr = [swo, swt, swth, swf];

  //renderCard
  const renderCardItem = (arr: swiperArr) => {
    
    return (
      <div className="flex w-[90%] m-auto md:w-[70%] md:ml-[6%] h-40 items-center justify-between">
        {arr.map((item: swiperItm, index) => {
          return (
            <div
              key={index}
              className="flex w-[32%] md:w-[30%] h-20 xl:h-24 xl:mb-4 p-1 flex-col items-center justify-around m-1 rounded-md shadow-[0_4px_6px_-1px_rgba(107,114,128,0.3)] border-b-0 border-l-0 border-r-0 border-gray-300"
            >
              <div className="flex justify-center items-center">
                <div className="w-6 h-6 flex items-center justify-center ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-contain"
                  />
                  &ensp;
                  <span className=" md:hidden text-sm ml-1">
                    {padZero(item.num)}&ensp;
                  </span>
                </div>
              </div>
              <p className="text-center text-sm text-ironside-grey">
                <span className="block md:hidden">{item.title}</span>
                <span className="hidden md:block text-sm ml-1">
                  {padZero(item.num)}&ensp;{item.title}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  const carouselRef = useRef<any>();

  //下一页
  const handleNext = () => {
    carouselRef.current?.next(); // 调用 Carousel 的 next 方法
  };
  //上一页
  const handlePrev = () => {
    carouselRef.current?.prev(); // 调用 Carousel 的 prev 方法
  };
  return (
    <div>
      {/* //移动 */}
      <div className="md:hidden w-full m-auto p-4">
        <h2 className="w-full h-10 text-center py-5 text-lg font-bold">
          招聘需求和公开招聘
        </h2>
        <div className="w-full m-auto h-auto">
          <Carousel>
            {swiperArrData.map((item, index) => {
              return (
                <div key={index} className="flex">
                  {renderCardItem(item)}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* //pc  平板 */}
      <div className="hidden relative md:block w-[90%] h-auto m-auto xl:w-full xl:h-auto">
        <Carousel
          dotPosition="right"
          infinite={false}
          dots={{ className: "slick-dots custom-dots" }}
          adaptiveHeight
          draggable
          ref={carouselRef}
          className="relative"
        >
          
          {content.swiper.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-auto md:h-[400px] xl:h-[500px] flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-lg p-6 overflow-hidden"
              >
                {/* 左侧文本部分 */}
                <div className="flex-1 md:w-[63%] md:m-auto text-center xl:text-left">
                  <h3 className="text-lg xl:text-2xl md:text-center font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="w-[100%] m-auto xl:ml-0 text-ironside-grey mb-4 xl:text-lg md:text-left">
                    {item.message}
                  </p>
                </div>

                {/* 右侧图片和卡片部分 */}
                <div className="flex flex-col md:flex-row md:w-[90%] md:m-auto items-center">
                  <div className="w-auto h-full md:h-44 xl:h-52 flex justify-center md:justify-end items-center xl:mt-10">
                    <Image
                      className="object-contain w-40 xl:w-52 h-full xl:ml-20"
                      src={swiperArr[index]}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 md:w-auto mt-6 flex ">
                    {renderCardItem(swiperArrDataPc[index])}
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="cursor-pointer absolute top-[30%] right-0 z-10 " onClick={handlePrev}>
            prev 
          </div>
          <div className="cursor-pointer absolute top-[65%] right-0 z-10" onClick={handleNext} >
            next 
          </div>
      </div>
    </div>
  );
}

export default ProcessCom;
