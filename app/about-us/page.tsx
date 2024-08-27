import React from 'react'
// com 
import BannerCom from '@/components/banner/BannerCom'
import AboutUs from '@/components/anout-us/DescUs'

import { banbg } from '@/public/anout-us'
function Aboutpage() {
  return (
    <div>
      <BannerCom 
      title='客户为先，诚信为本，'
      title2="开放包容，持续改进。"
      msg=""
      img={banbg}
      />
      <AboutUs />
    </div>
  )
}

export default Aboutpage
