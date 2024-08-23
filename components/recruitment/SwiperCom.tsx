import React from "react";
// json
import content from "./recruitment.json";

import { StaticImageData } from "next/image";
import Image from "next/image";

import { Carousel } from "antd";
// imgs
import {
  consA,
  consB,
  consC,
  consD,
  consE,
  consF,
  consG,
  consH,
  consI,
  consJ,
  consK,
  consL,
  consM,
  consN,
  consX,
  consY,
} from "@/public/recruitment/index";
//补0函数
const padZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};
const swiperArrData = [
  [
    {
      img:consA,
      title:content.swiperdata[0][0],
      num:1
    },
    {
      img: consB,
      title: content.swiperdata[0][1],
      num:2
    },
    {
      img: consC,
      title: content.swiperdata[0][2],
      num:3
    },
    {
      img: consD,
      title: content.swiperdata[0][3],
      num:4
    }
  ],
  [
    {
      img: consE,
      title: content.swiperdata[1][0],
      num:5
    },
    {
      img: consF,
      title: content.swiperdata[1][1],
      num:6
    },
    {
      img: consG,
      title: content.swiperdata[1][2],
      num:7
    },
    {
      img: consH,
      title: content.swiperdata[1][3],
      num:8
    }
  ],
  [
    {
      img: consI,
      title: content.swiperdata[2][0],
      num:9
    },
    {
      img: consJ,
      title: content.swiperdata[2][1],
      num:10
    },
    {
      img: consK,
      title: content.swiperdata[2][2],
      num:11
    },
    {
      img: consL,
      title: content.swiperdata[2][3],
      num:12
    }
  ],
  [
    {
      img: consM,
      title: content.swiperdata[3][0],
      num:13
    },
    {
      img: consN,
      title: content.swiperdata[3][1],
      num:14
    },
    {
      img: consX,
      title: content.swiperdata[3][2],
      num:15
    },
    {
      img: consY,
      title: content.swiperdata[3][3],
      num:16
    }
  ]
];
//小卡片
const cartRender = (title: string, img: StaticImageData, num: number) => {
  return <div className="w-full h-full flex flex-col  p-2">
    <Image className="w-8 h-8" src={img} alt="" />
    <li className="mt-4 flex"> <span>{padZero(num)} </span> <span className="ml-2">{title}</span> </li>
  </div>;
};

function SwiperCom() {
  //renderCard
  const renderCardItem = (arr: any) => {
    return (
      <div className="flex w-[90%] m-auto md:w-[70%] md:ml-[6%] h-52 items-center">
        <div className="w-[50%] h-full flex flex-col items-center justify-around">
          <div className="h-full">{cartRender(arr[0].title,arr[0].img,arr[0].num)}</div>
          <div className="h-[1px] w-[60%] bg-gray-300"></div>
          <div className="h-full">{cartRender(arr[2].title,arr[2].img,arr[1].num)}</div>
        </div>
        <div className="w-[1px] h-[60%] bg-gray-300"></div>
        <div className="flex-1 h-full flex flex-col items-center justify-around">
          <div className="h-full">{cartRender(arr[1].title,arr[1].img,arr[2].num)}</div>
          <div className="h-[1px] w-[60%] bg-gray-300"></div>
          <div className="h-full">{cartRender(arr[3].title,arr[3].img,arr[3].num)}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* //移动 */}
      <div className="md:hidden w-full m-auto p-4">
        <h2 className="w-full h-10 text-center py-5 text-lg font-bold">
          招聘需求和公开招聘
        </h2>
        <div className="w-full m-auto h-auto">
          <Carousel
           dotPosition="bottom"
          >
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
      {/* md xl */}
      <div className="hidden md:block">
            
      </div>
    </div>
  );
}

export default SwiperCom;
