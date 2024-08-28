import React from "react";

function Cooperate() {
  return (
    <div>
      <h3 className="py-4 text-center font-bold my-2">合作模式</h3>
      <div className="w-[70%] m-auto flex justify-between items-center text-azul py-8">
        <div  className="text-md w-20 h-20 flex justify-center items-center rounded-full bg-gradient-to-r from-to-bg-a to-form-bg-a">招聘外包</div>
        <div className="text-4xl">＋</div>
        <div className=" text-md w-20 h-20 flex justify-center items-center rounded-full bg-gradient-to-r from-to-bg-a to-form-bg-a">劳务外包</div>
      </div>
    </div>
  );
}

export default Cooperate;
