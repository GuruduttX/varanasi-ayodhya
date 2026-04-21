"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, Compass, Heart } from "lucide-react";

import ayodhyaImg from "@/assets/ -8.jpg";
import varanasiImg from "@/assets/ -9.jpg";
import prayagrajImg from "@/assets/Prayagaraj allhabad.jpg";
import spiritualImg from "@/assets/BAPS in NJ.jpg";

/* ─────────────────────────────────────────────────────── */
/*  WHY-US items — numbered list, no icon boxes            */
/* ─────────────────────────────────────────────────────── */
const reasons = [
  {
    icon: Calendar,
    title: "Ritual-first, always",
    body: "We build every itinerary around the sacred calendar — not the convenience of a bus schedule.",
  },
  {
    icon: Compass,
    title: "Generational knowledge",
    body: "Our local guides know the priests by name, which queues to avoid, and the hidden stories.",
  },
  {
    icon: Heart,
    title: "Personal care",
    body: "You travel as a guest, not a passenger. VIP darshan and pooja offerings are always included.",
  },
];

/* ─────────────────────────────────────────────────────── */
/*  PHOTO COLLAGE — editorial, asymmetric                  */
/* ─────────────────────────────────────────────────────── */
const photos = [
  {
    src: ayodhyaImg.src,
    alt: "Festival of Lights",
    caption: "Mystic Evenings",
    style: {
      gridArea: "a",
      borderRadius: "20px 20px 4px 20px",
    },
  },
  {
    src: varanasiImg.src,
    alt: "Ram Lalla Ayodhya",
    caption: "Divine Ayodhya",
    style: {
      gridArea: "b",
      borderRadius: "4px 20px 20px 4px",
    },
  },
  {
    src: prayagrajImg.src,
    alt: "Prayagraj Temple",
    caption: "Sacred Prayagraj",
    style: {
      gridArea: "c",
      borderRadius: "20px 4px 20px 20px",
    },
  },
  {
    src: spiritualImg.src,
    alt: "Spiritual Heritage",
    caption: "Global Devotion",
    style: {
      gridArea: "d",
      borderRadius: "4px 20px 4px 4px",
    },
  },
];

/* ─────────────────────────────────────────────────────── */
/*  PHOTO CARD                                              */
/* ─────────────────────────────────────────────────────── */
function Photo({ p, visible, delay }: { p: (typeof photos)[0]; visible: boolean; delay: number }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...p.style,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.96)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, box-shadow 0.3s ease`,
        boxShadow: hov
          ? "0 24px 60px rgba(0,0,0,0.55)"
          : "0 8px 30px rgba(0,0,0,0.35)",
      }}
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        loading="lazy"
        style={{
          objectFit: "cover",
          transition: "transform 0.6s ease",
          transform: hov ? "scale(1.07)" : "scale(1)",
          display: "block",
        }}
      />
      {/* gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.72) 100%)",
        }}
      />
      {/* caption */}
      <span
        style={{
          position: "absolute",
          bottom: 14,
          left: 16,
          fontSize: 11,
          fontWeight: 600,
          color: "rgba(255,255,255,0.8)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          opacity: hov ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      >
        {p.caption}
      </span>
      {/* saffron top-line on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #E87B2C, transparent)",
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  SECTION                                                 */
/* ─────────────────────────────────────────────────────── */
export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#0d0a07",
        padding: "70px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── premium noise & gradient background ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(circle at 20% 30%, rgba(232,123,44,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,160,23,0.03) 0%, transparent 50%)",
      }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.05, pointerEvents: "none", background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e87b2c' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div
        className="about-wrap"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 50,
          alignItems: "center",
        }}
      >

        {/* ══════════════════════════════════════════════════ */}
        {/* LEFT — EDITORIAL PHOTO COLLAGE                     */}
        {/* ══════════════════════════════════════════════════ */}
        <div
          className="about-collage"
          style={{
            display: "grid",
            gridTemplateAreas: `
              "a a b"
              "a a b"
              "c d d"
              "c d d"
            `,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr",
            gap: 10,
            height: 450,
          }}
        >
          {photos.map((p, i) => (
            <Photo key={p.alt} p={p} visible={visible} delay={i * 100} />
          ))}

          {/* floating stat badge — overlaps the collage */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              right: -16,
              background: "rgba(13,10,7,0.92)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(232,123,44,0.25)",
              borderRadius: 16,
              padding: "16px 22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
              zIndex: 10,
            }}
          >
            <span style={{ fontSize: 26, fontWeight: 800, color: "#E87B2C", fontFamily: "var(--font-heading)", lineHeight: 1 }}>
              4.9
            </span>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", marginTop: 2 }}>
              ★ avg rating
            </span>
            <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)", margin: "8px 0" }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>5,000+ PILGRIMS</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════ */}
        {/* RIGHT — TEXT CONTENT                               */}
        {/* ══════════════════════════════════════════════════ */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(28px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}
        >
          {/* established badge */}
          <p
            style={{
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#E87B2C",
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ width: 28, height: 1.5, background: "#E87B2C", display: "inline-block", flexShrink: 0 }} />
            Est. 2012 · Varanasi, India
          </p>

          {/* headline */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(30px, 3vw, 46px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            We&apos;ve spent twelve years<br />
            <span style={{
              background: "linear-gradient(90deg, #E87B2C 0%, #D4A017 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              in service of the sacred.
            </span>
          </h2>

          {/* story */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 32,
              maxWidth: 500,
            }}
          >
            Divine Journeys was founded by pilgrims. Every itinerary we design and every decision we make is filtered through one question: would this serve a sincere pilgrim? We don&apos;t count temples per day. We count moments of genuine stillness.
          </p>

          {/* ── separator ── */}
          <div style={{
            height: 1,
            background: "linear-gradient(90deg, rgba(232,123,44,0.3), transparent)",
            marginBottom: 28,
            maxWidth: 500,
          }} />

          {/* ── WHY US — numbered list, editorial style ── */}
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 20,
            }}
          >
            What makes us different
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {reasons.map((r, i) => (
              <ReasonRow key={i} r={r} index={i} visible={visible} />
            ))}
          </div>

          {/* ── stats row ── */}
          <div
            className="about-stats"
            style={{
              display: "flex",
              gap: 32,
              marginTop: 32,
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { val: "12+", label: "Years operating" },
              { val: "50+", label: "Sacred destinations" },
              { val: "₹0", label: "Hidden charges" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 26,
                  fontWeight: 800,
                  fontFamily: "var(--font-heading)",
                  color: "#fff",
                  lineHeight: 1,
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  marginTop: 5,
                  letterSpacing: "0.04em",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about-ctas" style={{ display: "flex", gap: 14, marginTop: 28, alignItems: "center" }}>
            <a
              href="/packages"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#E87B2C",
                color: "#fff",
                padding: "13px 26px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: 13.5,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#d06b1e";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#E87B2C";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              View Packages
              <ArrowRight size={14} />
            </a>
            <a
              href="/about"
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: 1,
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              Our full story →
            </a>
          </div>
        </div>
      </div>

      {/* ── responsive ── */}
      <style>{`
        .about-wrap {
          position: relative;
        }
        .about-collage {
          position: relative;
        }
        .about-stats {
          flex-wrap: wrap;
        }
        .about-ctas {
          flex-wrap: wrap;
        }
        @media (max-width: 960px) {
          .about-wrap {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-collage {
            height: 380px !important;
          }
        }
        @media (max-width: 600px) {
          .about-wrap {
            padding: 0 20px !important;
          }
          .about-collage {
            height: 300px !important;
          }
          .about-stats {
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── */
/*  REASON ROW — numbered, editorial style, no icon boxes  */
/* ─────────────────────────────────────────────────────── */
function ReasonRow({
  r,
  index,
  visible,
}: {
  r: (typeof reasons)[0];
  index: number;
  visible: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "44px 1fr",
        gap: "0 16px",
        alignItems: "start",
        padding: "16px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(16px)",
        transition: `opacity 0.6s ease ${0.3 + index * 0.1}s, transform 0.6s ease ${0.3 + index * 0.1}s`,
      }}
    >
      {/* icon */}
      <div
        style={{
          color: hov ? "#E87B2C" : "rgba(255,255,255,0.18)",
          paddingTop: 2,
          transition: "color 0.25s ease",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <r.icon size={18} strokeWidth={2.5} />
      </div>

      <div>
        <h3
          style={{
            fontSize: 14.5,
            fontWeight: 700,
            color: hov ? "#fff" : "rgba(255,255,255,0.78)",
            marginBottom: 5,
            transition: "color 0.25s ease",
            lineHeight: 1.3,
          }}
        >
          {r.title}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.37)",
            lineHeight: 1.7,
            maxWidth: 420,
            transition: "color 0.25s ease",
          }}
        >
          {r.body}
        </p>
      </div>
    </div>
  );
}
