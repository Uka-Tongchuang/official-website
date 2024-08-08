"use client";
import "./index.css";
//modules
import React from "react";
import Image from "next/image";
//src
import img from "@/public/bg/about.png"
import Earth from "@/public/home-icon/earth.png"
import Enterprise from "@/public/home-icon/qiye 1.png"
import People from "@/public/home-icon/renqun1 1.png"

function Home() {
  return (
    <div className="home_box" style={{fontFamily:"微软雅黑"}}>
      <div className="sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[700px] flex flex-col align-middle imgbox">
        <h1 className="text-white sm:text-lg sm:mt-20 xl:text-5xl ml-[196px]  xl:w-[576px] xl:h-[80px] xl:mt-[160px] font-semibold" >关于今创，了解今创</h1>
        <h3 className="text-white sm:text-base xl:text-4xl ml-[196px]  xl:w-[861px] xl:h-[60px] xl:mt-[30px]">About Our Company, Learn About Jinchuang</h3>
      </div>

      <div className="titlebanner w-full xl:h-[140px] bg-footer-black">
        <div className="titlecontent w-[80%] h-full m-auto text-white flex justify-around items-center">
          <div className="flex flex-row justify-around items-center ">
            <div className="icon">
              <Image src={Earth} alt="" /> 
            </div>
            <div className="count xl:ml-[12px]">
                <p className="xl:text-[32px]">4600+</p>
                <p className="xl:text-[16px] xl:mt-[12px] text-nav-font-color">省内外企事业单位</p>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
          <div className="icon">
              <Image src={Enterprise} alt="" /> 
            </div>
            <div className="count xl:ml-[12px]">
                <p className="xl:text-[32px]">3600+</p>
                <p className="xl:text-[16px] xl:mt-[12px] text-nav-font-color">各类中小微企业</p>
            </div>
          </div>
          <div className="flex flex-row justify-around items-center">
          <div className="icon">
              <Image src={People} alt="" /> 
            </div>
            <div className="count xl:ml-[12px]">
                <p className="xl:text-[32px]">50W+</p>
                <p className="xl:text-[16px] xl:mt-[12px] text-nav-font-color">行内设岗对口人群</p>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutus w-full xl:h-[600px]">
        <div className="aboutus_banner_box w-[80%] m-auto h-full">
          <div className="aboutus_title w-full xl:h-[140px] m-auto flex justify-center items-center"><h3 className="xl:w-[128px] xl:h-[48px] m-auto text-[32px] font-semibold">关于公司</h3></div>
          <div className="aboutus_content w-full flex">
            <div className="img xl:w-[50%] xl:h-[454px] ">
              <Image className="xl:w-[454px] xl:h-[454px] " src={img} alt="" />
            </div>
            <div className="text w-[50%]">
              <h3>成都今创人力资源有限公司</h3>
              <p>
                “今创人力”，是一家致力于全球为企业客户提供全面人力资源服务解决方案的专业公司
                ，业务范围涵盖，人事管理、劳务派遣、岗位外包、灵活用工等在内的一站式人力资源综合解决方案。
                旗下分支机构和服务网点覆盖全国各地等一二线主要地市；与国内多家行业领军企业深入合作，拥有四个地市人力资源平台经济产业园运营权；
                成都今创人力资源有限公司是万古人力旗下独立运营的人力公司,是一家综合性人力资源服务集团。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product_services">
        <div className="product_banner_box">
          <div className="product_title">业务系统，产品服务</div>
          <div className="cartbox">
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
            <div className="cart"></div>
          </div>
        </div>
      </div>

      <div className="cooperate_box">

      </div>
    </div>
  );
}

export default Home;
