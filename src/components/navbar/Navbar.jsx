import React from "react";
import { ReactComponent as NavbarCloseIcon } from "./ham.svg";

const Navbar = ({ openSidebar, opennavbar }) => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-lg">
      <p className="text-3xl">
        Coding <span className="text-blue-500">Addict</span>
      </p>
      <div>
        <ol className="md:flex gap-4 hidden">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Profile</li>
        </ol>
      </div>
      <span onClick={openSidebar} className="md:hidden">
        {!opennavbar ? (
          <NavbarCloseIcon className="w-8 h-8" />
        ) : (
          <NavbarCloseIcon className="w-8 h-8" />
        )}
      </span>
    </nav>
  );
};

export default Navbar;
