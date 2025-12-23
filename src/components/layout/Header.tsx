"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy/5 py-3" 
        : "bg-transparent py-7"
    }`}>
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/icons/image.png"
              alt="The Tooth Sanctuary"
              width={220}
              height={70}
              className="h-auto w-auto max-h-[60px] md:max-h-[75px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] font-bold text-navy hover:text-teal-primary transition-colors tracking-[0.15em] uppercase"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="tel:02082056690" 
              className="flex items-center space-x-2 text-teal-primary hover:text-teal-dark transition-colors font-bold text-sm tracking-wide mr-4"
            >
              <Phone className="h-4 w-4" />
              <span>020 8205 6690</span>
            </Link>
            <Button
              size="lg"
              className="bg-teal-primary hover:bg-teal-dark text-white px-8 py-6 font-bold uppercase tracking-widest text-[11px] shadow-none transition-all"
              asChild
            >
              <Link href="https://thetoothsanctuary.portal.dental" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Book Online
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 text-navy hover:bg-teal-light/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-8 space-y-6 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-navy hover:text-teal-primary transition-colors uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-6 border-t border-navy/10 space-y-4">
              <Button
                variant="outline"
                className="w-full border-teal-primary text-teal-primary hover:bg-teal-light py-6 font-bold uppercase tracking-widest"
                asChild
              >
                <Link href="tel:02082056690">
                  <Phone className="mr-2 h-4 w-4" />
                  020 8205 6690
                </Link>
              </Button>
              <Button
                className="w-full bg-teal-primary hover:bg-teal-dark text-white py-6 font-bold uppercase tracking-widest"
                asChild
              >
                <Link href="https://thetoothsanctuary.portal.dental" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

