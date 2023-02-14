import React from "react";
import { useGlobalContext } from "./Context";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <nav className="md:w-9/12 mx-auto">
      <div className="px-3 py-2 md:flex items-center justify-between ">
        <div className="flex justify-between">
          <img className="h-24 w-24" src={logo} />
          <button onClick={openSidebar} className="md:hidden block">
            <FaBars className="h-8 w-8 p-2 bg-black text-white rounded-md" />
          </button>
        </div>
        <ul className="md:block hidden">
          <li className="flex space-x-10">
            <button>Products</button>
            <button>Developers</button>
            <button>Company</button>
          </li>
        </ul>
        <button className="bg-black px-2 py-1 text-white rounded-sm md:block hidden">
          Sign In
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
