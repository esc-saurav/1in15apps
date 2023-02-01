import React, { useState } from "react";
import data from "./Data";
import List from "./List";

const Birthday = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div className="md:h-screen   flex items-center color">
        <div className="bg-white rounded-md  py-3 w-11/12 md:w-1/3 mx-auto  px-8 flex flex-col   gap-5">
          <p className="text-lg">{people.length} Birthday Today</p>
          <List people={people} />
          <div className="w-11/12 ">
            <button
              onClick={() => setPeople([])}
              className="color w-full px-2 py-3 text-white rounded-sm"
            >
              Clear ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Birthday;
