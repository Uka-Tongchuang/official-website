"use client";
import "./index.css";
//modules
import React from "react";
import Image from "next/image";
//src
import img from "@/public/bg/about.png";
import Earth from "@/public/home-icon/earth.png";
import Earthtwo from "@/public/home-icon/mdimg.png";
import Enterprise from "@/public/home-icon/qiye 1.png";
import Enterprisetwo from "@/public/home-icon/qiye 2.png";
import People from "@/public/home-icon/renqun1 1.png";
import Peopletwo from "@/public/home-icon/renqun1 2.png";

function Home() {
  return (
    <div className="home_box w-screen" style={{ fontFamily: "微软雅黑" }}>
      {/* 首页顶部img */}
      <div className="h-72 md:h-[30rem] xl:h-[46rem] w-full flex flex-col align-middle relative imgbox">
        <h1 className="text-white text-lg md:text-3xl xl:text-5xl font-semibold absolute top-[40%] left-[5%]">
          关于今创，了解今创
        </h1>
        <h3 className="text-white md:text-3xl xl:text-4xl absolute top-[60%] left-[5%]">
          About Our Company, Learn About Jinchuang
        </h3>
        {/* 首页顶部盒子里的小banner */}
        <div className="titlebanner absolute bottom-0 left-0 w-full h-12 md:h-20 xl:h-32 bg-white opacity-90 md:opacity-100 md:bg-footer-black xl:bg-footer-black xl:opacity-100">
          {/* 首页顶部盒子里的小banner的内容盒子 */}
          <div className="titlecontent w-[96%] md:w-[90%] xl:w-[80%] h-full md:h-20 xl:h-32 m-auto flex justify-around items-center">
            {/* 第一个数值盒子 */}
            <div className="flex flex-row justify-around items-center">
              <div className="icon w-8 md:w-14 xl:w-20">
                <Image
                  src={Earth}
                  className="hidden md:inline xl:inline"
                  alt=""
                  width={90}
                />
                <Image
                  src={Earthtwo}
                  className="inline md:hidden xl:hidden"
                  width={90}
                  alt=""
                />
              </div>
              <div className="count ml-2 flex flex-col h-full justify-between md:ml-6">
                <p className="text-[0.54rem] md:text-white md:text-xl xl:text-3xl xl:text-white">
                  4600+
                </p>
                <p className="text-[0.54rem] md:text-sm md:text-nav-font-color xl:text-xl xl:text-nav-font-color">
                  省内外企事业单位
                </p>
              </div>
            </div>
            {/* 第二个数值盒子 */}
            <div className="flex flex-row justify-around items-center">
              <div className="icon w-8 md:w-14 xl:w-20">
                <Image
                  src={Enterprise}
                  className="hidden md:inline xl:inline"
                  width={90}
                  alt=""
                />
                <Image
                  src={Enterprisetwo}
                  className="inline md:hidden xl:hidden"
                  width={90}
                  alt=""
                />
              </div>
              <div className="count ml-2 flex flex-col justify-center md:ml-6">
                <p className="text-[0.54rem] md:text-white md:text-xl xl:text-3xl">
                  3600+
                </p>
                <p className="text-[0.54rem] md:text-nav-font-color md:text-sm xl:text-xl xl:text-nav-font-color">
                  各类中小微企业
                </p>
              </div>
            </div>
            {/* 第三个数值盒子 */}
            <div className="flex flex-row justify-around items-center">
              <div className="icon w-8 md:w-14 xl:w-20">
                <Image
                  src={People}
                  className="hidden md:inline xl:inline"
                  width={90}
                  alt=""
                />
                <Image
                  src={Peopletwo}
                  className="inline md:hidden xl:hidden"
                  width={90}
                  alt=""
                />
              </div>
              <div className="count ml-2 flex flex-col justify-center md:ml-6">
                <p className="text-[0.54rem] md:text-white md:text-xl xl:text-3xl">
                  50W+
                </p>
                <p className="text-[0.54rem] md:text-nav-font-color md:text-sm xl:text-xl xl:text-nav-font-color">
                  行内设岗对口人群
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 关于公司盒子 */}
      <div className="aboutus w-full h-60 md:h-1/2">
        <div className="aboutus_banner_box xl:w-[80%] m-auto h-full">
          <h3 className="h-12 md:h-24 flex justify-center items-center font-semibold text-lg md:text-3xl">
            关于公司
          </h3>
          <div className="aboutus_content w-full flex relative">
            <div className="img w-1/2 xl:w-2/5 xl:mt-10">
              <Image src={img} alt="" />
            </div>
            <div className="text w-60 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-96 xl:w-[40%] xl:h-[28rem] xl:bg-white xl:shadow-xl xl:left-[50%] xl:top-[56%] xl:ml-[20%]">
              <h3 className="hidden md:inline-block md:font-semibold md:text-xl md:w-full md:h-12 md:text-center xl:text-2xl xl:inline-block xl:pt-10">
                成都今创人力资源有限公司
              </h3>
              <p className="text-nav-font-color text-base md:text-lg xl:m-[10%]">
                “今创人力”，是一家致力于全球为企业客户提供全面人力资源服务解决方案的专业公司 ，业务范围涵盖，人事管理、劳务派遣、岗位外包、灵活用工等在内的一站式人力资源综合解决方案。
                <span className="hidden md:inline xl:inline">
                  旗下分支机构和服务网点覆盖全国各地等一二线主要地市；与国内多家行业领军企业深入合作，拥有四个地市人力资源平台经济产业园运营权； 成都今创人力资源有限公司是万古人力旗下独立运营的人力公司,是一家综合性人力资源服务集团。
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 业务系统 */}
      <div className="product_services w-full h-auto p-8">
        <div className="product_title w-full h-14 flex justify-center items-center text-2xl font-bold">
          业务系统 产品服务
        </div>
        <div className="cartbox grid grid-cols-2 gap-6 mt-8">
          {/* 人事管理 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              人事管理
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                社会保险和住房公积金服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                员工关系管理
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                健康体检服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                商业保险服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                人事档案
              </li>
            </ul>
          </div>

          {/* 劳务派遣 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              劳务派遣
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                转移派遣服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                短期派遣服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                招聘派遣服务
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                长期派遣服务
              </li>
            </ul>
          </div>

          {/* 岗位外包 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              岗位外包
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                人事服务案例
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                员工关系管理
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                员工培训管理
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                招聘管理
              </li>
            </ul>
          </div>

          {/* 业务外包 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              业务外包
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                人员招聘、团队搭建
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                业务运营管理
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                办公场所及商业场地租赁
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                薪酬、福利、绩效管理
              </li>
            </ul>
          </div>

          {/* 招聘流程外包 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              招聘流程外包
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                需求分析和准备
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                收集与筛选候选人
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                客户评审与聘用
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                项目跟踪与服务保障
              </li>
            </ul>
          </div>

          {/* 灵活用工解决方案 */}
          <div className="cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-auto p-4 rounded-lg">
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">
                <i className="icon-class" /> {/* 替换为适当的图标 */}
              </span>
              灵活用工解决方案
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                国内早起实践者
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                合作模式多样化
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                服务经验丰富
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-300/50">
                交付能力卓越
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cooperate_box"></div>
    </div>
  );
}

export default Home;
