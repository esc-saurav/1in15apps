import React, { useState } from "react";
import questions from "./Data";
import Question from "./Question";

const Qna = () => {
  const [data, setData] = useState(questions);
return (
    <>
      <div className=" h-screen color flex  items-center justify-center">
        <div className="bg-white text-black rounded-sm items-center flex w-3/4  gap-4 p-6">
          <h1 className="text-3xl font-bold w-1/3 ">
            Question and Answer About Login
          </h1>
          <div className="flex flex-col gap-3 w-full">
            {data.map((item) => {
              return <Question {...item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qna;


