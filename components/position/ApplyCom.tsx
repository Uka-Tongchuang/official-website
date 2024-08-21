import React from "react";

// json
import appdata from "./position.json";

// com
import Applys from "./applicom/Applys";
import SceneCom from "./scene-com/SceneCom";
function ApplyCom() {
  return (
    <div className="w-full">
      <div className="md:hidden">
        <h3 className="w-full my-5 text-center text-lg font-bold text-title-text-color">
          适用场景
        </h3>
        <div className="flex justify-around items-center w-[95%] m-auto h-auto bg-app-bg rounded-xl p-1 mb-2">
          <div className="flex flex-col justify-between">
            <div>
              <Applys arr={appdata.appli.first} />
            </div>
            <div className="bg-app-hr h-[1px] w-[58%] my-4 m-auto"></div>
            <div>
              <Applys arr={appdata.appli.second} />
            </div>
          </div>
          <div className="bg-app-hr w-[1px] h-24 m-1"></div>
          <div className="flex flex-col justify-between ">
            <div>
              <Applys arr={appdata.appli.third} />
            </div>
            <div className="bg-app-hr h-[1px] w-[58%] my-4 m-auto"></div>
            <div>
              <Applys arr={appdata.appli.fourth} />
            </div>
          </div>
        </div>
      </div>
      {/* md pc  */}
      <div className="hidden md:block">
        <h3 className="w-full my-2 xl:mt-8 text-center text-lg font-bold text-title-text-color xl:text-3xl">
          适用场景
        </h3>
        <div className="w-[80%] m-auto h-auto">
          <SceneCom />
        </div>

      </div>
    </div>
  );
}

export default ApplyCom;
