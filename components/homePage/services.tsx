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
        <div className='w-full h-auto xl:h-auto font-square'>
            <div className='text-[32px] font-bold w-full flex justify-center items-center'>
                业务系统 产品服务
            </div>
            <div className='cartbox md:w-[80%] md:m-auto xl:w-[80%] xl:m-auto grid grid-cols-2 gap-4 p-[18px] sm:grid-cols-3 md:grid md:grid-cols-4 place-items-center items-stretch'>
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
