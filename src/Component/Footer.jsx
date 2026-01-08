import React from 'react';
import flickr1 from '../assets/flickr1.jpg';
import flickr2 from '../assets/flickr2.jpg';
import flickr3 from '../assets/flickr3.jpg';
import flickr4 from '../assets/flickr4.jpg';
import flickr5 from '../assets/flickr5.jpg';
import flickr6 from '../assets/flickr6.jpg';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Rss, 
  Clock, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  Send
} from 'lucide-react';

const images = [flickr1, flickr2, flickr3, flickr4, flickr5, flickr6];

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN */}
        <div className="md:col-span-7 space-y-10">
          {/* Logo and Socials */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* Placeholder for your logo */}
              <div className="w-12 h-12 bg-yellow-500 rounded-sm flex items-center justify-center text-black font-bold text-2xl">L</div>
              <div>
                <h2 className="text-white text-2xl font-bold tracking-wider">EDUMAX</h2>
                <p className="text-[10px] uppercase text-yellow-500 tracking-widest">Education Of Best</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Facebook size={18} className="hover:text-white cursor-pointer transition-colors duration-800" />
              <Twitter size={18} className="hover:text-white cursor-pointer transition-colors duration-800" />
              <Instagram size={18} className="hover:text-white cursor-pointer transition-colors duration-800" />
              <Linkedin size={18} className="hover:text-white cursor-pointer transition-colors duration-800" />
              <Rss size={18} className="hover:text-white cursor-pointer transition-colors duration-800" />
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet these men promptly escaped from maximum security stockade to the Los Angeles underground. These Happy Days are yours and mine Happy Days elites consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor hates magna ali qua.
          </p>

          {/* Up Coming Events */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-2 relative">
              <h3 className="text-white text-xl font-semibold">Up Coming Events</h3>
              <div className="absolute left-0 bottom-0 w-12 h-[2px] bg-yellow-500"></div>
              <div className="flex gap-1">
                <button className="bg-[#262626] p-1.5 hover:bg-yellow-500 hover:text-black transition-all duration-800">
                  <ChevronLeft size={16} />
                </button>
                <button className="bg-[#262626] p-1.5 hover:bg-yellow-500 hover:text-black transition-all duration-800">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="pt-2">
               <p className="text-sm">These men promptly escaped from maximum security stockade to the Los Angeles underground.</p>
               <div className="flex flex-wrap items-center gap-6 mt-4 text-[11px] uppercase tracking-wider">
                  <span className="flex items-center gap-2"><Clock size={14} className="text-yellow-500"/> 8:00 Am - 5:00 Pm</span>
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-yellow-500"/> 01 May 2016</span>
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-yellow-500"/> London, UK</span>
                  <a href="#" className="ml-auto text-yellow-500 font-bold hover:text-white transition-colors">Read More</a>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-5 space-y-10">
          {/* News Letters */}
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-2 relative">
              <h3 className="text-white text-xl font-semibold">News Letters</h3>
              <div className="absolute left-0 bottom-0 w-12 h-[2px] bg-yellow-500"></div>
            </div>
            <div className="flex h-12">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#111] border-none px-4 flex-grow outline-none italic text-sm text-gray-300"
              />
              <button className="bg-yellow-500 text-black font-bold px-8 hover:bg-white transition-colors text-xs uppercase flex items-center gap-2 transition-colors duration-600">
                Sign In
              </button>
            </div>
          </div>

          {/* Flicker Gallery */}
          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-2 relative">
              <h3 className="text-white text-xl font-semibold">Our Flicker</h3>
              <div className="absolute left-0 bottom-0 w-12 h-[2px] bg-yellow-500"></div>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {images.map((image,i) => (
                <div key={i} className="aspect-square border border-gray-800 overflow-hidden">
                   <img 
                    src={image} 
                    alt="flicker gallery" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all cursor-pointer duration-800" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em]">
        <p>Copyright © 2016. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-bold">
          <a href="#" className="hover:text-yellow-500 transition-colors">Home</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Cours</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Events</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Blog</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;