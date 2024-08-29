import React from 'react'

import Image from 'next/image'
import content from "../customer.json"

import { icona,iconb,iconc } from '@/public/details'
function Tactics({id}:{id:number}) {
    const imgs=[icona,iconb,iconc]
  return (
    <div className='text-center mb-2'>
      <h3 className='pb-4 text-center font-bold my-2 xl:text-3xl'>策略及行动</h3>
      <div className='w-[90%] md:bg-white md:flex md:justify-between md:w-[80%] m-auto bg-a-color p-4 rounded-lg'>
       {
        content.arr[id-1].active.map((item,index)=>{
            return <div key={index} className='my-4 xl:p-8 2xl:p-14 bg-white p-4 flex items-center rounded-lg md:w-[25%] md:flex-col md:items-start md:bg-gradient-to-b md:from-[#EBF4FF]  md:via-white md:to-white md:shadow-xl md:shadow-circle-bg'>
                <Image className='w-8 mr-4' src={imgs[index]} alt=""/>
                <p className='text-md text-g-color md:text-center  3xl:text-xl'>{item}</p>
            </div>
        })
       }
      </div>
    </div>
  )
}

export default Tactics
