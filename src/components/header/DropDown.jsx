import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="w-[200px] h-[150px] bg-white border border-gray-300 absolute top-16 right-4 z-50">
      <div className="flex w-full h-2/5 border-b-[1px] border p-2">
        <Link className="w-full h-full bg-primary rounded-md items-center flex justify-center transition-colors duration-300">
          <p className="text-secondary font-bold text-xl">Sign In</p>
        </Link>
      </div>
      <div className="flex">
        <button className="w-full h-[40px] flex p-1 justify-start items-center gap-2 hover:bg-green-100 transition-colors duration-300">
          <FaRegUserCircle className="h-full w-[40px] text-primary" />
          <p className="text-primary text-base font-semibold">Account</p>
        </button>
      </div>
    </div>
  );
};

export default DropDown;
