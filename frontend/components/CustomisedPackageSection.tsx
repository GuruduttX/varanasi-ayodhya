"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import customTravelBg from "@/assets/premium-custom-resort.png";

const destinationsList = ["Ayodhya", "Varanasi", "Prayagraj", "Sarnath"];

const CustomisedPackageSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destinations: [] as string[],
    duration: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDestinationChange = (dest: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      destinations: checked ? [...prev.destinations, dest] : prev.destinations.filter((d) => d !== dest),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Customised Package Form Submitted:", formData);
    // Success feedback could go here
    setFormData({ name: "", phone: "", destinations: [], duration: "", message: "" });
  };

  return (
    <section id="customise" className="relative py-12 md:py-16 lg:py-20 overflow-hidden mt-10">
      <style>{`
        .glass-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .glass-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .glass-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.15);
          border-radius: 10px;
        }
        .glass-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.3);
        }
      `}</style>
      
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
          <div className="inline-flex items-center gap-4 mb-5">
            <span className="w-12 h-px bg-[hsl(var(--primary))]"></span>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[hsl(var(--primary))] drop-shadow-md">
              Bespoke Travel
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] mb-6 drop-shadow-xl text-white">
            Design Your<br />Divine Journey.
          </h2>
          <p className="text-gray-200 text-[15px] md:text-base leading-relaxed max-w-md font-light drop-shadow-md">
            Go beyond the ordinary. Let our specialists weave together a deeply personal, luxurious itinerary that aligns perfectly with your spiritual aspirations and unparalleled comfort.
          </p>
        </div>

        {/* RIGHT: GLASSMORPHISM FORM CARD */}
        <div className="w-full lg:w-[480px] flex-shrink-0">
          <div className="bg-white/85 backdrop-blur-2xl rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/60 p-8 md:p-10 flex flex-col h-[580px] lg:h-[600px] relative overflow-hidden">
            
            {/* Soft glow behind the card content */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[hsl(var(--primary))] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>

            <div className="mb-6 flex-shrink-0 relative z-10">
              <h3 className="font-heading text-2xl md:text-[28px] font-bold text-gray-900 mb-1.5">Start Your Request</h3>
              <p className="text-[13px] text-gray-600 font-medium">Tell us what you're dreaming of.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-4 glass-scrollbar relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6 pb-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="custom-name" className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Full Name</Label>
                    <Input 
                      id="custom-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="John Doe" 
                      className="bg-white/60 border-white shadow-sm h-12 focus-visible:ring-1 focus-visible:ring-[hsl(var(--primary))] text-sm rounded-xl placeholder:text-gray-400" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-phone" className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Phone Number</Label>
                    <Input 
                      id="custom-phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 XXXXX XXXXX" 
                      className="bg-white/60 border-white shadow-sm h-12 focus-visible:ring-1 focus-visible:ring-[hsl(var(--primary))] text-sm rounded-xl placeholder:text-gray-400" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <Label className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Preferred Destinations</Label>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {destinationsList.map((dest) => (
                      <div key={dest} className="flex items-center gap-2.5 bg-white/60 border border-white shadow-sm p-3 rounded-xl hover:bg-white/90 transition-colors cursor-pointer group">
                        <Checkbox 
                          id={`custom-${dest}`} 
                          checked={formData.destinations.includes(dest)} 
                          onCheckedChange={(checked: boolean) => handleDestinationChange(dest, checked === true)} 
                          className="data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:border-[hsl(var(--primary))]"
                        />
                        <Label htmlFor={`custom-${dest}`} className="font-medium text-gray-700 cursor-pointer text-[13px] w-full group-hover:text-black">{dest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <Label htmlFor="custom-duration" className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Preferred Duration</Label>
                  <Input 
                    id="custom-duration" 
                    name="duration" 
                    value={formData.duration} 
                    onChange={handleInputChange} 
                    placeholder="e.g., 5 days / 4 nights" 
                    className="bg-white/60 border-white shadow-sm h-12 focus-visible:ring-1 focus-visible:ring-[hsl(var(--primary))] text-sm rounded-xl placeholder:text-gray-400" 
                    required 
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <Label htmlFor="custom-message" className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Additional Details</Label>
                  <Textarea 
                    id="custom-message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Share your preferences, dietary requirements, or special requests..." 
                    className="bg-white/60 border-white shadow-sm min-h-[110px] resize-none focus-visible:ring-1 focus-visible:ring-[hsl(var(--primary))] text-sm rounded-xl placeholder:text-gray-400" 
                    required 
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-[hsl(var(--primary))] text-white font-bold tracking-widest uppercase text-xs h-14 rounded-xl hover:bg-[hsl(var(--primary))/0.9] transition-all shadow-md shadow-[hsl(var(--primary))/0.25] hover:-translate-y-0.5">
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
