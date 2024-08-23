import React from "react";
import BannerCom from "@/components/banner/BannerCom";
// img
import { ban } from "@/public/recruitment/index";
// com
import SwiperCom from "@/components/recruitment/SwiperCom";
import ServiceCom from "@/components/recruitment/ServiceCom"
import ServiceValue from "@/components/recruitment/ServiceValue"
function Recruitment() {
    
  return (
    <div>
      <BannerCom
        title="招聘外包"
        msg="针对客户不同需求及预算编制，从确定职位画像开始，分析用人理念、职位需求，与用人部门负责人沟通，筛选简历，人才测评，面试，录用通知，指导候选人报到、回访的全过程服务"
        img={ban}
      />
      <SwiperCom />
      <ServiceCom/>
      <ServiceValue/>
    </div>
  );
}

export default Recruitment;
