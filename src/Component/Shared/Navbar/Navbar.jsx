import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Active style
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-green-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
      : "text-gray-600 px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-100";

  return (
    <nav className="px-6 py-3 shadow-sm bg-white">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="text-lg font-semibold text-gray-700">
          <span className="text-xl font-bold">Keen</span>
          <span className="text-xl text-green-700">Keeper</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">

          <NavLink to="/" className={linkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <MdTimeline /> Timeline
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <IoStatsChart /> Stats
          </NavLink>

        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3">

          <NavLink to="/" className={linkClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/timeline" className={linkClass}>
            <MdTimeline /> Timeline
          </NavLink>

          <NavLink to="/stats" className={linkClass}>
            <IoStatsChart /> Stats
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;