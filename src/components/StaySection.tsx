import React from 'react';
import { STAY_OPTIONS } from '../data/servicesData';
import { SITE_CONFIG } from '../config/siteConfig';

interface StaySectionProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const StaySection: React.FC<StaySectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="stay" className="stay-section">
      <div className="section-header centered reveal">
        <div className="section-label">Accommodation & Dharamshala</div>
        <h2 className="section-heading">Comfortable Stay Assistance</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Trusted, hygienic accommodation options close to Maa Baglamukhi Temple for individuals, families, and pilgrimage groups.
        </p>
      </div>

      <div className="stay-grid">
        {STAY_OPTIONS.map((stay) => (
          <div key={stay.id} className="stay-card reveal">
            <div className="stay-img">
              <span className="stay-img-emoji">{stay.icon}</span>
              <span className="stay-distance-pill">📍 {stay.distance}</span>
            </div>
            <div className="stay-info">
              <h3>{stay.title}</h3>
              {stay.hindiTitle && <div className="stay-hindi-title">{stay.hindiTitle}</div>}
              <p>{stay.description}</p>

              <div className="stay-tags">
                {stay.tags.map((tag, idx) => (
                  <span key={idx} className="stay-tag">{tag}</span>
                ))}
              </div>

              <div className="stay-card-actions">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(stay.id)}
                  className="btn-primary flex-1 text-center"
                >
                  Book / Room Enquiry
                </button>
                <a
                  href={SITE_CONFIG.getWhatsappUrl(`Jai Maa Baglamukhi! I would like to send an enquiry about ${stay.title} near the temple.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-icon"
                  title="WhatsApp Stay Enquiry"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stay-trust-box reveal">
        <div className="trust-box-content">
          <div className="trust-box-icon">🛡️</div>
          <div>
            <h4>Why Book Stay Assistance with Baglamukhi Darshanam?</h4>
            <p>
              Avoid last-minute unavailability and unverified places during rush days. We personally verify cleanliness, hot water supply, safe parking, and proximity so you can rest peacefully before and after your puja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaySection;
