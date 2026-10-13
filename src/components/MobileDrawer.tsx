import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: (serviceId?: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onOpenEnquiry }) => {
  if (!isOpen) return null;

  const handleLinkClick = (hash: string) => {
    onClose();
    if (hash.startsWith('#')) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="mobile-drawer-overlay" onClick={onClose}>
      <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-drawer-header">
          <div className="mobile-drawer-brand">
            <span className="logo-main">Baglamukhi Darshanam</span>
            <span className="logo-sub">Nalkheda Pilgrimage Help</span>
          </div>
          <button className="mobile-drawer-close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <a href="#hero" onClick={() => handleLinkClick('#hero')}>Home</a>
          <a href="#services" onClick={() => handleLinkClick('#services')}>Core Services</a>
          <a href="#pooja" onClick={() => handleLinkClick('#pooja')}>Pooja & Havan</a>
          <a href="#timings" onClick={() => handleLinkClick('#timings')}>Darshan & Aarti Timings</a>
          <a href="#travel" onClick={() => handleLinkClick('#travel')}>How to Reach / Travel</a>
          <a href="#stay" onClick={() => handleLinkClick('#stay')}>Stay & Dharamshala</a>
          <a href="#about" onClick={() => handleLinkClick('#about')}>About Temple</a>
          <a href="#faq" onClick={() => handleLinkClick('#faq')}>Pilgrimage FAQs</a>
          <a href="#contact" onClick={() => handleLinkClick('#contact')}>Contact</a>
        </nav>

        <div className="mobile-drawer-actions">
          <button
            type="button"
            className="btn-primary w-full text-center"
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
          >
            📋 Book / Enquire Now
          </button>

          <div className="mobile-drawer-contact-row">
            <a href={SITE_CONFIG.phoneHref} className="btn-outline text-center flex-1">
              📞 Call
            </a>
            <a
              href={SITE_CONFIG.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-strip text-center flex-1"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="mobile-drawer-footer">
          <p className="text-xs text-center text-muted">🙏 जय माँ बगलामुखी | नलखेड़ा धाम 🙏</p>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
