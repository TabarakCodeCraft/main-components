import React from "react";

const Text = ({ children, bold, size, color, ...props }) => {
  let fontweight;
  if (bold === "true") {
    fontweight = "bold";
  } else {
    fontweight = "normal";
  }
  return (
    <div>
      <p style={{ fontWeight: fontweight, fontSize: size, color: color, fontFamily: "sans-serif", margin: "0%",
}}
      >
        {children}
      </p>
    </div>
  );
};
export default Text;
