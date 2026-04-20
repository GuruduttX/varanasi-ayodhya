"use client";
import { useState } from "react";
import { DialogDescription } from "@/components/ui/dialog";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface CustomisedPackageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CustomisedPackageModal = ({ open, onOpenChange }: CustomisedPackageModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destinations: [] as string[],
    duration: "",
    message: "",
  });

  const destinations = ["Ayodhya", "Varanasi", "Prayagraj"];

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
    setFormData({ name: "", phone: "", destinations: [], duration: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border border-border max-w-md max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-black text-center ">
           <span className="text-[hsl(var(--primary))]">Customised</span> <span className="text-black">Journey</span>
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500 text-xs">
            Share your requirements and we will craft a bespoke spiritual experience for you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="custom-name" className="text-sm font-medium text-black">Full Name</Label>
            <Input id="custom-name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="bg-muted/30 border-border" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-phone" className="text-sm font-medium text-black">Phone Number</Label>
            <Input id="custom-phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" className="bg-muted/30 border-border" required />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-black">Preferred Destinations</Label>
            <div className="space-y-2 pl-1">
              {destinations.map((dest) => (
                <div key={dest} className="flex items-center gap-3">
                  <Checkbox id={`custom-${dest}`} checked={formData.destinations.includes(dest)} onCheckedChange={(checked: boolean) => handleDestinationChange(dest, checked === true)} />
                  <Label htmlFor={`custom-${dest}`} className="font-normal text-black cursor-pointer text-sm">{dest}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-duration" className="text-sm font-medium text-black">Preferred Duration</Label>
            <Input id="custom-duration" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="e.g., 5 days / 4 nights" className="bg-muted/30 border-border" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-message" className="text-sm font-medium text-black">Additional Details</Label>
            <Textarea id="custom-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Share your preferences and special requests..." className="bg-muted/30 border-border min-h-24 resize-none" required />
          </div>

          <button type="submit" className="btn-divine w-full text-center mt-4">Create My Package</button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomisedPackageModal;
