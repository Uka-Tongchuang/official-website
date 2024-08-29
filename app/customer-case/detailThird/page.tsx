"use client";

import React from "react";
import Banner from "@/components/customer-case/detail/BannerCom";
import Card from "@/components/customer-case/detail/Card";
import Problem from "@/components/customer-case/detail/Problem";
import Tactics from "@/components/customer-case/detail/Tactics";
import PayCom from "@/components/customer-case/detail/PayCom";
import Cooperate from "@/components/customer-case/detail/Cooperate";
import Acc from "@/components/customer-case/detail/Acc";

function DetailPage() {
  // 修改函数名为 DetailPage

  // 确保 id 正确获取
  return (
    <div className="mt-[70px] md:bg-gradient-to-b from-white  via-white to-a-color">
      <Banner id={3} />
      <Card id={3} />
      <Problem id={3} />
      <Tactics id={3} />
      <PayCom id={3}/>
      <Cooperate />
      <Acc id={3} />
    </div>
  );
}

export default DetailPage;
