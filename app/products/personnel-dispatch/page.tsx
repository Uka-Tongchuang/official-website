"use client"
import React from 'react'
//component
import BannerCom from "@/components/banner/BannerCom"
import CardCom from "@/components/personnelCard/perCardCom"
//img
import banbg from "@/public/personner-bg/banner.png"
function PersonnelPage() {
  return (
    <div className='mt-[70px]'>
      <BannerCom title={"人事管理"} msg={"为企业解决人力资源管理过程中的事务性、操作性工作，如劳动合同代签、用退工申报、薪酬代发放、杜保和公积金申报与缴纳办理、人事档案转递和信息管理等，使企业人力资源工作人员能够将更多时间投入到人力资源核心业务中，为企业发展提供更多支持，以降低企业成本，实现效率最大化。"} img={banbg} />
      <CardCom/>
    </div>
  )
}

export default PersonnelPage
