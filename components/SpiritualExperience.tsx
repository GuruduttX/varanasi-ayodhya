"use client";

import gangaAarti from "@/assets/ganga-aarti.jpg";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Heart, Compass } from "lucide-react";

const highlights = [
  { icon: Shield, title: "Trusted & Authentic", desc: "Verified local guides with deep cultural knowledge." },
  { icon: Heart, title: "Soulful Experiences", desc: "Genuine spiritual moments, not just sightseeing." },
  { icon: Compass, title: "Complete Journey Care", desc: "Every detail handled — travel, stay, and rituals." },
];

const SpiritualExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-16 md:py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium">Why Travel With Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Devotion in Every Detail
            </h2>
            <div className="w-12 h-0.5 bg-primary rounded-full" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Our journeys immerse you in India's living spirituality — from dawn on the Ganges to evening prayers at Ayodhya.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`flex gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <h.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{h.title}</h3>
                    <p className="text-muted-foreground text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={gangaAarti.src}
                alt="Ganga Aarti ceremony in Varanasi"
                className="w-full h-[380px] object-cover hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualExperience;
