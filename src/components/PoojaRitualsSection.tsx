import React from 'react';
import { POOJA_SERVICES } from '../data/servicesData';
import { SITE_CONFIG } from '../config/siteConfig';

interface PoojaRitualsSectionProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const PoojaRitualsSection: React.FC<PoojaRitualsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="pooja" className="pooja-section">
      <div className="section-header centered reveal">
        <div className="section-label">Spiritual Rituals & Anushthan</div>
        <h2 className="section-heading">Featured Pooja Services</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Sacred rituals and havan ceremonies performed with complete Vedic discipline, devotion, and verified temple pandits.
        </p>
      </div>

      <div className="pooja-grid">
        {POOJA_SERVICES.map((service) => (
          <div key={service.id} className="pooja-card reveal">
            <div className="pooja-card-top">
              <div className="pooja-icon">{service.icon}</div>
              {service.tag && <span className="pooja-tag">{service.tag}</span>}
            </div>
            <div className="pooja-info">
              <h3>{service.title}</h3>
              {service.hindiTitle && <div className="pooja-hindi-title">{service.hindiTitle}</div>}
              <p>{service.description}</p>

              <div className="pooja-benefits-list">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="pooja-benefit-item">
                    <span className="benefit-check">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {service.duration && (
                <div className="pooja-duration">
                  <span>⏱️ Duration: <strong>{service.duration}</strong></span>
                </div>
              )}

              <div className="pooja-card-actions">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry(service.id)}
                  className="btn-primary flex-1 text-center"
                >
                  Book / Enquire
                </button>
                <a
                  href={SITE_CONFIG.getWhatsappUrl(`Jai Maa Baglamukhi! I would like to book or enquire about ${service.title} at Nalkheda.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-icon"
                  title="Enquire on WhatsApp"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PoojaRitualsSection;
