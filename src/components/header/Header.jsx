import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./DropDown";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="w-full h-16 fixed top-0 shadow-md bg-white px-4 z-50">
      <div className="flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-green-600">
            KOB'S collection
          </h1>
        </div>

        {/* Search Bar */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-green-100 rounded-full transition-colors duration-300">
            🛒
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
          <button
            className="p-1 items-center bg-green-500 text-white rounded-md flex flex-row hover:bg-green-600 transition"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <BiUserCircle className="w-8 h-8" />
            <MdArrowDropDown className="w-5 h-5" />
          </button>

          {
            // Render DropDown component if showDropDown is true
            showDropDown && <DropDown />
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
