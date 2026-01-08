import React from 'react';
import { Mail, Phone, User, UserPlus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-slate-300 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0">
          
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm tracking-wide">
            <a 
              href="tel:(519) 875-9822" 
              className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-200 group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              <span className='group-hover:scale-110'>(519) 875-9822</span>
            </a>
            
            <a 
              href="mailto:Support@info.com" 
              className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-200 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className='group-hover:scale-110'>Support@info.com</span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-sm font-semibold hover:text-amber-400 transition-colors duration-200 ">
              <User size={22}/>
              Login
            </button>
            
            <button className="flex items-center gap-2 bg-amber-400 hover:text-black text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg active:scale-95">
              <UserPlus size={22} />
              Register
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;