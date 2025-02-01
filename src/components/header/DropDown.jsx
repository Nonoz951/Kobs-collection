import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const DropDown = () => {
  return (
    <div className="w-[200px] h-[150px] bg-white border border-gray-300 absolute top-16 right-4 z-50">
      <div className="flex w-full h-2/5 border-b-[1px] border p-2">
        <button className="w-full h-full bg-green-500 rounded-md items-center flex justify-center hover:bg-green-600 transition-colors duration-300">
          <p className="text-white font-bold text-xl">Sign In</p>
        </button>
      </div>
      <div className="flex">
        <button className="w-full h-[40px] flex p-1 justify-start items-center gap-2 hover:bg-green-100 transition-colors duration-300">
          <FaRegUserCircle className="h-full w-[40px] text-green-500"/>
          <p className="text-green-500 text-base font-semibold">Account</p>
        </button>
      </div>
    </div>
  );
};

export default DropDown;
