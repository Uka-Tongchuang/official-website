import Image, { StaticImageData } from "next/image";
import React from "react";

interface infoType {
  title: string;
  msg: string;
  img: StaticImageData;
}
function CardsCom({ title, msg, img }: infoType) {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-between p-3 mt-4 rounded-xl">
      <div className="flex items-center mb-2">
        <Image src={img} className="w-8 h-8 object-contain" alt={title} />
        <h1 className="ml-2 text-md font-blod text-title-text-color">{title}</h1>
      </div>
      <div>
        <p className="text-sm text-ironside-grey">{msg}</p>
      </div>
    </div>
  );
}

export default CardsCom;
