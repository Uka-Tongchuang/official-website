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
    <div className="w-full h-auto">
      <div className="w-[80%] md:w-[80%] m-auto md:flex md:justify-between md:items-center xl:w-[80%] xl:flex xl:justify-between xl:items-center">
        <div className="md:w-[100%] xl:w-[40%] xl:h-auto xl:p-4 xl:mt-[58px]">
          <Image className="object-contain p-10" loading="lazy" src={serverImg} alt="" />
        </div>
        <div className="xl:w-[46%] xl:mt-2">
          <h3 className="text-lg font-bold mt-4 md:mt-0 md:text-xl xl:text-[32px] xl:font-bold xl:mb-[50px]">{content.benefits.title}</h3>
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
