import axios from "axios";
import React from "react";
import { useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      console.log(response.data.products);
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    getData();
  }, []);

  const handleClick = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= data.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <>
      {data.length > 0 && (
        <div className="grid grid-cols-3 gap-2 p-2">
          {data.slice(page * 10 - 10, page * 10).map((item, i) => {
            return (
              <span className="flex flex-col items-center gap-2" key={i}>
                <img
                  className="w-96 rounded-md"
                  src={item.thumbnail}
                  alt={item.id}
                />
                <p>{item.title}</p>
              </span>
            );
          })}
        </div>
      )}
      <div className="flex gap-2 items-center justify-center">
        <button
          onClick={() => handleClick(page - 1)}
          className="bg-blue-600 text-white px-2 py-1 rounded-md  "
        >
          Previous
        </button>
        {[...Array(data.length / 10)].map((_, i) => {
          return (
            <span
              onClick={() => handleClick(i + 1)}
              className={`cursor-pointer px-2 ${
                page === i + 1 ? "text-red-500" : ""
              }`}
            >
              {i + 1}
            </span>
          );
        })}

        <button
          onClick={() => handleClick(page + 1)}
          className="bg-blue-600 text-white px-2 py-1 rounded-md  "
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
