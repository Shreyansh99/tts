"use client";

import { Calendar, Plus, Mail } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    title: "APPOINTMENTS",
    icon: Calendar,
    href: "https://thetoothsanctuary.portal.dental",
    bgColor: "bg-teal-primary",
    textColor: "text-white",
    iconColor: "text-white"
  },
  {
    title: "EMERGENCIES",
    icon: Plus,
    href: "tel:02082056690",
    bgColor: "bg-navy",
    textColor: "text-white",
    iconColor: "text-white"
  },
  {
    title: "CONTACT US",
    icon: Mail,
    href: "/contact",
    bgColor: "bg-white",
    textColor: "text-navy",
    iconColor: "text-teal-primary"
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full pt-0 pb-0 bg-white">
      <div className="flex flex-row w-full">
        {quickLinks.map((link, index) => (
          <Link 
            key={index}
            href={link.href}
            className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-6 md:py-14 transition-all duration-300 hover:brightness-105 group overflow-hidden ${link.bgColor} ${link.textColor}`}
          >
            <div className="relative">
              <link.icon className={`w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1.5] transition-transform duration-500 group-hover:scale-110 ${link.iconColor}`} />
            </div>
            <span className="font-display text-[8px] sm:text-lg md:text-xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.3em] text-center">
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
