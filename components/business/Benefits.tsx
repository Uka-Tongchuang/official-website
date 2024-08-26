"use client";
import React from "react";
import Image from "next/image";
import "./service.css"
// hook
import { useState } from "react";
// json
import content from "./business.json";
//imgs
import { ysA, ysB, ysC, ysD } from "@/public/business";
import { tabF, tabS, tabT, tabFour } from "@/public/business";

interface objType {
  title: string;
  dtitle: string;
  desca: string;
  descb: string;
  descc?: string;
}
function Benefits() {
  const icons = [ysA, ysB, ysC, ysD];
  const [cardData, setCardData] = useState<any>(content.tablist[0]);
  const [cardindex, setCardindex] = useState<number>(0);
  const imgsTab = [tabF, tabS, tabT, tabFour];
  //tabrender
  const tabRender = (arr: Array<objType>) => {
    return arr.map((item, index) => {
      return (
        <div
          key={index}
          className={` relative w-32 xl:w-36 h-[20%] rounded-md flex justify-center items-center md:text-lg xl:text-xl 2xl:text-2xl ${cardindex === index ? "bg-azul  text-white" : "bg-white "}`}
          onClick={() => {
            setCardData(arr[index]);
            setCardindex(index);
          }}
        >
          {item.title}
          <div className={cardindex === index ?" absolute right-[-16px] top-[52%] translate-y-[-50%] w-0 h-0 border-8 border-transparent border-l-azul":"hidden"}>

          </div>
        </div>
      );
    });
  };
  //card render
  const cardRender = (item: objType) => {
    return (
      <div className="flex items-center">
        {/* img box */}
        <Image className="w-44 h-44 xl:w-60 xl:h-60 mx-4 xl:mx-12" src={imgsTab[cardindex]} alt={item.dtitle} />
        {/* title and msg box */}
        <div className="p-8 h-full">
          <h3 className="mb-10 xl:mb-20 font-bold text-lg xl:text-xl">{item.dtitle}</h3>
          <p className="mb-6 text-md text-ironside-grey xl:text-lg">{item.desca}</p>
          <p className="mb-6 text-md text-ironside-grey xl:text-lg">{item.descb}</p>
          <p className="mb-6 text-md text-ironside-grey xl:text-lg">{item.descc ? item.descc : ""}</p>
          <p></p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="md:hidden w-[90%] m-auto">
        <h3 className="flex justify-center items-center font-bold my-4">
          服务优势
        </h3>
        {content.benefits.map((item, index) => {
          return (
            <div key={index} className=" p-4 rounded-xl bg-a-color my-5">
              <h3 className="h-8 pl-1 text-md font-bold">{item.title}</h3>
              <p className="relative w-full font-light p-4 mb-4 bg-white rounded-lg text-md">
                {item.msg}
                <Image
                  className=" absolute w-16 right-[-1rem] bottom-[-2rem]"
                  src={icons[index]}
                  alt=""
                />
              </p>
            </div>
          );
        })}
      </div>
      {/* //md xl/ */}
      <div className="hidden md:block tabbox h-[40rem] bg-gradient-to-b from-a-color to-circle-bg">
        <h3 className="text-center h-14 font-bold text-lg xl:text-3xl py-10">
          服务优势
        </h3>
        <div className="h-[95%] flex">
          <div className=" w-[80%] xl:w-[70%] m-auto h-[70%] flex mt-18">
            {/* tab  */}
            <div className="w-32 flex flex-col justify-between items-center">
              {tabRender(content.tablist)}
            </div>
            {/* card  */}
            <div className="flex-1 ml-[2%]  bg-white rounded-xl flex ">
              {cardRender(cardData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
