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
        <div className='shadow-md shadow-blue-100 bg-gradient-to-b from-blue-50 via-blue-300/10 to-white w-full h-full px-4 py-4 md:py-8 rounded-lg'>
            <h3 className='text-md md:text-lg font-semibold flex items-center'>
                <Image src={icon} alt='' className='w-5 h-auto mr-2' />
                {title}
            </h3>
            <ul className='list-disc list-inside space-y-2 md:space-y-4 mt-2 h-max justify-around marker:text-blue-500 text-sm md:text-md'>
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className=''>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}
