// 外部导入
import React from "react";

// 内部导入
import content from "./homepage.json";

export default function Banner(): JSX.Element {
    return (
        <div className='h-72 md:h-[30rem] xl:h-[46rem] w-full flex flex-col align-middle relative imgbox'>
            <h1 className='text-white text-xl md:text-3xl xl:text-5xl font-semibold absolute top-[40%] left-[5%]'>
                {content.banner.title}
            </h1>
            <h3 className='text-white text-md md:text-3xl xl:text-4xl absolute top-[60%] left-[5%]'>
                {content.banner.subtitle}
            </h3>
        </div>
    );
}
