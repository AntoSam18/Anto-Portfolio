import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef, onOpen, badge, accent }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const triggerY = cardRect.top - containerRect.top + 50;
    const lineTipY = latest * containerRect.height;
    if (lineTipY >= triggerY && !isActive) setIsActive(true);
    else if (lineTipY < triggerY && isActive) setIsActive(false);
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#1a1a1a] border-[#666666] shadow-[0_20px_50px_rgba(26,26,26,0.22)]'
          : 'bg-white border border-[#d0d0d0] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-[#0d9488] to-[#0d9488] rounded-full shadow-[inset_0_2px_4px_rgba(13,148,136,0.18)] absolute top-4 border border-[#d0d0d0] z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#1a1a1a] rounded-full opacity-20" />
      </div>

      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${isActive ? 'bg-[#1a1a1a]/50' : 'bg-[#efefef]'}`}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d0d0d0] bg-white px-3 py-1 text-[11px] font-black tracking-[0.22em] text-[#666666]">
            <span>{badge || '🏆'}</span>
            <span>{accent || 'ACH'}</span>
          </span>
          <span className={`text-xl font-bold font-serif italic transition-colors duration-700 ${isActive ? 'text-[#f5f5f5]' : 'text-[#999999]'}`}>
            {number}
          </span>
        </div>

        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-[#1a1a1a]'}`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? 'text-[#f5f5f5]' : 'text-[#666666]'}`}>
          {text}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className={`mt-7 inline-flex items-center gap-2 self-start rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
            isActive
              ? 'border-white/20 bg-white/10 text-white hover:bg-white/15'
              : 'border-[#d0d0d0] bg-white text-[#1a1a1a] hover:bg-[#efefef] hover:shadow-[0_8px_18px_rgba(26,26,26,0.08)]'
          }`}
        >
          View Details
          <span className="text-base leading-none">→</span>
        </button>
      </div>
    </div>
  );
};

const DetailsModal = ({ item, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!item) return null;
  const credentialUrl = item.credentialUrl || item.image;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
      <button type="button" aria-label="Close modal backdrop" className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" onClick={onClose} />
      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#d0d0d0] bg-[#f5f5f5] shadow-[0_30px_80px_rgba(26,26,26,0.18)]">
        <div className="flex items-start justify-between gap-4 border-b border-[#d0d0d0] px-6 py-5 md:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-[#999999] uppercase">Achievement Details</p>
            <h3 className="mt-2 text-2xl md:text-4xl font-black leading-tight text-[#2a2a2a]">{item.detailTitle}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#d0d0d0] bg-white/80 p-3 text-[#1a1a1a] transition hover:bg-white hover:shadow-[0_10px_20px_rgba(26,26,26,0.08)]"
            aria-label="Close modal"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid gap-6 px-6 py-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:px-8 md:py-8">
          <div className="rounded-[1.6rem] border border-[#d0d0d0] bg-white p-3 shadow-[0_10px_26px_rgba(26,26,26,0.08)]">
            <div className="overflow-hidden rounded-[1.3rem] bg-[#efefef]">
              <img src={item.image} alt={item.detailTitle} className="h-[360px] w-full object-contain bg-[#f5f5f5]" />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-5 text-[#2a2a2a]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#d0d0d0] bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#666666]">
                  {item.detailTime}
                </span>
                <span className="rounded-full border border-[#ccf4f1] bg-[#ccf4f1] px-4 py-2 text-xs font-bold tracking-wide text-[#0f766e]">
                  Verified Recognition
                </span>
              </div>
              <p className="text-base md:text-lg leading-8 text-[#666666]">{item.detailDescription}</p>
              <p className="rounded-[1.25rem] border border-[#d0d0d0] bg-white px-5 py-4 text-sm md:text-base leading-7 text-[#666666] shadow-[0_8px_18px_rgba(26,26,26,0.05)]">
                {item.detailExtra}
              </p>
            </div>

            <div className="flex justify-end">
              <div className="flex flex-wrap justify-end gap-3">
                <a
                  href={credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a] bg-[#1a1a1a] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_10px_20px_rgba(26,26,26,0.14)]"
                >
                  View Credential
                  <span className="text-lg leading-none">↗</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full border border-[#d0d0d0] bg-white px-5 py-3 text-sm font-bold text-[#1a1a1a] transition-all duration-300 hover:bg-[#efefef] hover:shadow-[0_10px_20px_rgba(26,26,26,0.08)]"
                >
                  Close
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  const flowItems = [
    skillsContent.cards[0],
    skillsContent.cards[1],
    skillsContent.cards[2],
    skillsContent.cards[3],
  ];
  const positions = [
    'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
  ];
  const aosTypes = ['fade-left', 'fade-right', 'fade-left', 'fade-right'];
  const aosDelays = ['100', '200', '300', '400'];

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-[linear-gradient(180deg,#f5f5f5_0%,#efefef_100%)] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#66666608_1px,transparent_1px),linear-gradient(to_bottom,#66666608_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-[#d0d0d0] rounded-full px-5 py-1.5 text-sm text-[#666666] font-bold mb-8 shadow-sm bg-white/75">
            {skillsContent.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight relative">
            {skillsContent.heading}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-[#666666] text-base md:text-lg max-w-sm font-medium leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" viewBox="0 0 1000 1350" preserveAspectRatio="none">
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="#0d9488" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 10" mask="url(#path-mask)" className="drop-shadow-sm" />
        </svg>

        <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" viewBox="0 0 4 100" preserveAspectRatio="none">
          <path d="M 2,0 L 2,100" fill="none" stroke="#0d9488" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="path-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {flowItems.map((card, index) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={positions[index]}
              aosType={aosTypes[index]}
              aosDelay={aosDelays[index]}
              pathLength={pathLength}
              containerRef={containerRef}
              onOpen={() => setActiveItem(card)}
              badge={card.badge}
              accent={card.accent}
            />
          ))}

          <a
            href="#/achievements"
            className="hidden md:inline-flex absolute top-[1240px] left-[58%] items-center gap-2 rounded-full border border-[#1a1a1a] bg-white px-5 py-3 text-sm font-bold text-[#1a1a1a] shadow-[0_10px_24px_rgba(26,26,26,0.08)] transition-all duration-300 hover:bg-[#efefef] hover:shadow-[0_14px_28px_rgba(26,26,26,0.12)]"
          >
            See all my achievements
            <span className="text-lg leading-none">→</span>
          </a>
        </div>
      </div>
      <DetailsModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};

export default Services;
