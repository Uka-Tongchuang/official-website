import React from "react";

import Image from "next/image";
import { lBg, lBgImgB } from "@/public/business";

// com 
import CustomizeFlowcharts from "../CustomizeFlowcharts";

function ServiceCom() {
  const arrs=["企业","员工","税务局"]
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
        <div className="w-[30%] rounded-md text-lg font-medium m-auto flex justify-center items-center text-azul h-10 bg-gradient-to-r from-a-color to-lg-bg ">
          今创人力
        </div>
        <div className=" absolute w-[50%] border-r-[1px] border-azul h-28"></div>
        <div className=" relative w-[60%] m-auto h-20 border-[1px] text-ironside-grey text-md border-azul border-b-0 mb-4 mt-8">
          <span className=" absolute w-[4rem] left-[-4rem]  top-[1rem] ">
            商务协议 开发票、 提供发票
          </span>
          <span className="absolute w-[4rem] left-[0.5rem]  top-[1rem] ">
            代发费用 + <br />
            服务费
          </span>
          <span className="absolute w-[2rem] left-[40%]  top-[1rem] translate-x-[-45%]">
            业务合作协议
          </span>
          <span className="absolute w-[2rem] left-[60%]  top-[1rem] translate-x-[-45%]">
            完税证明
          </span>
          <span className="absolute w-[0.5rem]  top-[1rem] right-[1rem]">
            代报税
          </span>
          <span className="absolute w-[2rem]  top-[1rem] right-[-2.5rem]">
            完税证明
          </span>
        </div>
        {/* contents */}
        <div className="w-[80%] flex justify-between items-center p-4 m-auto">
          {
            arrs.map((item,index)=>{
              return <div key={index} className="p-2 w-[24%] rounded-md text-lg font-medium flex justify-center items-center text-azul bg-gradient-to-r from-a-color to-lg-bg ">
                     {item}
              </div>
            })
          }
        
        </div>
      </div>
      {/* //xl md  */}
      <div className="hidden md:block">
        <h3 className="text-center h-14 font-bold text-lg xl:text-3xl my-10">
          服务流程
        </h3>
        <div className="flex justify-center items-center">
          <CustomizeFlowcharts />
        </div>
      </div>
    </div>
  );
}

export default ServiceCom;
