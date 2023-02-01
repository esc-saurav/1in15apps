import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [openAns, setOpenAns] = useState(false);
  return (
    <>
      <div
        key={id}
        className="shadow-md border rounded-md border-slate-300 flex gap-3 flex-col px-4 py-5"
      >
        <div className="flex justify-between items-center ">
          <p className="font-bold">{title}</p>
          <button
            onClick={() => setOpenAns(!openAns)}
            className="bg-red-500 text-white w-6 h-6 rounded-full "
          >
            +
          </button>
        </div>
        {openAns && <p className="text-sm">{info}</p>}
      </div>
    </>
  );
};

export default Question;
