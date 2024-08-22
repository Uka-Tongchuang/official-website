import React from "react";
import Image from "next/image";
// json
import content from "./business.json";
//imgs
import { ysA, ysB, ysC, ysD } from "@/public/business";
// nextui
import { Tabs, Tab, Card, CardBody, Switch } from "@nextui-org/react";
function Benefits() {
  const icons = [ysA, ysB, ysC, ysD];
  //选项卡tab 
  const change=(key:React.Key)=>{
    console.log(key);
    
  }
  return (
    <div>
      <div className="md:hidden w-[90%] m-auto">
        <h3 className="flex justify-center items-center font-bold my-4">
          服务优势
        </h3>
        {content.benefits.map((item, index) => {
          return (
            <div key={index} className=" p-4 rounded-xl bg-a-color my-5">
              <h3 className="h-8 pl-1 text-md font-bold">{item.title}</h3>
              <p className="relative w-full font-light p-4 mb-4 bg-white rounded-lg text-md">
                {item.msg}
                <Image
                  className=" absolute w-16 right-[-1rem] bottom-[-2rem]"
                  src={icons[index]}
                  alt=""
                />
              </p>
            </div>
          );
        })}
      </div>
      <div className="hidden md:block bg-gradient-to-b from-a-color to-circle-bg">
        <div className="w-[80%] m-auto py-24">
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" isVertical={true} onSelectionChange={change}>
              {content.tablist.map((item, index) => {
                return (
                  <Tab key={item.title} title={item.title} > 
                    <Card>
                      <CardBody>
                        <h3>{item.dtitle}</h3>
                        <p>{item.desca}</p>
                        <p>{item.descb}</p>
                        {item.descc ? <p>{item.descc}</p> : ""}
                      </CardBody>
                    </Card>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
