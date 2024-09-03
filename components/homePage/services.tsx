import React from "react";
import Card from "@/components/reusables/card";
import {
    CardFirst,
    CardSecond,
    CardThird,
    CardFourth,
    CardFifth,
    CardSixth,
} from "@/public/card-icon";
import content from "./homepage.json";

export default function Services(): JSX.Element {
    const icons = [
        CardFirst,
        CardSecond,
        CardThird,
        CardFourth,
        CardFifth,
        CardSixth,
    ];
    const services = content.services;

    return (
        <div className='w-full h-fit flex flex-col justify-center items-center my-6 md:my-10 '>
            <h2 className='font-bold text-lg md:text-h2'>
                业务系统 产品服务
            </h2>
            <div className='w-[90%] md:w-[80%] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:gap-16 2xl:gap-32  place-items-center items-stretch gap-x-4 gap-y-8 my-2 md:my-10'>
                {services.map((service, index) => (
                    <Card
                        key={index}
                        title={service.title}
                        features={service.features}
                        icon={icons[index]}
                    />
                ))}
            </div>
        </div>
    );
}
