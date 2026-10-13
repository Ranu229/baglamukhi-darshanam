import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingContactProps {
  onOpenEnquiry: () => void;
}

const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="floating-contact-container" aria-label="Quick contact buttons">
      <button
        type="button"
        onClick={onOpenEnquiry}
        className="floating-btn enquiry"
        title="Quick Enquiry Form"
        aria-label="Open pilgrimage enquiry form"
      >
        <span className="floating-icon">📋</span>
        <span className="floating-label">Enquire</span>
      </button>

      <a
        href={SITE_CONFIG.phoneHref}
        className="floating-btn phone"
        title="Call Helpline"
        aria-label="Call helpline"
      >
        <span className="floating-icon">📞</span>
        <span className="floating-label">Call</span>
      </a>

      <a
        href={SITE_CONFIG.getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-icon">💬</span>
        <span className="floating-label">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingContact;
