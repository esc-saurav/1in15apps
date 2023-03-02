import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  // const { id, image, info, price, name } = tour;

  return (
    <>
      <div className=" color flex flex-col justify-center items-center py-10">
        <p className="text-white">Tours</p>
        <div className="flex flex-col  gap-5">
          {tour.map((tour) => {
            return (
              <div
                className="w-1/2 bg-white shadow-md rounded-md mx-auto flex flex-col "
                key={tour.id}
              >
                <img className="w-full object-cover" src={tour.image} alt="" />
                <div className="flex justify-between  px-8 py-4">
                  <h4>{tour.name}</h4>
                  <h4>${tour.price}</h4>
                </div>
                <p className="px-8 py-2">
                  {readmore ? (
                    <span>
                      {tour.info}
                      <span
                        onClick={() => setReadmore(!readmore)}
                        className="text-blue-500 ml-1 cursor-pointer"
                      >
                        See less...
                      </span>
                    </span>
                  ) : (
                    <span>
                      {tour.info.substring(200, 0)}
                      <span
                        onClick={() => setReadmore(!readmore)}
                        className="text-blue-500 ml-1 cursor-pointer"
                      >
                        See more...
                      </span>
                    </span>
                  )}
                </p>
                <div className="flex justify-center py-3">
                  <button
                    onClick={() => removeTour(tour.id)}
                    className="bg-white text-red-500 border px-5 py-2 border-red-500 hover:text-white hover:bg-red-500 "
                  >
                    Not interested
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tour;
