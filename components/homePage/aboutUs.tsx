// 外部导入
import React from "react";
import Image from "next/image";

// 内部导入
import img from "@/public/bg/about.png";
import content from "./homepage.json";

function AboutUs() {
    const aboutUs = content.aboutUs;

    return (
        <div className='aboutus w-full h-52 md:h-96 xl:h-1/3 '>
            <div className='aboutus_banner_box h-full xl:w-[80%] m-auto font-square'>
                <h3 className='h-12 md:h-24 flex justify-center items-center font-semibold text-lg md:text-3xl'>
                    {aboutUs.title}
                </h3>
                <div className='aboutus_content h-full w-full flex relative'>
                    <div className='img hidden w-1/2 md:hidden xl:block xl:w-2/5 xl:mt-10'>
                        <Image src={img} alt='' />
                    </div>
                    <div className='text text-md w-60 absolute top-[40%] left-[50%] md:left-[50%] md:top-[10rem] md:w-96 xl:w-[40%] xl:h-[28rem] xl:bg-white xl:shadow-xl xl:left-[50%] xl:top-[40%] xl:ml-[20%] translate-x-[-50%] translate-y-[-50%]'>
                        <h3 className='hidden md:hidden w-full xl:text-2xl xl:inline-block xl:pt-10 xl:text-center'>
                            {aboutUs.title}
                        </h3>
                        {aboutUs.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className='text-nav-font-color text-base md:text-lg xl:m-[10%]'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
