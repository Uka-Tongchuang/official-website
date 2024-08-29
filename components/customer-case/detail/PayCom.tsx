import React from "react";

import content from "../customer.json";
import Image from "next/image";
import { ta } from "@/public/details";
function PayCom({ id }: { id: number }) {
  return (
    <div>
      <div className="pt-4 md:hidden">
        <h3 className="pb-2 text-center font-bold my-4 xl:text-3xl">
          支付模式
        </h3>
        <div className="w-[90%] md:w-[80%] m-auto bg-a-color my-4 p-4 flex items-center rounded-lg">
          <Image className="w-8 mr-4 md:mb-2" src={ta} alt="" />
          <p className="text-md text-g-color">{content.arr[1].payModel}</p>
        </div>
      </div>
      {id === 2 ? (
        <div className="hidden md:block w-[80%] shadow-circle-bg m-auto shadow-xl p-4 my-20 rounded-lg relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-white before:shadow-md before:shadow-circle-bg">
          <h3 className="text-center font-bold text-3xl py-8">支付模式</h3>
          <p className="w-[80%] m-auto text-center">
            {content.arr[id - 1].msg}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PayCom;
