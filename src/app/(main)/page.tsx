import HeroSection from '@/components/sections/home/HeroSection';
import TrustCardsSection from '@/components/sections/home/TrustCardsSection';
import WhyWilnorSection from '@/components/sections/home/WhyWilnorSection';
import Footer from '@/components/sections/Footer'
import React from 'react';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import Navbar from '@/components/layout/Navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyWilnorSection />
      <TrustCardsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}