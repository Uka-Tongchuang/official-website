import React from "react";

import "./index.css"
function Banner() {
  return (
    <div className="">
      <div className="w-full md:hidden">
        <div className="bg-gradient-to-b from-a to-white h-48">
          <h3 className="font-bold text-lg text-center py-6">客户案例</h3>
        </div>
      </div>
      {/* pc  */}
      <div className="hidden md:block">
        <div className="bannerx w-full h-[20rem] xl:h-[30rem] flex justify-center items-center text-3xl font-bold">
          <h3>客户案例</h3>
        </div>
      </div>
    </div>
  );
}

export default Banner;
