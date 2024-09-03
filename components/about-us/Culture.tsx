import React from "react";

import "./about.css";
import content from "./about.json";

// pc
const renderPccard = (title: string, msg1: string, msg2: string) => {
  return (
    <div className=" ml-[8%] text-md text-ironside-grey">
      <h3 className="py-4 pt-12 xl:pt-14 2xl:pt-16 3xl:pt-20 font-bold text-lg">
        {title}
      </h3>
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
  const datas = [
    {
      msgf: content.culture[0].msgf,
      msgs: content.culture[0].msgs,
    },
    {
      msgf: content.culture[1].msgf,
      msgs: content.culture[1].msgs,
    },
    {
      msgf: content.culture[2].msgf,
      msgs: content.culture[2].msgs,
    },
  ];
  return (
    <div>
      <div className="md:hidden max-w-md mx-auto space-y-6 mb-10">
        <h3 className="h-10 mt-2 xl:text-3xl w-full text-center font-bold">
          企业文化
        </h3>

        {datas.map((item, index) => {
          return (
            <div
              key={index}
              className={`first w-[90%] h-28 bg-gradient-to-r  rounded-lg m-auto flex ${
                index === 0 ? "first-pc" : index === 1 ? "sec-pc" : "third-pc"
              }`}
            >
              {renderMcard(item.msgf, item.msgs)}
            </div>
          );
        })}
      </div>
      {/* pc  */}
      <div className="hidden md:block">
        <h3 className="h-10 mt-2 mb-10 xl:text-3xl w-full text-center font-bold xl:mt-20">
          企业文化
        </h3>
        <div className="w-[80%] m-auto flex justify-between h-44 xl:h-56 2xl:h-64 3xl:h-72  p-4">
          {content.culture.map((item, index) => {
            return (
              <div
                key={index}
                className={` w-[30%] ${
                  index === 0 ? "first-pc" : index === 1 ? "sec-pc" : "third-pc"
                }`}
              >
                {renderPccard(item.title, item.msgf, item.msgs)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Culture;
