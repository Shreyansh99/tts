"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#FAFBFC] pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-white border-b border-navy/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-teal-primary/10 rounded-none border border-teal-primary/20">
              <span className="text-[10px] font-bold text-teal-primary uppercase tracking-[0.3em]">Get In Touch</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-navy leading-[1.1] uppercase tracking-[0.05em]">
              We're Here <br/><span className="font-bold text-teal-primary">To Help You</span>
            </h1>
            
            <p className="text-xl text-navy/60 font-medium leading-relaxed max-w-2xl mx-auto tracking-wide">
              Whether you're booking your first visit or have a question about your care, our friendly team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-light text-navy uppercase tracking-wider">Practice <span className="font-bold text-teal-primary">Information</span></h2>
              <p className="text-navy/60 font-medium leading-relaxed">
                Visit us at our modern clinic in North West London. We've designed our space to be a calming sanctuary for all our patients.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: MapPin, title: "Location", content: "222-224 Edgware Rd, London, NW9 6LG" },
                { icon: Phone, title: "Phone", content: "020 8205 6690", href: "tel:02082056690" },
                { icon: Mail, title: "Email", content: "info@thetoothsanctuary.co.uk", href: "mailto:info@thetoothsanctuary.co.uk" },
              ].map((item, i) => (
                <div key={i} className="group flex items-center p-6 bg-white rounded-none border border-navy/5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-teal-primary/5 rounded-none flex items-center justify-center mr-6 group-hover:bg-teal-primary transition-colors">
                    <item.icon className="w-6 h-6 text-teal-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy uppercase tracking-widest text-[10px] mb-1">{item.title}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-navy/70 font-bold hover:text-teal-primary transition-colors">{item.content}</a>
                    ) : (
                      <p className="text-navy/70 font-bold">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-none p-10 text-white space-y-6 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-primary/10 rounded-none translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:bg-teal-primary/20 transition-colors" />
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-teal-primary" />
                <h3 className="font-display text-xl font-bold uppercase tracking-widest">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { days: "Mon - Fri", hours: "9:00 AM - 6:00 PM" },
                  { days: "Saturday", hours: "9:00 AM - 2:00 PM" },
                  { days: "Sunday", hours: "Closed" },
                ].map((slot, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0">
                    <span className="text-white/60 font-bold uppercase tracking-widest text-[10px]">{slot.days}</span>
                    <span className="font-bold text-sm">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-none p-10 md:p-16 border border-navy/5 shadow-xl">
              <div className="mb-12">
                <h2 className="font-display text-3xl font-light text-navy uppercase tracking-wider mb-4">Send Us A <span className="font-bold text-teal-primary">Message</span></h2>
                <p className="text-navy/60 font-medium leading-relaxed">
                  Have a question or want to request a callback? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-navy uppercase tracking-[0.2em] ml-2">First Name</label>
                    <Input className="h-14 rounded-none border-navy/5 bg-[#FAFBFC] focus:bg-white transition-all px-6 font-medium" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-navy uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <Input className="h-14 rounded-none border-navy/5 bg-[#FAFBFC] focus:bg-white transition-all px-6 font-medium" type="email" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-navy uppercase tracking-[0.2em] ml-2">How Can We Help?</label>
                  <Textarea className="min-h-[150px] rounded-none border-navy/5 bg-[#FAFBFC] focus:bg-white transition-all p-6 font-medium resize-none" placeholder="I'm interested in..." />
                </div>

                <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-none h-16 font-bold uppercase tracking-[0.2em] text-[11px] shadow-none flex items-center justify-center space-x-3 transform transition-all hover:translate-y-[-2px]">
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </Button>

                <p className="text-center text-[10px] font-bold text-navy/40 uppercase tracking-[0.1em]">
                  Guaranteed response within 1 business day
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

