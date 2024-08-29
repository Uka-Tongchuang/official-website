import React from "react";
// com
import BannerCom from "@/components/banner/BannerCom";
import AboutUs from "@/components/about-us/DescUs";
import Culture from "@/components/about-us/Culture";
import Collaborator from "@/components/about-us/Collaborator";
import Field from "@/components/about-us/Field";
import { banbg } from "@/public/about-us/index";
function Aboutpage() {
  return (
    <div>
      <BannerCom
        title="客户为先，诚信为本，"
        title2="开放包容，持续改进。"
        msg=""
        img={banbg}
      />
      <AboutUs />
      <Culture />
      <Collaborator/>
      <Field/>
    </div>
  );
}

export default Aboutpage;
