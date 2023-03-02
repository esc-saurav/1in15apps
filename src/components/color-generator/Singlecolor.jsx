import React from "react";
import { useState } from "react";
import rgbToHex from "./Utils";

const Singlecolor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p>{weight}</p>
    </div>
  );
};

export default Singlecolor;
