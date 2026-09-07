import React from 'react';
import { internshipsList, internshipCredentialsUrl } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_55%,#efefef_100%)] backdrop-blur-md border border-[#d0d0d0] rounded-3xl p-8 hover:scale-[1.02] hover:bg-white hover:shadow-[0_20px_50px_rgba(26,26,26,0.12)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-[#999999] text-xs font-mono font-bold tracking-widest uppercase">
          {intern.duration}
        </span>
        <span className="bg-[#0d9488]/20 text-[#1a1a1a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#0d9488]/35">
          Internship
        </span>
      </div>
      <h3 className="text-[#1a1a1a] text-2xl font-black mb-1 tracking-tight">
        {intern.role}
      </h3>
      <p className="text-[#666666] text-sm font-black tracking-wide mb-6 uppercase">
        {intern.organization}
      </p>

      {/* Focus areas */}
      <div className="mb-6">
        <h4 className="text-[#666666] text-xs font-bold uppercase tracking-wider mb-2">Focus:</h4>
        <ul className="text-[#1a1a1a] text-sm font-medium space-y-1 pl-4 list-disc marker:text-[#0d9488]">
          {intern.focus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-4 border-t border-[#d0d0d0]">
      <h4 className="text-[#666666] text-xs font-bold uppercase tracking-wider mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-[#1a1a1a] bg-white/70 rounded-full border border-[#d0d0d0] hover:bg-[#ccf4f1]/40 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <a
      href={intern.credentialsUrl || internshipCredentialsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ccf4f1]/30 border border-[#ccf4f1]/55 text-[#1a1a1a] font-bold hover:bg-[#ccf4f1]/45 hover:shadow-[0_0_18px_rgba(204,244,241,0.25)] transition-all duration-300"
    >
      View Credentials
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7m0-7L10 14" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7v10a2 2 0 002 2h10" />
      </svg>
    </a>
  </div>
);

const Internships = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#efefef_0%,#efefef_48%,#efefef_100%)] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#66666608_1px,transparent_1px),linear-gradient(to_bottom,#66666608_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#f5f5f5]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-[#666666] text-base md:text-lg font-semibold max-w-lg mx-auto">
            Practical internships where I applied engineering principles and built real-world assets.
          </p>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-[#0d9488] opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
