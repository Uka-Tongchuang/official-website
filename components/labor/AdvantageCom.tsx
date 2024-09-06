import React from "react";
import Image, { StaticImageData } from "next/image";
interface objType {
  img: StaticImageData;
  title: string;
  arr: Array<any>;
}

function AdvantageCom({ img, title, arr }: objType) {
  return (
    <div className="w-[90%] h-auto m-auto md:w-[80%] bg-a-color md:flex md:items-center md:mt-20 md:mb-20 md:rounded-xl">
      <div className="w-[60%] md:w-[40%] m-auto xl:p-4">
        <Image src={img} alt="advantage" className="object-contain" loading='lazy'/>
      </div>
      <div className="p-4 md:w-[58%] md:mb-8">
        <h4 className="font-bold text-center xl:py-8 md:py-4 md:text-left text-lg md:text-lg xl:text-3xl">
          {title}
        </h4>
        {arr.map((item, index) => (
          <div
            key={index}
            className="w-[96%] md:w-[80%] h-32 md:h-40 mt-4 bg-white rounded-lg shadow-md p-4"
          >
            <p className="text-md h-8 font-bold xl:text-lg xl:h-10 md:my-2">
              {item.title}
            </p>
            <p className="text-sm text-ironside-grey xl:text-md md:text-ironside-grey">
              {item.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvantageCom;
