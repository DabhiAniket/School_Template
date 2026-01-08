import React from 'react';
import { Calendar, GraduationCap, Star } from 'lucide-react';

const CourseCard = ({
  title,
  instructor,
  description,
  duration,
  level,
  image
}) => {
  return (
    /* Change 1: Changed w-[440px] to w-full (mobile) and md:max-w-[440px] (desktop).
       Added aspect-ratio for better height control across devices.
    */
    <div className="relative w-full max-w-md mx-auto h-[400px] md:h-[470px] overflow-hidden group cursor-pointer shadow-lg">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay Box */}
      <div
        className="
          absolute inset-y-6 md:inset-y-8 left-0 
          w-[85%] md:w-4/5
          bg-black/70 backdrop-blur-sm
          border-r-2 border-yellow-500
          p-5 md:p-6 flex flex-col justify-between text-white
          opacity-0 translate-x-[-30px]
          transition-all duration-500 ease-out
          group-hover:opacity-100 group-hover:translate-x-0
        "
      >
        <div className="space-y-3 md:space-y-4">

          {/* Header */}
          <header>
            <h3 className="text-lg md:text-xl font-semibold tracking-wide leading-tight">
              {title}
            </h3>
            <p className="text-yellow-500 text-xs md:text-sm font-medium mt-1">
              ({instructor})
            </p>
          </header>

          {/* Description - Adjusted line clamp for smaller heights */}
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3 italic">
            {description}
          </p>

          {/* Meta Info */}
          <div className="space-y-2 md:space-y-3 pt-1">
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <Calendar size={16} className="shrink-0" />
              <span>Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <GraduationCap size={16} className="shrink-0" />
              <span>Level: {level}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-1 pt-1">
            {[1, 2, 3, 4].map((n) => (
              <Star
                key={n}
                size={14}
                className="fill-yellow-500 text-yellow-500"
              />
            ))}
            <Star size={14} className="text-gray-400" />
          </div>
        </div>

        {/* Action Button */}
        <button
          className="
            w-fit bg-yellow-500 hover:bg-yellow-400
            text-black font-bold py-2 px-4 md:px-6
            uppercase text-[10px] md:text-xs tracking-widest
            transition-colors mt-2 md:mt-4
          "
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

// import React from 'react';
// import { Calendar, GraduationCap, Star } from 'lucide-react';

// const CourseCard = ({
//   title,
//   instructor,
//   description,
//   duration,
//   level,
//   image
// }) => {
//   return (
//     <div className="relative w-[440px] h-[470px] overflow-hidden group cursor-pointer shadow-lg">

//       {/* Background Image */}
//       <img
//         src={image}
//         alt={title}
//         className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//       />

//       {/* Dark Overlay Box (Hidden → Show on Hover) */}
//       <div
//         className="
//           absolute inset-y-8 left-0 w-4/5
//           bg-black/70 backdrop-blur-sm
//           border-r-2 border-yellow-500
//           p-6 flex flex-col justify-between text-white
//           opacity-0 translate-x-[-30px]
//           transition-all duration-500 ease-out
//           group-hover:opacity-100 group-hover:translate-x-0
//         "
//       >
//         <div className="space-y-4">

//           {/* Header */}
//           <header>
//             <h3 className="text-xl font-semibold tracking-wide">
//               {title}
//             </h3>
//             <p className="text-yellow-500 text-sm font-medium mt-1">
//               ({instructor})
//             </p>
//           </header>

//           {/* Description */}
//           <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 italic">
//             {description}
//           </p>

//           {/* Meta Info */}
//           <div className="space-y-3 pt-2">
//             <div className="flex items-center gap-3 text-sm">
//               <Calendar size={18} />
//               <span>Course Duration : {duration}</span>
//             </div>
//             <div className="flex items-center gap-3 text-sm">
//               <GraduationCap size={18} />
//               <span>Degree Level : {level}</span>
//             </div>
//           </div>

//           {/* Rating */}
//           <div className="flex gap-1 pt-2">
//             {[1, 2, 3, 4].map((n) => (
//               <Star
//                 key={n}
//                 size={16}
//                 className="fill-yellow-500 text-yellow-500"
//               />
//             ))}
//             <Star size={16} className="text-gray-400" />
//           </div>
//         </div>

//         {/* Action Button */}
//         <button
//           className="
//             w-fit bg-yellow-500 hover:bg-yellow-400
//             text-black font-bold py-2 px-6
//             uppercase text-xs tracking-widest
//             transition-colors mt-4
//           "
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


