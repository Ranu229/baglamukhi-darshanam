import { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { SITE_CONFIG } from '../config/siteConfig';

const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header centered reveal">
        <div className="section-label">Questions & Clarifications</div>
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Helpful answers to common questions asked by devotees visiting Maa Baglamukhi Temple for the first time.
        </p>
      </div>

      <div className="faq-container reveal">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className={`faq-card ${isOpen ? 'active' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFaq(item.id)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon-toggle">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="faq-answer-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="faq-help-footer reveal">
        <p>Have a different question about your specific ritual or family visit?</p>
        <a
          href={SITE_CONFIG.getWhatsappUrl('Jai Maa Baglamukhi! I have a question regarding visiting Nalkheda Dham.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Ask directly on WhatsApp →
        </a>
      </div>
    </section>
  );
};

export default FaqSection;
