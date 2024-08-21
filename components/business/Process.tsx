import React from "react";
// json
import content from "./business.json";
function Process() {
  //业务外包
  return (
    <div className="">
      {/* //移动  */}
      <div className="md:hidden bg-gradient-to-b from-white to-a-color pb-4">
        <h3 className="h-14 flex justify-center items-center font-bold my-2">
          服务流程
        </h3>
        <div className="w-[50%] rounded-md text-md font-medium m-auto flex justify-center items-center text-azul h-10 bg-gradient-to-r from-lg-bg-start to-lg-bg ">
          签订合作协议、交付成果
        </div>
        <div className="w-[50%] border-r-[1px] border-azul h-8"></div>
        <div className="w-[60%] m-auto h-4 border-[1px] border-azul border-b-0 mb-4"></div>
        {/* contents */}
        <div className="flex justify-between w-[74%] m-auto">
          <ul className="w-[48%] flex flex-col justify-between">
            {content.process.left.map((item, index) => {
              return (
                <li key={index} className="relative pl-4 mb-2 text-gray-700">
                  <span className="text-sm before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:border before:border-blue-500 before:rounded-full before:transform before:-translate-y-1/2">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
          <ul className="w-[48%] flex flex-col justify-between">
            {content.process.right.map((item, index) => {
              return (
                <li key={index} className="relative pr-4 mb-2 text-gray-700">
                  <span className="text-sm text-right block after:absolute after:right-0 after:top-1/2 after:w-2 after:h-2 after:border after:border-blue-500 after:rounded-full after:transform after:-translate-y-1/2">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* //md xl */}
      <div className="hidden md:block">
        
      </div>
    </div>
  );
}

export default Process;
