import React from "react";
// json
import content from "./position.json";
// components
import Card from "./cards/CardsCom";
//imgs
import { iconA, iconB, iconC, iconD } from "@/public/position";
function ServerCom() {
  const imgs = [iconA, iconB, iconC, iconD];
  return (
    <div className="w-full md:w-[80%] md:m-auto">
      <div className="md:hidden w-[90%] m-auto bg-a-color rounded-xl flex flex-col justify-between px-4 pb-4">
        {content.contentservice.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              img={imgs[index]}
              msg={item.msg}
            />
          );
        })}
      </div>
      {/* //md xl */}
      <div className="hidden md:block w-full h-full">
        <h3 className="w-full my-10 text-center text-lg font-bold text-title-text-color">
          服务内容
        </h3>
        <div className="w-full h-full flex justify-around items-center bg-app-bg rounded-xl p-1 mb-2">
          <div className="w-[40%] flex flex-col items-center">
            <div className="flex justify-center w-full">
              <Card
                title={content.contentservice[0].title}
                img={imgs[0]}
                msg={content.contentservice[0].msg}
              />
            </div>
            <div className="bg-app-hr h-[1px] w-[50%] my-4"></div>
            <div className="flex justify-center w-full">
              <Card
                title={content.contentservice[2].title}
                img={imgs[2]}
                msg={content.contentservice[2].msg}
              />
            </div>
          </div>
          <div className="bg-app-hr w-[1px] h-32 m-4"></div>
          <div className="w-[40%] flex flex-col items-center">
            <div className="flex justify-center w-full">
              <Card
                title={content.contentservice[1].title}
                img={imgs[1]}
                msg={content.contentservice[1].msg}
              />
            </div>
            <div className="bg-app-hr h-[1px] w-[50%] my-4"></div>
            <div className="flex justify-center w-full">
              <Card
                title={content.contentservice[3].title}
                img={imgs[3]}
                msg={content.contentservice[3].msg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerCom;
