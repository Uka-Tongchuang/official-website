"use client";
import React from "react";
// components
import BannerCom from "@/components/banner/BannerCom";
import ServiceCom from "@/components/position/ServiceCom";
// import ApplyCom from "@/components/position/ApplyCom";
import ServicePro from "@/components/position/ServicePro";
import ServiceValueCom from "@/components/position/ServiceValue";
import BenefitsCom from "@/components/position/BenefitsCom";
// img
import { bgImg } from "@/public/position";
function PositionOutsource() {
  return (
    <div className="">
      <BannerCom
        title="岗位外包"
        msg="今创人力致力于帮助企业将非核心岗位从运营流程中分离出来，使企业能够专注于核心业务。同时，这种外包服务简化了用工流程，提高了企业管理效能，并降低了用工风险"
        img={bgImg}
      />
      <ServiceCom />
      {/* <ApplyCom /> */}
      <ServicePro />
      <ServiceValueCom />
      <BenefitsCom />
    </div>
  );
}

export default PositionOutsource;
