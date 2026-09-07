import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const hireMeMailto = `mailto:antosamchrist18@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello ANTO SAM CHRIST A,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;
  const useDarkForeground = isScrolled && !isOpen;
  const foregroundClass = useDarkForeground ? 'text-[#0f766e]' : 'text-white';
  const hoverForegroundClass = useDarkForeground ? 'hover:text-[#1a1a1a]' : 'hover:text-[#f5f5f5]';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#1a1a1a] py-4'
          : isScrolled
            ? 'bg-[#1a1a1a]/15 backdrop-blur-md py-4 border-b border-[#0f766e]/35'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className={`${foregroundClass} text-2xl font-black tracking-tight whitespace-nowrap`}>
            {personalInfo.brandName}<span className={foregroundClass}>.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className={`${foregroundClass} ${hoverForegroundClass} font-medium relative group transition-colors duration-300`}
            >
              {link}
              {/* Smooth hover underline */}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${useDarkForeground ? 'bg-[#0f766e]' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className={useDarkForeground
              ? 'px-6 py-2.5 rounded-full bg-[#ccf4f1]/35 border border-[#0f766e]/60 text-[#0f766e] font-semibold hover:bg-[#ccf4f1] hover:border-[#0f766e] transition-all duration-300'
              : 'px-6 py-2.5 rounded-full bg-white/15 border border-white/60 text-white font-semibold hover:bg-white/25 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.22)] transition-all duration-300'}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${foregroundClass} focus:outline-none p-2`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#1a1a1a] shadow-2xl border-t border-[#0f766e]/25' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#f5f5f5] font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#1a1a1a] font-black hover:bg-[#f5f5f5] transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
