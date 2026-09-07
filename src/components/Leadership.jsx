import React from 'react';
import { leadershipList } from '../data/portfolioData';

const LeadershipItem = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const cardColumn = isEven ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-3 md:justify-self-start';
  const textAlign = isEven ? 'md:text-right' : 'md:text-left';
  const justifyBadge = isEven ? 'md:justify-end' : 'md:justify-start';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_64px_1fr] items-start mb-10 md:mb-12 w-full group">
      {/* Timeline line dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#0d9488] rounded-full border-4 border-[#f5f5f5] z-30 shadow-[0_0_15px_#0d9488] group-hover:scale-125 transition-transform duration-300" />
      <div className="hidden md:block md:col-start-2 md:row-start-1 self-stretch justify-self-center w-[2px] bg-gradient-to-b from-[#0d9488] via-[#0d9488]/60 to-[#0d9488]" />

      {/* Card Content Side */}
      <div 
        data-aos={isEven ? "fade-right" : "fade-left"}
        className={`w-full pl-12 md:pl-0 md:w-full ${cardColumn} ${textAlign}`}
      >
        <div className="bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_52%,#efefef_100%)] backdrop-blur-md border border-[#d0d0d0] rounded-2xl p-6 hover:border-[#0d9488]/45 hover:shadow-[0_15px_35px_rgba(13,148,136,0.14)] transition-all duration-500">
          <div className={`flex flex-wrap gap-2 items-center mb-3 ${justifyBadge}`}>
            <span className="bg-[#0d9488]/20 text-[#1a1a1a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#0d9488]/35">
              {item.badge}
            </span>
          </div>
          
          <h3 className="text-[#1a1a1a] text-xl font-black mb-1 tracking-tight group-hover:text-[#0d9488] transition-colors">
            {item.title}
          </h3>
          <p className="text-[#999999] text-xs font-bold font-mono tracking-wider uppercase mb-4">
            {item.role}
          </p>
          <p className="text-[#666666] text-sm leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_48%,#efefef_100%)] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#66666608_1px,transparent_1px),linear-gradient(to_bottom,#66666608_1px,transparent_1px)] bg-[size:80px_80px]">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#efefef]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-[#d0d0d0] rounded-full px-5 py-1.5 text-sm text-[#666666] font-bold mb-6 shadow-sm bg-white/70 backdrop-blur-sm">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-4 uppercase">
            Leadership & Engagement
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Coordinating events, leading team operations, and participating in tech summits.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          
          {/* Timeline Items */}
          <div className="w-full">
            {leadershipList.map((item, index) => (
              <LeadershipItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
