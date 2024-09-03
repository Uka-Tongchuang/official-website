import React from 'react'
//modules
import Image from "next/image";
//home-icon
import Earth from "@/public/home-icon/earth.png";
import Earthtwo from "@/public/home-icon/mdimg.png";
import Enterprise from "@/public/home-icon/qiye 1.png";
import Enterprisetwo from "@/public/home-icon/qiye 2.png";

import People from "@/public/home-icon/renqun1 1.png";
import Peopletwo from "@/public/home-icon/renqun1 2.png";
function hen() {
  return (
       <div className="titlebanner font-square absolute bottom-0 left-0 w-full h-12 md:h-20 xl:h-32 bg-white opacity-90 md:opacity-100 md:bg-footer-black xl:bg-footer-black xl:opacity-100">
       <div className="titlecontent w-[96%] md:w-[90%] xl:w-[80%] h-full md:h-20 xl:h-32 m-auto flex justify-around items-center">
         {/* 第一个数值盒子 */}
         <div className="flex flex-row justify-around items-center">
           <div className="icon w-[18px] md:w-14 xl:w-20">
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
             <p className="text-xs md:text-white md:text-xl xl:text-3xl xl:text-white">
               4600+
             </p>
             <p className="text-ssm md:text-sm md:text-nav-font-color xl:text-xl xl:text-nav-font-color">
               省内外企事业单位
             </p>
           </div>
         </div>
         {/* 第二个数值盒子 */}
         <div className="flex flex-row justify-around items-center">
           <div className="icon w-[18px] md:w-14  xl:w-20 ">
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
             <p className="text-xs md:text-white md:text-xl xl:text-3xl">
               3600+
             </p>
             <p className="text-ssm md:text-nav-font-color md:text-sm xl:text-xl xl:text-nav-font-color">
               各类中小微企业
             </p>
           </div>
         </div>
         {/* 第三个数值盒子 */}
         <div className="flex flex-row justify-around items-center">
           <div className="icon w-[18px] md:w-14 xl:w-20">
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
             <p className="text-xs md:text-white md:text-xl xl:text-3xl">
               50W+
             </p>
             <p className="text-ssm md:text-nav-font-color md:text-sm xl:text-xl xl:text-nav-font-color">
               行内设岗对口人群
             </p>
           </div>
         </div>
       </div>
     </div>
  )
}

export default hen
