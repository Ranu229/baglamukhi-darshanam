export const SITE_CONFIG = {
  name: 'Baglamukhi Darshanam',
  tagline: 'Trusted Pilgrimage Assistance for Maa Baglamukhi Temple Visitors',
  templeName: 'Maa Baglamukhi Temple',
  location: 'Nalkheda, Agar Malwa / Shajapur District, Madhya Pradesh, India',
  phone: '+91 99999 99999',
  phoneHref: 'tel:+919999999999',
  whatsappNumber: '919999999999',
  whatsappBaseUrl: 'https://wa.me/919999999999',
  timings: '5:00 AM – 9:00 PM (Daily)',
  email: 'info@baglamukhidarshanam.com',
  getWhatsappUrl: (customMessage?: string) => {
    const defaultMsg = 'Jai Maa Baglamukhi! I would like to enquire about pilgrimage assistance for visiting Nalkheda Dham.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/919999999999?text=${text}`;
  },
};
