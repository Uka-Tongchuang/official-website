// 外部导入
import React from "react";
import Image from "next/image";

// 内部导入
import img from "@/public/bg/about.png";
import content from "./homepage.json";

function AboutUs() {
    const aboutUs = content.aboutUs;

    return (
        <div className='w-full h-fit my-6 md:my-10 flex flex-col items-center'>
            <h3 className='font-bold text-lg md:text-h2'>
                {aboutUs.title}
            </h3>
            <div className='h-fit md:h-[40vh] w-full flex flex-row justify-center my-2 md:my-10'>
                <div className='hidden basis-1/2 md:flex md:justify-center'>
                    <Image src={img} alt='' className='h-full w-auto' />
                </div>
                <div className='w-[80%] md:basis-1/2 md:w-fit'>
                    <div className='w-full md:w-[80%] h-full flex flex-col justify-center md:bg-white md:shadow-xl p-1 md:p-10'>
                        <h3 className='hidden w-full md:text-xl md:block md:text-center'>
                            {aboutUs.cardTitle}
                        </h3>
                        <p className='text-nav-font-color text-md md:text-lg py-2 md:py-6'>
                            {aboutUs.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
