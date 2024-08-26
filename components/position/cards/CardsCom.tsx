import Image, { StaticImageData } from "next/image";
import React from "react";

interface infoType {
  title: string;
  msg: string;
  img: StaticImageData;
}
function CardsCom({ title, msg, img }: infoType) {
  return (
    <div className="w-full h-28 xl:h-32 bg-white flex flex-col p-3 mt-4 rounded-xl">
      <div className="flex items-center mb-2 xl:mb-4">
        <Image src={img} className="w-8 h-8 xl:w-12 xl:h-12 object-contain" alt={title} />
        <h1 className="ml-2 text-md font-blod text-title-text-color xl:text-xl xl:ml-4">{title}</h1>
      </div>
      <div>
        <p className="text-sm text-ironside-grey xl:text-md">{msg}</p>
      </div>
    </div>
  );
}

export default CardsCom;
