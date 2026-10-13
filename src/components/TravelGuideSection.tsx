import React from 'react';
import { TRAVEL_ROUTES, NEAREST_HUBS } from '../data/travelData';
import { SITE_CONFIG } from '../config/siteConfig';

interface TravelGuideSectionProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const TravelGuideSection: React.FC<TravelGuideSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="travel" className="travel-section">
      <div className="section-header centered reveal">
        <div className="section-label">Travel & Connectivity</div>
        <h2 className="section-heading">How to Reach Nalkheda Dham</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Nalkheda is conveniently connected by road from major pilgrimage and transit centers in Madhya Pradesh and Rajasthan.
        </p>
      </div>

      <div className="travel-routes-grid">
        {TRAVEL_ROUTES.map((route, idx) => (
          <div key={idx} className="travel-card reveal">
            <div className="travel-card-header">
              <span className="travel-badge">📍 Route {idx + 1}</span>
              <h3>From {route.from}</h3>
            </div>
            <div className="travel-meta">
              <div className="travel-meta-item">
                <span className="meta-icon">📏</span>
                <span>{route.distance}</span>
              </div>
              <div className="travel-meta-item">
                <span className="meta-icon">⏳</span>
                <span>{route.duration}</span>
              </div>
            </div>
            <p className="travel-mode"><strong>Transit Mode:</strong> {route.mode}</p>
            <p className="travel-tips">{route.tips}</p>
          </div>
        ))}
      </div>

      <div className="travel-hubs-container reveal">
        <div className="travel-hubs-header">
          <h3>Key Transit Gateways</h3>
          <p>Plan your train or flight connections conveniently</p>
        </div>
        <div className="travel-hubs-list">
          {NEAREST_HUBS.map((hub, i) => (
            <div key={i} className="hub-item">
              <div className="hub-icon">🚆</div>
              <div>
                <h4>{hub.title}</h4>
                <p>{hub.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="travel-hubs-cta">
          <button
            type="button"
            onClick={() => onOpenEnquiry('travel-taxi-pickup')}
            className="btn-primary"
          >
            🚕 Need a Cab / Taxi from Ujjain or Indore?
          </button>
          <a
            href={SITE_CONFIG.getWhatsappUrl('Jai Maa Baglamukhi! I need travel / cab assistance to reach Nalkheda from Ujjain/Indore.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            💬 Enquire Taxi on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TravelGuideSection;
