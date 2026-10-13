import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  onOpenEnquiry: (serviceId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenMobileMenu, onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="logo">
        <svg
          className="logo-emblem"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="21" cy="21" r="20" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
          <path
            d="M21 8 C15 8 10 13 10 18 L32 18 C32 13 27 8 21 8Z"
            fill="#C9A84C"
            opacity="0.85"
          />
          <path
            d="M21 5 L21 9 M18 6 L21 8 L24 6"
            stroke="#C9A84C"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <rect x="13" y="18" width="16" height="10" rx="1" fill="#8B1A1A" opacity="0.9" />
          <rect x="18" y="21" width="6" height="7" rx="1" fill="#C9A84C" opacity="0.6" />
          <ellipse cx="15" cy="32" rx="4" ry="2" fill="#C9A84C" opacity="0.5" />
          <ellipse cx="21" cy="33" rx="4" ry="2" fill="#C9A84C" opacity="0.7" />
          <ellipse cx="27" cy="32" rx="4" ry="2" fill="#C9A84C" opacity="0.5" />
          <rect x="9" y="28" width="24" height="2" rx="1" fill="#8B1A1A" opacity="0.7" />
          <rect x="6" y="30" width="30" height="2" rx="1" fill="#8B1A1A" opacity="0.5" />
        </svg>
        <div className="logo-text-wrap">
          <span className="logo-main">Baglamukhi Darshanam</span>
          <span className="logo-sub">Nalkheda • Pilgrimage Assistance</span>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#pooja">Pooja & Havan</a></li>
        <li><a href="#timings">Timings</a></li>
        <li><a href="#travel">How to Reach</a></li>
        <li><a href="#stay">Stay</a></li>
        <li><a href="#about">About Temple</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <div className="nav-cta-group">
        <button
          type="button"
          onClick={() => onOpenEnquiry()}
          className="btn-enquire-nav"
        >
          Book / Enquire
        </button>
        <a
          href={SITE_CONFIG.getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-nav"
        >
          💬 WhatsApp
        </a>
        <button
          type="button"
          className="hamburger-btn"
          onClick={onOpenMobileMenu}
          aria-label="Open mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
