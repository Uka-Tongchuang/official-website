import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";

const BubbleChartComponent = ({ obj }: any) => {
  return (
    <div className="w-full h-[40rem]">
      <BubbleChart
        graph={{
          zoom: 1,
          offsetX: -0.2,  // 使用数字类型
          offsetY: 0,   // 使用数字类型
        }}
        width={Number(obj.style.diameter) * 5}  // 使用数字类型
        height={Number(obj.style.diameter) * 5} // 使用数字类型
        padding={2}
        showLegend={false}
        valueFont={{
          family: "Arial",
          size: 16,
          color: "#fff",
          weight: "bold",
        }}
        labelFont={{
          family: "Arial",
          size: 16,
          color: "#fff",
          weight: "bold",
        }}
        data={[
          { label: obj.label, value:obj.style.diameter, color: "blue"}
        ]}
      />
    </div>
  );
};

export default BubbleChartComponent;
