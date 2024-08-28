import React from 'react'

import content from "../customer.json"
import Image from 'next/image'
import { ta } from '@/public/details'
function PayCom() {
  return (
    <div className='pt-4'>
         <h3 className='pb-2 text-center font-bold my-4'>支付模式</h3>
         <div className='w-[90%] m-auto bg-a-color my-4 p-4 flex items-center rounded-lg'>
                <Image className='w-8 mr-4' src={ta} alt=""/>
                <p className='text-md text-g-color'>{content.arr[1].payModel}</p>
            </div>
    </div>
  )
}

export default PayCom
