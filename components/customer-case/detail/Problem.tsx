import React from 'react'

import content from "../customer.json"

import Image from 'next/image'

// imgs 
import { ta,tb,tc } from '@/public/details'
function Problem({id}:{id:number}) {
    const imgs=[ta,tb,tc]
  return (
    <div className='mb-10'>
      <h3 className='pb-4 text-center font-bold my-2'>业务难点</h3>
      <div className='w-[90%] m-auto bg-a-color p-4 rounded-lg'>
       {
        content.arr[id-1].pros.map((item,index)=>{
            return <div key={index} className='bg-white my-4 p-4 flex items-center rounded-lg'>
                <Image className='w-8 mr-4' src={imgs[index]} alt=""/>
                <p className='text-md text-g-color'>{item}</p>
            </div>
        })
       }
      </div>
    </div>
  )
}

export default Problem
