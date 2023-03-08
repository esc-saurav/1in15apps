import React from "react";

const StartingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center max-w-[1300px]">
      <div className="border border-black  rounded-md w-2/5 mx-auto">
        <div className=" flex flex-col items-center gap-2">
          <p className="py-6 font-bold text-3xl">Welcome to quiz game</p>
          <div className="py-4 flex flex-col space-y-5 gap-4 w-4/6 mx-auto">
            <div className="flex flex-col gap-6">
              <p className="font-bold text-center">Please enter your username</p>
              <input
                type="text"
                placeholder="Enter username..."
                className="border border-black rounded-3xl h-9 outline-none text-center"
              />
            </div>
            <button
              className="bg-black text-white rounded-3xl w-11/12 mx-auto px-2 py-2"
              type="submit"
            >
              let's play
            </button>
          </div>
        </div>
        <div className="py-8 px-2">
          <p>Top score: 0</p>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
