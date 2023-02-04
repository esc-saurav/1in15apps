import React, { useState } from "react";
import Values from "values.js";

const Color = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(100);
      setList(colors);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="justify-center py-10 gap-4 flex items-center">
        <h1 className="text-3xl">Color Generator</h1>
        <form onSubmit={handleSubmit} className="flex">
          <input
            onChange={(e) => setColor(e.target.value)}
            className={`border outline-none h-10 ${
              error ? "border-red-500" : null
            }`}
            type="text"
            value={color}
            placeholder=" #15025"
          />
          <button
            className="bg-blue-500 px-3 py-1 rounded-sm text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="px-2">Colors</div>
    </div>
  );
};

export default Color;
