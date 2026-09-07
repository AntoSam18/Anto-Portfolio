import React from 'react';
import { contentCreation } from '../data/portfolioData';

const CreatorCard = ({ category, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 80}
    className="group h-full rounded-[28px] border border-[#d0d0d0] bg-white/80 p-4 md:p-5 shadow-[0_16px_40px_rgba(26,26,26,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(26,26,26,0.14)]"
  >
    <div className="overflow-hidden rounded-[22px] border border-[#efefef] bg-[#f5f5f5] shadow-[0_8px_22px_rgba(26,26,26,0.08)]">
      <img
        src={category.image}
        alt={category.title}
        className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>

    <div className="px-1 pb-1 pt-4">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="flex items-center gap-2 font-semibold text-[#666666]">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0d9488]" />
          {category.stats}
        </span>
        <span className="rounded-full bg-[#f5f5f5] px-3 py-1 text-xs font-bold tracking-wide text-[#0f766e]">
          {category.tag}
        </span>
      </div>

      <h3 className="text-[22px] md:text-[26px] font-black leading-tight tracking-tight text-[#1a1a1a]">
        {category.title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-[#666666]">
        {category.description}
      </p>

      <a
        href={category.credentialUrl || category.image}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-between rounded-2xl border border-[#ccf4f1] bg-[#f5f5f5] px-4 py-3 text-sm font-bold text-[#0f766e] transition-colors hover:bg-[#f5f5f5]"
      >
        <span>View Credential</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 5h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
);

const ContentCreator = () => {
  return (
    <section id="creator" className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_46%,#efefef_100%)] px-6 pb-32 pt-24 font-sans bg-[linear-gradient(to_right,#66666608_1px,transparent_1px),linear-gradient(to_bottom,#66666608_1px,transparent_1px)] bg-[size:80px_80px] md:px-12">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0d9488]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-[#d0d0d0] rounded-full px-5 py-1.5 text-sm text-[#666666] font-bold mb-6 shadow-sm bg-white/70 backdrop-blur-sm">
            {contentCreation.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
            {contentCreation.heading}
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            {contentCreation.description}
          </p>
        </div>

        {/* Content Creation Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
          {contentCreation.categories.map((category, index) => (
            <div key={category.title} className="block">
              <CreatorCard category={category} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContentCreator;
