import React from "react";
import image from "../../assets/image.jpg";

const Section = () => {
  return (
    <div className="relative w-full h-[550px] overflow-hidden bg-white">
      
      {/* 1. BACKGROUND IMAGE (Right Side) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 2. DARK CURVED PANEL (Left Side) */}
      <div 
        className="relative z-10 w-full lg:w-[62%] h-full bg-[#2d2d2d] text-white flex flex-col justify-center px-12 lg:pl-28"
        /* Inline style is used here because Tailwind's default clip-path utilities are limited */
        style={{ clipPath: "ellipse(100% 120% at -10% 50%)" }}
      >
        
        {/* SLIDER DOTS */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <span className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 border-2 border-gray-400 rounded-full cursor-pointer hover:border-white transition-colors"></span>
          <span className="w-3 h-3 border-2 border-gray-400 rounded-full cursor-pointer hover:border-white transition-colors"></span>
          <span className="w-3 h-3 border-2 border-gray-400 rounded-full cursor-pointer hover:border-white transition-colors"></span>
        </div>

        {/* MAIN TEXT CONTENT */}
        <div className="max-w-md">
          <p className="text-lg font-medium mb-3 tracking-wide">Learn Online Courses</p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-[1.2] mb-6">
            Only Patience & <br /> 
            Persistence Give <span className="text-yellow-500">Good <br /> Result</span>
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
            World Largest books and library center is here where you can study the
            latest trends of education. Curabitur rutrum faucibus elit convallis
            diam mattis eget.
          </p>

          <button className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-xs hover:text-yellow-400 transition-all">
            Find More About Us
          </button>
        </div>

        {/* THUMBNAIL IMAGES */}
        <div className="absolute bottom-10 left-28 flex gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 h-14 overflow-hidden rounded-sm ring-1 ring-white/10">
               <img
                src={`https://picsum.photos/id/${i + 20}/200/150`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                alt="navigation thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
