"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Heart,
  Users,
  Sparkles,
  Clock,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────── */
/*  WHY-US PILLARS                                          */
/* ─────────────────────────────────────────────────────── */
const pillars = [
  {
    icon: ShieldCheck,
    color: "#E87B2C",
    bg: "rgba(232,123,44,0.08)",
    title: "Verified Local Guides",
    desc:
      "Every guide is a long-time resident of the holy city — not a freelancer with a script, but a storyteller with generational knowledge of the ghats, temples, and rituals.",
  },
  {
    icon: Heart,
    color: "#C4762E",
    bg: "rgba(196,118,46,0.08)",
    title: "Ritual-First Itineraries",
    desc:
      "We design journeys around the rhythm of the sacred — Mangala Aarti at dawn, Ganga Aarti at dusk, and unrushed moments of quiet between. Never the other way around.",
  },
  {
    icon: Users,
    color: "#3EB489",
    bg: "rgba(62,180,137,0.08)",
    title: "Intimate Group Sizes",
    desc:
      "Maximum 16 travellers per departure. You are not a seat number — you are a pilgrim, and our guides know your name, your dietary needs, and your spiritual intent.",
  },
  {
    icon: Sparkles,
    color: "#D4A017",
    bg: "rgba(212,160,23,0.08)",
    title: "Zero Hidden Costs",
    desc:
      "What you see in your package is exactly what you pay. Pooja offerings, VIP darshan passes, airport transfers — all included. No last-minute additions, ever.",
  },
  {
    icon: Clock,
    color: "#E87B2C",
    bg: "rgba(232,123,44,0.08)",
    title: "24 / 7 Journey Concierge",
    desc:
      "A dedicated WhatsApp concierge is with you before, during, and after your journey. Need an extra pandit? A late-night medication? We handle it.",
  },
  {
    icon: MapPin,
    color: "#C4762E",
    bg: "rgba(196,118,46,0.08)",
    title: "Sacred Cities Expertise",
    desc:
      "Ayodhya · Varanasi · Prayagraj · Sarnath — we have operated in these cities for over 12 years. No other agency knows their lanes, their temples, and their people the way we do.",
  },
];

/* ─────────────────────────────────────────────────────── */
/*  IMAGE STACK — vertical auto-scroll collage             */
/* ─────────────────────────────────────────────────────── */
const colImages = [
  { src: "/assets/ganga-aarti.jpg",      alt: "Ganga Aarti ceremony" },
  { src: "/assets/ayodhya-temple.jpg",   alt: "Ayodhya Ram temple" },
  { src: "/assets/boat-ganges.jpg",      alt: "Sunrise boat on Ganges" },
  { src: "/assets/floating-diyas.jpg",   alt: "Floating diyas on the Ganga" },
  { src: "/assets/varanasi-streets.jpg", alt: "Varanasi old city lanes" },
  { src: "/assets/diya-prayer.jpg",      alt: "Diya prayers at the ghat" },
  { src: "/assets/temple-prayer.jpg",    alt: "Devotees at a temple" },
];

function ImageColumn({
  images,
  direction,
  offsetMs = 0,
}: {
  images: { src: string; alt: string }[];
  direction: "up" | "down";
  offsetMs?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;
    let pos = direction === "up" ? offsetMs * 0.04 : el.scrollHeight / 2 - offsetMs * 0.04;
    const speed = direction === "up" ? 0.4 : -0.4;

    function tick() {
      if (!el) return;
      pos += speed;
      const half = el.scrollHeight / 2;
      if (pos >= half) pos -= half;
      if (pos < 0) pos += half;
      el.style.transform = `translateY(${-pos}px)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, offsetMs]);

  const doubled = [...images, ...images];

  return (
    <div style={{ overflow: "hidden", flex: 1 }}>
      <div ref={trackRef} style={{ display: "flex", flexDirection: "column", gap: 12, willChange: "transform" }}>
        {doubled.map((img, i) => (
          <div
            key={i}
            style={{
              borderRadius: 16,
              overflow: "hidden",
              position: "relative",
              aspectRatio: "3/4",
              flexShrink: 0,
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  SECTION                                                 */
/* ─────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const leftCol  = colImages.filter((_, i) => i % 3 === 0);
  const midCol   = colImages.filter((_, i) => i % 3 === 1);
  const rightCol = colImages.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        padding: "100px 0",
        background: "#0f0c09",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── ambient glow ── */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "0",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,123,44,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(62,180,137,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
        className="why-us-grid"
      >
        {/* ────────────────────────────────────────────────── */}
        {/* LEFT — TEXT CONTENT                                */}
        {/* ────────────────────────────────────────────────── */}
        <div>
          {/* eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(232,123,44,0.12)",
              border: "1px solid rgba(232,123,44,0.28)",
              borderRadius: 99,
              padding: "6px 18px",
              marginBottom: 28,
            }}
          >
            <Star size={11} style={{ color: "#E87B2C", fill: "#E87B2C" }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E87B2C",
              }}
            >
              Why Divine Journeys
            </span>
          </div>

          {/* headline */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Devotion in Every{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E87B2C, #D4A017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Detail
            </span>
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              marginBottom: 48,
              maxWidth: 480,
            }}
          >
            Twelve years of walking these sacred paths have taught us one thing: the best pilgrimage is not the one with the most temples on the list — it&apos;s the one where you arrive fully present and leave quietly changed.
          </p>

          {/* pillars grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  padding: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  transition: "all 0.5s ease",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: p.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p.icon size={20} style={{ color: p.color }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* trust bar */}
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              padding: "20px 24px",
              background: "rgba(232,123,44,0.06)",
              border: "1px solid rgba(232,123,44,0.16)",
              borderRadius: 16,
              marginBottom: 36,
            }}
          >
            {[
              { val: "12+", label: "Years" },
              { val: "5K+", label: "Pilgrims" },
              { val: "4.9★", label: "Rating" },
              { val: "50+", label: "Destinations" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center", flex: 1 }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#E87B2C",
                    fontFamily: "var(--font-heading)",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: "0.06em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/packages"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #E87B2C, #C4762E)",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(232,123,44,0.35)",
              transition: "all 0.22s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
            }}
          >
            Explore Our Packages
            <ArrowRight size={15} />
          </a>
        </div>

        {/* ────────────────────────────────────────────────── */}
        {/* RIGHT — SCROLLING IMAGE COLLAGE                    */}
        {/* ────────────────────────────────────────────────── */}
        <div
          style={{
            height: 580,
            display: "flex",
            gap: 12,
            overflow: "hidden",
            borderRadius: 24,
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
          className="why-us-collage"
        >
          {/* soft vignette top + bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              borderRadius: 24,
              background:
                "linear-gradient(180deg, #0f0c09 0%, transparent 18%, transparent 82%, #0f0c09 100%)",
              pointerEvents: "none",
            }}
          />
          {/* left + right edge fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              borderRadius: 24,
              background:
                "linear-gradient(90deg, #0f0c09 0%, transparent 10%, transparent 90%, #0f0c09 100%)",
              pointerEvents: "none",
            }}
          />
          <ImageColumn images={leftCol}  direction="up"   offsetMs={0} />
          <ImageColumn images={midCol}   direction="down" offsetMs={800} />
          <ImageColumn images={rightCol} direction="up"   offsetMs={400} />
        </div>
      </div>

      {/* ── responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
          }
          .why-us-collage {
            height: 360px !important;
          }
        }
        @media (max-width: 600px) {
          .why-us-grid {
            padding: 0 16px !important;
          }
          .why-us-collage {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
