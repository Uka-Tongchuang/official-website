"use client";
import React from "react";
import "./index.css"
interface titleType {
  title: string;
}
function rightCard({ title }: titleType) {
  return (
    <div className=" clip-path-triangle-right
    w-[6em] h-[2.5em] rounded-md rounded-bl-none flex justify-center items-center text-lg text-white bg-gradient-to-l from-baby-blue to-azul
    relative before:content-[''] before:absolute before:w-[0.8em] before:h-[0.8em] before:left-[-1em] before:bottom-0 before:transform before:translate-x-1/2 
    before:border-b-[10px] before:border-b-azul before:border-l-transparent before:border-t-transparent before:border-r-transparent
  ">
    {title}
  </div>
  
  );
}

export default rightCard;
