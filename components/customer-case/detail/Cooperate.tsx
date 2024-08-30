import React from "react";

function Cooperate() {
  return (
    <div>
      <h3 className="py-4 text-center font-bold my-2 xl:text-3xl">合作模式</h3>
      <div className="w-[60%] md:w-[50%] xl:w-[40%] m-auto flex justify-between items-center text-azul py-8">
        <div  className="text-md md:text-lg xl:text-xl w-20 h-20 md:w-48 md:h-48 flex justify-center items-center rounded-full bg-gradient-to-r from-[#F4F5FD] to-[#E3EEFD]">招聘外包</div>
        <div className="text-4xl md:text-5xl xl:text-[5rem]">＋</div>
        <div className=" text-md md:text-lg xl:text-xl w-20 h-20 md:w-48 md:h-48 flex justify-center items-center rounded-full bg-gradient-to-r from-[#F4F5FD] to-[#E3EEFD]">劳务外包</div>
      </div>
    </div>
  );
}

export default Cooperate;
