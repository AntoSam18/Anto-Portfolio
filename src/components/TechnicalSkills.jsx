import React from 'react';
import { technicalSkills } from '../data/portfolioData';

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_55%,#efefef_100%)] backdrop-blur-md border border-[#d0d0d0] rounded-2xl p-6 hover:scale-[1.02] hover:border-[#999999]/40 hover:shadow-[0_20px_50px_rgba(26,26,26,0.1)] transition-all duration-500"
  >
    <h3 className="text-[#1a1a1a] text-lg font-black tracking-tight mb-5 pb-2 border-b border-[#d0d0d0] uppercase">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 text-xs md:text-sm font-semibold text-[#1a1a1a] bg-[#ccf4f1]/35 border border-[#ccf4f1]/45 rounded-full hover:bg-[#ccf4f1]/55 transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[linear-gradient(180deg,#efefef_0%,#f5f5f5_50%,#efefef_100%)] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#66666608_1px,transparent_1px),linear-gradient(to_bottom,#66666608_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0d9488]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#0d9488]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-[#d0d0d0] rounded-full px-5 py-1.5 text-sm text-[#666666] font-bold mb-6 shadow-sm bg-white/70 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-4 uppercase">
            Skills
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A focused view of my AI, agent, backend, data, and engineering toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
