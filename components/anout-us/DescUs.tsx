import React from "react";
import content from "./about.json";
// img
import Image from "next/image";
import { descbg } from "@/public/anout-us";
function DescUs() {
  return (
    
    <div className="mb-10">
      <h3 className="xl:hidden flex justify-center items-center font-bold my-4">
        关于公司
      </h3>
      <h3 className="hidden xl:flex justify-center items-center text-3xl my-8 font-bold">
        公司介绍
      </h3>
      <div className="md:flex md:w-[80%] m-auto">
        <div
          className="w-[94%] m-auto md:bg-white
         + bg-a-color text-about-color p-4 rounded-lg text-md"
        >
          <p>{content.descFirst}</p>
          <p className="py-8">{content.descSecond}</p>
          <p>{content.descThird}</p>
        </div>
        <Image className="w-[54%] md:w-80 md:ml-10 md:mb-8 m-auto mt-4" src={descbg} alt="" />
      </div>
    </div>
  );
}

export default DescUs;
