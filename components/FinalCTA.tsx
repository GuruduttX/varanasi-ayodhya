"use client";

import heroImage from "@/assets/hero-varanasi.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={heroImage.src} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className={`relative text-center max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="divider-ornament max-w-xs mx-auto mb-8">
          <span className="text-gold text-2xl"></span>
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
          Start Your Spiritual<br /><span className="text-gradient-divine">Journey Today</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          The sacred cities await your arrival. Let your soul embark on a pilgrimage that
          will transform the way you see the world and yourself.
        </p>
        <a href="#packages" className="btn-divine text-base">Begin Your Pilgrimage</a>
      </div>
    </section>
  );
};

export default FinalCTA;
