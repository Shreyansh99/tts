"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Award, Heart, Users, Sparkles, Check, Shield, Zap, Target, Star, Smile, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const values = [
  {
    icon: Heart,
    title: "Patient First",
    description: "Your comfort and wellbeing are the foundation of our care approach.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest clinical standards across all treatments.",
  },
  {
    icon: Users,
    title: "Expertise",
    description: "Our GDC registered team brings decades of specialist experience.",
  },
  {
    icon: Sparkles,
    title: "Precision",
    description: "We invest in the latest technology for predictable, beautiful results.",
  },
];

export default function AboutPage() {
  const containerRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-white pt-16">
      {/* Our Story Section - Edge to Edge Left */}
      <section className="py-10 md:py-16 overflow-hidden relative">
        <div className="max-w-[1440px] mr-auto ml-0 pr-6 lg:pr-12 pl-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-center">
            {/* Left - Image (Edge to Edge) */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.8] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/surgery-real.jpg"
                  alt="Modern Dental Surgery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-primary/5 rounded-none -z-0" />
            </div>

            {/* Right - Content */}
            <div className="space-y-6 py-4 lg:py-0">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Our Story</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  The Tooth <br/><span className="font-bold text-teal-primary">Sanctuary</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  At The Tooth Sanctuary, our patients are at the centre of everything we do. From the moment you walk through our doors, we want you to feel relaxed and well cared for.
                </p>
                <p>
                  Our modern waiting and treatment areas are designed with you in mind, combining latest technology with the comforts you’d expect from a high-quality dental clinic. We believe education is as vital as treatment—prevention truly is the best cure.
                </p>
                <p className="text-navy/50 text-xs uppercase tracking-widest font-bold border-l-2 border-teal-primary/30 pl-4 py-2">
                  Building lifelong relationships through trust, comfort, and clinical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are? - Edge to Edge Right */}
      <section className="py-10 md:py-16 overflow-hidden relative bg-[#FAFBFC]">
        <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-12 pr-0">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">
            {/* Left - Content */}
            <div className="space-y-6 py-4 lg:py-0 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Who We Are?</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.05] uppercase tracking-wide">
                  Rooted in Care, <br/><span className="font-bold text-teal-primary">Driven by Excellence</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm md:text-base text-navy/70 font-medium leading-relaxed max-w-xl">
                <p>
                  At The Tooth Sanctuary, we are a dedicated team of dental professionals driven by a shared passion for exceptional patient care. Based in Edgware, we bring together years of clinical experience and advanced technology.
                </p>
                <p>
                  Our philosophy is simple: to treat every patient with kindness, honesty, and respect. We understand every smile is unique, focusing on building long-term relationships and tailored treatment plans that suit your needs perfectly.
                </p>
              </div>
            </div>

            {/* Right - Image (Edge to Edge) */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/4.8] max-w-lg mx-auto rounded-none overflow-hidden shadow-2xl relative z-10 border border-navy/5">
                <Image
                  src="/team-about-new.png"
                  alt="Our Dedicated Dental Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/5" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-teal-primary/5 rounded-none -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - High Density Feature Grid */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-10 space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
              <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Teeth Treatment</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy uppercase tracking-wider leading-[1.1]">
              Your Path to a <br/><span className="font-bold text-teal-primary">Brighter Smile</span>
            </h2>
            <p className="text-base text-navy/60 font-medium tracking-wide max-w-xl mx-auto">
              We’re dedicated to providing expert dental care that’s both compassionate and comprehensive.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Expert Care" },
              { icon: Zap, title: "Modern Tech" },
              { icon: Target, title: "Tailored Treatments" },
              { icon: Users, title: "Trusted Team" },
              { icon: Heart, title: "Comfort First" },
              { icon: Award, title: "Proven Results" }
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-[#FAFBFC] border border-navy/5 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-primary transition-colors">
                  <item.icon className="w-6 h-6 text-teal-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[10px] font-bold text-navy uppercase tracking-[0.2em]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefit Cards */}
      <section className="py-10 md:py-16 bg-[#0A1A2F]/[0.02] border-y border-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 bg-teal-primary/5 rounded-none border border-teal-primary/10">
                  <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em] leading-none">Why Choose Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-navy uppercase tracking-wider leading-[1.1]">
                  Experience, <br/><span className="font-bold text-teal-primary">Compassion, Care.</span>
                </h2>
                <p className="text-base text-navy/60 font-medium max-w-md">
                  We combine clinical expertise with modern dentistry to give you a reason to smile confidently.
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-teal-primary hover:bg-teal-dark text-white rounded-none px-10 py-7 font-bold uppercase tracking-[0.2em] text-[11px]"
                asChild
              >
                <Link href="https://thetoothsanctuary.portal.dental" target="_blank">Book Online</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { 
                  title: "Same-Day Emergency", 
                  desc: "Relieving pain and restoring comfort quickly when you need it most.",
                  icon: Clock
                },
                { 
                  title: "20+ Years Experience", 
                  desc: "Trusted care backed by extensive knowledge and proven clinical results.",
                  icon: Star
                },
                { 
                  title: "Warm, Friendly Team", 
                  desc: "A welcoming environment where you feel relaxed and genuinely respected.",
                  icon: Smile
                },
                { 
                  title: "Sedation Options", 
                  desc: "Calm, safe, and stress-free care available for nervous patients.",
                  icon: Heart
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-teal-primary mb-4" />
                  <h3 className="text-xs font-bold text-navy uppercase tracking-widest mb-3">{item.title}</h3>
                  <p className="text-[13px] text-navy/60 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us & CTA Section */}
      <section className="py-10 md:py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-teal-primary rounded-none -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-none border border-white/20">
                  <span className="text-[10px] font-bold text-teal-light uppercase tracking-[0.3em] leading-none">Visit Us</span>
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-light uppercase tracking-wider leading-[1.1]">
                  Ready to <br/><span className="font-bold text-teal-primary">Start Your Journey?</span>
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-teal-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold uppercase tracking-widest text-xs">Locate Us</p>
                        <p className="text-white/60 text-[13px] mt-1 font-medium">3a Sheaveshill Avenue, NW9 6SH<br/>Edgware, London</p>
                        <Link 
                          href="https://www.google.com/maps/dir/?api=1&destination=The+Tooth+Sanctuary+NW9+6SH" 
                          target="_blank"
                          className="text-teal-primary text-[11px] font-bold uppercase tracking-widest mt-3 inline-block hover:text-teal-light transition-colors"
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
                        <p className="text-white/60 text-[13px] mt-1 font-medium">Monday – Friday<br/>9:00 AM – 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-l border-white/10 pl-8">
                    <h3 className="font-display text-lg font-light uppercase tracking-widest text-white">
                      Simple. <br/><span className="font-bold text-teal-primary text-xl">Personalised.</span>
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed font-medium">
                      Take the first step toward a healthier, more confident smile today.
                    </p>
                    <Button 
                      size="sm" 
                      className="w-full bg-teal-primary hover:bg-teal-dark text-white rounded-none py-6 font-bold uppercase tracking-[0.2em] text-[10px]"
                      asChild
                    >
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] shadow-2xl border border-white/10 overflow-hidden group">
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
    </div>
  );
}
