import React from "react";

import "./about.css";
import content from "./about.json";

// pc
const renderPccard = (title: string, msg1: string, msg2: string) => {
  return (
    <div className=" ml-[8%] text-md text-ironside-grey">
      <h3 className="py-4 pt-12 xl:pt-14 2xl:pt-16 3xl:pt-20 font-bold text-lg">{title}</h3>
      <div>{msg1}</div>
      <div>{msg2}</div>
    </div>
  );
};
const renderMcard = (msg1: string, msg2: string) => {
  return (
    <div className="mt-14 ml-[8%] text-md text-ironside-grey">
      <div>{msg1}</div>
      <div>{msg2}</div>
    </div>
  );
};
function Culture() {
  return (
    <div>
      <div className="md:hidden max-w-md mx-auto space-y-6 mb-10">
        <h3 className="h-10 mt-2 xl:text-3xl w-full text-center font-bold">
          企业文化
        </h3>
        <div className="first w-[90%] h-28 bg-gradient-to-r  rounded-lg m-auto flex">
          {renderMcard(content.culture[0].msgf, content.culture[0].msgs)}
        </div>
        <div className="second w-[90%] h-28 bg-gradient-to-r  rounded-lg m-auto flex">
          {renderMcard(content.culture[1].msgf, content.culture[1].msgs)}
        </div>
        <div className="third w-[90%] h-28 bg-gradient-to-r  rounded-lg m-auto flex">
          {renderMcard(content.culture[2].msgf, content.culture[2].msgs)}
        </div>
      </div>
      {/* pc  */}
      <div className="hidden md:block">
        <h3 className="h-10 mt-2 mb-10 xl:text-3xl w-full text-center font-bold xl:mt-20">
          企业文化
        </h3>
        <div className="w-[80%] m-auto flex justify-between h-44 xl:h-56 2xl:h-64 3xl:h-72  p-4">
          <div className="first-pc w-[30%]">
           {
            renderPccard(content.culture[0].title, content.culture[0].msgf, content.culture[0].msgs)
           }
          </div>
          <div className="sec-pc w-[30%]">
            {
               renderPccard(content.culture[1].title, content.culture[1].msgf, content.culture[1].msgs)
            }
          </div>
          <div className="third-pc w-[30%]">
            {
               renderPccard(content.culture[2].title, content.culture[2].msgf, content.culture[2].msgs)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Culture;
