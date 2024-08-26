import React from "react";
//  json
import "./index.css";
import content from "./advantage.json";
// 组件库 
import { Carousel } from "antd";

import Image from "next/image";
// imgs 
import { anA,anB,anC,anD } from "@/public/flexiblePage";
const imgs=[anA,anB,anC,anD]
const cardRenderFun=({title,msgA,msgB,msgC}:{title:string,msgA:string,msgB:string,msgC:string},index:number)=>{
return <div className="p-4 relative">
    <h3 className="font-bold text-md text-azul pb-2 my-1">{title}</h3>
    <div className="bg-white rounded-lg text-md p-4 text-ironside-grey">
        <p>{msgA}</p>
        <p className="py-5">{msgB}</p>
        <p>{msgC}</p>
    </div>
    <Image className="w-20 opacity-90 absolute bottom-0 right-0" src={imgs[index]} alt={title}/>
</div>
}
function Advantage() {
    
  return (
    <div className="">
      <h3 className="h-14 flex justify-center items-center font-bold my-2">
        服务优势
      </h3>
      <div className="w-[90%] m-auto rounded-xl bg-a-color mb-24">
        <Carousel
          dotPosition="bottom"
          infinite={false}
          dots={{ className: "slick-dots custom-dots" }}
          adaptiveHeight
          draggable
        >
          {content.advantage.map((item, index) => {
            return <div key={index}>
                    {
                        cardRenderFun(item,index)
                    }
            </div>;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Advantage;
