import { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { POOJA_SERVICES, STAY_OPTIONS } from '../data/servicesData';
import type { EnquiryFormData } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  initialServiceId?: string;
  onClose: () => void;
}

const ALL_SERVICES = [
  ...POOJA_SERVICES.map((s) => ({ id: s.id, label: `🛕 ${s.title}` })),
  ...STAY_OPTIONS.map((s) => ({ id: s.id, label: `🏨 ${s.title}` })),
  { id: 'travel-taxi-pickup', label: '🚕 Travel & Cab Booking' },
  { id: 'custom-assistance', label: '✨ General Pilgrimage Assistance' },
];

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, initialServiceId, onClose }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    serviceId: initialServiceId || 'baglamukhi-pooja',
    visitDate: '',
    numberOfPersons: '2',
    notes: '',
  });
  const [prevInitialId, setPrevInitialId] = useState(initialServiceId);

  if (initialServiceId !== prevInitialId) {
    setPrevInitialId(initialServiceId);
    setFormData((prev) => ({ ...prev, serviceId: initialServiceId || 'baglamukhi-pooja' }));
  }

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService = ALL_SERVICES.find((s) => s.id === formData.serviceId)?.label || formData.serviceId;

    const messageLines = [
      '🙏 *Jai Maa Baglamukhi!*',
      'I would like to enquire about pilgrimage assistance for visiting Nalkheda Dham.',
      '',
      `👤 *Name:* ${formData.fullName || 'Not specified'}`,
      `📞 *Phone:* ${formData.phone || 'Not specified'}`,
      `🛕 *Service Requested:* ${selectedService}`,
      `📅 *Planned Visit Date:* ${formData.visitDate || 'To be decided'}`,
      `👥 *Number of Devotees:* ${formData.numberOfPersons || '1'}`,
    ];

    if (formData.notes.trim()) {
      messageLines.push(`📝 *Special Requests / Gotra / Sankalpa:* ${formData.notes.trim()}`);
    }

    const fullMessage = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-badge">🙏 Nalkheda Pilgrimage Help</span>
            <h3 id="modal-title">Book or Enquire Assistance</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        <form onSubmit={handleWhatsappSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="serviceId">Select Service Needed *</label>
            <select
              id="serviceId"
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              className="form-input"
              required
            >
              {ALL_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label htmlFor="fullName">Your Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ramesh Sharma"
                className="form-input"
                required
              />
            </div>
            <div className="form-group flex-1">
              <label htmlFor="phone">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group flex-1">
              <label htmlFor="visitDate">Expected Date of Visit</label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group flex-1">
              <label htmlFor="numberOfPersons">Number of Persons</label>
              <select
                id="numberOfPersons"
                name="numberOfPersons"
                value={formData.numberOfPersons}
                onChange={handleChange}
                className="form-input"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3-4">3 - 4 Persons (Family)</option>
                <option value="5-8">5 - 8 Persons (Small Group)</option>
                <option value="8+">8+ Persons (Large Group)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Gotra / Special Rituals / Requirements (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="e.g. Need Havan kund reservation on Saturday evening, or need AC stay with senior citizen accessibility..."
              className="form-input"
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-modal-wa">
              <span>💬</span> Send Enquiry via WhatsApp
            </button>
            <a href={SITE_CONFIG.phoneHref} className="btn-modal-call">
              <span>📞</span> Call Us Directly
            </a>
          </div>

          <p className="modal-guarantee">
            🔒 Your contact information is strictly used for coordinating your pilgrimage visit. No spam.
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
