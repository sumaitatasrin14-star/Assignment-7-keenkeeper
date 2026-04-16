import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-100 px-6 py-3 shadow-sm">
      
      
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-semibold text-gray-700">
          <span className="text-xl font-bold">Keen</span><span className="text-xl text-green-800">Keeper</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium">
            <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " bg-green-600 text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2"
            : "text-gray-600  px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-2"
        }
      >
        <FaHome />Home
        </NavLink>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm">
            <MdTimeline /> Timeline
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm">
            <IoStatsChart /> Stats
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3">
          
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            <FaHome /> Home
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm">
            <MdTimeline /> Timeline
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-black text-sm">
            <IoStatsChart /> Stats
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;