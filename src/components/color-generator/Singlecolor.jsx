import React from "react";
import rgbToHex from "./Utils";

const Singlecolor = ({ rgb, weight, index }) => {
  const bcg = rgb.join(",");
  console.log(bcg);
  return (
    <div className={`color`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p>{weight}</p>
    </div>
  );
};

export default Singlecolor;
