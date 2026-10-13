import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content reveal">
        <div className="hero-badge">
          <span>🙏</span>
          <span>श्री बगलामुखी देव्यै नमः • Nalkheda Dham</span>
        </div>
        <h1>
          Plan Your Peaceful Visit to<br />
          <em>Maa Baglamukhi Temple,</em><br />
          Nalkheda
        </h1>
        <p className="hero-sub">
          Trusted local assistance for sacred pooja, havan anushthan, comfortable stay, and safe travel for pilgrims visiting the divine Shakti Peetha of Nalkheda. Guided with utmost devotion and care.
        </p>

        <div className="hero-btns">
          <button
            type="button"
            onClick={() => onOpenEnquiry('baglamukhi-pooja')}
            className="btn-primary"
          >
            📋 Book Pooja / Stay
          </button>
          <a href={SITE_CONFIG.phoneHref} className="btn-outline">
            📞 Call Now
          </a>
          <a
            href={SITE_CONFIG.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pill"
          >
            💬 WhatsApp
          </a>
        </div>

        <div className="trust-row">
          <span className="trust-item">
            <span className="trust-dot">✓</span> Trusted Local Assistance
          </span>
          <span className="trust-item">
            <span className="trust-dot">✓</span> Verified Vedic Pandits
          </span>
          <span className="trust-item">
            <span className="trust-dot">✓</span> Clean & Safe Stay Booking
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-temple-card">
          <svg className="float-mandala" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            <path d="M50 5 L50 95 M5 50 L95 50 M19 19 L81 81 M81 19 L19 81" stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
            <circle cx="50" cy="5" r="3" fill="#C9A84C" opacity="0.6" />
            <circle cx="50" cy="95" r="3" fill="#C9A84C" opacity="0.6" />
            <circle cx="5" cy="50" r="3" fill="#C9A84C" opacity="0.6" />
            <circle cx="95" cy="50" r="3" fill="#C9A84C" opacity="0.6" />
          </svg>

          <div className="temple-silhouette-wrap">
            <svg className="temple-svg" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Maa Baglamukhi Temple Illustration">
              <ellipse cx="160" cy="140" rx="100" ry="60" fill="rgba(201,168,76,0.12)" />
              <line x1="160" y1="10" x2="160" y2="40" stroke="#C9A84C" strokeWidth="2" />
              <polygon points="160,10 175,17 160,24" fill="#E8691A" opacity="0.9" />
              <path d="M145 40 C145 25 175 25 175 40" fill="#C9A84C" opacity="0.9" />
              <path d="M138 60 C138 40 182 40 182 60" fill="#C9A84C" opacity="0.85" />
              <path d="M130 80 C130 55 190 55 190 80" fill="#E8C96A" opacity="0.8" />
              <rect x="125" y="80" width="110" height="70" rx="2" fill="#C9A84C" opacity="0.7" />
              <path d="M148 150 L148 110 Q160 100 172 110 L172 150Z" fill="#8B1A1A" opacity="0.8" />
              <rect x="128" y="85" width="10" height="65" rx="2" fill="#E8C96A" opacity="0.5" />
              <rect x="182" y="85" width="10" height="65" rx="2" fill="#E8C96A" opacity="0.5" />
              <rect x="118" y="150" width="84" height="6" rx="1" fill="#C9A84C" opacity="0.6" />
              <rect x="112" y="156" width="96" height="6" rx="1" fill="#C9A84C" opacity="0.5" />
              <rect x="105" y="162" width="110" height="6" rx="1" fill="#C9A84C" opacity="0.4" />
              <rect x="80" y="168" width="160" height="4" rx="2" fill="rgba(201,168,76,0.3)" />
              <rect x="80" y="120" width="35" height="48" rx="2" fill="#8B1A1A" opacity="0.4" />
              <path d="M80 120 L97 100 L115 120" fill="#C9A84C" opacity="0.5" />
              <rect x="205" y="120" width="35" height="48" rx="2" fill="#8B1A1A" opacity="0.4" />
              <path d="M205 120 L222 100 L240 120" fill="#C9A84C" opacity="0.5" />
              <circle cx="160" cy="90" r="6" fill="#E8691A" opacity="0.8" />
              <circle cx="160" cy="90" r="3" fill="#C9A84C" />
              <line x1="160" y1="0" x2="100" y2="168" stroke="rgba(232,201,106,0.08)" strokeWidth="40" />
              <line x1="160" y1="0" x2="220" y2="168" stroke="rgba(232,201,106,0.08)" strokeWidth="40" />
            </svg>
          </div>

          <div className="hero-card-info">
            <div className="hero-card-label">Maa Baglamukhi Temple</div>
            <div className="hero-card-title">Nalkheda, Madhya Pradesh</div>
            <div className="hero-card-chips">
              <span className="chip">Pooja Assistance</span>
              <span className="chip">Stay Booking</span>
              <span className="chip">Travel Guide</span>
            </div>
            <div className="hero-mantra-badge">
              <span>ॐ ह्लीं बगलामुख्यै नमः</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
