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
    <div className="mt-[70px]">
      <Banner />
      <Card id={1} />
      <Problem id={1} />
      <Tactics id={1} />
      <PayCom />
      <Cooperate />
      <Acc id={1}/>
    </div>
  );
}

export default DetailPage;
