import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Search } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between w-full px-4 md:px-10 py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-18 w-auto " />
          <div className="flex flex-col pl-3">
            <span className="text-2xl font-bold">ABC University</span>
            <span className="text-lg text-gray-500">Learn and Grow</span>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-bold">
          <a href="#home" className="hover:text-amber-400 transition">HOME</a>
          <a href="#courses" className="hover:text-amber-400 transition">COURSES</a>
          <a href="#event" className="hover:text-amber-400 transition">EVENT</a>
          <a href="#about" className="hover:text-amber-400 transition">ABOUT</a>
          <a href="#blog" className="hover:text-amber-400 transition">BLOG</a>
          <a href="#pages" className="hover:text-amber-400 transition">PAGES</a>
          <a href="#contact" className="hover:text-amber-400 transition">CONTACT</a>
          <span className="text-gray-500">|</span>
          <Search size={24} className=" text-gray-500 hover:text-amber-400 transition cursor-pointer" />
        </div>


        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-3 font-medium">
          <a href="#home">HOME</a>
          <a href="#courses">COURSES</a>
          <a href="#event">EVENT</a>
          <a href="#about">ABOUT</a>
          <a href="#blog">BLOG</a>
          <a href="#pages">PAGES</a>
          <a href="#contact">CONTACT</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;