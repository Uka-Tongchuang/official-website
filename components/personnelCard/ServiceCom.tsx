"use client";
import React from "react";
import Image from "next/image";
import "./index.css"
//img
import { serverImg } from "@/public/renshi";
//json
import content from "./personnel.json"
function ServerCom() {
  return (
    <div className="w-full h-auto md:my-14">
      <div className="w-[80%] m-auto flex flex-col-reverse justify-between md:w-[80%] xl:flex-row md:justify-between xl:justify-around md:items-center">
        <div className="xs:w-[80%] m-auto xl:w-[40%] md:w-[60%]">
          <Image className="object-contain xl:p-8" loading="lazy" src={serverImg} alt="icon" />
        </div>
        <div className="md:ml-10 xl:m-0">
          <h3 className="text-lg text-center font-bold mt-4 md:mt-0 md:text-xl xl:text-[32px] xl:font-bold xl:mb-[50px]">
            {content.benefits.title}
          </h3>
          <p
            className="text-md mt-6 xl:w-[420px] xl:h-[168px] xl:text-md text-nav-font-color"
          >
            {content.benefits.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServerCom;
