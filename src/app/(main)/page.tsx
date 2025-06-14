import HeroSection from '@/components/sections/home/HeroSection';
import TrustCardsSection from '@/components/sections/home/TrustCardsSection';
import WhyWilnorSection from '@/components/sections/home/WhyWilnorSection';
import Footer from '@/components/sections/Footer'
import React from 'react';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyWilnorSection />
      <TrustCardsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}