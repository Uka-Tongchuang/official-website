import React from "react";

import content from "../customer.json";

interface AccProps {
  id: number;
}

function Acc( { id }: AccProps ) {
  return (
    <div className="text-center mt-4 p-10">
      <h3 className="pb-4 text-center font-bold my-2 xl:text-3xl">案例成就</h3>
      <div className="w-[94%] md:w-[80%] m-auto rounded-lg
      flex justify-between text-md text-azul md:h-48
      ">
        <div className="p-3 bg-a-color md:bg-white  w-[44%] rounded-xl" ><p className="h-full md:text-lg  xl:text-xl 2xl:text-2xl flex justify-center items-center md:bg-a-color bg-white p-3 shadow-md shadow-to-bg-a md:shadow-none  rounded-lg text-sm">{content.arr[id - 1].achievea}</p></div>
        <div className="p-3 bg-a-color md:bg-white  w-[44%] rounded-xl"><p className="h-full md:text-lg  xl:text-xl 2xl:text-2xl flex justify-center items-center md:bg-a-color bg-white p-3  shadow-md shadow-to-bg-a md:shadow-none  rounded-lg text-sm">{content.arr[id - 1].achieveb}</p></div>
      </div>
    </div>
  );
}

export default Acc;
