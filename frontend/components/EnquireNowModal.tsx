"use client";
import { DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EnquireNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EnquireNowModal = ({ open, onOpenChange }: EnquireNowModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", phone: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border border-border max-w-md rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-black text-center">
            Send Your <span className="text-primary">Query</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="enquire-name" className="text-sm font-medium text-black">Full Name</Label>
            <Input id="enquire-name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" className="bg-muted/30 border-border" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enquire-phone" className="text-sm font-medium text-black">Phone Number</Label>
            <Input id="enquire-phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" className="bg-muted/30 border-border" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enquire-message" className="text-sm font-medium text-black">Your Message</Label>
            <Textarea id="enquire-message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your travel plans..." className="bg-muted/30 border-border min-h-24 resize-none" required />
          </div>

          <button type="submit" className="btn-divine w-full text-center mt-4">
            Send Enquiry
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquireNowModal;
