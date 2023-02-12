import React from "react";

const Mobilenavbar = ({ open }) => {
  return (
    <div>
      <div
        className={`w-36 font-oswald bg-white z-50 fixed animation shadow-lg h-screen overflow-y-auto top-20 md:hidden ${
          open ? "right-0" : "-right-64"
        }`}
      >
        <ul className="flex flex-col gap-6 p-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenavbar;
