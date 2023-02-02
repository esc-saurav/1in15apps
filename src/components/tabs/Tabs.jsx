import axios from "axios";
import React, { useEffect, useState } from "react";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(1);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://course-api.com/react-tabs-project"
      );
      setLoading(false);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl text-black">
        <p>Loading...</p>
      </div>
    );
  }

  const { company, dates, duties, title } = data[value];

  return (
    <div className="h-screen color flex items-center justify-center">
      <div className="bg-white w-11/12 flex flex-col gap-4 py-6 rounded-md">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold  text-4xl text-black">Experience</h1>
          <div className="bg-green-400 w-24 h-1 my-2"></div>
        </div>
        <div className="flex gap-10 w-3/4 mx-auto">
          <div className="text-2xl text-black flex flex-col gap-2">
            {data.map((item, index) => {
              return (
                <button
                  className={`
                ${index === value && "text-green-400 underline"}`}
                  onClick={() => setValue(index)}
                  key={index}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl text-black">{title}</h1>
            <div className="bg-gray-200 w-20 flex justify-center rounded-sm">
              <p className="font-bold text-green-700">{company}</p>
            </div>
            <p className="text-slate-500">{dates}</p>
            <div className="text-black flex flex-col gap-4 ">
              <div className="flex flex-col gap-5 items-center">
                {duties.map((item, index) => {
                  return (
                    <div key={index} className="flex  gap-2 items-center">
                      <p>&#62;&#62;</p>
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center py-5">
              <button className="bg-green-600 text-white px-8 py-1 rounded-sm">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
