import React from 'react'

// json 
import content from "./advantage.json"
import Image from 'next/image';
import { valueBg } from '@/public/flexiblePage';
function ServiceValue() {
  return (
    <div className=" relative md:hidden w-[90%] m-auto rounded-xl mb-10">
        <h3 className="flex justify-center items-center font-bold mb-4">
          服务价值
        </h3>
        <div className="bg-a-color pb-8 rounded-xl">
          {content.service.map((item, index) => {
            return (
              <div key={index} className="p-4">
                <div className="relative w-full font-light p-2 bg-white rounded-lg text-md">
                  <h3 className="h-8 pl-1 text-md font-bold">{item.title}</h3>
                  <p>{item.msg}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Image
          className="w-20  absolute bottom-0 right-0"
          src={valueBg}
          alt=""
        />
      </div>
  )
}

export default ServiceValue
