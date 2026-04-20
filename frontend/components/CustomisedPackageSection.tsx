"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import customTravelBg from "@/assets/premium-custom-resort.png";

const CustomisedPackageSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customised Package Form Submitted:", formData);
    // Success feedback could go here
    setFormData({ name: "", phone: "", email: "", destination: "" });
  };

  return (
    <section id="customise" className="relative py-12 md:py-16 lg:py-24 overflow-hidden mt-10">
      {/* FULL BLEED CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={customTravelBg} 
          alt="Customised Luxury Journey" 
          fill 
          className="object-cover"
          sizes="100vw"
          quality={100}
          priority
        />
        {/* Subtle gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT: FLOATING TYPOGRAPHY */}
        <div className="text-white max-w-xl lg:pr-8 w-full">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-[hsl(var(--primary))]"></span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[hsl(var(--primary))] drop-shadow-md">
              Bespoke Travel
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] mb-6 md:mb-8 drop-shadow-xl text-white">
            Design Your<br className="hidden md:block" /> Divine Journey.
          </h2>
          <p className="text-gray-200 text-[14px] md:text-[16px] lg:text-lg leading-relaxed max-w-md font-light drop-shadow-md">
            Go beyond the ordinary. Let our specialists weave together a deeply personal, luxurious itinerary that aligns perfectly with your spiritual aspirations and unparalleled comfort.
          </p>
        </div>

        {/* RIGHT: PREMIUM FORM CARD */}
        <div className="w-full lg:w-[460px] flex-shrink-0">
          <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] p-6 md:p-10 flex flex-col min-h-0 md:min-h-[600px] relative overflow-hidden">
            
            {/* Subtle glow behind the card content */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[hsl(var(--primary))] rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>

            <div className="mb-6 md:mb-10 flex-shrink-0 relative z-10 text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-1.5 md:mb-2">Start Your Request</h3>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-medium">Tell us what you're dreaming of.</p>
            </div>
            
            <div className="flex-1 relative z-10 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                
                <div className="space-y-1.5">
                  <Label htmlFor="custom-name" className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Full Name</Label>
                  <Input 
                    id="custom-name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Ram" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 text-sm h-11 md:h-12 rounded-xl md:rounded-2xl placeholder:text-gray-300 shadow-sm transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="custom-phone" className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Phone Number</Label>
                  <Input 
                    id="custom-phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="+91 XXXXX XXXXX" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 text-sm h-11 md:h-12 rounded-xl md:rounded-2xl placeholder:text-gray-300 shadow-sm transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="custom-email" className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</Label>
                  <Input 
                    id="custom-email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="you@example.com" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 text-sm h-11 md:h-12 rounded-xl md:rounded-2xl placeholder:text-gray-300 shadow-sm transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="custom-dest" className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-1">Preferred Destination</Label>
                  <Input 
                    id="custom-dest" 
                    name="destination" 
                    value={formData.destination} 
                    onChange={handleInputChange} 
                    placeholder="e.g. Ayodhya & Varanasi" 
                    className="bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 text-sm h-11 md:h-12 rounded-xl md:rounded-2xl placeholder:text-gray-300 shadow-sm transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="pt-2 md:pt-4">
                  <button type="submit" className="w-full bg-[hsl(var(--primary))] text-white font-bold h-12 md:h-14 rounded-xl md:rounded-2xl hover:brightness-105 active:scale-[0.98] transition-all text-sm md:text-base shadow-lg shadow-[hsl(var(--primary))]/20">
                    Create My Package
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomisedPackageSection;
