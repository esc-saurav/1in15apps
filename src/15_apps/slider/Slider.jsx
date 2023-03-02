import React, { useState } from "react";
import data from "./Data";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const { image, name, title, quote } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const prev = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const next = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <div className="color h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 rounded-md mx-auto flex flex-col py-8  items-center">
        <h1 className="p-7 font-bold text-3xl">Rewiews</h1>
        <div className="flex flex-col items-center space-y-1">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src={image}
            alt=""
          />
          <p className="text-yellow-700">{name}</p>
          <p className="text-sm">{title}</p>
        </div>
        <div className="flex items-center w-full p-4 justify-between">
          <button
            onClick={prev}
            className="bg-pink-400 px-2 py-1 text-white rounded-sm"
          >
            Left
          </button>
          <button
            onClick={next}
            className="bg-pink-400 px-2 py-1 text-white rounded-sm"
          >
            Right
          </button>
        </div>
        <div className="w-3/4 flex justify-center">
          <p className="text-sm">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
