"use client";

import React from "react";
import Banner from "@/components/customer-case/detail/BannerCom";
import Card from "@/components/customer-case/detail/Card";
import Problem from "@/components/customer-case/detail/Problem";
import Tactics from "@/components/customer-case/detail/Tactics";
import PayCom from "@/components/customer-case/detail/PayCom";
import Cooperate from "@/components/customer-case/detail/Cooperate";
import Acc from "@/components/customer-case/detail/Acc";

interface Props {
    params: {
        id: number;
    };
}

function DetailPage({ params }: Props) {
    const id = params.id;
    // 确保 id 正确获取
    return (
        <div className='mt-[70px] md:bg-gradient-to-b from-white  via-white to-a-color'>
            <Banner id={id} />
            <Card id={id} />
            <Problem id={id} />
            <Tactics id={id} />
            <PayCom id={id} />
            <Cooperate />
            <Acc id={id} />
        </div>
    );
}

export default DetailPage;
