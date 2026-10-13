import type { TravelRoute } from '../types';

export const TRAVEL_ROUTES: TravelRoute[] = [
  {
    from: 'Ujjain (Mahakaleshwar)',
    distance: 'Approx. 98 km',
    duration: '2.0 - 2.5 hours',
    mode: 'Taxi / Private Car / State Bus via Agar',
    tips: 'Most pilgrims visit Nalkheda along with Ujjain Mahakal. Direct cabs are readily available from Ujjain Junction and city hotels.',
  },
  {
    from: 'Indore (Airport / Railway Station)',
    distance: 'Approx. 155 km',
    duration: '3.5 - 4.0 hours',
    mode: 'Taxi / Highway Bus via Ujjain - Agar - Nalkheda',
    tips: 'Indore (IDR) is the nearest major airport with direct flights from all major Indian cities.',
  },
  {
    from: 'Bhopal (Raja Bhoj Airport)',
    distance: 'Approx. 180 km',
    duration: '4.0 - 4.5 hours',
    mode: 'Taxi / Train to Shajapur or Ujjain + Taxi',
    tips: 'Convenient road connectivity via Shajapur highway or train connectivity.',
  },
  {
    from: 'Kota, Rajasthan',
    distance: 'Approx. 145 km',
    duration: '3.0 - 3.5 hours',
    mode: 'Direct Taxi / Bus via Jhalawar - Soyat - Nalkheda',
    tips: 'Ideal route for pilgrims coming from Rajasthan, Delhi NCR, and Northern India.',
  },
];

export const NEAREST_HUBS = [
  { title: 'Nearest Railway Stations', detail: 'Ujjain Junction (98 km), Nagda Junction (110 km), Shajapur (60 km)' },
  { title: 'Nearest Airport', detail: 'Devi Ahilyabai Holkar Airport, Indore (IDR) - 155 km' },
  { title: 'Local Transport in Nalkheda', detail: 'Local auto-rickshaws, e-rickshaws, and walking within temple perimeter' },
];
