import React from "react";
import BubbleChart from "@weknow/react-bubble-chart-d3";

const BubbleChartComponent = ({ obj }: any) => {
  return (
    <div className="w-full h-[60rem] flex justify-center items-center"> {/* 将高度增加到80rem以扩大卡片容器 */}
      <BubbleChart
        graph={{
          zoom: 0.8,  // 调整缩放比例，使圆球可以全部展示出来
          offsetX: 0,  
          offsetY: 0, 
        }}
        width={1000}  // 增加宽度
        height={1000} // 增加高度
        padding={2}
        minValue={1} // 确保圆球的大小在一个合适的范围内显示
        maxValue={50} // 最大值
        showLegend={false}
        valueFont={{
          family: "Arial",
          size: 0,
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
    </div>
  );
};

export default BubbleChartComponent;
