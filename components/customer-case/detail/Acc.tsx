import React from "react";

import content from "../customer.json";
function Acc({ id }: { id: number }) {
  return (
    <div className="text-center mb-2">
      <h3 className="pb-4 text-center font-bold my-2">案例成就</h3>
      <div className="w-[94%] m-auto rounded-lg
      flex justify-between text-md text-azul
      ">
        <div className="p-3 bg-a-color w-[44%] rounded-lg" ><p className="bg-white p-3 shadow-md shadow-to-bg-a  rounded-lg ">{content.arr[id - 1].achievea}</p></div>
        <div className="p-3 bg-a-color w-[44%] rounded-lg"><p className="bg-white p-3  shadow-md shadow-to-bg-a rounded-lg">{content.arr[id - 1].achieveb}</p></div>
      </div>
    </div>
  );
}

export default Acc;
