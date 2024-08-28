"use client"

import React from 'react'
import Banner from '@/components/customer-case/detail/BannerCom';
import Card from "@/components/customer-case/detail/Card"

function DetailPage() {  // 修改函数名为 DetailPage

 // 确保 id 正确获取
  return (
    <div className='mt-[70px]'>
    <Banner/>
    <Card id={3} />
  </div>
  )
}

export default DetailPage;
