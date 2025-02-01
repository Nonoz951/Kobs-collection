import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./DropDown";
import { IoNotifications } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import Logo from '../../assets/images/logo_png_3.png'

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="w-full h-20 fixed py-2 top-0 shadow-md bg-white px-6 z-50 flex items-center justify-between">
      {/* Logo Section */}
      {/* <div className="flex items-center h-full"> */}
        <img src={Logo} alt="KOB'S Collection" className="h-56 w-auto object-contain" />
      {/* </div> */}

      {/* Search Bar */}
      <div className="w-1/2 max-w-md">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Shopping cart icon */}
        <button className="relative p-2 hover:bg-green-100 rounded-full transition-colors duration-300">
          <TiShoppingCart className="text-green-500 w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Notification bell icon */}
        <button className="relative p-2 hover:bg-green-100 rounded-full transition-colors duration-300">
          <IoNotifications className="text-green-500 w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User Icon */}
        <button
          className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <BiUserCircle className="w-6 h-6" />
          {showDropDown ? (
            <IoMdArrowDropup className="w-4 h-4" />
          ) : (
            <MdArrowDropDown className="w-4 h-4" />
          )}
        </button>

        {showDropDown && <DropDown />}
      </div>
    </div>
  );
};

export default Header;
