import React from "react";

// json
import content from "./about.json";

// img
import Image from "next/image";
import {
  fieldA,
  fieldB,
  fieldC,
  fieldD,
  fieldE,
  fieldF,
} from "@/public/about-us";
function Field() {
  //组合数据
  const datas = [
    { img: fieldA, title: content.field[0] },
    { img: fieldB, title: content.field[1] },
    { img: fieldC, title: content.field[2] },
    { img: fieldD, title: content.field[3] },
    { img: fieldE, title: content.field[4] },
    { img: fieldF, title: content.field[5] },
  ];
  return (
    <div className="mb-10 md:bg-a-color md:pb-6">
      <h3 className="h-10 mt-2 md:py-8 md:mb-10 xl:text-3xl w-full text-center font-bold xl:mt-20">
        我们的领域
      </h3>
      <div className="w-[80%] md:w-[90%] m-auto grid grid-cols-2 md:grid-cols-3 gap-4 p-3 rounded-lg bg-a-color">
        {datas.map((item, index) => {
          return (
            <div key={index} className="p-2 rounded-md md:rounded-2xl bg-white flex md:justify-around items-center md:p-6 2xl:p-10">
              <Image src={item.img} className="w-10 md:w-14 xl:w-20" alt="itm.title" loading="lazy" />
              <h3 className="ml-2 text-md md:text-lg xl:text-xl text-g-color">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Field;
