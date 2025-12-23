"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const allServices = [
  {
    title: "Teeth Whitening",
    description: "Professional brightening treatments for a radiant, confident smile.",
    image: "/service-cosmetic.png", 
    link: "/services"
  },
  {
    title: "Orthodontics",
    description: "Modern aligners and clear braces for perfect alignment.",
    image: "/service-invisalign.png",
    link: "/services"
  },
  {
    title: "Emergency Care",
    description: "Same-day priority appointments for immediate pain relief.",
    image: "/service-preventive.png",
    link: "/services"
  },
  {
    title: "Dental Implants",
    description: "Reclaim your youthful appearance with permanent, natural-looking dental implants.",
    image: "/service-restorative.png",
    link: "/services"
  },
  {
    title: "Advanced Dentistry",
    description: "State-of-the-art digital dentistry and comprehensive restorative care.",
    image: "/hero-real.png",
    link: "/services"
  },
  {
    title: "General Dentistry",
    description: "Compassionate routine care for you and your entire family.",
    image: "/waiting-real.png",
    link: "/services"
  },
];


export default function Services() {
  const containerRef = useScrollAnimation<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = allServices.length;
  const desktopPages = 2; // 6 items / 3 per page

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextPage = useCallback(() => {
    if (isMobile) {
      const nextIndex = (currentPage + 1) % totalItems;
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: nextIndex * (scrollContainer.offsetWidth * 0.85 + 0), // 85vw
          behavior: "smooth"
        });
      }
      setCurrentPage(nextIndex);
    } else {
      setCurrentPage((prev) => (prev + 1) % desktopPages);
    }
  }, [isMobile, currentPage, totalItems, desktopPages]);

  const prevPage = useCallback(() => {
    if (isMobile) {
      const nextIndex = (currentPage - 1 + totalItems) % totalItems;
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        scrollContainer.scrollTo({
          left: nextIndex * (scrollContainer.offsetWidth * 0.85 + 0),
          behavior: "smooth"
        });
      }
      setCurrentPage(nextIndex);
    } else {
      setCurrentPage((prev) => (prev - 1 + desktopPages) % desktopPages);
    }
  }, [isMobile, currentPage, totalItems, desktopPages]);

  useEffect(() => {
    const timer = setInterval(nextPage, 4000);
    return () => clearInterval(timer);
  }, [nextPage]);

  return (
    <section className="w-full py-8 md:py-20 bg-white overflow-hidden group/main">
      <div 
        ref={containerRef}
        className="animate-on-scroll relative group"
      >
        <div className="relative w-full">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Desktop Carousel */}
            <div 
              className="hidden md:flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              <div className="flex-none w-full flex">
                {allServices.slice(0, 3).map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
              <div className="flex-none w-full flex">
                {allServices.slice(3, 6).map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </div>

            {/* Mobile Scroll */}
            <div 
              ref={scrollRef}
              className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >
              {allServices.map((service, index) => (
                <div key={index} className="flex-none w-[85vw] snap-center">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden md:block">
            <button
              onClick={prevPage}
              className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-none bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-teal-primary hover:bg-teal-primary hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/main:opacity-100"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-none bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center text-teal-primary hover:bg-teal-primary hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/main:opacity-100"
              aria-label="Next services"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Minimal Status Hint - Shared */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(isMobile ? totalItems : desktopPages)].map((_, i) => (
              <div 
                key={i}
                className={`h-1 rounded-none transition-all duration-300 ${
                  currentPage === i ? "w-8 bg-teal-primary" : "w-2 bg-navy/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof allServices[0] }) {
  return (
    <div className="relative flex-1 min-h-[400px] md:min-h-[500px] overflow-hidden border-l border-white/10 group">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/30" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-14 space-y-4 md:space-y-6">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-white uppercase tracking-[0.2em] transition-transform duration-500 group-hover:-translate-y-2">
          {service.title}
        </h3>
        <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed max-w-[280px] md:max-w-[350px] transition-transform duration-500 group-hover:-translate-y-2">
          {service.description}
        </p>
        <div className="pt-4 transition-transform duration-500 group-hover:-translate-y-2">
          <Button
            size="lg"
            className="bg-teal-primary hover:bg-white hover:text-teal-primary text-white rounded-none px-8 py-5 md:px-10 md:py-6 font-bold uppercase tracking-[0.1em] text-[10px] md:text-[11px] shadow-none transition-all"
            asChild
          >
            <Link href={service.link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

