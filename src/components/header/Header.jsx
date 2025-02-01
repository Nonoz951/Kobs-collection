import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import DropDown from "./DropDown";
import { IoNotifications } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import Logo from '../../assets/images/logo_png_4.png'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="w-full h-[70px] fixed py-2 top-0 shadow-md bg-white px-6 z-50 flex items-center justify-between">

      {/* Logo */}
        <img src={Logo} alt="KOB'S Collection" className="h-24 w-auto object-contain" />

      {/* Search Bar */}
      <div className="w-1/2 relative max-w-md gap-2 items-center flex">
        <CiSearch className="absolute left-1 text-[#83776b] font-bold" fontSize="24"/>
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-8 py-2 border border-primary rounded-full focus:outline-none focus:ring-2 focus:ring-[#83776b] shadow-sm placeholder:text-primary"
        />
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4">
        {/* Shopping cart icon */}
        <button className="relative p-2 hover:bg-secondary rounded-full transition-colors duration-300">
          <TiShoppingCart className="text-primary w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Notification bell icon */}
        <button className="relative p-2 hover:bg-[#ebebf5] rounded-full transition-colors duration-300">
          <IoNotifications className="text-[#83776b] w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User Icon */}
        <button
          className="flex items-center gap-1 bg-[#83776b] text-white px-2 py-1 rounded-full hover:bg-[#ebebf5] transition"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <BiUserCircle className="w-6 h-6 text-[#ebebf5] hover:bg-[#83776b]" />
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
