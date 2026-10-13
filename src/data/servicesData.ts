import type { PoojaService, StayOption } from '../types';

export const POOJA_SERVICES: PoojaService[] = [
  {
    id: 'baglamukhi-pooja',
    title: 'Baglamukhi Pooja',
    hindiTitle: 'बगलामुखी विशेष पूजन',
    icon: '🪔',
    description: 'Sacred pooja dedicated to Maa Pitambara (Baglamukhi) performed with authentic Vedic rituals, yellow flowers, and potent stotras by experienced temple pandits.',
    benefits: ['Victory over legal obstacles & court cases', 'Protection from negative energies & evil eye', 'Inner strength, peace, and spiritual power'],
    duration: '1.5 - 2 Hours',
    tag: 'Most Revered',
  },
  {
    id: 'havan-anushthan',
    title: 'Havan Anushthan',
    hindiTitle: 'हवन एवं अनुष्ठान',
    icon: '🔥',
    description: 'Traditional Tantrokta & Vedic havan ceremony conducted with yellow mustard seeds (Peeli Sarson), ghee, and sacred samagri in the holy temple premises.',
    benefits: ['Removal of insurmountable hurdles & doshas', 'Protection of family, health & business', 'Divine blessings for prosperity & stability'],
    duration: '2.5 - 4 Hours',
    tag: 'Highly Recommended',
  },
  {
    id: 'special-ritual-assistance',
    title: 'Special Ritual Assistance',
    hindiTitle: 'संकल्प एवं विशेष अनुष्ठान',
    icon: '🌺',
    description: 'Personalized assistance for special family sankalpa, birthday or anniversary blessings, Navratri anushthan, and custom spiritual vows.',
    benefits: ['Tailored rituals aligned with your gotra & sankalpa', 'Pure satvik materials arranged locally', 'Personal priest guidance throughout'],
    duration: 'Custom Duration',
    tag: 'Personalized',
  },
  {
    id: 'temple-visit-guidance',
    title: 'Temple Visit Guidance',
    hindiTitle: 'दर्शन एवं मंदिर मार्गदर्शन',
    icon: '🛕',
    description: 'Complete assistance for darshan timings, VIP protocol assistance, guidance on prasad offering, and sacred parikrama protocol.',
    benefits: ['Zero confusion during heavy rush hours', 'Clear guidance on what offerings are accepted', 'Elderly devotee and family assistance'],
    duration: 'Full Day Support',
    tag: 'Pilgrim Support',
  },
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: 'comfortable-guesthouses',
    title: 'Comfortable Guesthouses',
    hindiTitle: 'सुविधाजनक गेस्ट हाउस',
    icon: '🏩',
    description: 'Clean, well-maintained guesthouses located within short walking distance of the temple for effortless early morning and evening darshan.',
    distance: '200–500m from Temple',
    tags: ['Walking Distance', 'Hygienic Rooms', '24/7 Water', 'Verified Partner'],
  },
  {
    id: 'pilgrim-dharamshalas',
    title: 'Pilgrim Dharamshalas',
    hindiTitle: 'भक्त धर्मशाला व्यवस्था',
    icon: '🛏️',
    description: 'Traditional and budget-friendly dharamshalas offering a pure, peaceful devotional atmosphere aligned with the spiritual essence of Nalkheda.',
    distance: '300m from Temple',
    tags: ['Affordable', 'Devotional Ambiance', 'Family Friendly', 'Pure Vegetarian Food Nearby'],
  },
  {
    id: 'premium-hotels',
    title: 'Premium Hotels & AC Rooms',
    hindiTitle: 'प्रीमियम होटल एवं एसी रूम्स',
    icon: '🏨',
    description: 'Modern hotel rooms featuring AC, attached bathrooms, private parking, and warm hospitality for families and devotees traveling long distances.',
    distance: '500m–1.5km from Temple',
    tags: ['AC Rooms', 'Car Parking', 'Room Service', 'Family Suites'],
  },
];
