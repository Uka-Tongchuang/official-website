import React from "react";

// json
import content from "./customer.json";
import { first, second, third } from "@/public/customer-case";
// com
import Card from "./Card";
function ExampreFirst() {
  const imgs = [first, second, third];
  return (
    <div className="mt-[-110px] md:mt-[-70px] md:w-[80%] w-[90%] m-auto">
      {content.arr.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            msg={item.msg}
            achieve={item.achieve}
            type={item.type}
            img={imgs[index]}
          />
        );
      })}
    </div>
  );
}

export default ExampreFirst;
