const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-img-wrap reveal">
        <div className="about-temple-visual">
          <svg className="about-temple-svg" viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sacred Temple Shrine Illustration">
            <ellipse cx="190" cy="220" rx="160" ry="70" fill="rgba(201,168,76,0.08)" />
            <line x1="190" y1="8" x2="190" y2="50" stroke="#C9A84C" strokeWidth="2.5" />
            <polygon points="190,8 210,18 190,28" fill="#E8691A" opacity="0.95" />
            <path d="M170 50 C170 30 210 30 210 50" fill="#C9A84C" opacity="0.9" />
            <path d="M160 75 C160 48 220 48 220 75" fill="#E8C96A" opacity="0.85" />
            <path d="M148 100 C148 68 232 68 232 100" fill="#C9A84C" opacity="0.8" />
            <rect x="140" y="100" width="100" height="90" rx="2" fill="#9B2828" opacity="0.7" />
            <path d="M168 190 L168 140 Q190 128 212 140 L212 190Z" fill="#1C0505" opacity="0.9" />
            <rect x="148" y="115" width="18" height="22" rx="2" fill="rgba(201,168,76,0.4)" />
            <rect x="214" y="115" width="18" height="22" rx="2" fill="rgba(201,168,76,0.4)" />
            <path d="M168 140 Q190 128 212 140" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
            <rect x="128" y="190" width="124" height="7" rx="1" fill="#C9A84C" opacity="0.6" />
            <rect x="118" y="197" width="144" height="7" rx="1" fill="#C9A84C" opacity="0.5" />
            <rect x="108" y="204" width="164" height="7" rx="1" fill="#C9A84C" opacity="0.4" />
            <rect x="60" y="145" width="75" height="62" rx="2" fill="#7B1212" opacity="0.5" />
            <path d="M58 145 L97 115 L138 145" fill="#C9A84C" opacity="0.55" />
            <rect x="245" y="145" width="75" height="62" rx="2" fill="#7B1212" opacity="0.5" />
            <path d="M242 145 L283 115 L322 145" fill="#C9A84C" opacity="0.55" />
            <rect x="50" y="211" width="280" height="5" rx="2" fill="rgba(201,168,76,0.25)" />
            <path d="M190 0 L80 211" stroke="rgba(232,201,106,0.05)" strokeWidth="60" />
            <path d="M190 0 L300 211" stroke="rgba(232,201,106,0.05)" strokeWidth="60" />
            <text x="180" y="108" fill="#C9A84C" fontSize="10" opacity="0.8" textAnchor="middle">❋</text>
          </svg>
          <div className="about-img-badge">
            <strong>Nalkheda Dham</strong>
            <span>Lakhundar River Bank, MP</span>
          </div>
        </div>
      </div>

      <div className="about-content reveal">
        <div className="section-label">Sacred Heritage</div>
        <h2 className="section-heading">One of the Most Revered Baglamukhi Shakti Peethas</h2>
        <div className="ornament-divider" style={{ justifyContent: 'flex-start' }}>
          <span style={{ background: 'linear-gradient(90deg,transparent,#C9A84C)' }}></span>
          <span style={{ background: 'linear-gradient(90deg,#C9A84C,transparent)' }}></span>
        </div>
        <p className="about-lead">
          Maa Baglamukhi Temple in Nalkheda is globally renowned as one of the three principal shrines dedicated to Goddess Baglamukhi — the eighth of the revered Dasha Mahavidyas. Situated on the serene banks of the sacred Lakhundar River, this ancient temple is endowed with supreme spiritual vibrance.
        </p>
        <p className="about-text-secondary">
          According to Mahabharata tradition, Maharaja Yudhishthira invoked Maa Pitambara here under Lord Krishna’s divine instruction before the battle of Kurukshetra to attain unwavering victory. Devotees visit this sacred shrine to seek victory over enemies, court disputes, career hurdles, and spiritual elevation.
        </p>

        <div className="about-features">
          <div className="about-feature">
            <div className="about-feature-icon">🕉️</div>
            <div className="about-feature-text">
              <h4>Sacred Spiritual Environment</h4>
              <p>A tranquil, charged spiritual aura surrounds the sanctum, bringing deep mental peace and spiritual relief.</p>
            </div>
          </div>
          <div className="about-feature">
            <div className="about-feature-icon">📜</div>
            <div className="about-feature-text">
              <h4>Ancient Tantrokta & Vedic Tradition</h4>
              <p>Centuries-old ritual practices conducted with pure Vedic precision, yellow mustard, and sacred fire offerings.</p>
            </div>
          </div>
          <div className="about-feature">
            <div className="about-feature-icon">🌸</div>
            <div className="about-feature-text">
              <h4>Trishul & Akhand Jyot</h4>
              <p>The temple houses a sacred Trishul and an ever-burning Akhand Jyoti that radiates divine maternal grace.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
