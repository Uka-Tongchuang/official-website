"use client";
import React from "react";
// img
import LaborImg from "@/public/labor/Group.png";
// componens
import BannerCom from "@/components/banner/BannerCom";
import ProcessCom from "@/components/labor/ProcessCom";
import CardCom from "@/components/labor/CardCom";
import ServerCom from "@/components/labor/ServiceCom";
import AdvantageCom from "@/components/labor/AdvantageCom";
// img
import { bg } from "@/public/labor";
// json
import content from "@/components/labor/labor.json";
function laborPage() {
  return (
    <div className="">
      <BannerCom
        title="劳务派遣"
        msg="企业根据自身工作和发展需要，通过今创人力派遣所需的临时性、辅助性或替代性工作岗位人员。今创人力为派遣人员提供全方位的服务，包括劳动合同管理、薪酬发放、社会保险、档案管理以及劳务纠纷处理等。"
        img={LaborImg}
      />
      <CardCom />
      <ProcessCom />
      <ServerCom />
      <AdvantageCom img={bg} title={content.benefits.title} arr={content.benefits.cards}/>
    </div>
  );
}
 
export default laborPage;
