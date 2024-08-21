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
function CircleCom({ title, icon, line, styles }: objType) {
  console.log("2px #d4d4d4" + line);

  return (
    <div
      className={`absolute rounded-full`}
      style={{
        width: Number(styles?.diameter) * 4 + "px",
        height: Number(styles?.diameter) * 4 + "px",
        left: styles?.left ? styles.left : "auto",
        right: styles?.right ? styles.right : "auto",
        top: styles?.top ? styles.top : "auto",
        fontSize: Number(styles?.diameter) / 2 + 2 + "px",
        backgroundColor: styles?.bg === "bg-circle-bg" ? "#F2F7FF" : "#fff",
        borderRadius: "50%",
        border:
          line !== "none"
            ? icon === "KEYWORD"
              ? "2px #165CFF " + line
              : "2px #d4d4d4 " + line
            : line,
        color: icon === "KEYWORD" ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: (Number(styles?.diameter) * 4 - 34 * 3) / 2 + "px",
        transform:
          icon === "KEYWORD" ? "translate(-50%, -50%)" : "translate(0, 0%)",
      }}
    >
      {icon === "KEYWORD" ? (
        <div
          style={{
            width: Number(styles?.diameter) * 4 - 34 + "px",
            height: Number(styles?.diameter) * 4 - 34 + "px",
            backgroundColor: "#165CFF",
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: (Number(styles?.diameter) * 4 - 34 * 3) / 2 + "px",
          }}
        >
          <span>{title}</span>
          <span>{icon}</span>
        </div>
      ) : (
        title
      )}
    </div>
  );
}

export default CircleCom;
