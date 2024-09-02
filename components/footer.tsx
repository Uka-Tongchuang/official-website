"use client";
import { useState } from "react";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
//pc img
import Logo from "@/public/footer-icon/logo.png";
import YouXian from "@/public/footer-icon/youxiang 1.png";
import Address from "@/public/footer-icon/dizhiguanli 1.png";
import Phone from "@/public/footer-icon/dianhua3 1.png";
import WxWhite from "@/public/footer-icon/weixin 1.png";
import QQWhite from "@/public/footer-icon/QQ 1.png";
import WbWhite from "@/public/footer-icon/xinlangweibo 1.png";
import UsImg from "@/public/footer-icon/code.png";

//移动 footer  image
import WxImg from "@/public/footer-icon/wx.png";
import QQImg from "@/public/footer-icon/qq.png";
import WbImg from "@/public/footer-icon/wb.png";
//footer-bg
import BgFooterImage from "@/public/pc-footer/footer-bg.png";
export default function Footer(): JSX.Element {
  // 定义一个状态来控制下拉菜单的展开和收起
  const [isExpanded, setIsExpanded] = useState(false);

  // 切换下拉菜单的展开和收起状态
  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      {/* 移动和平板端 */}
      <div className="box w-[95%] m-auto  xl:hidden">
        <div className="footer-menu-container">
          {/* 下拉菜单内容 */}
          <div className="flex flex-col w-full">
            <div className="bg-white flex flex-col items-start w-full">
              {/* 菜单项 */}
              <div className="w-full ">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex text-lg border-b border-t border-slate-300 w-full items-center h-full px-4 py-4 relative"
                >
                  产品服务{" "}
                  <span
                    className={`transform transition-transform duration-300 absolute right-6 top-[50%] translate-y-[-50%]`}
                  >
                    {isExpanded ? <DownOutlined /> : <RightOutlined />}
                  </span>
                </button>
                {/* 使用 isExpanded 状态控制子菜单的显示和隐藏 */}
                <div
                  className={`flex flex-col  w-full  bg-white transition-max-height duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <a
                    href="/products/personnel-management"
                    id="personnel"
                    className="w-full text-lg border-b text-gray-500 pl-[36px] border-slate-300 flex px-4 py-4 bg-white"
                  >
                    人事管理
                  </a>
                  <a
                    href="/products/labor-dispatch"
                    id="labor"
                    className="w-full text-lg border-b pl-[36px] text-gray-500 border-slate-300 flex px-4 py-4 bg-white"
                  >
                    劳务派遣
                  </a>
                  <a
                    href="/products/position-outsource"
                    id="position"
                    className="w-full text-lg border-b pl-[36px] border-slate-300 flex px-4 py-4 bg-white text-gray-500"
                  >
                    岗位外包
                  </a>
                  <a
                    href="/products/business-outsource"
                    id="business"
                    className="w-full text-lg border-b pl-[36px] border-slate-300 flex px-4 py-4 bg-white text-gray-500"
                  >
                    业务外包
                  </a>
                  <a
                    href="/products/recruitment"
                    id="recruitment"
                    className="w-full text-lg border-b pl-[36px] border-slate-300 flex px-4 py-4 bg-white text-gray-500"
                  >
                    招聘流程外包
                  </a>
                  <a
                    href="/products/flexible-outsource"
                    id="flexible"
                    className="w-full text-lg border-b pl-[36px] border-slate-300 flex px-4 py-4 bg-white text-gray-500"
                  >
                    灵活用工解决方案
                  </a>
                </div>
              </div>

              {/* 其他菜单项 */}
              <div className="w-full">
                <a
                  href="/customer-case"
                  id="customerCase"
                  className="w-full border-b text-lg border-slate-300 flex px-4 py-4 bg-white text-black"
                >
                  解决方案
                </a>
                <a
                  href="/news"
                  id="news"
                  className="w-full border-b text-lg border-slate-300 flex px-4 py-4 bg-white text-black"
                >
                  客户案例
                </a>
                <a
                  href="/about-us"
                  id="aboutUs"
                  className="w-full border-b text-lg border-slate-300 flex px-4 py-4 bg-white text-black"
                >
                  了解公司
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 地图模块 */}
        <div className="w-[95%] m-auto">
          <h2 className="h-[62px] font-bold flex justify-center items-center text-em">
            联系我们
          </h2>
          {/* 地图展示 */}
          <div
            style={{ boxShadow: " 0 2px 6px 0px rgba(0, 123, 255, 0.3)" }}
            className="rounded-[10px] h-[259px] shadow-md backdrop-blur-md overflow-hidden flex flex-col"
          >
            <div className="h-[120px]">地图</div>
            <div className="flex-1 flex-col juctify-between p-5">
              <div className="h-[33%] flex justify-between items-center">
                <span className="text-md text-gray-400">邮箱</span>
                <span className="text-md">1008611@163.com</span>
              </div>
              <div className="h-[33%] flex justify-between items-center">
                <span className="text-md text-gray-400">地址</span>
                <span className="text-md">四川省成都市锦江区东大路xx号</span>
              </div>
              <div className="h-[33%] flex justify-between items-center">
                <span className="text-md text-gray-400">联系方式</span>
                <span className="text-md">180xxxx2222</span>
              </div>
            </div>
          </div>
          {/* 图标 */}
          <div className="flex mt-[16px] mb-[76px]">
            <Image className="w-[20px] h-[20px]" src={WxImg} alt="" />
            <Image className="w-[20px] h-[20px] ml-[20px]" src={QQImg} alt="" />
            <Image className="w-[20px] h-[20px] ml-[20px]" src={WbImg} alt="" />
          </div>
          {/* 底部信息 */}
          <div className="w-[200px] h-[30px] text-xs text-gray-400 m-auto mb-[8px]">
            <p className="text-center">2024今创人力有限公司</p>
            <p>The company was established in 2024</p>
          </div>
        </div>
      </div>
      {/* pc端 */}
      <div className="hidden xl:flex flex-col">
        {/* 加入我们 */}
        <div className="relative">
          <Image className="w-full" src={BgFooterImage} alt="" />
          <div className="w-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100px] flex flex-col justify-between items-center">
            <p className="text-3xl">
              已为超过<span className="text-azul">4,600</span>{" "}
              家企业提供服务，服务人数超过<span className="text-azul">50W+</span>
            </p>
            <button className="w-[132px] h-[32px] flex justify-center items-center text-md text-white bg-azul">
              加入我们
            </button>
          </div>
        </div>
        {/* info盒子*/}
        <div className="h-[600px] w-full bg-footer-black">
          {/* 上部分 */}
          <div className="h-[417px] pt-[64px] w-[80%] m-auto items-center flex justify-between ">
            {/* 第一个盒子logo */}
            <div className="w-[33%] pl-28">
              <Image className="w-[90px] h-[66px]" src={Logo} alt="" />
              <div className="mt-[40px] mb-4 flex items-center text-white text-lg">
                <span>
                  {" "}
                  <Image className="w-[20px] h-[20px]" src={YouXian} alt="" />
                </span>
                <span className="ml-2 text-nav-font-color">
                  1008611@163.com
                </span>
              </div>
              <div className=" flex mb-4 items-center text-white text-lg">
                <span>
                  {" "}
                  <Image className="w-[20px] h-[20px]" src={Address} alt="" />
                </span>
                <span className="ml-2 text-nav-font-color">
                  四川省成都市锦江区
                </span>
              </div>
              <div className=" flex items-center text-white text-lg">
                <span>
                  {" "}
                  <Image className="w-[20px] h-[20px]" src={Phone} alt="" />
                </span>
                <span className="ml-2  text-nav-font-color">1008611110</span>
              </div>
              <div className="flex mt-[40px]">
                <Image className="w-[20px] h-[20px]" src={WxWhite} alt="" />
                <Image
                  className="w-5 h-[20px] ml-[20px]"
                  src={QQWhite}
                  alt=""
                />
                <Image
                  className="w-[20px] h-[20px] ml-[20px] "
                  src={WbWhite}
                  alt=""
                />
              </div>
            </div>
            {/* 第二个 */}
            <div className="flex w-[33%] pl-14">
              <div className="w-[50%]">
                <span className="text-white text-xl flex mb-[40px]">
                  产品服务
                </span>
                <div className="flex flex-col justify-around h-60 text-md text-nav-font-color">
                  <a href="/products/personnel-management">人事派遣</a>
                  <a href="/products/labor-dispatch">劳务派遣</a>
                  <a href="/products/position-outsource">岗位外包</a>
                  <a href="/products/business-outsource">业务外包</a>
                  <a href="/products/recruitment">招聘流程外包</a>
                  <a href="/products/flexible-outsource">灵活用工解决方案</a>
                </div>
              </div>
              <div className="text-white text-xl flex flex-col w-[33%] ml-2">
                <a href="/about-us">了解公司</a>
                <a href="/customer-case" className="mt-[40px]">
                  客户案例
                </a>
              </div>
            </div>
            {/* 第三个 */}
            <div className="w-[33%] flex justify-center items-center">
              <Image className="w-[176px] h-[191px]" src={UsImg} alt="" />
            </div>
          </div>
          {/* 下部分 */}
          <div className="w-[70%] text-white h-[100px] m-auto border-t border-y-zinc-600 flex flex-col justify-center items-center">
            <p className="text-center">2023今创人力有限公司</p>
            <p>The company was established in 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
