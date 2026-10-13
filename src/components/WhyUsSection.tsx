import { SITE_CONFIG } from '../config/siteConfig';

const WhyUsSection = () => {
  return (
    <section className="why-section">
      <div className="section-header centered reveal">
        <div className="section-label">Our Devotional Commitment</div>
        <h2 className="section-heading">Why Pilgrims Trust Baglamukhi Darshanam</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          We treat every pilgrim as an honored guest of Maa Baglamukhi, ensuring pure devotion and complete peace of mind.
        </p>
      </div>

      <div className="why-grid">
        <div className="why-card reveal">
          <span className="why-icon">🗺️</span>
          <h3>Trusted Local Guidance</h3>
          <p>
            Generations of local connection in Nalkheda. We know the right pandits, actual temple timings, and genuine services so you avoid middlemen and confusion.
          </p>
        </div>

        <div className="why-card reveal">
          <span className="why-icon">🤝</span>
          <h3>Personalized Assistance</h3>
          <p>
            Whether visiting alone for a quick sankalpa or bringing elderly parents and children, we customize timings, rituals, and stay arrangements according to your needs.
          </p>
        </div>

        <div className="why-card reveal">
          <span className="why-icon">🌿</span>
          <h3>Comfort & Peace of Mind</h3>
          <p>
            From verified clean rooms and parking facilities to transparent ritual samagri, we handle the logistics so your attention stays purely focused on prayer.
          </p>
        </div>

        <div className="why-card reveal">
          <span className="why-icon">💬</span>
          <h3>Continuous Devotee Support</h3>
          <p>
            Our local coordination team is just a call or WhatsApp message away before, during, and after your visit to Nalkheda.
          </p>
        </div>
      </div>

      {/* Mid CTA */}
      <div className="mid-cta-banner reveal">
        <div className="diya-glow">🪔</div>
        <h2>Planning Your Pilgrimage to Nalkheda?</h2>
        <p>
          Speak with our devotional assistance team today. We are ready to answer your questions and arrange your sacred visit.
        </p>
        <div className="mid-cta-btns">
          <a href={SITE_CONFIG.phoneHref} className="btn-primary">
            📞 Call {SITE_CONFIG.phone}
          </a>
          <a
            href={SITE_CONFIG.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-strip"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
