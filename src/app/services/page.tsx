"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Shield, Sparkles, Zap, Smile, Heart, Users, ArrowRight, Check, Target, Clock, Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Expert cleanings and check-ups to maintain your optimal oral health.",
    features: ["Routine Examinations", "High-Tech Cleaning", "Fluoride Treatments", "Cancer Screenings"],
    slug: "preventive",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with bespoke treatments designed for your confidence.",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Composite Bonding"],
    slug: "cosmetic",
  },
  {
    icon: Zap,
    title: "Restorative Care",
    description: "Modern solutions to repair and restore damaged teeth with precision.",
    features: ["Digital Fillings", "Crowns & Bridges", "Root Canal Care", "Modern Dentures"],
    slug: "restorative",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Straighten your teeth discreetly with the latest clear aligner technology.",
    features: ["Invisalign® Clear", "Custom Care Plans", "Progress Monitoring", "Premium Retainers"],
    slug: "invisalign",
  },
  {
    icon: Heart,
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks and functions naturally.",
    features: ["Single Implants", "Multi-Tooth Care", "Implant Dentures", "Bone Grafting"],
    slug: "implants",
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Compassionate dental care tailored for every generation.",
    features: ["Pediatric Care", "Adult Dentistry", "Senior Focus", "Dental Education"],
    slug: "family",
  },
];

export default function ServicesPage() {
  const containerRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-white pt-16">

      {/* Intro Section - High Density */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[1.1] uppercase tracking-wide">
              Exceptional Care, <br/><span className="font-bold text-teal-primary">Tailored to Your Dental Needs</span>
            </h2>
            <p className="text-base md:text-lg text-navy/60 font-medium leading-relaxed max-w-2xl mx-auto">
              At The Tooth Sanctuary, we offer a comprehensive range of dental treatments tailored to your individual needs. Our services combine advanced clinical expertise with a gentle, patient-focused approach to ensure your comfort and confidence throughout your dental journey.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services - Alternating Edge-to-Edge */}
      
      {/* 1. Teeth Whitening - Left Image */}
      <section className="py-8 md:py-12 overflow-hidden relative">
        <div className="max-w-[1440px] mr-auto ml-0 pr-6 lg:pr-12 pl-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 lg:gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/service-cosmetic.png"
                  alt="Teeth Whitening"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>

            <div className="space-y-4 py-2 lg:py-0">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">White teeth Treatment</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Teeth <br/><span className="font-bold text-teal-primary">Whitening</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  Say goodbye to stains caused by coffee, tea, and natural discolouration. Our safe and effective professional whitening treatments are designed to brighten your smile and boost your confidence, all in a relaxed and supportive environment.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/whitening">About Teeth Whitening</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Emergency Appointments - Right Image */}
      <section className="py-8 md:py-12 overflow-hidden relative bg-[#FAFBFC]">
        <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-12 pr-0">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-8 items-center">
            <div className="space-y-4 py-2 lg:py-0 order-2 lg:order-1">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Emergency Appointments</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Urgent <br/><span className="font-bold text-teal-primary">Dental Care</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  Dental pain can strike at any time, which is why we prioritise same-day emergency appointments whenever possible. Our team will work quickly to diagnose the problem, ease your discomfort, and provide the appropriate treatment.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/emergency">About Emergency Appointments</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/waiting-real.png"
                  alt="Emergency Care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dental Implants - Left Image */}
      <section className="py-8 md:py-12 overflow-hidden relative">
        <div className="max-w-[1440px] mr-auto ml-0 pr-6 lg:pr-12 pl-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 lg:gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/service-restorative.png"
                  alt="Dental Implants"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>

            <div className="space-y-4 py-2 lg:py-0">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Dental Implants</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Restore Your <br/><span className="font-bold text-teal-primary">Natural Smile</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  Missing teeth can affect both your oral health and self-esteem. Our high-quality dental implants are a durable and natural-looking solution, carefully placed to restore your smile’s function and appearance with long-lasting results.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/implants">About Dental Implants</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Children's Dentistry - Right Image */}
      <section className="py-8 md:py-12 overflow-hidden relative bg-[#FAFBFC]">
        <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-12 pr-0">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-8 items-center">
            <div className="space-y-4 py-2 lg:py-0 order-2 lg:order-1">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Children Dental Clinic</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Children&apos;s <br/><span className="font-bold text-teal-primary">Dentistry</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  We create a warm and welcoming space for children to learn healthy dental habits from an early age. Our gentle approach helps make dental visits fun and stress-free, building positive associations that last a lifetime.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/pediatric">About Children&apos;s Dentistry</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/team-premium.png"
                  alt="Children's Dentistry"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Orthodontics - Left Image */}
      <section className="py-8 md:py-12 overflow-hidden relative">
        <div className="max-w-[1440px] mr-auto ml-0 pr-6 lg:pr-12 pl-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 lg:gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/service-invisalign.png"
                  alt="Orthodontics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>

            <div className="space-y-4 py-2 lg:py-0">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Orthodontics Treatment</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Modern <br/><span className="font-bold text-teal-primary">Orthodontics</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  Achieving a straighter smile has never been easier. We offer a range of orthodontic treatments including Invisalign and traditional options that are tailored to your lifestyle and dental needs, all with professional supervision.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/orthodontics">About Orthodontics</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Oral Surgery - Right Image */}
      <section className="py-8 md:py-12 overflow-hidden relative bg-[#FAFBFC]">
        <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-12 pr-0">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-8 items-center">
            <div className="space-y-4 py-2 lg:py-0 order-2 lg:order-1">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Root Treatment service</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Oral <br/><span className="font-bold text-teal-primary">Surgery</span>
                </h2>
              </div>
              <div className="space-y-3 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  We carry out a variety of minor surgical procedures in a calm and hygienic setting. Whether it&apos;s a tooth extraction or another treatment, our experienced clinicians ensure your comfort and care every step of the way.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="rounded-none border-teal-primary/20 text-teal-primary hover:bg-teal-primary hover:text-white uppercase tracking-widest text-[9px] font-bold py-5 px-6" asChild>
                    <Link href="/services/oral-surgery">About Oral Surgery</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.5] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/surgery-real.jpg"
                  alt="Oral Surgery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-teal-primary/5 rounded-none -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - High Density Feature Grid */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
              <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Our Approach</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy uppercase tracking-wider leading-[1.1]">
              Your Path to a <br/><span className="font-bold text-teal-primary">Brighter, Healthier Smile</span>
            </h2>
            <p className="text-base text-navy/60 font-medium tracking-wide max-w-xl mx-auto">
              At The Tooth Sanctuary, we&apos;re dedicated to providing expert dental care that&apos;s both compassionate and comprehensive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Expert Care" },
              { icon: Zap, title: "Modern Tech" },
              { icon: Target, title: "Tailored Treatments" },
              { icon: Users, title: "Trusted Team" },
              { icon: Heart, title: "Comfort First" },
              { icon: Award, title: "Proven Results" }
            ].map((item, i) => (
              <div key={i} className="group p-5 bg-[#FAFBFC] border border-navy/5 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-primary transition-colors">
                  <item.icon className="w-5 h-5 text-teal-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[9px] font-bold text-navy uppercase tracking-[0.2em]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us & CTA Section */}
      <section className="py-8 md:py-12 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-primary rounded-none -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-none border border-white/20">
                  <span className="text-[10px] font-bold text-teal-light uppercase tracking-[0.3em] leading-none">Visit Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wider leading-[1.1]">
                  Ready to <br/><span className="font-bold text-teal-primary">Prioritise Your Smile?</span>
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-teal-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold uppercase tracking-widest text-xs">Locate Us</p>
                        <p className="text-white/60 text-[12px] mt-1 font-medium">3a Sheaveshill Avenue, NW9 6SH<br/>Edgware, London</p>
                        <Link 
                          href="https://www.google.com/maps/dir/?api=1&destination=The+Tooth+Sanctuary+NW9+6SH" 
                          target="_blank"
                          className="text-teal-primary text-[10px] font-bold uppercase tracking-widest mt-2 inline-block hover:text-teal-light transition-colors"
                        >
                          Get Directions →
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-teal-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold uppercase tracking-widest text-xs">Opening Hours</p>
                        <p className="text-white/60 text-[12px] mt-1 font-medium">Monday – Friday<br/>9:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 border-l border-white/10 pl-6">
                    <h3 className="font-display text-lg font-light uppercase tracking-widest text-white">
                      Simple. <br/><span className="font-bold text-teal-primary text-xl">Personalised.</span>
                    </h3>
                    <p className="text-white/50 text-[11px] leading-relaxed font-medium">
                      Take the first step toward a healthier smile today.
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full bg-teal-primary hover:bg-teal-dark text-white rounded-none py-5 font-bold uppercase tracking-[0.2em] text-[9px]"
                      asChild
                    >
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] shadow-2xl border border-white/10 overflow-hidden group">
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
              <div className="absolute inset-0 pointer-events-none border border-white/5 bg-navy/5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

