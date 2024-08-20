"use client";
import Image, { StaticImageData } from "next/image";
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
      <div className="flex h-40 md:h-60  items-center justify-between w-full">
        {arr.map((item: swiperItm, index) => {
          return (
            <div
              key={index}
              className="flex w-[32%] md:w-[30%] h-20 xl:h-24 xl:mb-4 p-1 flex-col items-center justify-around m-1 rounded-md shadow-[0_4px_6px_-1px_rgba(107,114,128,0.3)] border-b-0 border-l-0 border-r-0 border-gray-300"
            >
              <div className="flex justify-center items-center">
                <div className="w-6 h-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="object-contain"
                  />
                </div>

                <span className="text-lg ml-1">{padZero(item.num)}</span>
              </div>
              <p className="text-center text-sm text-ironside-grey">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {/* //移动 */}
      <div className="md:hidden  w-full m-auto p-4">
        <h2 className="w-full h-10  flex justify-center items-center text-lg font-bold">
          招聘需求和公开招聘
        </h2>
        <div className="w-full m-auto h-auto">
          <Carousel>
            {swiperArrData.map((item, index) => {
              return (
                <div className="flex">
                  {renderCardItem(swiperArrData[index])}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* //pc  平板 */}
      <div className="hidden md:block w-[90%] h-96 m-auto xl:w-full xl:h-[30rem]">
        <Carousel
          dotPosition="right"
          infinite={false}
          className=""
          dots={{ className: "slick-dots custom-dots" }}
          style={{height:"100%"}}
        >
          {content.swiper.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-full z-30 flex justify-between items-center  rounded-lg shadow-lg p-6"
              >
                {/* 左侧文本部分 */}
                <div className="flex-1">
                  <h3 className="text-lg xl:text-2xl text-center font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="w-[80%] m-auto text-ironside-grey mb-4 xl:text-lg">
                    {item.message}
                  </p>
                </div>

                {/* 右侧图片部分 */}
                <div className="w-full h-40 xl:h-52 flex justify-between items-center xl:mt-4">
                  <Image
                    className="object-contain w-40 xl:w-52 h-full p-6 xl:ml-20"
                    src={swiperArr[index]}
                    alt=""
                  />
                  <div className="h-72 w-[64%] mr-[15%] mt-14 md:mt-2 overflow-visible">
                    {renderCardItem(swiperArrDataPc[index])}
                  </div>
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
