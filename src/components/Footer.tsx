import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  return (
    <footer id="contact" className="footer">
      {/* Top ornament */}
      <div className="footer-ornament" aria-hidden="true">
        <svg width="300" height="20" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10" x2="130" y2="10" stroke="#C9A84C" strokeWidth="0.5" />
          <text x="150" y="14" fill="#C9A84C" fontSize="12" textAnchor="middle">❋</text>
          <line x1="170" y1="10" x2="300" y2="10" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="21" cy="21" r="20" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
              <path d="M21 8 C15 8 10 13 10 18 L32 18 C32 13 27 8 21 8Z" fill="#C9A84C" opacity="0.7" />
              <rect x="13" y="18" width="16" height="10" rx="1" fill="#8B1A1A" opacity="0.8" />
              <rect x="18" y="21" width="6" height="7" rx="1" fill="#C9A84C" opacity="0.5" />
              <rect x="9" y="28" width="24" height="2" rx="1" fill="#8B1A1A" opacity="0.6" />
            </svg>
            <div className="logo-text-wrap">
              <span className="logo-main">Baglamukhi Darshanam</span>
              <span className="logo-sub">Pilgrimage Assistance</span>
            </div>
          </a>
          <p className="footer-desc">
            Trusted pilgrimage assistance for devotees visiting Maa Baglamukhi Temple, Nalkheda Dham. We help ensure your spiritual journey is peaceful, organized, and truly fulfilling.
          </p>
          <div className="footer-actions">
            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="btn-primary"
            >
              📋 Book / Enquiry
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Temple & History</a></li>
            <li><a href="#services">Core Services</a></li>
            <li><a href="#pooja">Pooja & Havan Anushthan</a></li>
            <li><a href="#timings">Darshan & Aarti Timings</a></li>
            <li><a href="#travel">How to Reach Nalkheda</a></li>
            <li><a href="#stay">Stay & Dharamshala</a></li>
            <li><a href="#faq">Devotee FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Devotional Offerings</h4>
          <ul>
            <li><button type="button" onClick={() => onOpenEnquiry('baglamukhi-pooja')} className="footer-link-btn">Baglamukhi Pooja</button></li>
            <li><button type="button" onClick={() => onOpenEnquiry('havan-anushthan')} className="footer-link-btn">Havan Anushthan</button></li>
            <li><button type="button" onClick={() => onOpenEnquiry('special-ritual-assistance')} className="footer-link-btn">Special Sankalpa</button></li>
            <li><button type="button" onClick={() => onOpenEnquiry('temple-visit-guidance')} className="footer-link-btn">Darshan Timings Guide</button></li>
            <li><button type="button" onClick={() => onOpenEnquiry('comfortable-guesthouses')} className="footer-link-btn">Guesthouse Booking</button></li>
            <li><button type="button" onClick={() => onOpenEnquiry('travel-taxi-pickup')} className="footer-link-btn">Taxi from Ujjain / Indore</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Temple Info & Helpline</h4>
          <div className="footer-contact-item">
            <span>📍</span>
            <span>{SITE_CONFIG.location}</span>
          </div>
          <div className="footer-contact-item">
            <span>📞</span>
            <a href={SITE_CONFIG.phoneHref}>{SITE_CONFIG.phone}</a>
          </div>
          <div className="footer-contact-item">
            <span>💬</span>
            <a href={SITE_CONFIG.getWhatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Help Available</a>
          </div>
          <div className="footer-contact-item">
            <span>🕐</span>
            <span>Temple Darshan: {SITE_CONFIG.timings}</span>
          </div>
          <div className="footer-contact-item">
            <span>🕉️</span>
            <span>Lakhundar River Bank, MP</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <span className="gold-text">{SITE_CONFIG.name}</span> — Trusted Pilgrimage Assistance for Maa Baglamukhi Temple Visitors
        </p>
        <p className="footer-mantra">
          🙏 ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा 🙏
        </p>
      </div>
    </footer>
  );
};

export default Footer;
