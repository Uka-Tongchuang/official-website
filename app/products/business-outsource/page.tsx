"use client"
import React from "react";
// coms
import BannerCom from "@/components/banner/BannerCom";
import ServiceCom from "@/components/business/ServiceCom";
import ProcessCom from "@/components/business/Process";
import BenefitsCom from "@/components/business/Benefits";
// img
import { bgBan } from "@/public/business";
function businessPage() {
  return (
    <div className="">
      <BannerCom
        title="业务外包"
        msg="客户将某一业务整体外包给今创人力，包括人员招聘、团队搭建、业务运营管理、办公场所及营业场地租赁等，有效降低管理成本，规避风险。比如某品牌外送转送的加盟商业务，是典型的业务外包。"
        img={bgBan}
      />
      <ServiceCom />
      <ProcessCom/>
      <BenefitsCom/>
    </div>
  );
}

export default businessPage;
