import React from "react";
// json
import content from "./position.json";

// import image from 'next/image'
import Image from "next/image";

// imgs
import { valueA, valueB, valueC, valueD } from "@/public/position";
function ServiceValue() {
  const imgs = [valueA, valueB, valueC, valueD];
  return (
    <div className="w-[90%] md:w-[86%] xl:w-[80%] m-auto">
      <h3 className="h-14 text-center text-lg xl:text-3xl xl:my-8 flex justify-center items-center font-bold">
        服务价值
      </h3>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4 md:gap-8 pb-8 md:pb-20">
        {content.sericevalue.map((item, index) => {
          return (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-lg h-auto
                    ${
                      index === 0
                        ? "bg-circle-bg shadow-[0px_4px_6px_-4px_rgba(255,182,193,0.5)]"
                        : index === 1
                        ? "bg-red-color shadow-[0px_4px_6px_-4px_rgba(173,216,230,0.5)]"
                        : index === 2
                        ? "bg-card-a-bg shadow-[0px_4px_6px_-4px_rgba(144,238,144,0.5)]"
                        : index === 3
                        ? "bg-dashed-color shadow-[0px_4px_6px_-4px_rgba(255,239,213,0.5)]"
                        : ""
                    }`}
            >
              <div className="flex items-center w-full 2xl:py-2">
                <div
                  className={` w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-xl
                 ${
                   index === 0
                     ? "bg-card-a-t"
                     : index === 1
                     ? "bg-card-b-t"
                     : index === 2
                     ? "bg-card-c-t"
                     : index === 3
                     ? "bg-card-d-t"
                     : ""
                 }`}
                >
                  <Image className="w-4 md:w-6" src={imgs[index]} alt={item.title} />
                </div>

                <h3 className="ml-2 text-lg text-g-color xl:text-xl">{item.title}</h3>
              </div>
              <ul
                className={` mt-6 pl-1
                    ${
                  index === 0
                    ? "text-card-a-t"
                    : index === 1
                    ? "text-card-b-t"
                    : index === 2
                    ? "text-card-c-t"
                    : index === 3
                    ? "text-card-d-t"
                    : ""
                }`}
              >
                <li className="relative pl-4 xl:mt-8 before:content-[''] before:w-2 before:h-2 before:bg-current before:rounded-full before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                  <span className="text-ironside-grey text-md xl:text-lg">{item.desca}</span>
                </li>
                <li className="relative my-2 md:my-4 xl:my-8 2xl:my-12 pl-4 before:content-[''] before:w-2 before:h-2 before:bg-current before:rounded-full before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                  <span className="text-ironside-grey text-md xl:text-lg">{item.descb}</span>
                </li>
                <li className="relative my-2 2xl:mb-6 pl-4 before:content-[''] before:w-2 before:h-2 before:bg-current before:rounded-full before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                  <span className="text-ironside-grey text-md xl:text-lg">{item.descc}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceValue;
