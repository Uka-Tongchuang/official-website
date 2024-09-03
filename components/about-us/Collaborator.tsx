import React from "react";

import { logoA, logoB, logoC, logoD } from "@/public/about-us";
import Image from "next/image";
function Collaborator() {
  const logoList = [logoA, logoB, logoC, logoD];
  return (
    <div className="mb-10">
      <h3 className="h-10 my-2 xl:text-3xl xl:mb-10 w-full text-center font-bold xl:mt-20">
        我们的合作者
      </h3>
      <div className="w-[90%] md:w-[80%] m-auto grid grid-cols-2 gap-4 md:grid-cols-4 h-auto">
        {logoList.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                index === 0 ? "p-4" : index === 3 ? "p-6" : "p-8"
              } bg-icon-bg rounded-xl flex justify-center items-center`}
            >
              <Image className={` ${
                index === 0 ? "w-40" : index === 3 ? "w-36" : "w-28"
              } `} src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collaborator;
