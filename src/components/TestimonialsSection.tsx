import { TESTIMONIALS_DATA } from '../data/faqData';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header centered reveal">
        <div className="section-label">Devotee Experiences</div>
        <h2 className="section-heading">Words of Gratitude from Pilgrims</h2>
        <div className="ornament-divider"><span></span><span></span></div>
        <p className="section-sub">
          Hear from pilgrims who experienced effortless darshan and sacred ceremonies through our assistance.
        </p>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS_DATA.map((item) => (
          <div key={item.id} className="testimonial-card reveal">
            <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">“{item.quote}”</p>
            <div className="testimonial-author">
              <div className="author-avatar">{item.initial}</div>
              <div>
                <div className="author-name">{item.name}</div>
                <div className="author-from">{item.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
