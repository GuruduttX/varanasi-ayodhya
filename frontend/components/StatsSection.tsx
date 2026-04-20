"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Map, Globe } from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const StatCounter = ({ label, value, suffix, icon: Icon, isVisible }: StatItem & { isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div className="text-center space-y-2 ">
      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-3">
        <Icon size={22} className="text-primary text-[hsl(var(--primary))] bg-[hsl(var(--accent))]" />
      </div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-foreground">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats: StatItem[] = [
    { label: "Travellers Served", value: 5000, suffix: "+", icon: Users },
    { label: "Active Tours", value: 50, suffix: "+", icon: Map },
    { label: "Destinations Covered", value: 12, suffix: "", icon: Globe },
  ];

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Tours We Are Operating
          </h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg mx-auto">
            Join thousands of travelers who have experienced our curated journeys
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StatCounter {...stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
