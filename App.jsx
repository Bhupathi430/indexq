import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySwitcher } from './components/CategorySwitcher';
import { ServicesSection } from './components/ServicesSection';
import { MetricsSection } from './components/MetricsSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SearchModal } from './components/SearchModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Dynamic Category Switcher (Creators vs Brands with Smooth Theme Transition) */}
        <CategorySwitcher onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Full-Service Deliverables & Process */}
        <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Data Metrics Counter Section */}
        <MetricsSection />

        {/* Client Reviews */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

    </div>
  );
}

export default App;
