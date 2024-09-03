import React from "react";
import Image, { StaticImageData } from "next/image";
import { first, second, third } from "@/public/customer-case";

// json
import content from "../customer.json";

const renderImg = (id: number): StaticImageData => {
  const ids=Number(id)
  switch (ids) {
    case 1:
      return first;
    case 2:
      return second;
    default:
      return third;
  }
};

interface CardProps {
  id: number;
}

function Card({ id }: CardProps) {
  return (
    <div>
      <div className="md:hidden mt-[-110px] mb-10  w-[90%] m-auto">
        <div className="w-full rounded-tl-xl rounded-tr-xl">
          <Image
            className=" object-contain rounded-tl-xl rounded-tr-xl"
            src={renderImg(id)}
            alt=""
          />
        </div>
        <div className="rounded-xl border-[1px] border-app-hr mt-[-30px] p-6 relative bg-white z-20">
          <div className="h-10 flex justify-between mb-4">
            <h3 className="pb-1 font-bold text-md">
              {content.arr[id - 1].title}
            </h3>
            <span className="border-app-hr border-[1px] rounded-md text-lg w-24 h-10 flex justify-center items-center text-azul">
              {content.arr[id - 1].type}
            </span>
          </div>
          <div className="flex">
            <div className="w-[20%] text-azul">需求：</div>
            <div className="flex-1">{content.arr[id - 1].msg}</div>
          </div>
        </div>
      </div>
      {/* pc  */}
      <div className="hidden md:block w-[80%] m-auto shadow-xl shadow-circle-bg p-4 mb-10 rounded-lg">
        <div className="py-10">
          <h3 className="text-center font-bold xl:text-3xl py-8">业务需求</h3>
          <p className="w-[80%] m-auto text-center">
            {content.arr[id - 1].msg}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
