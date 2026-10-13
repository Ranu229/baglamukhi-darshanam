export interface PoojaService {
  id: string;
  title: string;
  hindiTitle?: string;
  icon: string;
  description: string;
  benefits: string[];
  duration?: string;
  tag?: string;
}

export interface StayOption {
  id: string;
  title: string;
  hindiTitle?: string;
  icon: string;
  description: string;
  distance: string;
  tags: string[];
}

export interface TimetableEntry {
  event: string;
  hindiEvent?: string;
  time: string;
  description: string;
}

export interface TravelRoute {
  from: string;
  distance: string;
  duration: string;
  mode: string;
  tips: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  initial: string;
  rating: number;
  quote: string;
  date?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  visitDate: string;
  numberOfPersons: string;
  notes: string;
}
