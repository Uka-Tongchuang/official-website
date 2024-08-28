import React from 'react'

import Image from 'next/image'
import content from "../customer.json"

import { icona,iconb,iconc } from '@/public/details'
function Tactics({id}:{id:number}) {
    const imgs=[icona,iconb,iconc]
  return (
    <div className='text-center mb-2'>
      <h3 className='pb-4 text-center font-bold my-2'>策略及行动</h3>
      <div className='w-[90%] m-auto bg-a-color p-4 rounded-lg'>
       {
        content.arr[id-1].active.map((item,index)=>{
            return <div key={index} className='my-4 bg-white p-4 flex items-center rounded-lg'>
                <Image className='w-8 mr-4' src={imgs[index]} alt=""/>
                <p className='text-md text-g-color'>{item}</p>
            </div>
        })
       }
      </div>
    </div>
  )
}

export default Tactics
