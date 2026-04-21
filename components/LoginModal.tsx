"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-gold/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-gradient-divine text-center">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 pt-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</Label>
              <Input id="name" placeholder="Enter your name" className="bg-background/50 border-border focus:border-gold" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" className="bg-background/50 border-border focus:border-gold" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" className="bg-background/50 border-border focus:border-gold" />
          </div>

          <button className="btn-divine w-full text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>

          <div className="divider-ornament text-muted-foreground text-xs">
            <span>or</span>
          </div>

          <button className="w-full py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            Continue with Google
          </button>

          <p className="text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary font-medium hover:underline">
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
