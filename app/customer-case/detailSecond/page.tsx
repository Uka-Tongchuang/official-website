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
    <div className="mt-[70px] md:bg-gradient-to-b from-white via-white to-a-color">
      <Banner id={2} />
      <Card id={2} />
      <Problem id={2} />
      <Tactics id={2} />
      <PayCom id={2}/>
      <Cooperate />
      <Acc id={2} />
    </div>
  );
}

export default DetailPage;
