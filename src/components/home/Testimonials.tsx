"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rita L.",
    role: "Patient",
    content: "I've never felt so at ease in a dental chair. The staff at The Tooth Sanctuary are warm, attentive, and truly care about your comfort.",
    rating: 5,
  },
  {
    name: "Michael D.",
    role: "Patient",
    content: "Professional, friendly, and honest. From the moment I walked in, I felt like I was in good hands.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "Patient",
    content: "Highly recommend! They made my 6-year-old feel safe and excited for his next visit. That's rare!",
    rating: 5,
  },
];

export default function Testimonials() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 768) { // Only auto-scroll on mobile
        const nextIndex = (currentIndex + 1) % testimonials.length;
        const scrollAmount = nextIndex * (scrollContainer.offsetWidth * 0.85 + 24); // 85vw + gap
        
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
        setCurrentIndex(nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative pt-6 pb-2 md:pt-20 md:pb-4 bg-white text-navy overflow-hidden">
      {/* Marble Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ 
          backgroundImage: 'url("/footer-marble-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-4 md:mb-8 animate-on-scroll"
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-primary/10 rounded-none border border-teal-primary/20 mb-3">
            <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Patient Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-4 leading-[1.05] uppercase tracking-wide">
            Loved by Our <br/><span className="font-bold text-teal-primary">Community</span>
          </h2>
          <p className="text-lg text-navy/60 font-medium tracking-wide leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it - hear from the patients who trust us with their smiles every day.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory px-6 -mx-6 md:px-0 md:mx-0"
        >
          {testimonials.map((testimonial, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardRef = useScrollAnimation<HTMLDivElement>();
            const delayClass = `animation-delay-${index * 100}`;
            
            return (
              <div 
                key={index} 
                ref={cardRef}
                className={`flex-none w-[85vw] md:w-auto bg-white rounded-none border border-navy/5 p-7 shadow-sm hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 animate-on-scroll snap-center ${delayClass}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-teal-primary/20" />
                  </div>
                  
                  <p className="text-navy/70 leading-relaxed mb-5 italic font-medium tracking-wide text-sm md:text-base flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-navy/5">
                    <p className="font-bold text-navy uppercase tracking-widest text-sm">{testimonial.name}</p>
                    <p className="text-[11px] text-teal-primary font-bold uppercase tracking-[0.2em] mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-0 md:mt-4 text-center flex justify-center">
          <a 
            href="https://www.google.com/search?q=The+Tooth+Sanctuary+Colindale#lrd=0x48761168a6f3a3a7:0x5e79b9b0f9f3e3a7,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center bg-white border border-navy/5 shadow-md px-5 py-4 md:px-10 md:py-6 space-y-2 hover:shadow-xl transition-all group"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-4 md:h-5 object-contain"
              />
              <div className="flex text-orange-400 text-xs md:text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-navy font-bold text-sm md:text-base">4.8</span>
            </div>
            <p className="text-[8px] md:text-[9px] text-navy/40 font-bold uppercase tracking-[0.2em] leading-none group-hover:text-teal-primary transition-colors">
              SEE ALL GOOGLE REVIEWS
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

