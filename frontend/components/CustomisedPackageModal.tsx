"use client";
import { useState } from "react";
import { DialogDescription } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomisedPackageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomisedPackageModal = ({ open, onOpenChange }: CustomisedPackageModalProps) => {
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
    setFormData({ name: "", phone: "", email: "", destination: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[92%] sm:max-w-[420px] p-6 md:p-10 border-none bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden">
        <div className="text-center mb-6 md:mb-10">
          <DialogTitle className="font-heading text-2xl md:text-4xl text-gray-900 mb-2 md:mb-4 font-bold tracking-tight">
            Start Your Request
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-[13px] md:text-[14px] font-medium leading-relaxed px-2">
            Tell us what you're dreaming of.
          </DialogDescription>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <Label htmlFor="custom-name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              Full Name
            </Label>
            <Input 
              id="custom-name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Ram" 
              className="h-11 md:h-12 bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm placeholder:text-gray-300 transition-all outline-none" 
              required 
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="custom-phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              Phone Number
            </Label>
            <Input 
              id="custom-phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleInputChange} 
              placeholder="+91 XXXXX XXXXX" 
              className="h-11 md:h-12 bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm placeholder:text-gray-300 transition-all outline-none" 
              required 
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="custom-email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              Email Address
            </Label>
            <Input 
              id="custom-email" 
              name="email" 
              type="email"
              value={formData.email} 
              onChange={handleInputChange} 
              placeholder="you@example.com" 
              className="h-11 md:h-12 bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm placeholder:text-gray-300 transition-all outline-none" 
              required 
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="custom-dest" className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">
              Preferred Destination
            </Label>
            <Input 
              id="custom-dest" 
              name="destination" 
              value={formData.destination} 
              onChange={handleInputChange} 
              placeholder="e.g. Ayodhya & Varanasi" 
              className="h-11 md:h-12 bg-gray-50/50 border-gray-100 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/10 rounded-xl md:rounded-2xl px-4 md:px-5 text-sm placeholder:text-gray-300 transition-all outline-none" 
              required 
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-[hsl(var(--primary))] text-white font-bold h-12 md:h-14 rounded-xl md:rounded-2xl hover:brightness-105 active:scale-[0.98] transition-all text-sm md:text-base shadow-lg shadow-[hsl(var(--primary))]/20">
              Submit Request
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomisedPackageModal;
