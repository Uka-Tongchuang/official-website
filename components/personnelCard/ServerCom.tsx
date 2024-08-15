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
    <div className="w-full h-[480px]">
      <div className="w-[80%] m-auto xl:flex xl:justify-around xl:items-center">
        <div className="xl:w-[460px] xl:h-[340px] xl:p-4 xl:mt-[58px]">
          <Image className="w-full h-full" src={serverImg} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-bold h-10 mt-4 xl:text-[32px] xl:font-bold xl:mb-[50px]">{content.benefits.title}</h3>
          <p
            className="indent-2 text-md xl:w-[420px] xl:h-[168px] xl:text-md text-ccc"
          >
            {content.benefits.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServerCom;
