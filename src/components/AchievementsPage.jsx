import { useEffect, useState } from 'react';
import { skillsContent } from '../data/portfolioData';
import './AchievementsPage.css';
import './AchievementsPageMobile.css';
import './AchievementsPagePosition.css';

const MedalMark = () => (
  <div className="achievement-medal" aria-hidden="true">
    <div className="medal-ribbon medal-ribbon-left" />
    <div className="medal-ribbon medal-ribbon-right" />
    <div className="medal-disc"><span className="medal-star">★</span></div>
    <div className="medal-base" />
  </div>
);

const AchievementCard = ({ item, index, onOpen }) => (
  <article className={`achievement-card achievement-card-${index + 1}`}>
    <div className="achievement-card-topline">
      <span className="achievement-tag"><span className="achievement-tag-dot" />{item.accent}</span>
      <span className="achievement-number">{item.number}</span>
    </div>
    <div className="achievement-image-frame"><img src={item.image} alt={item.detailTitle} /></div>
    <div className="achievement-card-copy">
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <button type="button" onClick={onOpen}>View Details <span aria-hidden="true">↗</span></button>
    </div>
  </article>
);

const DetailsModal = ({ item, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!item) return null;
  return (
    <div className="achievement-modal" role="dialog" aria-modal="true" aria-labelledby="achievement-modal-title">
      <button type="button" className="achievement-modal-backdrop" aria-label="Close modal" onClick={onClose} />
      <div className="achievement-modal-panel">
        <div className="achievement-modal-header">
          <div><p>Achievement Details</p><h2 id="achievement-modal-title">{item.detailTitle}</h2></div>
          <button type="button" className="achievement-modal-close" onClick={onClose} aria-label="Close modal">X</button>
        </div>
        <div className="achievement-modal-content">
          <div className="achievement-modal-image"><img src={item.image} alt={item.detailTitle} /></div>
          <div className="achievement-modal-copy">
            <div className="achievement-modal-pills"><span>{item.detailTime}</span><span>Verified Recognition</span></div>
            <p>{item.detailDescription}</p>
            <div className="achievement-modal-extra">{item.detailExtra}</div>
            <div className="achievement-modal-actions">
              <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">View Credential ↗</a>
              <button type="button" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementsPage = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <main className="achievements-page">
      <div className="achievement-stars" aria-hidden="true" />
      <div className="achievement-orbit achievement-orbit-one" aria-hidden="true" />
      <div className="achievement-orbit achievement-orbit-two" aria-hidden="true" />
      <div className="achievement-orbit achievement-orbit-three" aria-hidden="true" />
      <button type="button" className="achievement-back" onClick={onBack}><span aria-hidden="true">←</span> Back to portfolio</button>
      <section className="achievement-stage" aria-labelledby="achievements-title">
        <div className="achievement-heading">
          <span className="achievement-eyebrow">MILESTONES</span>
          <h1 id="achievements-title">Ten recognitions, <em>earned one round at a time</em></h1>
          <p>Certificates, competitions and milestones from national innovation programs,<br className="desktop-break" /> competitive programming arenas, research stages and campus events.</p>
        </div>
        <div className="achievement-centerpiece">
          <MedalMark />
          <div className="achievement-center-label"><span>{String(skillsContent.cards.length).padStart(2, '0')} RECOGNITIONS · 2023 — 2026</span></div>
        </div>
        <div className="achievement-grid">
          {skillsContent.cards.map((item, index) => <AchievementCard key={item.number} item={item} index={index} onOpen={() => setActiveItem(item)} />)}
        </div>
      </section>
      <DetailsModal item={activeItem} onClose={() => setActiveItem(null)} />
    </main>
  );
};

export default AchievementsPage;
