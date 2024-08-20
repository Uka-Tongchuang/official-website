import React from "react";

function Applys({ arr }: any) {
  return (
    <div className={`w-full h-full grid ${arr.length>4?'grid-cols-3 gap-2':'grid-cols-2 gap-3'} `}>
      {arr.map((item: any, index: number) => {
        return (
          <li key={index} className="text-azul ">
            <span className="text-ironside-grey text-sm ml-[-6px]">{item}</span>
          </li>
        );
      })}
    </div>
  );
}

export default Applys;
