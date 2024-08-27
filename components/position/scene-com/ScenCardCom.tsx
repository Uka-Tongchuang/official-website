import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";

const BubbleChartComponent = ({ obj }: any) => {
  return (
      <BubbleChart
        graph={{
          zoom: 1,
          offsetX: 0,  // 使用数字类型
          offsetY: 0,   // 使用数字类型
        }}
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
        data={obj}
      />
  );
};

export default BubbleChartComponent;
