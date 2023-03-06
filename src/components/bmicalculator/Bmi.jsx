import React, { useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [result, setresult] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleClick = () => {
    const BMI = Number(weight / height ** 2).toFixed(2);
    setresult(BMI);
    let bmistatus = getStatus();
    setSuggestion(bmistatus);
  };

  function getStatus(BMI) {
    if (BMI < 18.5) {
      return "Your BMI falls within the underweight range";
    } else if (BMI > 18.5 && BMI <= 24.9) {
      return "Your BMI falls within the normal or healthy weight range";
    } else if (BMI >= 25 && BMI <= 29.9) {
      return "Your BMI falls within the overweight range";
    } else {
      return "Your BMI falls within the obese range";
    }
  }

  return (
    <div className=" bg-white flex items-center h-screen justify-center">
      <div className="flex border w-1/4 py-6 px-3 shadow-md flex-col gap-4 items-center">
        <p className="font-bold text-2xl">BMI CALCULATOR</p>
        <span className="flex flex-col gap-1 w-full">
          <label className="font-bold">Height</label>
          <input
            onChange={(e) => setHeight(e.target.value)}
            className="border border-slate-400 outline-none rounded-sm h-8"
            type="text"
            placeholder=" In cm"
          />
        </span>
        <span className="flex flex-col gap-1 w-full  ">
          <label className="font-bold">Weight</label>
          <input
            onChange={(e) => setWeight(e.target.value)}
            className="border border-slate-400 outline-none rounded-sm h-8"
            type="text"
            placeholder=" In Kg"
          />
        </span>
        <button
          onClick={handleClick}
          className="bg-purple-600 text-white rounded-sm px-3 py-1"
        >
          Calculate BMI
        </button>
        <p>Your BMI is: {result}</p>
        <p>{suggestion}</p>
      </div>
    </div>
  );
};

export default Bmi;
