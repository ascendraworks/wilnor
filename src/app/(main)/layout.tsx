import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FixedWhatsAppButton from '@/components/layout/FixedWhatsAppButton';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-0">{children}</main> 
      <FixedWhatsAppButton />
    </div>
  );
}