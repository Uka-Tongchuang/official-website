// 外部导入
import React from "react";
import Image from "next/image";

// 内部导入
import content from "./homepage.json";
import { LogoFirst, tlogoone, tthreeLogo, tfourLogo, tfiveLogo, tsixLogo, tsevenLogo, teightLogo, tnineLogo, ttenLogo, boneLogo, btwoLogo, bthreeLogo, bfourLogo, bfiveLogo, bsixLogo, bsevenLogo, beightLogo, bnineLogo, btenLogo } from "@/public/home-icon";


export default function Partners(): JSX.Element {
    const partners = content.partners;
    const logos = { LogoFirst, tlogoone, tthreeLogo, tfourLogo, tfiveLogo, tsixLogo, tsevenLogo, teightLogo, tnineLogo, ttenLogo, boneLogo, btwoLogo, bthreeLogo, bfourLogo, bfiveLogo, bsixLogo, bsevenLogo, beightLogo, bnineLogo, btenLogo };
    type LogoKeys = keyof typeof logos;

    return (
        <div className='cooperate_box xl:w-full'>
            <div className='content w-[80%] m-auto py-20'>
                <h3 className='text-[32px] font-bold w-full flex justify-center items-center'>
                    合作伙伴
                </h3>
                <div className='w-full logobox'>
                    {partners.map((row, rowIndex) => (
                        <div key={rowIndex} className='itemlogo'>
                            {row.map((logoName, logoIndex) => (
                                <div key={logoIndex}>
                                    <Image
                                        src={logos[logoName as LogoKeys]}
                                        alt={logoName}
                                        loading="lazy"
                                        className="h-full object-contain p-1"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}