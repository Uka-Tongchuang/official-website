"use client"
import React, { useRef } from "react";
// json
import content from "./recruitment.json";

import { StaticImageData } from "next/image";
import Image from "next/image";

import "./index.css"
//icon 
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"; 

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
  conAa
} from "@/public/recruitment/index";

function SwiperCom() {

  
//补0函数
const padZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};
const swiperArrData = [
  {
    title: content.swiper[0].title,
    msg: content.swiper[0].msg,
    arr: [
      {
        img: consA,
        title: content.swiperdata[0][0],
        num: 1,
      },
      {
        img: consB,
        title: content.swiperdata[0][1],
        num: 2,
      },
      {
        img: consC,
        title: content.swiperdata[0][2],
        num: 3,
      },
      {
        img: consD,
        title: content.swiperdata[0][3],
        num: 4,
      },
    ],
  },
  {
    title: content.swiper[1].title,
    msg: content.swiper[1].msg,
    arr: [
      {
        img: consE,
        title: content.swiperdata[1][0],
        num: 5,
      },
      {
        img: consF,
        title: content.swiperdata[1][1],
        num: 6,
      },
      {
        img: consG,
        title: content.swiperdata[1][2],
        num: 7,
      },
      {
        img: consH,
        title: content.swiperdata[1][3],
        num: 8,
      },
    ],
  },
  {
    title: content.swiper[2].title,
    msg: content.swiper[2].msg,
    arr: [
      {
        img: consI,
        title: content.swiperdata[2][0],
        num: 9,
      },
      {
        img: consJ,
        title: content.swiperdata[2][1],
        num: 10,
      },
      {
        img: consK,
        title: content.swiperdata[2][2],
        num: 11,
      },
      {
        img: consL,
        title: content.swiperdata[2][3],
        num: 12,
      },
    ],
  },
  {
    title: content.swiper[3].title,
    msg: content.swiper[3].msg,
    arr: [
      {
        img: consM,
        title: content.swiperdata[3][0],
        num: 13,
      },
      {
        img: consN,
        title: content.swiperdata[3][1],
        num: 14,
      },
      {
        img: consX,
        title: content.swiperdata[3][2],
        num: 15,
      },
      {
        img: consY,
        title: content.swiperdata[3][3],
        num: 16,
      },
      {
        img: conAa,
        title: content.titlelast,
        num: 17,
      },
    ],
  },
];
//小卡片
const cartRender = (title: string, img: StaticImageData, num: number) => {
  return (
    <div className="w-full h-full flex flex-col  p-2">
      <Image className="w-8 h-8" src={img} alt="" />
      <li className="mt-4 flex">
        {" "}
        <span>{padZero(num)} </span> <span className="ml-2">{title}</span>{" "}
      </li>
    </div>
  );
};
  //renderCard
  const renderCardItem = (arr: any) => {
    return (
      <div className="flex w-[90%] m-auto md:w-[70%] md:ml-[6%] h-52 items-center">
        <div className="w-[50%] h-full flex flex-col items-center justify-around">
          <div className="h-full">
            {cartRender(arr[0].title, arr[0].img, arr[0].num)}
          </div>
          <div className="h-[1px] w-[60%] bg-gray-300"></div>
          <div className="h-full">
            {cartRender(arr[2].title, arr[2].img, arr[2].num)}
          </div>
        </div>
        <div className="w-[1px] h-[60%] bg-gray-300"></div>
        <div className="flex-1 h-full flex flex-col items-center justify-around">
          <div className="h-full">
            {cartRender(arr[1].title, arr[1].img, arr[1].num)}
          </div>
          <div className="h-[1px] w-[60%] bg-gray-300"></div>
          <div className="h-full">
            {cartRender(arr[3].title, arr[3].img, arr[3].num)}
          </div>
        </div>
      </div>
    );
  };

  const renderCard=(arr:any)=>{
    return <div className={ `w-full grid  gap-8 my-20 ${arr.length===4?"grid-cols-4":"grid-cols-5"}`}>
      {
        arr.map((item:{img:StaticImageData,title:string,num:number},index:number)=>{
          return (
            <div className=" bg-gradient-to-br from-a via-white to-a rounded-lg p-4">
              <p className="text-azul text-xl">{padZero(item.num)}</p>
              <p className="text-center my-4">{item.title}</p>
              <Image  className="float-right w-7 xl:w-8" src={item.img} alt={item.title}/>
              <p className="clear-both"></p>
            </div>
          )
        })
      }
    </div>
  }
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
          <Carousel dotPosition="bottom">
            {swiperArrData.map((item, index) => {
              return (
                <div key={index} className="flex">
                  {renderCardItem(item.arr)}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      {/* md xl */}
      <div className="hidden relative md:block w-[90%] h-auto m-auto xl:w-[90%] xl:h-auto">
        <Carousel
          dotPosition="right"
          infinite={false}
          dots={{ className: "slick-dots custom-dots" }}
          adaptiveHeight
          draggable
          ref={carouselRef}
          className="relative"
        >
          {swiperArrData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-auto md:h-[400px] xl:h-[500px] flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-lg p-6 overflow-hidden"
              >
                {/* 文本部分 */}
                <div className="flex-1 md:w-[80%] md:m-auto text-center xl:text-left">
                  <h3 className="text-lg xl:text-2xl md:text-center font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="w-[100%] m-auto xl:ml-0 text-ironside-grey mb-4 xl:text-lg md:text-left">
                    {item.msg}
                  </p>
                </div>
                {/* xia边卡片部分 */}
                <div className="flex flex-col md:flex-row md:w-[85%] md:m-auto items-center">
                    {renderCard(item.arr)}
                </div>
              </div>
            );
          })}
        </Carousel>
        <div
          className="cursor-pointer absolute top-[30%] right-1 z-10 "
          onClick={handlePrev}
        >
          <ArrowUpOutlined className="text-xl text-slate-400" />
        </div>
        <div
          className="cursor-pointer absolute top-[65%] right-1 z-10"
          onClick={handleNext}
        >
          <ArrowDownOutlined className="text-xl text-slate-400" />
        </div>
      </div>
    </div>
  );
}

export default SwiperCom;
