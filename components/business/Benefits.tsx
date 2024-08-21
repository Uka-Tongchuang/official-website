import React from "react";
// json
import content from "./business.json";
function Benefits() {
  return (
    <div className="w-[90%] m-auto">
      <h3 className="flex justify-center items-center font-bold my-4">
        服务优势
      </h3>
      {content.benefits.map((item, index) => {
        return (
          <div key={index} className="p-4 rounded-xl bg-a-color my-5">
            <h3 className="h-8 pl-1 text-md font-bold">{item.title}</h3>
            <p className="w-full font-light p-4 mb-4 bg-white rounded-lg text-md">
              {item.msg}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Benefits;
