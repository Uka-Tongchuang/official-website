import React from 'react'

type infoType = {
    titleFirst:string,
    titleSecond:string,
    titleThird:string,
    titleFourth:string,
    msgFirst:string,
    msgSecond:string,
    msgThird:string,
    msgFourth:string,
    msgFifth:string,
    msgSixth:string,
    msgSeventh:string,
    msgEighth:string
}
function CustomizeFlowcharts(info:infoType) {
  return (
    // <div classNameName='w-[90%] md:w-[80%] m-auto'>
    //   <div classNameName='flex justify-center items-center text-[#165CFF] w-28 h-28 m-auto bg-gradient-to-br rounded-full from-[#F4F5FD] to-[#E3EEFD] '>
    //     {info.titleFirst}今创人力
    //   </div>

    // </div>
    <div className="relative w-full h-[600px] flex justify-center items-center">
      {/* 中间的“今创人力” */}
      <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2">
        <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-b from-blue-100 to-white flex justify-center items-center">
          <p className="text-blue-500 text-xl font-bold">今创人力</p>
        </div>
      </div>

      {/* 服务提供者 */}
      <div className="absolute bottom-[10%] left-[15%] transform -translate-x-1/2">
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-blue-100 to-white flex justify-center items-center">
          <p className="text-blue-500 text-md font-bold">服务提供者</p>
        </div>
      </div>

      {/* 平台企业 */}
      <div className="absolute bottom-[10%] right-[15%] transform -translate-x-1/2">
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-blue-100 to-white flex justify-center items-center">
          <p className="text-blue-500 text-md font-bold">平台/企业</p>
        </div>
      </div>

      {/* 税务局 */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2">
        <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-b from-blue-100 to-white flex justify-center items-center">
          <p className="text-blue-500 text-md font-bold">税务局</p>
        </div>
      </div>

      {/* 线条和文字 */}
      <div className="absolute left-[22%] bottom-[20%] w-[200px] h-[1px] bg-blue-500">
        <p className="absolute -top-5 left-4 text-sm">完税证明</p>
        <p className="absolute -top-10 left-4 text-sm">业务合作协议</p>
      </div>

      <div className="absolute left-[58%] bottom-[20%] w-[200px] h-[1px] bg-blue-500">
        <p className="absolute -top-5 right-4 text-sm">代开票</p>
        <p className="absolute -top-10 right-4 text-sm">相关服务</p>
      </div>

      <div className="absolute top-[30%] left-[50%] w-[2px] h-[120px] bg-blue-500 transform -translate-x-1/2">
        <p className="absolute -left-10 top-[40px] text-sm">代报税</p>
      </div>
    </div>
  )
}

export default CustomizeFlowcharts
