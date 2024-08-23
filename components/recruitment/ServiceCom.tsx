import React from 'react'
// json 
import content from "./recruitment.json"

import Image from 'next/image';


// 服务优势icons 
import { sA,sB,sC,sD,sE,sF } from '@/public/recruitment';
function ServiceCom() {
    const icons=[sA,sB,sC,sD,sE,sF]

    const cardrender=(item:any)=>{
      return <div>
          <div>
      <Image src={item.imgA} alt=""/>
          </div>
          <div>
          <Image src={item.imgB} alt=""/>
            </div>
      </div>
    }
    //pc 端重组数据
    const cardArr=[
      {
        cardF:content.benefits[0],
        cardS:content.benefits[1],
        imgA:sA,
        imgB:sB
      },
      {
        cardF:content.benefits[0],
        cardS:content.benefits[1],
        imgA:sC,
        imgB:sD
      },
      {
        cardF:content.benefits[0],
        cardS:content.benefits[1],
        imgA:sE,
        imgB:sF
      }
    ]
  return (
    <div>
      <div className="md:hidden w-[90%] m-auto">
        <h3 className="flex justify-center items-center font-bold my-4">
          服务优势
        </h3>
        {content.benefits.map((item, index) => {
          return (
            <div key={index} className=" p-4 rounded-xl bg-a-color my-5">
              <h3 className="h-8 pl-1 text-md font-bold">{item.title}</h3>
              <div className="relative w-full font-light p-4 mb-4 bg-white rounded-lg text-md">
                <p>{item.msgA}</p>
                <p className='my-4'>{item.msgB}</p>
                <p>{item.msgC}</p>
                <Image
                  className=" absolute w-16 right-[-1rem] bottom-[-2rem]"
                  src={icons[index]}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='hidden md:block w-[80%] m-auto'>
          {
            cardArr.map((item, index) => {
              return (
              cardrender(item)
              );
            })
          }
      </div>
    </div>
  )
}

export default ServiceCom
