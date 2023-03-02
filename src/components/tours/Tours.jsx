import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import Tour from "./Tour";

const Tours = () => {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const removeTour = (id) => {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://course-api.com/react-tours-project"
      );
      setLoading(false);
      setTour(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tour.length === 0) {
    return (
      <div className="h-screen justify-center items-center flex flex-col color">
        <h1 className="text-4xl text-white">No tour left</h1>
        <button
          onClick={fetchData}
          className="bg-white px-3 py-2 text-red-600 rounded-md"
        >
          {" "}
          Refresh...
        </button>
      </div>
    );
  }

  return (
    <>
      <Tour tour={tour} removeTour={removeTour} />
    </>
  );
};

export default Tours;
