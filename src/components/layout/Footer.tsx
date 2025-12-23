"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    setLastUpdated(now.toLocaleDateString('en-GB', options));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-navy overflow-hidden">
      {/* Marble Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: 'url("/footer-marble-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pt-6 sm:pt-10 pb-4 sm:pb-8">
        {/* Top Row: Info, Logo, Contact Button - Always 3 Columns */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 items-center border-b border-navy/10 pb-4 sm:pb-8 mb-4 sm:mb-8">
          {/* Left: Phone & Socials */}
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <div className="flex items-center space-x-1 sm:space-x-2 text-navy/80 font-bold text-[9px] sm:text-sm">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-teal-primary" />
              <Link href="tel:02082056690" className="hover:text-teal-primary transition-colors whitespace-nowrap">
                020 8205 6690
              </Link>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <Link
                href="https://facebook.com"
                className="text-teal-primary hover:text-teal-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-teal-primary hover:text-teal-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-teal-primary hover:text-teal-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="block transition-transform hover:scale-105">
              <Image
                src="/icons/image.png"
                alt="The Tooth Sanctuary"
                width={200}
                height={65}
                className="h-auto w-auto max-h-[50px] sm:max-h-[85px] object-contain"
              />
            </Link>
          </div>

          {/* Right: Contact Button */}
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="bg-teal-primary hover:bg-teal-dark text-white px-3 py-2 sm:px-8 sm:py-3 rounded-none font-bold uppercase tracking-widest text-[8px] sm:text-xs transition-all shadow-none active:scale-95 whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Copyright row */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-[10px] sm:text-xs text-navy/60 font-medium">
            <span>Copyright © {new Date().getFullYear()} The Tooth Sanctuary</span>
            <span className="hidden md:inline">|</span>
            <span>Site last updated: {lastUpdated}</span>
            <span className="hidden md:inline">|</span>
            <span>Made by WebNexa AI</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 max-w-4xl mx-auto px-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[9px] sm:text-[11px] text-teal-primary hover:text-teal-dark transition-colors font-bold uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Floating elements at the very bottom */}
        <div className="mt-4 sm:mt-8 pt-2 sm:pt-4 flex justify-end items-center w-full">
          {/* Removed static Google Rating Badge as it's replaced by the global floating component */}

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center justify-center space-y-1 text-teal-primary hover:text-teal-dark transition-colors"
            aria-label="Back to top"
          >
            <div className="bg-teal-primary group-hover:bg-teal-dark p-1 sm:p-2 rounded-none text-white transition-colors">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

