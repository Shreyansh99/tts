"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CTA() {
  const containerRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="pt-8 pb-8 md:pt-20 md:pb-20 bg-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-primary rounded-none -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-primary rounded-none translate-x-1/2 translate-y-1/2 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div 
          ref={containerRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-on-scroll"
        >
          <div className="space-y-6 md:space-y-8 text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-none border border-white/20">
              <span className="text-[10px] font-bold text-teal-light uppercase tracking-[0.3em] leading-none">Become a Patient</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] uppercase tracking-[0.05em]">
              Ready to Prioritise <br/><span className="font-bold text-teal-primary">Your Smile?</span>
            </h2>
            
            <p className="text-lg text-white/70 max-w-xl font-medium tracking-wide">
              Book your consultation today and experience compassionate dental care designed around your comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <Button 
                size="lg" 
                className="bg-teal-primary hover:bg-teal-dark text-white px-10 py-7 font-bold uppercase tracking-[0.2em] text-[11px] shadow-none transition-all transform hover:translate-y-[-2px]"
                asChild
              >
                <Link href="https://thetoothsanctuary.portal.dental" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Online
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-navy px-10 py-7 font-bold uppercase tracking-[0.2em] text-[11px] transition-all"
                asChild
              >
                <Link href="tel:02082056690">
                  <Phone className="mr-2 h-4 w-4" />
                  020 8205 6690
                </Link>
              </Button>
            </div>

            {/* Minimal Trust markers */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-10 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-xl font-bold text-white uppercase tracking-wider">£0</div>
                <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Consultation</p>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-white uppercase tracking-wider">Mon-Fri</div>
                <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">9AM - 5PM</p>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-white uppercase tracking-wider">4.8</div>
                <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="relative h-[250px] md:h-[450px] lg:h-[500px] shadow-2xl border border-white/10 overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8993839927793!2d-0.2518498!3d51.588407399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876114b49ff64e7%3A0x8f908c783c720a11!2sThe%20Tooth%20Sanctuary!5e0!3m2!1sen!2sin!4v1766408085187!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="The Tooth Sanctuary Location"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-[0.9] contrast-[1.1]"
            ></iframe>
            {/* Clinical overlay to match theme */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 bg-navy/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

