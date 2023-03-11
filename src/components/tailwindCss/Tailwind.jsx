import React from "react";
import logo from "./images/logo.svg";
import beach from "./images/beach-work.jpg";

const Tailwind = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-6 py-6 lg:px-12 lg:py-24 max-w-md mx-auto sm:max-w-xl lg:max-w-full xl:mr-0 2xl:col-span-2 ">
          <div className="xl:max-w-xl">
            <img className="h-8" src={logo} alt="logo" />
            <img
              className="lg:hidden mt-6 sm:mt-8 rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover object-center"
              src={beach}
              alt="beach"
            />
            <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 sm:mt-4 sm:text-xl text-gray-600">
              Workcation hepls you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div>
              <a
                className="mt-2 sm:mt-6 inline-block rounded-lg bg-indigo-500 text-sm sm:text-base text-white px-5 py-3 shadow-lg uppercase tracking-wider font-semibold"
                href="#"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full  h-full object-cover object-center"
            src={beach}
            alt="beach"
          />
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
