"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AboutModal = ({ open, onOpenChange }: AboutModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-gold/20 max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-gradient-divine">About </DialogTitle>
          <DialogDescription className="text-muted-foreground pt-4 space-y-4 text-base leading-relaxed">
            <p>
              Born from a deep reverence for India's spiritual heritage, Ayodha Varanasi Tourism is more than a travel company —
              we are custodians of sacred journeys.
            </p>
            <p>
              Our founders, lifelong pilgrims themselves, noticed that spiritual travel was often reduced to
              rushed itineraries and impersonal tours. We created Ayodha Varanasi Tourism to restore the sanctity
              of pilgrimage where every temple visit, every aarti, every moment by the Ganges is curated
              with devotion and deep cultural understanding.
            </p>
            <p>
              With partnerships across Ayodhya, Varanasi, and beyond, we offer journeys that honor tradition
              while embracing the comfort modern travelers deserve.
            </p>
            <div className="divider-ornament pt-2">
              <span className="text-gold">✦</span>
            </div>
            <p className="text-center font-heading text-sm text-primary italic">
              "Travel is the soul's way of remembering where it belongs."
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;
