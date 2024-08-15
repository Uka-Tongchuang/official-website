// 外部导入
import React from "react";

// 内部导入
import content from "./homepage.json";

export default function Banner(): JSX.Element {
    return (
        <div className='h-[50vh] mt-[70px] w-full imgbox'>
            <div className='flex flex-col h-full py-10 md:py-32 px-4 md:px-20 gap-y-4 md:gap-y-10 justify-center items-center text-left'>
                <h1 className='text-white text-xl md:text-3xl xl:text-5xl font-semibold w-full'>
                    {content.banner.title}
                </h1>
                <h3 className='text-white text-md md:text-3xl xl:text-4xl w-full'>
                    {content.banner.subtitle}
                </h3>
            </div>
        </div>
    );
}
