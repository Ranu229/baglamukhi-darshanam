import { useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import AboutSection from './components/AboutSection';
import PoojaRitualsSection from './components/PoojaRitualsSection';
import TempleTimingsSection from './components/TempleTimingsSection';
import TravelGuideSection from './components/TravelGuideSection';
import StaySection from './components/StaySection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import FloatingContact from './components/FloatingContact';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize intersection observer for smooth scroll reveals
  useScrollReveal();

  // Lock body scroll when modal or mobile drawer is open
  useEffect(() => {
    if (isModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen, isMobileMenuOpen]);

  const handleOpenEnquiry = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Navbar */}
      <Navbar
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 3. Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 4. Devotional Hero Banner */}
      <main id="main-content">
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Core Services Overview */}
        <ServicesOverview onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Sacred History & Temple Importance */}
        <AboutSection />

        {/* 7. Detailed Pooja Rituals & Anushthan */}
        <PoojaRitualsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Temple Timings, Aarti Schedule & Offerings */}
        <TempleTimingsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Travel Guide & Connectivity (Ujjain, Indore, Kota) */}
        <TravelGuideSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. Stay & Dharamshala Assistance */}
        <StaySection onOpenEnquiry={handleOpenEnquiry} />

        {/* 11. Why Choose Us & Devotional Promise */}
        <WhyUsSection />

        {/* 12. Devotee Testimonials */}
        <TestimonialsSection />

        {/* 13. Pilgrimage FAQ Accordion */}
        <FaqSection />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* 15. Interactive Booking / Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        initialServiceId={selectedServiceId}
        onClose={handleCloseEnquiry}
      />

      {/* 16. Floating Quick Helpline (Call & WhatsApp) */}
      <FloatingContact onOpenEnquiry={() => handleOpenEnquiry()} />
    </div>
  );
};

export default App;