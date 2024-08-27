import { StaticImageData } from 'next/image'
import Image  from 'next/image'
import React from 'react'

type objtype={
  title:string,
  msg:string,
  achieve:string,
  type:string,
  img:StaticImageData
}
function Card({title,msg,achieve,type,img}:objtype) {
  return (
    <div>
      {/* 移动 */}
      <div className='mb-10 text-md md:hidden'>
      <div className='w-full rounded-tl-xl rounded-tr-xl'>
      <Image className='object-contain  rounded-tl-xl rounded-tr-xl' src={img} alt=""/>
      </div>
      <div className='rounded-xl border-[1px] border-app-hr mt-[-30px] p-6 relative bg-white z-20'>
            <div className='h-10 flex justify-between mb-4'>
              <h3 className='pb-1 font-bold text-md'>{title}</h3>
              <button className='border-app-hr border-[1px] rounded-md text-lg w-24 h-10 text-azul'>{type}</button>
            </div>
            <div className='flex'>
                <div className='w-[20%] text-azul'>需求：</div>
                <div className='flex-1'>{msg}</div>
            </div>
            <div className='flex my-4'>
                <div className='w-[20%] text-azul'>成就：</div>
                <div className='flex-1'>{achieve}</div>
            </div>
            <div className='h-10  flex justify-end items-center'>
              <button className='bg-azul w-24 h-10 text-white rounded-md'>查看详情</button>
            </div>
      </div>
    </div>
    {/* pc  */}
    <div className='hidden md:flex mb-10'>
    <Image src={img} className='w-[26rem] h-72 xl:h-80 xl:w-[34rem]' alt=""/>
    <div className='ml-[-30px] h-72 xl:h-80 bg-white rounded-xl p-4 pl-8 xl:p-8 relative '>
      <div className='font-bold py-2 text-2xl my-4'>{title}</div>
      <div className='flex text-md'>
        <div className='w-[20%] text-azul'>需求：</div>
        <div className='flex-1'>{msg}</div>
      </div>
      <div className='flex text-md my-4'>
        <div className='w-[20%] text-azul'>成就：</div>
        <div className='flex-1'>{achieve}</div>
      </div>
      <div className='flex items-center mt-6 '>
        <button className='bg-azul w-24 h-10 text-white rounded-md'>查看详情</button>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Card
