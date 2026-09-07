import React from 'react';
import stackImage from '../assets/about/yusuf-avatar.png';
import { aboutContent } from '../data/portfolioData';

const About = () => {
  const techStack = aboutContent.techStack ?? [];
  return (
    <section id="about" className="bg-[linear-gradient(180deg,#efefef_0%,#efefef_100%)] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[460px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full pb-24">
            {/* Lanyard string */}
            <div className="absolute -top-24 left-1/2 w-4 h-60 bg-[#666666] transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-5 left-1/2 w-8 h-14 bg-[#d0d0d0] rounded border border-[#999999] transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(13,148,136,0.16)]"></div>
            
            {/* Badge Card */}
            <div className="bg-[linear-gradient(180deg,#1a1a1a_0%,#666666_100%)] w-full max-w-[360px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(13,148,136,0.12)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 translate-y-6">
              {/* Cutout Hole */}
              <div className="absolute -top-4 left-1/2 w-20 h-8 bg-[#1a1a1a] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-10 h-2.5 bg-white/20 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-[#0d9488] border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="ANTO SAM CHRIST A — AI Engineer & Builder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-[#1a1a1a] mt-8 md:mt-0 relative z-20 min-w-0">
          
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-[#666666]"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {techStack.map((item, index) => (
              <div
                key={item.name}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 75}
                className="group rounded-2xl bg-white/60 backdrop-blur-sm border border-white/70 shadow-[0_12px_30px_rgba(102,102,102,0.08)] p-4 flex flex-col items-center justify-center min-h-[120px] text-center hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(102,102,102,0.14)] transition-all duration-300"
              >
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1a1a1a] text-white flex items-center justify-center font-black text-xs tracking-wider px-2">
                    {item.name}
                  </div>
                )}
                <span className="mt-3 text-[11px] md:text-xs font-bold uppercase tracking-wide text-[#1a1a1a]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#f5f5f5]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#0d9488] opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#0d9488] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
