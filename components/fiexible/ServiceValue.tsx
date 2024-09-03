import React from "react";

import "./index.css";
// json
import content from "./advantage.json";
import Image from "next/image";
import { valueBg } from "@/public/flexiblePage";

const renderCard = ({ title, msg }: { title: string; msg: string }) => {
    return (
        <div className='p-4 px-6'>
            <h3 className='text-lg xl:text-xl font-bold py-2'>{title}</h3>
            <p className='text-ironside-grey text-md xl:text-lg py-1'>{msg}</p>
        </div>
    );
};
function ServiceValue() {
    return (
        <div>
            <div className='relative md:hidden w-[90%] m-auto rounded-xl mb-10'>
                <h3 className='flex justify-center items-center font-bold mb-4'>
                    服务价值
                </h3>
                <div className='bg-a-color pb-8 rounded-xl'>
                    {content.service.map((item, index) => {
                        return (
                            <div key={index} className='p-4 relative z-20'>
                                {" "}
                                {/* 在这里增加 z-20 确保文字部分的层级更高 */}
                                <div className='w-full font-light p-2 bg-white rounded-lg text-md'>
                                    <h3 className='h-8 pl-1 text-md font-bold'>
                                        {item.title}
                                    </h3>
                                    <p className='z-20'>{item.msg}</p>{" "}
                                    {/* 确保文本部分层级更高 */}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Image
                    className='w-20 absolute bottom-0 right-0 z-10'
                    src={valueBg}
                    alt=''
                />
            </div>

            {/* //pc  */}
            <div className='hidden md:block'>
                {/* //pc  */}
                <div className='hidden md:block w-full h-auto mb-10 pt-10'>
                    <div className='w-[80%] relative h-auto bg-a-color rounded-2xl mt-10 m-auto py-10'>
                        <h3 className='mt-10 text-lg xl:text-3xl font-bold text-center'>
                            服务价值
                        </h3>
                        <div className='w-[80%] m-auto mt-10 grid grid-cols-2 gap-8 relative z-20'>
                            {content.service.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='bg-white/70 rounded-xl opacity-90 backdrop-blur-lg'>
                                        {renderCard(item)}
                                    </div>
                                );
                            })}
                        </div>
                        <div className='aa absolute bottom-0 right-0 w-36 h-36 xl:w-56 xl:h-56 z-10'>
                            {" "}
                            {/* 图片的z-index调低 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceValue;
