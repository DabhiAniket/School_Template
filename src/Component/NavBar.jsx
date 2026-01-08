import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Search, Menu, X } from "lucide-react"; // Added Menu/X icons for a cleaner look

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        
        {/* Logo Section - Responsive scaling */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto" />
          <div className="flex flex-col pl-3">
            <span className="text-xl md:text-2xl font-bold leading-tight">ABC University</span>
            <span className="text-sm md:text-lg text-gray-500">Learn and Grow</span>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile, shown on MD+ */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-md xl:text-lg font-bold">
          <a href="#home" className="hover:text-amber-400 transition">HOME</a>
          <a href="#courses" className="hover:text-amber-400 transition">COURSES</a>
          <a href="#event" className="hover:text-amber-400 transition">EVENT</a>
          <a href="#about" className="hover:text-amber-400 transition">ABOUT</a>
          <a href="#blog" className="hover:text-amber-400 transition">BLOG</a>
          <a href="#pages" className="hover:text-amber-400 transition">PAGES</a>
          <a href="#contact" className="hover:text-amber-400 transition">CONTACT</a>
          <span className="text-gray-300">|</span>
          <Search size={22} className="text-gray-500 hover:text-amber-400 transition cursor-pointer" />
        </div>

        {/* Mobile Toggle Button - Hidden on Desktop */}
        <div className="lg:hidden flex items-center">
          <Search size={24} className="mr-4 text-gray-500" />
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Animated/Transition appearance */}
      <div className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4 flex flex-col space-y-4 font-bold text-gray-700">
          <a href="#home" onClick={() => setOpen(false)}>HOME</a>
          <a href="#courses" onClick={() => setOpen(false)}>COURSES</a>
          <a href="#event" onClick={() => setOpen(false)}>EVENT</a>
          <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
          <a href="#blog" onClick={() => setOpen(false)}>BLOG</a>
          <a href="#pages" onClick={() => setOpen(false)}>PAGES</a>
          <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { Search } from "lucide-react";

// const NavBar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md w-full">
//       <div className="flex items-center justify-between w-full px-4 md:px-10 py-4">
        
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="h-18 w-auto " />
//           <div className="flex flex-col pl-3">
//             <span className="text-2xl font-bold">ABC University</span>
//             <span className="text-lg text-gray-500">Learn and Grow</span>
//           </div>
//         </div>

//         {/* Desktop view */}
//         <div className="hidden md:flex items-center space-x-8 text-lg font-bold">
//           <a href="#home" className="hover:text-amber-400 transition">HOME</a>
//           <a href="#courses" className="hover:text-amber-400 transition">COURSES</a>
//           <a href="#event" className="hover:text-amber-400 transition">EVENT</a>
//           <a href="#about" className="hover:text-amber-400 transition">ABOUT</a>
//           <a href="#blog" className="hover:text-amber-400 transition">BLOG</a>
//           <a href="#pages" className="hover:text-amber-400 transition">PAGES</a>
//           <a href="#contact" className="hover:text-amber-400 transition">CONTACT</a>
//           <span className="text-gray-500">|</span>
//           <Search size={24} className=" text-gray-500 hover:text-amber-400 transition cursor-pointer" />
//         </div>


//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-3 font-medium">
//           <a href="#home">HOME</a>
//           <a href="#courses">COURSES</a>
//           <a href="#event">EVENT</a>
//           <a href="#about">ABOUT</a>
//           <a href="#blog">BLOG</a>
//           <a href="#pages">PAGES</a>
//           <a href="#contact">CONTACT</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;