import React from "react";
// json
import content from "./business.json";
// img
import Image from "next/image";
//imgs 
import { contentImg } from "@/public/business";
// com
import LeftCard from "./card/LeftCard";
import LeftBottomCard from "./card/LeftBottomCard"
import RightCard from "./card/RightCard";
import RightBottomCard from "./card/RightBottomCard";
function ServiceCom() {
  return (
    <div>
      {/* 移动  */}
      <div className="w-[70%] m-auto bg-a-color rounded-lg md:hidden">
        <h3 className="h-14 text-center py-6 font-bold">
          服务内容
        </h3>
        <div className="flex justify-between items-center">
          <ul className="p-4">
            {content.content.left.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-md py-2 relative pl-4 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-azul before:rounded-full"
                >
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
          <div className="w-[1px] h-28 bg-app-hr"></div>
          <ul className="p-4">
            {content.content.right.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-md relative pl-4 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-azul before:rounded-full"
                >
                  <span className="inline-block py-2">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* md pc */}
      <div className="hidden md:block md:text-lg">
        <h3 className="h-14 xl:text-3xl flex my-4 justify-center items-center font-bold">
          服务内容
        </h3>
        <div className="relative w-full h-[40rem] bg-gradient-to-r from-white to-a-color">
          {/* //圆形 */}
          <div className="absolute flex justify-center items-center w-[30rem] h-[30rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border-[8px] border-a-color">
            <div className="w-[26rem] h-[26rem] flex justify-center items-center border-2 border-dashed border-dashed-color rounded-full">
              <div className="relative w-[22rem] h-[22rem] flex justify-center items-center rounded-full bg-sky-100">
                <div className="absolute left-0 top-[-3.6em]" >
                  <LeftCard title="人员招聘"/>
                </div>
                <div className="absolute left-[-7.6em] top-[2.5em]" >
                  <LeftCard title="资源配置"/>
                </div>
                <div className="absolute left-[-9.6em] top-[10em]" >
                  <LeftCard title="办公场所"/>
                </div>
                <div className="absolute left-[-7.6em] bottom-[1.5em]" >
                  <LeftBottomCard title="团队搭建"/>
                </div>
                <div className="absolute left-0 bottom-[-5em]" >
                  <LeftBottomCard title="业务运营"/>
                </div>
                <div className="absolute right-0 top-[-3.6em]" >
                  <RightCard title="人事管理"/>
                </div>
                <div className="absolute right-[-7.6em] top-[2.5em]" >
                  <RightCard title="薪酬管理"/>
                </div>
                <div className="absolute right-[-9.6em] top-[10em]" >
                  <RightCard title="福利管理"/>
                </div>
                <div className="absolute right-[-7.6em] bottom-[1.5em]" >
                  <RightBottomCard title="绩效管理"/>
                </div>
                <div className="absolute right-0 bottom-[-5em]" >
                  <RightBottomCard title="风险管理"/>
                </div>
                <div className="w-[80%] h-[80%] bg-azul rounded-full flex flex-col items-center text-white bg-gradient-to-b from-baby-blue to-azul">
                  <Image className="w-[20%] pt-16" src={contentImg} alt=""/>
                  <h3 className="py-8 text-3xl">服务内容</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCom;
