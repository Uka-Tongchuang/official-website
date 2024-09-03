import React from 'react'

function CustomizeFlowcharts() {
  return (
    <div className='w-[1063px] m-auto h-[60rem] relative'>
      <div className='absolute top-[10%] left-[50%] translate-x-[-50%]'>
        {/* 圆 */}
        <div className='w-32 h-32 rounded-full font-bold text-xl flex justify-center items-center text-azul bg-gradient-to-br from-[#F4F5FD] to-[#E3EEFD]'>今创人力</div>
      {/* 左线条 */}
      <div className='flex flex-col justify-between items-center absolute left-[-170%] top-[150%] transform -rotate-45 gap-3'>
              <div className='h-8 w-52 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:left-0 before:w-4 before:h-2  before:top-[70%]  before:border-b-[#E3EEFD] before:border-b-2 before:transform before:-rotate-[240deg]
              '>
                完税证明
              </div>

              <div className='h-8 w-52 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:left-0 before:w-4 before:h-2  before:top-[110%]  before:border-b-[#E3EEFD]  before:border-b-2 before:transform before:-rotate-[300deg]
              '>
                <span className=" relative bottom-[-130%]">业务合作协议</span>
              </div>
      </div>
     {/* 下  */}
     <div className='flex justify-between items-center absolute right-[15%] top-[115%] gap-8'>
     <div className='w-8 h-28 border-r-[#E3EEFD] border-r-2 text-center relative before:absolute before:right-[-14%] before:w-3 before:h-2  before:top-[89%]  before:border-b-[#E3EEFD]  before:border-b-2
              before:transform before:-rotate-[320deg] flex justify-between items-center
              '>
                代报税
              </div>

              <div className='w-8 h-28 border-l-[#E3EEFD] border-l-2 text-center relative before:absolute before:left-[-15%] before:w-4 before:h-2  before:top-[5%]  before:border-b-[#E3EEFD]  before:border-b-2
               before:transform before:-rotate-[140deg] flex justify-between items-center
              '>
                   完税证明
              </div>
     </div>
      {/* //右线条 */}
         <div className='flex flex-col justify-between items-center absolute right-[-170%] top-[150%] transform -rotate-[135deg] gap-3'>
              <div className='h-8 w-52 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:right-0 before:w-4 before:h-2  before:top-[75%]  before:border-b-[#E3EEFD]  before:border-b-2 before:transform before:-rotate-[135deg]
              '>
                完税证明
              </div>

              <div className='h-8 w-52 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:right-[-2%] before:w-4 before:h-2  before:top-[120%]  before:border-b-[#E3EEFD]  before:border-b-2 before:transform before:-rotate-[225deg]
              '>
                <span className=" relative bottom-[-130%]">业务合作协议</span>
              </div>
      </div>
      
      </div>

{/* //左侧圆 */}
      <div className=' absolute left-[20%] translate-x-[-50%] top-[48%]'>
      <div className='w-32 h-32 rounded-full font-bold text-xl flex justify-center items-center text-azul bg-gradient-to-br from-[#F4F5FD] to-[#E3EEFD]'>服务提供者</div>
      </div>
      {/* 中间圆 */}
      <div className=' absolute left-[50%] translate-x-[-50%] top-[38%]'>
      <div className='w-32 h-32 rounded-full font-bold text-xl flex justify-center items-center text-azul bg-gradient-to-br from-[#F4F5FD] to-[#E3EEFD]'>税务局</div>
      </div>
      {/* //右侧圆 */}
      <div className=' absolute right-[8%] translate-x-[-50%] top-[48%]'>
      <div className='w-32 h-32 rounded-full font-bold text-xl flex justify-center items-center text-azul bg-gradient-to-br from-[#F4F5FD] to-[#E3EEFD]'>服务提供者</div>
      </div>
      {/* //中间线条 */}
      <div className='absolute top-[52%] left-[35%]'>
      <div className='h-6 w-80 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:right-[-2%] before:w-4 before:h-2  before:top-[50%]  before:border-b-[#E3EEFD]  before:border-b-2 before:transform before:-rotate-[300deg]
              '>
                完税证明
              </div>

              <div className='h-4 w-80 border-b-[#E3EEFD] border-b-2 text-center relative before:absolute before:right-[-2%] before:w-4 before:h-2  before:top-[140%]  before:border-b-[#E3EEFD]  before:border-b-2 before:transform before:-rotate-[240deg]
              '>
                <span className=" relative bottom-[-130%]">业务合作协议</span>
              </div>
      </div>
    </div>
  )
}

export default CustomizeFlowcharts
