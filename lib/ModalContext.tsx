"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const EnquireNowModal = dynamic(() => import("@/components/EnquireNowModal"), { ssr: false });

interface ModalContextType {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPopupShown, setInitialPopupShown] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const openEnquiry = () => setIsOpen(true);
  const closeEnquiry = () => setIsOpen(false);

  useEffect(() => {
    const isCMS = pathname?.startsWith('/cms');
    if (isCMS) return;

    const timer = setTimeout(() => {
      if (!initialPopupShown) {
        setIsOpen(true);
        setInitialPopupShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [initialPopupShown, pathname]);


  return (
    <ModalContext.Provider value={{ openEnquiry, closeEnquiry, isOpen }}>
      {children}
      <EnquireNowModal open={isOpen} onOpenChange={setIsOpen} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
