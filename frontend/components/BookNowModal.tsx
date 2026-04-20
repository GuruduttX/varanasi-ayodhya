"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookNowModal = ({ open, onOpenChange }: BookNowModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    destination: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDestinationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, destination: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Book Now Form Submitted:", formData);
    setFormData({ name: "", phone: "", email: "", travelDate: "", destination: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-gold/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-gradient-divine text-center">
            Book Your Journey
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="bg-background/50 border-border focus:border-gold"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 XXXXX XXXXX"
              className="bg-background/50 border-border focus:border-gold"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="bg-background/50 border-border focus:border-gold"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="travelDate" className="text-sm font-medium text-foreground">
              Preferred Travel Date
            </Label>
            <Input
              id="travelDate"
              name="travelDate"
              type="date"
              value={formData.travelDate}
              onChange={handleInputChange}
              className="bg-background/50 border-border focus:border-gold"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-medium text-foreground">
              Destination
            </Label>
            <Select value={formData.destination} onValueChange={handleDestinationChange}>
              <SelectTrigger className="bg-background/50 border-border focus:border-gold">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ayodhya">Ayodhya</SelectItem>
                <SelectItem value="varanasi">Varanasi</SelectItem>
                <SelectItem value="both">Ayodhya + Varanasi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button type="submit" className="btn-divine w-full text-center mt-6">
            Confirm Booking
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookNowModal;
