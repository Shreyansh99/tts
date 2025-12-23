"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Star, ExternalLink, MessageSquare } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Mohammad Ahmed",
    rating: 5,
    time: "2  W E E K S  A G O",
    text: "Visited today for a tooth extraction and scaling. Dr. Poonam was wonderful, the extraction was so smooth and she explained through every single step. If the external appearance of the surgery is making you reluctant, rest assured the atmosphere, professionalism and service at the surgery are spot on! I have enrolled with the dental surgery and look forward to more successful visits.",
    initial: "M",
    bgColor: "bg-[#4285F4]",
    link: "https://maps.app.goo.gl/xMB5471DCimSPugq9"
  },
  {
    id: 2,
    author: "Edward Lancaster",
    rating: 5,
    time: "3  M O N T H S  A G O",
    text: "What can I say? It was the best experience ever, The staff are great, polite and friendly. Dr Gaglani is the nicest man, kind and pleasant, He explained everything beforehand , and made me feel at ease. The surgery is modern and clean. I can't praise them all enough. I highly recommend. that if you need a Dentist, then please try them. You will not be disappointed!",
    initial: "E",
    bgColor: "bg-[#EA4335]",
    link: "https://maps.app.goo.gl/hqMnqqJeF6xkrVu36"
  },
  {
    id: 3,
    author: "Jiya Vaidya",
    rating: 5,
    time: "A  M O N T H  A G O",
    text: "My family and I visited this dental clinic and had an excellent experience with Dr. Milind. He provided outstanding care and expertise, ensuring our treatment was comfortable and of the highest quality. The clinic is well-maintained, equipped with modern technology, and has a welcoming atmosphere.",
    initial: "J",
    bgColor: "bg-[#FBBC05]",
    link: "https://maps.app.goo.gl/tLPp1s9CS1zbxSDX9"
  },
  {
    id: 4,
    author: "Corinne Scott",
    rating: 5,
    time: "A  M O N T H  A G O",
    text: "My first visit to The Tooth Sanctuary was worth travelling a little further than normal. From arranging an appointment with their receptionist, Apeksha to meeting my dentist Poonam and Mohamed who worked alongside her. Poonam explained what they had to do and helped me choose suitable dentures.",
    initial: "C",
    bgColor: "bg-[#34A853]",
    link: "https://maps.app.goo.gl/4nLBFsLb6wHMba8K9"
  }
];

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/place/The+Tooth+Sanctuary/@51.5884107,-0.2544247,17z/data=!3m1!4b1!4m6!3m5!1s0x4876114b49ff64e7:0x8f908c783c720a11!8m2!3d51.5884074!4d-0.2518498!16s%2Fg%2F11xf4t0sxt";

const PartialStar = ({ fill }: { fill: number }) => {
  const percentage = Math.min(Math.max(fill * 100, 0), 100);
  return (
    <div className="relative w-4 h-4">
      <Star className="w-full h-full text-[#FF8A00] fill-none stroke-[1px] stroke-[#FF8A00]" />
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${percentage}%` }}
      >
        <Star className="w-4 h-4 text-[#FF8A00] fill-current" />
      </div>
    </div>
  );
};

const RatingStars = ({ rating, size = "sm" }: { rating: number, size?: "sm" | "lg" }) => {
  const fullStars = Math.floor(rating);
  const remainder = rating - fullStars;
  return (
    <div className="flex items-center space-x-0.5">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className={`${size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'} text-[#FF8A00] fill-current`} />;
        } else if (i === fullStars && remainder > 0) {
          return <PartialStar key={i} fill={remainder} />;
        }
        return <Star key={i} className={`${size === 'lg' ? 'w-5 h-5' : 'w-3.5 h-3.5'} text-[#FF8A00] fill-none stroke-[1px] stroke-[#FF8A00]`} />;
      })}
    </div>
  );
};

export default function GoogleReviewsDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Badge Label - Bottom Right */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[9999] cursor-pointer group transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="bg-white shadow-xl flex flex-col rounded-none overflow-hidden min-w-[190px]">
          {/* Green Top Bar */}
          <div className="h-1.5 w-full bg-[#34A853]" />
          
          <div className="p-3 pr-4 flex items-center space-x-4">
            {/* Left Side: Google Logo */}
            <div className="w-10 h-10 flex-shrink-0 relative">
              <Image
                src="/google-logo.png"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Side: Text & Stars */}
            <div className="flex flex-col">
              <span className="text-[13px] font-medium text-navy/70 leading-none mb-1">Google Rated</span>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#202124] leading-none">4.8</span>
                <RatingStars rating={4.8} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card Content - Full Height Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white z-[10000] shadow-[-30px_0_60px_-15px_rgba(0,0,0,0.15)] border-l border-navy/5 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} rounded-none overflow-hidden flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b border-navy/5 flex items-center justify-between bg-white relative">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#202124] tracking-tight">The Tooth Sanctuary</h3>
            <div className="flex items-center space-x-6 mt-4 pb-2">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#202124]">4.8</span>
                <RatingStars rating={4.8} size="lg" />
                <span className="text-[13px] text-[#70757A] mt-1">179 reviews</span>
              </div>

              {/* Mock Histogram */}
              <div className="flex-1 space-y-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-[11px] text-[#70757A] w-2">{rating}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#FF8A00]" 
                        style={{ width: rating === 5 ? '85%' : rating === 4 ? '10%' : '2%' }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 transition-colors text-gray-500 absolute top-4 right-4 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sorting Chips */}
        <div className="px-6 py-3 border-b border-gray-100 flex items-center space-x-2 overflow-x-auto no-scrollbar bg-white">
          {['Most relevant', 'Newest', 'Highest', 'Lowest'].map((filter, i) => (
            <button key={filter} className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-[#E8F0FE] text-blue-700 border border-blue-100' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
              {filter}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide bg-white">
          {reviews.map((review) => (
            <a 
              key={review.id} 
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/review"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${review.bgColor} flex items-center justify-center text-white text-lg font-bold rounded-full`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#202124]">{review.author}</h4>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-[#FF8A00]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[12px] text-[#70757A]">{review.time.toLowerCase()}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[14px] text-[#202124] leading-relaxed font-normal">
                  {review.text}
                </p>
                
                <div className="flex items-center space-x-4 text-[#70757A] text-[13px] pt-1 font-medium">
                  <span className="hover:text-blue-600 cursor-pointer flex items-center transition-colors">
                    <MessageSquare className="w-4 h-4 mr-1.5 opacity-60" />
                    Helpful?
                  </span>
                </div>
              </div>
              <div className="mt-8 border-b border-gray-100" />
            </a>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-gray-100 bg-white flex flex-col space-y-3">
          <a 
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-2.5 text-[14px] font-bold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-all rounded-full"
          >
            <span>Write a review</span>
          </a>
          <a 
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-2.5 text-[14px] font-bold text-[#1a73e8] bg-white border border-gray-200 hover:bg-gray-50 transition-all rounded-full"
          >
            <span>Read more reviews</span>
          </a>
        </div>
      </div>
    </>
  );
}
