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
//pc渲染
const cardrender = (item: any) => {
  return (
    <div className="">
      <div className="w-[100%] flex p-10 justify-around items-center bg-a-color mb-10">
        <Image className="w-40  xl:ml-[5%]" src={item.imgA} alt="icon" loading='lazy'/>
        <div className="ml-10 xl:ml-[10%] text-ironside-grey">
          <h3 className="pb-10 font-bold text-xl text-azul">{item.cardF.title}</h3>
          <p>{item.cardF.msgA}</p>
          <p className="py-6">{item.cardF.msgB}</p>
          <p>{item.cardF.msgC}</p>
        </div>
      </div>
      <div className="w-full flex p-10 justify-around items-center bg-a-color mb-10">
        <div  className="xl:ml-[5%] text-ironside-grey">
        <h3 className="pb-12 font-bold text-xl text-azul">{item.cardS.title}</h3>
          <p>{item.cardS.msgA}</p>
          <p className="py-6">{item.cardS.msgB}</p>
          <p>{item.cardS.msgC}</p>
        </div>
        <Image className="w-40 ml-10 xl:ml-[10%]" src={item.imgB} alt="icon" loading='lazy'/>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};
//pc 端重组数据
const cardArr = [
  {
    cardF: content.advantage[0],
    cardS: content.advantage[1],
    imgA: anA,
    imgB: anB,
  },
  {
    cardF: content.advantage[2],
    cardS: content.advantage[3],
    imgA: anC,
    imgB: anD,
  }
];
// 移动
const cardRenderFun=({title,msgA,msgB,msgC}:{title:string,msgA:string,msgB:string,msgC:string},index:number)=>{
return <div className="p-4 relative">
    <h3 className="font-bold text-md text-azul pb-2 my-1">{title}</h3>
    <div className="bg-white rounded-lg text-md p-4 text-ironside-grey">
        <p>{msgA}</p>
        <p className="py-5">{msgB}</p>
        <p>{msgC}</p>
    </div>
    <Image className="w-20 opacity-90 absolute bottom-0 right-0" src={imgs[index]} alt={title} loading='lazy'/>
</div>
}
function Advantage() {
    
  return (
    <div>
      <div className=" md:hidden">
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
    {/* pc  */}
    <div className="hidden md:block">
      <h3 className="text-center h-14 font-bold text-lg xl:text-3xl py-10 my-10">
          服务优势
        </h3>
        <div className="hidden md:block w-[75%] m-auto">
        {cardArr.map((item, index) => {
          return(
            <React.Fragment key={index}>
              {cardrender(item)}
            </React.Fragment>
          );
        })}
      </div>
      </div>
  </div>
    
  );
}

export default Advantage;
