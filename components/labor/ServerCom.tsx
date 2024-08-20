import React from "react";
import "./index.css";
import Image from "next/image";
// json
import content from "./labor.json";
import {ca,cb,cc,cd} from "@/public/labor"
function ServerCom() {
    const contents=[ca,cb,cc,cd]
  return (
    <div className="w-full h-auto boxs">
      <div className="w-[90%] m-auto pt-4 pb-4">
        <h4 className="h-10 xl:h-20 text-center font-bold text-lg xl:text-3xl">{content.servers.title}</h4>
        <div className="md:w-[60%] md:m-auto md:grid md:grid-cols-2 md:gap-4 xl:gap-8">
          {content.servers.cards.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex justify-between w-full h-36 bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <div className="w-[60%]">
                  <h4 className="font-bold text-lg text-sky-400">{item.title}</h4>
                  <ul className="list-disc ml-5 mt-2 text-sm ">
                    {item.decs.map((v, i) => {
                      return <li key={i} className="text-sky-600 xl:my-1"><span className="text-ironside-grey xl:text-sm">{v}</span></li>;
                    })}
                  </ul>
                </div>
                <div className="w-32 xl:w-40 flex justify-center items-center">
                    <Image className="object-contain w-[80%] mt-[10%]" src={contents[index]} alt=""/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServerCom;
