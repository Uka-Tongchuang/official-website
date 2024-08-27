import React from 'react'
import content from "./about.json"
function DescUs() {
  return (
    <div className='mb-10'>
      <h3 className="flex justify-center items-center font-bold my-4">关于公司</h3>
      <div className='w-[94%] m-auto bg-a-color text-about-color p-4 rounded-lg text-md'>
        <p>{content.descFirst}</p>
        <p className='py-8'>{content.descSecond}</p>
        <p>{content.descThird}</p>
      </div>
    </div>
  )
}

export default DescUs
