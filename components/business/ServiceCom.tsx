import React from "react";
// json
import content from "./business.json";
// img
import Image from "next/image";
// com
import LeftCard from "./card/LeftCard";
function ServiceCom() {
  return (
    <div>
      {/* 移动  */}
      <div className="w-[70%] m-auto bg-app-bg md:hidden">
        <h3 className="h-14 text-center flex my-4 justify-center items-center font-bold">
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
      {/* md  */}
      <div className="hidden md:block">
        <h3 className="h-14 xl:text-3xl flex my-4 justify-center items-center font-bold">
          服务内容
        </h3>
        <div className="relative w-full h-[40rem] bg-gradient-to-r from-white to-a-color">
          {/* //圆形 */}
          <div className="absolute flex justify-center items-center w-[30rem] h-[30rem] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full border-[8px] border-a-color">
            <div className="w-[26rem] h-[26rem] flex justify-center items-center border-2 border-dashed border-dashed-color rounded-full">
              <div className="w-[22rem] h-[22rem] flex justify-center items-center rounded-full border-[8px] border-a-color">
                <div className="absolute" >
                  <LeftCard title="人员招聘"/>
                </div>
                <div className="w-[90%] h-[90%] bg-azul rounded-full text-white bg-gradient-to-b from-g-start-color to-azul">
                  {/* <Image src={} alt=""/> */}
                  <h3>服务内容</h3>
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
