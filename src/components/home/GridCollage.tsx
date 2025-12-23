"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function GridCollage() {
  const containerRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="pt-6 pb-2 md:pt-16 md:pb-4 bg-white overflow-hidden">
      <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-12 pr-0">
        <div 
          ref={containerRef}
          className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center animate-on-scroll"
        >
          {/* Main Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center text-center space-y-3">
            <div>
              {/* Badge - Matching Hero Style */}
              <div className="inline-flex items-center space-x-2 bg-teal-primary/10 px-4 py-2 rounded-full border border-teal-primary/20 mb-3 max-w-[90vw]">
                <span className="w-2 h-2 rounded-full bg-teal-primary animate-pulse flex-shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-bold text-teal-primary uppercase tracking-[0.1em] sm:tracking-[0.2em] text-center leading-none">The Sanctuary Experience</span>
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-navy mb-4 leading-[1.05] uppercase tracking-wide">
                Excellence in <br className="sm:hidden" />
                <span className="font-bold text-teal-primary">Every Detail</span>
              </h2>
              
              <p className="text-lg text-navy/70 leading-relaxed font-medium max-w-md mx-auto">
                We've thoughtfully designed every aspect of our practice to ensure your visit is as comfortable and efficient as possible.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-6 pt-2 w-full">
              {[
                { title: "Bespoke Care", desc: "Tailored treatment plans for unique needs." },
                { title: "Surgical Precision", desc: "State-of-the-art digital dentistry systems." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4 group bg-white/50 p-2 sm:p-0 rounded-none sm:bg-transparent">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-6 sm:h-6 rounded-none bg-teal-primary/10 flex items-center justify-center group-hover:bg-teal-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-teal-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <h4 className="font-bold text-navy uppercase tracking-[0.1em] sm:tracking-widest text-[9px] sm:text-[10px] mb-1 leading-none">{item.title}</h4>
                    <p className="text-[10px] sm:text-[12px] text-navy/60 font-medium leading-tight max-w-[120px] sm:max-w-none">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collage Grid - No Radius, Hero Style */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-0 h-[300px] md:h-[520px] shadow-2xl relative">
            {/* Large Feature Image */}
            <div className="col-span-7 row-span-2 relative overflow-hidden">
              <Image
                src="/surgery-real.jpg"
                alt="Modern dental surgery"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/5" />
            </div>

            {/* Top Right Image */}
            <div className="col-span-5 relative overflow-hidden border-l border-white/20">
              <Image
                src="/waiting-real.png"
                alt="Patient consultation"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-primary/5" />
            </div>

            {/* Bottom Right Info Card - More Converting */}
            <div className="col-span-5 bg-teal-primary p-6 md:p-14 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white group overflow-hidden relative border-l border-t border-white/20">
              {/* Subtle background text for premium feel */}
              <div className="absolute -bottom-4 -right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 font-display text-[120px] font-bold opacity-10 pointer-events-none select-none uppercase leading-none">
                100
              </div>
              
              <div className="relative z-10 flex flex-col items-center md:items-start">
                <div className="text-5xl md:text-7xl font-display font-light mb-4 uppercase tracking-tighter">
                  100<span className="text-2xl align-top md:text-3xl font-bold">%</span>
                </div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed opacity-90 border-navy/20 md:border-l-2 md:border-white/30 md:pl-4">
                  Patient Focus & <br/>Clinical Integrity
                </p>
                <div className="mt-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors cursor-pointer inline-flex items-center">
                    Discover More <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
