import React, { useState } from "react";
import data from "./ReviewData.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const RandomPerson = () => {
    let number = Math.floor(Math.random() * data.length);
    if (number === index) {
      number = index + 1;
    }
    setIndex(checkNumber(number));
  };

  return (
    <div className="h-screen flex flex-col gap-4  items-center justify-center color">
      <h1 className="text-4xl font-bold text-white">Our reviews</h1>

      <div className="flex flex-col bg-white shadow-md rounded-sm text-black w-2/5 py-6 gap-1">
        <div className="flex flex-col gap-3 items-center">
          <div className="relative">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src={image}
              alt=""
            />
            <span className="absolute top-1 left-1 bg-red-500 text-white p-2 rounded-full">
              <FaQuoteRight />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
            <p>{name}</p>
            <p className="text-blue-500">{job}</p>
            <p>{text}</p>
            <div className="flex gap-4 my-4">
              <button onClick={prevPerson} className="text-blue-500">
                <FaChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={nextPerson} className="text-blue-500">
                <FaChevronRight className="h-6 w-6" />
              </button>
            </div>
            <button
              onClick={RandomPerson}
              className="bg-blue-200 text-blue-700 px-2 py-1 rounded-sm"
            >
              Suprise Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
