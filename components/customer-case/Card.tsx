import { StaticImageData } from "next/image";
import Image from "next/image";
import { logoF,logoS,logoT } from "@/public/customer-case";
import Link from "next/link";
import React from "react";

type objtype = {
  title: string;
  msg: string;
  achieve: string;
  type: string;
  img: StaticImageData;
  id?: number;
};
//跳转
const goDetail = (id: number) => {
  switch (id) {
    case 1:
      return "detailFirst";
    case 2:
      return "detailSecond";
    case 3:
      return "detailThird";
    default:
      break;
  }
};
//图片
const renderImgItem=(id:number)=>{
  switch (id) {
    case 1:
      return logoF;
    case 2:
      return logoS;
    default:
      return logoT;
  }

}
function Card({ title, msg, achieve, type, img, id }: objtype) {
  return (
    <div>
      {/* 移动 */}
      <div className="mb-10 text-md md:hidden">
        <div className="w-full rounded-tl-xl rounded-tr-xl">
          <Image
            className="object-contain  rounded-tl-xl rounded-tr-xl"
            src={img}
            alt=""
          />
        </div>
        <div className="rounded-xl border-[1px] border-app-hr mt-[-30px] p-6 relative bg-white z-20">
          <div className="h-10 flex justify-between mb-4">
            <h3 className="pb-1 font-bold text-md">{title}</h3>
            <span className="flex justify-center items-center border-app-hr border-[1px] rounded-md text-lg w-24 h-10 text-azul">
              {type}
            </span>
          </div>
          <div className="flex">
            <div className="w-[20%] text-azul">需求：</div>
            <div className="flex-1">{msg}</div>
          </div>
          <div className="flex my-4">
            <div className="w-[20%] text-azul">成就：</div>
            <div className="flex-1">{achieve}</div>
          </div>
          <div className="h-10  flex justify-end items-center">
            <button className="bg-azul w-24 h-10 text-white rounded-md">
              <Link href={`/customer-case/${goDetail(id as number)}`}>查看详情</Link>
            </button>
          </div>
        </div>
      </div>
      {/* pc  */}
      <div className="hidden md:flex mb-10">
        <Image
          src={img}
          className="w-[26rem] h-80 xl:h-96 xl:w-[34rem]"
          alt=""
        />
        <div className="ml-[-30px] h-80 xl:h-96 bg-white rounded-xl p-1 pl-8 xl:p-12 relative ">
        <Image className={`${id===1?"w-12":"w-14"}`} src={renderImgItem(id as number)} alt=""/>
          <div className="font-bold py-2 text-2xl my-2">{title}</div>
          <div className="flex text-md xl:py-4">
            <div className="w-[20%] text-azul">需求：</div>
            <div className="flex-1">{msg}</div>
          </div>
          <div className="flex text-md my-4">
            <div className="w-[20%] text-azul">成就：</div>
            <div className="flex-1">{achieve}</div>
          </div>
          <div className="flex items-center mt-6 ">
            <button className="bg-azul w-24 h-10 text-white rounded-md">
              <Link href={`/customer-case/${goDetail(id as number)}`}>查看详情</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
