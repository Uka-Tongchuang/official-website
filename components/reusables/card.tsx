import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    features: Array<string>;
    icon: any;
}

export default function ServiceCard(props: CardProps): JSX.Element {
    const { title, features, icon } = props;
    return (
        <div className='cart shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-[160px] h-auto xl:w-56 p-3 rounded-lg'>
            <h3 className='text-md md:text-lg font-semibold flex items-center'>
                <span className='mr-2 w-[18px]'>
                    <Image src={icon} alt='' />
                </span>
                {title}
            </h3>
            <ul className='space-y-2 mt-2 h-[86%] flex flex-col justify-around'>
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className='relative pl-4 text-sm md:text-[0.86rem] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-blue-500'>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
