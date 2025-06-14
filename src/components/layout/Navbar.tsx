"use client"; // Required for useState

import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import { Menu } from 'lucide-react'; // Removed MessageSquareText
import WhatsAppIcon from '../icons/WhatsAppIcon'; // Import the new icon
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
// import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsAppNumber = "6580763141"; // Replace with actual number
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent("Hello! I'm interested in your services.")}`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left Section: Hamburger (Mobile) / Logo + Nav (Desktop) */}
        <div className="flex items-center">
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="hover:bg-teal-600 text-teal-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-3/4 pr-0 sm:max-w-xs">
                <SheetHeader className="mb-4 text-left">
                  <SheetTitle>
                    <SheetClose asChild>
                      <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
                        Wilnor & Lavett
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-4 py-2 text-base font-medium hover:bg-teal-600 hover:text-accent-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Logo */}
          <Link href="/" className="mr-6 hidden items-center md:flex">
            {/* Placeholder for actual logo image if provided later */}
            <span className="font-bold">Wilnor & Lavett's</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-teal-600 text-foreground/70 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center Section: Mobile Logo */}
        <div className="md:hidden">
          <Link href="/" className="flex items-center text-lg font-semibold">
            Wilnor & Lavett's
          </Link>
        </div>

        <div className="flex items-center">
        <div className="md:hidden">
          <a
            href="/quiz"
            className="bg-orange-500 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors duration-200"
          >
            Take Our Quiz
          </a>
        </div>
      </div>



      </div>
    </nav>
  );
};

export default Navbar;