"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function About() {
  const containerRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="pt-8 pb-4 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div 
          ref={containerRef}
          className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center animate-on-scroll"
        >
          {/* Content Block - Ordered first on mobile */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-primary/10 rounded-none border border-teal-primary/20 mb-2">
                <span className="text-[9px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Our Story</span>
              </div>
              
               <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-navy mb-3 leading-[1.05] uppercase tracking-wide">
                Compassionate Care, <br/><span className="font-bold text-teal-primary">Modern Dentistry</span>
              </h2>
              
              <div className="text-sm sm:text-lg text-navy/70 leading-relaxed font-medium transition-all max-w-xl mx-auto lg:mx-0">
                <p>
                  At The Tooth Sanctuary, we've created a dental experience that feels less like a clinic and more like a retreat.
                </p>
              </div>
            </div>

            {/* Features list - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-x-8 gap-y-8 pt-4 w-full">
              {[
                { title: "Personalised Care", desc: "NHS & Private treatments built around your unique needs." },
                { title: "Advanced Tech", desc: "Digital imaging for faster result." },
                { title: "Specialist Team", desc: "Dedicated experts." },
                { title: "Luxury Comfort", desc: "Stress-free visits." }
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4 group text-left">
                  <div className="flex-shrink-0 w-5 h-5 rounded-none bg-teal-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-navy uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <p className="text-[12px] text-navy/60 font-medium leading-tight max-w-[190px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 sm:pt-8">
              <Button 
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white rounded-none px-10 py-7 font-bold uppercase tracking-[0.2em] text-[11px] shadow-none transition-all transform hover:translate-y-[-2px]"
                asChild
              >
                <Link href="/about">
                  Meet Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative w-full max-w-sm lg:max-w-lg order-2 lg:order-1">
            <div className="aspect-square sm:aspect-[4/4.8] w-full rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
              <Image
                src="/team-about-new.png"
                alt="The Tooth Sanctuary Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-navy/5" />
            </div>
            
            {/* Decorative background elements */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 h-64 bg-teal-primary/5 rounded-none -z-0" />
            <div className="hidden sm:block absolute -top-8 -left-8 w-48 h-48 border border-navy/5 rounded-none -z-0" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-6 bg-white p-4 sm:p-6 rounded-none shadow-xl z-20 border border-navy/5">
              <div className="text-2xl sm:text-3xl font-bold text-teal-primary leading-none">15+</div>
              <div className="text-[9px] sm:text-[10px] font-bold text-navy/50 uppercase tracking-widest mt-1">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

