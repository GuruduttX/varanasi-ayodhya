"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

// Dynamically import sections below the fold
const PackagesSection = dynamic(() => import("@/components/PackagesSection"), {
  loading: () => <div className="min-h-[600px] flex items-center justify-center bg-muted/20 animate-pulse">Loading Packages...</div>,
});
const InfoBannerStrip = dynamic(() => import("@/components/InfoBannerStrip"), {
  loading: () => <div className="min-h-[400px] bg-muted/10 animate-pulse" />
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-muted/10 animate-pulse" />
});
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-muted/10 animate-pulse" />
});
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: false,
  loading: () => <div className="min-h-[500px] bg-muted/10 animate-pulse" />
});
const CustomisedPackageSection = dynamic(() => import("@/components/CustomisedPackageSection"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-muted/10 animate-pulse" />
});

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PackagesSection />
      <InfoBannerStrip />
      <TestimonialsSection />
      <AboutSection />
      <BlogSection />
      <CustomisedPackageSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}
