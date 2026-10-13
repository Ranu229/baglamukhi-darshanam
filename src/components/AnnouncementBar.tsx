import { SITE_CONFIG } from '../config/siteConfig';

const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcement" className="announce-bar">
      <div className="announce-text">
        <span>Trusted Pilgrimage Assistance for Maa Baglamukhi Temple Visitors, Nalkheda Dham</span>
      </div>
      <div className="announce-actions">
        <a href={SITE_CONFIG.phoneHref} className="announce-btn phone" title="Direct Phone Call">
          <span>📞</span>
          <span className="announce-btn-label">{SITE_CONFIG.phone}</span>
        </a>
        <a
          href={SITE_CONFIG.getWhatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="announce-btn wa"
          title="Connect on WhatsApp"
        >
          <span>💬</span>
          <span className="announce-btn-label">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
