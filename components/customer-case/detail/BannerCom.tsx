import React from "react";
import Image from "next/image";
import {
  first,
  second,
  third,
  logoF,
  logoS,
  logoT,
} from "@/public/customer-case";

const renderImg = (id: number | string) => {
  const numericId = Number(id);
  switch (numericId) {
    case 1:
      return first;
    case 2:
      return second;
    default:
      return third;
  }
};
const renderIcon = (id: number | string) => {
  const numericId = Number(id);
  switch (numericId) {
    case 1:
      return logoF;
    case 2:
      return logoS;
    default:
      return logoT;
  }
};
const renderTitle = (id: number | string) => {
  const numericId = Number(id);
  switch (numericId) {
    case 1:
      return "中 心 仓 仓 储 外 包";
    case 2:
      return "红 杏 酒 家";
    default:
      return "Bilibili审核";
  }
};

interface BannerProps {
  id: number;
}

function BannerCom( { id }: BannerProps ) {

  return (
    <div className="">
      <div className="w-full md:hidden">
        <div className="bg-gradient-to-b from-a to-white h-48">
          <h3 className="font-bold text-lg text-center py-6 pt-10">案例详情</h3>
        </div>
      </div>
      {/* pc  */}
      <div
        className={`hidden md:block ${id !== 1 ? "bg-gradient-to-r from-white to-[#F6F9FF]" : "bg-[#F6F9FF]"}`}
      >
        <div className="w-[80%] h-auto 2xl:h-96 m-auto flex justify-between items-center">
          <div className="p-4 flex flex-col justify-between h-28">
            <Image className="w-10" src={renderIcon(id)} alt="icon" loading='lazy'/>
            <p className="text-3xl font-bold py-4">{renderTitle(id)}</p>
          </div>
          <div className="p-16">
            <Image
              className="object-contain w-72 2xl:w-[30rem] rounded-xl"
              src={renderImg(id)}
              alt="icon"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCom;
