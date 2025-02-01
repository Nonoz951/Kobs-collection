import React from "react";
import './index.css';
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill, PiBeltFill, PiBaseballCapFill } from "react-icons/pi";
import { GiRunningShoe } from "react-icons/gi";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        <h1 className="title text-gray-500">KOBS <i className="text-gray-400">collection</i></h1>
        <div className="collection">
        <FaShirt size={30} className="text-gray-400"/>
        <span className="collection-title text-gray-400">T-shirts</span>
        </div>
        <div className="collection">
        <PiPantsFill size={30} className="text-gray-400"/>
        <span className="collection-title text-gray-400">Trouser</span>
        </div>
        <div className="collection">
        <PiBeltFill size={30} className="text-gray-400"/>
        <span className="collection-title text-gray-400">Belt</span>
        </div>
        <div className="collection">
        <GiRunningShoe size={30} className="text-gray-400"/>
        <span className="collection-title text-gray-400">Footwear</span>
        </div>
        <div className="collection">
        <PiBaseballCapFill size={30} className="text-gray-400"/>
        <span className="collection-title text-gray-400">Headwear</span>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;
