import React, { useState } from "react";
import data from "./Data";

const Lorem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  console.log(count);

  return (
    <div className="  flex items-center justify-center">
      <div className="flex bg-white flex-col items-center w-3/4 py-8 space-y-5">
        <h1 className="text-3xl font-bold uppercase">tried of lorem ipsum?</h1>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <p>Paragraph:</p>
            <input
              onChange={(e) => setCount(e.target.value)}
              className="border border-slate-700 outline-none text-black w-10"
              type="number"
              value={count}
            />
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              GENERATE
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {text.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Lorem;
