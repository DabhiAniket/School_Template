import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import bg1 from '../assets/homeBg.jpg';
import bg2 from '../assets/homeBg2.jpg'; 

const Home = () => {
  const images = [bg1, bg2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-500 bg-blend-multiply transition-all duration-1000 ease-in-out" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex items-center h-full w-full text-white px-6 sm:px-12 md:px-16 lg:px-24">
        <div className='flex flex-col w-full space-y-4 md:space-y-6'>
          {/* Responsive Text: Smaller on mobile (text-3xl), larger on laptops (lg:text-7xl) */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter font-serif leading-tight'>
            Welcome <br className="hidden sm:block"/> To <br className="hidden sm:block"/> Our <span className="text-amber-400">University</span>
          </h1>

          {/* Responsive Paragraph: Max-width changes so text doesn't stretch too long on desktop */}
          <p className='text-base sm:text-lg md:text-xl font-light tracking-wide max-w-sm md:max-w-xl lg:max-w-2xl opacity-90 border-l-4 border-amber-400 pl-4 md:pl-6 my-4 md:my-6'>
            We believe nothing is more important than education. Join a community 
            dedicated to the pursuit of knowledge and the development of leaders.
          </p>

          <div className="flex gap-4 pt-2 md:pt-4">
            <button className='px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-bold bg-amber-400 text-black hover:bg-white transition-all duration-300 shadow-lg uppercase'>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION ARROWS (Hidden on very small screens to avoid clutter) --- */}
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-black/20 text-white/70 hover:bg-amber-400 hover:text-black transition-all duration-300"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-black/20 text-white/70 hover:bg-amber-400 hover:text-black transition-all duration-300"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>

      {/* Progress Indicators (Bottom Dots) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${
              index === currentIndex ? "w-8 md:w-12 bg-amber-400" : "w-3 md:w-4 bg-white/40"
            }`}
          />
        ))}
      </div>

    </div>   
  );
};

export default Home;

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Lucide icons
// import bg1 from '../assets/homeBg.jpg';
// import bg2 from '../assets/homeBg2.jpg'; 


// const Home = () => {
//   const images = [bg1, bg2];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to go to next slide
//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   }, [images.length]);

//   // Function to go to previous slide
//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   // Automatic transition logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [nextSlide]);

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-black">
      
//       {/* Background Image Layer */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-500 bg-blend-multiply transition-all duration-1000 ease-in-out" 
//         style={{ backgroundImage: `url(${images[currentIndex]})` }}
//       />

//       {/* Content Layer */}
//       <div className="relative z-10 flex items-center h-full w-full text-white px-6 md:px-16 lg:px-24">
//         <div className='flex flex-col w-full space-y-4'>
//           <h1 className='text-4xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter font-serif'>
//             Welcome <br/> To <br/> Our <span className="text-amber-400">University</span>
//           </h1>

//           <p className='text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-90 border-l-4 border-amber-400 pl-6 my-6'>
//             We believe nothing is more important than education. Join a community 
//             dedicated to the pursuit of knowledge and the development of leaders.
//           </p>

//           <div className="flex gap-4 pt-4">
//             <button className='px-8 py-4 text-lg font-bold bg-amber-400 text-black hover:bg-white transition-all duration-300 shadow-lg'>
//               LEARN MORE
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- NAVIGATION ARROWS --- */}
      
//       {/* Left Arrow */}
//       <button 
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white/70 hover:bg-amber-400 hover:text-black transition-all duration-300"
//       >
//         <ChevronLeft size={48} strokeWidth={1.5} />
//       </button>

//       {/* Right Arrow */}
//       <button 
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white/70 hover:bg-amber-400 hover:text-black transition-all duration-300"
//       >
//         <ChevronRight size={48} strokeWidth={1.5} />
//       </button>

//       {/* Progress Indicators (Bottom Dots) */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-1.5 transition-all duration-500 rounded-full ${
//               index === currentIndex ? "w-12 bg-amber-400" : "w-4 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>

//     </div>   
//   );
// };

// export default Home;

