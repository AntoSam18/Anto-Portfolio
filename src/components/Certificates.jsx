import React from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <div 
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 md:p-5 border border-[#d0d0d0] hover:border-[#999999] hover:scale-[1.02] hover:shadow-[0_18px_45px_rgba(26,26,26,0.12)] transition-all duration-500 cursor-default group flex flex-col gap-4 min-h-[360px]"
  >
    <div className="rounded-2xl overflow-hidden border border-[#d0d0d0] bg-[#efefef] shadow-[0_8px_24px_rgba(26,26,26,0.08)]">
      <div className="aspect-[4/3] w-full bg-[#f5f5f5] flex items-center justify-center">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`${cert.name} certificate`}
            className="w-full h-full object-contain bg-white"
          />
        ) : (
          <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
            {cert.icon}
          </span>
        )}
      </div>
    </div>

    <div className="px-1">
      <h3 className="text-[#1a1a1a] font-black text-lg md:text-xl leading-tight mb-1 group-hover:text-[#1a1a1a] transition-colors">
        {cert.name}
      </h3>
      <p className="text-[#666666] text-xs md:text-sm font-semibold uppercase tracking-wider">
        {cert.issuer}
      </p>
      {cert.monthYear && (
        <p className="mt-2 inline-flex items-center rounded-full bg-[#efefef] px-3 py-1 text-[11px] md:text-xs font-bold text-[#1a1a1a] border border-[#d0d0d0]">
          {cert.monthYear}
        </p>
      )}
    </div>

    <a
      href={cert.credentialsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#efefef] border border-[#d0d0d0] text-[#1a1a1a] text-xs md:text-sm font-bold hover:bg-white hover:shadow-[0_8px_20px_rgba(26,26,26,0.08)] transition-all duration-300 self-start"
    >
      View Credentials
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

const Certificates = () => {
  return (
    <section className="bg-[#efefef] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top (transition from dark Projects section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#1a1a1a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-[#666666] text-base md:text-lg font-semibold max-w-lg mx-auto">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
            />
          ))}
        </div>

      </div>

      {/* Decorative stars (matching About section) */}
      <div className="absolute top-16 left-6 md:left-16 text-[#999999] opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-[#999999] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;