"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(() => import("@/components/FloatingWhatsAppButton"), { ssr: false });
const EnquiryButton = dynamic(() => import("@/components/FloatingEnquiryButton"), { ssr: false });

export default function FloatingActions() {
  return (
    <>
      <WhatsAppButton />
      <EnquiryButton />
    </>
  );
}
