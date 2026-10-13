import React from 'react';
import { TEMPLE_TIMINGS, OFFERINGS_GUIDE } from '../data/templeTimingsData';
import { SITE_CONFIG } from '../config/siteConfig';

interface TempleTimingsSectionProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const TempleTimingsSection: React.FC<TempleTimingsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="timings" className="timings-section">
      <div className="section-header centered reveal">
        <div className="section-label">Temple Schedule & Etiquette</div>
        <h2 className="section-heading">Darshan & Aarti Timings</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          The temple remains open every day from 5:00 AM to 9:00 PM. Plan your spiritual schedule around these auspicious Aarti timings.
        </p>
      </div>

      <div className="timings-container">
        <div className="timings-table-card reveal">
          <div className="table-card-header">
            <div>
              <h3>Daily Aarti Schedule</h3>
              <p>Maa Baglamukhi Temple, Nalkheda</p>
            </div>
            <div className="temple-status-badge">
              <span className="live-indicator"></span>
              <span>Open Daily: 5:00 AM – 9:00 PM</span>
            </div>
          </div>

          <div className="timings-list">
            {TEMPLE_TIMINGS.map((item, index) => (
              <div key={index} className="timing-row">
                <div className="timing-time-col">
                  <span className="timing-clock">🕒</span>
                  <span className="timing-time">{item.time}</span>
                </div>
                <div className="timing-details-col">
                  <h4 className="timing-event">{item.event}</h4>
                  {item.hindiEvent && <div className="timing-hindi">{item.hindiEvent}</div>}
                  <p className="timing-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="table-card-footer">
            <span>✨ Special note: During Navratri and Chaitra festivals, darshan remains open extended hours.</span>
            <button
              type="button"
              onClick={() => onOpenEnquiry('temple-visit-guidance')}
              className="btn-link"
            >
              Get Darshan Guidance →
            </button>
          </div>
        </div>

        <div className="offerings-card reveal">
          <h3>Auspicious Offerings (प्रसाद एवं सामग्री)</h3>
          <p className="offerings-intro">
            Devotees traditionally offer items dear to Goddess Baglamukhi (Pitambara) to invoke her divine protection:
          </p>

          <div className="offerings-grid">
            {OFFERINGS_GUIDE.map((offering, idx) => (
              <div key={idx} className="offering-item">
                <div className="offering-bullet">🟡</div>
                <div>
                  <h4>{offering.item}</h4>
                  <span className="offering-hindi">{offering.hindi}</span>
                  <p>{offering.significance}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="offerings-cta">
            <p>Need pre-arranged puja thali or pure samagri at the temple?</p>
            <a
              href={SITE_CONFIG.getWhatsappUrl('Jai Maa Baglamukhi! I need assistance with Puja Samagri and Darshan guidance in Nalkheda.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Request Puja Samagri via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleTimingsSection;
