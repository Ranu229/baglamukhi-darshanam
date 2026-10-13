# Baglamukhi Darshanam — Pilgrimage Assistance Web Application

A modern, responsive React + TypeScript + Vite web platform designed for **Baglamukhi Darshanam** (Maa Baglamukhi Temple, Nalkheda Dham, Madhya Pradesh).

Provides devotees with complete assistance for:
- **Pooja & Havan Arrangements** (Baglamukhi Pooja, Havan Anushthan, Special Sankalpa)
- **Temple Darshan & Aarti Schedules** (Daily timings, Mangala to Shayan Aarti, and Puja protocol)
- **Accommodation & Dharamshala Bookings** (Clean guesthouses, dharamshalas, AC hotels near the temple)
- **Travel Guidance & Taxi Assistance** (Routes & distances from Ujjain, Indore, Bhopal, Kota, and railway/airport connectivity)
- **Interactive WhatsApp Enquiry Modal** (Pre-formatted direct booking inquiries)
- **Mobile Responsive Drawer & Quick Helpline** (One-tap phone calls and WhatsApp support)

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Installation
Install dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Production Build
Compile TypeScript and bundle optimized static assets:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, or any static web host.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Linting
Run the fast Oxlint code linter:
```bash
npm run lint
```

---

## Configuration & Customization

### Changing Contact Numbers & Details
All contact numbers, WhatsApp links, and temple metadata are centralized in:
[`src/config/siteConfig.ts`](./src/config/siteConfig.ts)

Update the `phone` or `whatsappNumber` fields to instantly update all Call and WhatsApp buttons across the entire website.

### Managing Services, Timings & FAQ
- **Pooja & Stay Options**: [`src/data/servicesData.ts`](./src/data/servicesData.ts)
- **Aarti & Offerings Timetable**: [`src/data/templeTimingsData.ts`](./src/data/templeTimingsData.ts)
- **Travel Routes**: [`src/data/travelData.ts`](./src/data/travelData.ts)
- **FAQs & Testimonials**: [`src/data/faqData.ts`](./src/data/faqData.ts)

---

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS + Custom Vedic Theme (`index.css`)
- **Typography**: Cormorant Garamond, Jost, Noto Serif Devanagari
- **Linter**: Oxlint

🙏 *Jai Maa Baglamukhi* 🙏
