"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/constants';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">

        {/* Mobile: Hamburger on Left */}
        <div className="absolute left-4 md:hidden">
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
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Image
                        src="/img/logo.png"
                        alt="Wilnor & Lavett Logo"
                        height={40}
                        width={120}
                        className="object-contain h-24 w-auto"
                      />
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
                <a
                  href="/quiz"
                  className="mt-4 bg-orange-500 text-white font-semibold text-sm px-5 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors duration-200"
                >
                  Take Our Quiz
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo Center in Mobile, Left in Desktop */}
        <Link
          href="/"
          className="mx-auto md:mx-0 flex items-center"
        >
          <Image
            src="/img/logo.png"
            alt="Wilnor & Lavett Logo"
            height={50}
            width={140}
            className="object-contain h-24 w-auto mt-2.5"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center text-sm font-medium space-x-[6vw]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors text-foreground/70 hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
