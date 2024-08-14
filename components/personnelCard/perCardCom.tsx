"use client";
// 内置模块
import React from "react";
import Image from "next/image";
import "./index.css";
//img
import one from "@/public/renshi/cardone.png";
import two from "@/public/renshi/cardtwo.png";
import three from "@/public/renshi/cardthree.png";
import four from "@/public/renshi/cardfour.png";
import five from "@/public/renshi/cardfive.png";
function perCardCom() {
  return (
    <div className="h-[418px] bg-gradient-to-b from-[#FAFBFF] to-[#FAFBFF]">
      <h2 className="w-[80%] m-auto h-[148px] text-[32px] font-bold flex justify-center items-center">
        服务模式
      </h2>
      <div className="card_box w-[80%] m-auto flex justify-between items-center">
        <div className="w-[200px] h-[220px] bg-gradient-to-b from-white to-[#fff]">
          <h4 className="font-bold text-lg">社会保障和租房公积金</h4>
          <p>Social Insurance andHousing Provident FundServices</p>
          <Image className="w-[80px] h-[80px]" src={one} alt="" />
        </div>
        <div className="w-[200px] h-[220px] bg-gradient-to-b from-white to-[#fff]">
          <h4 className="font-bold text-lg">员工关系管理</h4>
          <p>Employee Relationship Management</p>
          <Image className="w-[80px] h-[80px]" src={two} alt="" />
        </div>
        <div className="w-[200px] h-[220px] bg-gradient-to-b from-white to-[#fff]">
          <h4 className="font-bold text-lg">健康体检服务</h4>
          <p>Health Examination Services</p>
          <Image className="w-[80px] h-[80px]" src={three} alt="" />
        </div>
        <div className="w-[200px] h-[220px] bg-gradient-to-b from-white to-[#fff]">
          <h4 className="font-bold text-lg">商业保障服务</h4>
          <p className="four">
            Commercial <br />
            Insurance Services
          </p>
          <Image className="w-[80px] h-[80px]" src={four} alt="" />
        </div>
        <div className="w-[200px] h-[220px] bg-gradient-to-b from-white to-[#fff]">
          <h4 className="font-bold text-lg">人事档案</h4>
          <p className="five">
            Personnel File
            <br />
            Management
          </p>
          <Image className="w-[80px] h-[80px]" src={five} alt="" />
        </div>
      </div>
    </div>
  );
}

export default perCardCom;
