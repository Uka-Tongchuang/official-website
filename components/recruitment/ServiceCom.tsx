import React from "react";
// json
import content from "./recruitment.json";

import Image from "next/image";

// 服务优势icons
import { sA, sB, sC, sD, sE, sF } from "@/public/recruitment";
function ServiceCom() {
  const icons = [sA, sB, sC, sD, sE, sF];

  const cardrender = (item: any) => {
    return (
      <div className="">
        <div className="w-[100%] flex p-10 justify-around items-center bg-a-color mb-10">
          <Image
            className="w-[40%] 3xl:w-96 xl:ml-[5%]"
            src={item.imgA}
            alt=""
          />
          <div className="xl:ml-[10%] text-ironside-grey">
            <h3 className="pb-10 font-bold text-xl text-azul">
              {item.cardF.title}
            </h3>
            <p>{item.cardF.msgA}</p>
            <p className="py-6">{item.cardF.msgB}</p>
            <p>{item.cardF.msgC}</p>
          </div>
        </div>
        <div className="w-full flex p-10 justify-around items-center bg-a-color mb-10">
          <div className="xl:ml-[5%] text-ironside-grey">
            <h3 className="pb-12 font-bold text-xl text-azul">
              {item.cardS.title}
            </h3>
            <p>{item.cardS.msgA}</p>
            <p className="py-6">{item.cardS.msgB}</p>
            <p>{item.cardS.msgC}</p>
          </div>
          <Image
            className="w-[40%] 3xl:w-96 xl:ml-[10%]"
            src={item.imgB}
            alt=""
          />
        </div>
        <div className="clear-both"></div>
      </div>
    );
  };
  //pc 端重组数据
  const cardArr = [
    {
      cardF: content.benefits[0],
      cardS: content.benefits[1],
      imgA: sA,
      imgB: sB,
    },
    {
      cardF: content.benefits[2],
      cardS: content.benefits[3],
      imgA: sC,
      imgB: sD,
    },
    {
      cardF: content.benefits[4],
      cardS: content.benefits[5],
      imgA: sE,
      imgB: sF,
    },
  ];
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
              <div className="relative w-full font-light p-4 mb-4 bg-white rounded-lg text-md">
                <p>{item.msgA}</p>
                <p className="my-4">{item.msgB}</p>
                <p>{item.msgC}</p>
                <Image
                  className=" absolute w-16 right-[-1rem] bottom-[-2rem]"
                  src={icons[index]}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block w-[75%] m-auto">
        <h3 className="mt-10 text-lg my-10 xl:text-3xl font-bold text-center">
          服务优势
        </h3>
        {cardArr.map((item, index) => {
          return(
            <React.Fragment key={index}>
              {cardrender(item)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCom;
