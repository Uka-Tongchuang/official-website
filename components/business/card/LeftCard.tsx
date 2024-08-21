"use client";
import React from "react";
interface titleType {
  title: string;
}
function LeftCard({ title }: titleType) {
  return (
    <div className="w-36 h-16 flex justify-center items-center text-xl text-white bg-gradient-to-r from-g-start-color to-azul">
      {title}
    </div>
  );
}

export default LeftCard;
