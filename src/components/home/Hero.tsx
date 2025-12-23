"use client";

import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const contentRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-12 pb-0 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Modern dental office"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle, surgical clinical overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-6 md:pt-10 pb-0">
        <div 
          ref={contentRef}
          className="max-w-4xl text-left space-y-4 md:space-y-6 animate-on-scroll"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-teal-primary/10 px-4 py-2 rounded-none border border-teal-primary/20 max-w-[90vw]">
            <span className="w-2 h-2 rounded-none bg-teal-primary animate-pulse flex-shrink-0" />
            <span className="text-[9px] sm:text-[10px] font-bold text-teal-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-none">Now Accepting New NHS Patients</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy leading-[1.05] uppercase tracking-[0.02em] sm:tracking-[0.05em]">
            World-Class Care,{" "}
            <span className="block mt-1 font-bold text-teal-primary">Built Around You</span>
          </h1>
          
          {/* Subheading */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-base md:text-xl text-navy/80 font-medium leading-relaxed tracking-wide">
              Your Trusted Family & Specialist Dentist in Colindale, North West London.
            </p>
            
            {/* Trust Points */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 pt-1">
              {[
                "NHS & Private Care",
                "Advanced Technology",
                "Compassionate Team"
              ].map((point) => (
                <div key={point} className="flex items-center space-x-2 text-navy/70 text-[11px] font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-teal-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy/90 text-white font-bold shadow-none transition-all text-[13px] px-8 py-6 rounded-none uppercase tracking-[0.2em] transform hover:translate-y-[-2px]"
              asChild
            >
              <Link href="https://thetoothsanctuary.portal.dental" target="_blank" rel="noopener noreferrer">
                Book Online
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white font-bold text-[13px] px-8 py-6 rounded-none uppercase tracking-[0.2em] transition-all"
              asChild
            >
              <Link href="tel:02082056690">
                <Phone className="mr-2 h-4 w-4" />
                020 8205 6690
              </Link>
            </Button>
          </div>

          {/* Minimal Stats */}
          <div className="flex items-center space-x-10 pt-6 border-t border-navy/5">
            <div>
              <div className="text-2xl font-bold text-navy">15+</div>
              <div className="text-[9px] text-navy/50 font-bold uppercase tracking-widest mt-1">Years of Excellence</div>
            </div>
            <div className="w-[1px] h-8 bg-navy/10" />
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-navy">4.8</span>
                <span className="text-orange-accent text-lg">★</span>
              </div>
              <div className="text-[9px] text-navy/50 font-bold uppercase tracking-widest mt-1">Google Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Minimal */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-navy to-transparent" />
      </div>
    </section>
  );
}
