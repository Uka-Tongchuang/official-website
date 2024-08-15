"use client";
import React from "react";
//component
import BannerCom from "@/components/banner/BannerCom";
import CardCom from "@/components/personnelCard/perCardCom";
import ServerCom from "@/components/personnelCard/ServerCom";
import FlowPathCom from "@/components/personnelCard/flowPath";
//img
import { bannerBg } from "@/public/renshi";
//内容
import content from "@/components/personnelCard/personnel.json";
function PersonnelPage() {
  return (
    <div className="mt-[70px]">
      <BannerCom
        title={content.personnel.title}
        msg={content.personnel.desc}
        img={bannerBg}
      />
      <CardCom />
      <ServerCom />
      <FlowPathCom />
    </div>
  );
}

export default PersonnelPage;
