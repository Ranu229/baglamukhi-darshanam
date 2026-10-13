import React from 'react';

interface ServicesOverviewProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="services" className="services-section">
      <div className="section-header centered reveal">
        <div className="section-label">Core Pilgrimage Offerings</div>
        <h2 className="section-heading">Complete Pilgrimage Assistance</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Everything you need for a comfortable, deeply devotional, and hassle-free spiritual journey to Nalkheda Dham.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card reveal">
          <span className="service-icon">🛕</span>
          <h3>Pooja & Havan Assistance</h3>
          <p>
            Authentic guidance and complete arrangement for Vedic pooja, tantrokta havan, and personal sankalpa at the temple with learned, local priests.
          </p>
          <div className="service-card-footer">
            <button
              type="button"
              onClick={() => onOpenEnquiry('baglamukhi-pooja')}
              className="btn-card-action"
            >
              Pooja Enquiry →
            </button>
          </div>
        </div>

        <div className="service-card reveal">
          <span className="service-icon">🏨</span>
          <h3>Stay & Dharamshala Support</h3>
          <p>
            Curated and verified stay options ranging from serene traditional dharamshalas to hygienic AC guesthouses and hotels near the temple.
          </p>
          <div className="service-card-footer">
            <button
              type="button"
              onClick={() => onOpenEnquiry('comfortable-guesthouses')}
              className="btn-card-action"
            >
              Stay Enquiry →
            </button>
          </div>
        </div>

        <div className="service-card reveal">
          <span className="service-icon">🚕</span>
          <h3>Travel & Taxi Assistance</h3>
          <p>
            Reliable airport/railway pickup and roundtrip taxi assistance connecting Ujjain, Indore, Bhopal, and Kota directly to Nalkheda.
          </p>
          <div className="service-card-footer">
            <button
              type="button"
              onClick={() => onOpenEnquiry('travel-taxi-pickup')}
              className="btn-card-action"
            >
              Travel Enquiry →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
