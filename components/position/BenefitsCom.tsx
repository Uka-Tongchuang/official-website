import React from 'react'
// 引用服务优势 
import AdvantageCom from '../labor/AdvantageCom'
// img 
import { serviceBg } from '@/public/position'
// json 
import content from "./position.json"
function BenefitsCom() {
  return (
    <div>
      <AdvantageCom img={serviceBg} title={content.benefits.title} arr={content.benefits.cards}/>
    </div>
  )
}

export default BenefitsCom
