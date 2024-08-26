import React from "react";
// com
import BannerCom from "@/components/banner/BannerCom";
import ServiceCom from "@/components/fiexible/ServiceCom";
import AdvantageCom from "@/components/fiexible/Advantage";
import ValueCom from "@/components/fiexible/ServiceValue";
// img
import { banBg } from "@/public/flexiblePage/index";
function flexiblePage() {
  return (
    <div>
      <BannerCom
        title="灵活用工"
        msg="针对客户不同需求及预算编制，从确定职位画像开始，分析用人理念、职位需求，与用人部内负责人沟通，筛选简历，人才测评，面试，录用通知，指导候选人报到、回访的全过程服务。"
        img={banBg}
      />
      <ServiceCom />
      <AdvantageCom />
      <ValueCom />
    </div>
  );
}

export default flexiblePage;
