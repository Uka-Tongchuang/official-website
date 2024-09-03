import React from 'react'

import content from "../customer.json"

import Image from 'next/image'

// imgs 
import { ta,tb,tc } from '@/public/details'
function Problem({id}:{id:number}) {
    const imgs=[ta,tb,tc]
  return (
    <div className='mb-10'>
      <h3 className='pb-4 text-center font-bold my-2 xl:text-3xl'>业务难点</h3>
      <div className='w-[90%] md:w-[80%] m-auto bg-a-color md:bg-white md:flex md:justify-between p-4 rounded-lg'>
       {
        content.arr[id-1].pros.map((item,index)=>{
            return <div key={index} className='bg-white my-4 p-4 xl:p-8 2xl:p-14 flex items-center rounded-lg md:w-[25%] md:flex-col md:items-start md:bg-gradient-to-b md:from-[#EBF4FF]  md:via-white md:to-white md:shadow-xl md:shadow-circle-bg'>
                <Image className='w-8 mr-4 md:mb-2' src={imgs[index]} alt=""/>
                <p className='text-md text-g-color md:text-center  2xl:text-xl'>{item}</p>
            </div>
        })
       }
      </div>
    </div>
  )
}

export default Problem
