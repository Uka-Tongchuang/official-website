import React from "react";

interface objType {
    title: string;
    icon: string;
    line: string;
    styles?: {
        top: string;
        left?: string;
        diameter?: string;
        bg?: string;
        right?: string;
    };
}
function CircleCom({title,icon,line,styles}:objType) {
  return (
    <div
  className={`absolute rounded-full`}
  style={{
    width: styles?.diameter+"px",
    height: styles?.diameter+"px",
    left: styles?.left ? styles.left : 'auto',
    right: styles?.right ? styles.right : 'auto',
    top: styles?.top ? styles.top : 'auto',
    fontSize: Number(styles?.diameter)/2 + "px",
    backgroundColor:styles?.bg==="bg-circle-bg"?"#F2F7FF":"#fff",
   
  }}
>
  {title}
</div>

  );
}

export default CircleCom;
