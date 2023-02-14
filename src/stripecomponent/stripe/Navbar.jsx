import React from "react";
import { useGlobalContext } from "./Context";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="md:w-9/12 mx-auto py-3" onMouseOver={handleSubmenu}>
      <div className="px-3 py-2 md:flex items-center justify-between ">
        <div className="flex justify-between">
          <img className="rounded-md w-24 h-12  bg-black" src={logo} alt="" />
          <button onClick={openSidebar} className="md:hidden block">
            <FaBars className="h-8 w-8 p-2 bg-black text-white rounded-md" />
          </button>
        </div>
        <ul className="md:block hidden">
          <li className="flex space-x-10 font-bold text-[#696969]">
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Developers
            </button>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Company
            </button>
          </li>
        </ul>
        <button className="bg-black px-2 py-1 text-white rounded-md md:block hidden">
          Sign In
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
