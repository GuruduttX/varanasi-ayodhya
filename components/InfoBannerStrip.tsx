"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Compass, ShieldCheck, HeartHandshake, Star, MapPin,
  ChevronLeft, ChevronRight, ArrowRight,
  Timer, Users, Award, Sparkles, Map, Medal, Milestone, Settings2
} from "lucide-react";

import bannerServices from "@/assets/banner-services.png";
import bannerAbout    from "@/assets/BannerAbout.png";
import bannerOffer    from "@/assets/banarOffer.png";

/* ─────────────────────────────────────────────────────────────────── */
/*  BANNER DATA                                                         */
/* ─────────────────────────────────────────────────────────────────── */
const banners = [
  {
    id: "services",
    bg: bannerServices,
    eyebrow: "What We Do",
    headline: "End-to-End\nSacred Journeys",
    body: "From your first enquiry to the moment you return home — we handle every detail. VIP temple access, curated rituals, private transportation, handpicked stays, and a dedicated trip concierge available around the clock.",
    accentColor: "#E87B2C",
    accentGlow: "rgba(232,123,44,0.35)",
    pillBg: "rgba(232,123,44,0.15)",
    pillBorder: "rgba(232,123,44,0.4)",
    chips: [
      { icon: <Compass size={14} strokeWidth={2.2} />, label: "Guided Darshans" },
      { icon: <ShieldCheck size={14} strokeWidth={2.2} />, label: "Safe & Trusted" },
      { icon: <Timer size={14} strokeWidth={2.2} />, label: "24 / 7 Support" },
    ],
    stats: [
      { val: "50+", label: "Destinations" },
      { val: "5K+", label: "Pilgrims Served" },
      { val: "4.9★", label: "Avg Rating" },
    ],
    cta: "Explore Services",
    ctaHref: "/packages",
    overlayGrad: "linear-gradient(105deg, rgba(12,8,4,0.88) 0%, rgba(20,14,4,0.72) 45%, rgba(0,0,0,0.18) 100%)",
  },
  {
    id: "about",
    bg: bannerAbout,
    eyebrow: "Who We Are",
    headline: "Custodians of\nSacred Journeys",
    body: "Born from a deep reverence for India's spiritual heritage, Divine Journeys is more than a travel company — we are storytellers, pilgrims, and guardians of ancient traditions. Every itinerary we craft honours the sanctity of the land it traverses.",
    accentColor: "#3EB489",
    accentGlow: "rgba(62,180,137,0.35)",
    pillBg: "rgba(62,180,137,0.15)",
    pillBorder: "rgba(62,180,137,0.4)",
    chips: [
      { icon: <Map size={14} strokeWidth={2.2} />, label: "Locally Rooted" },
      { icon: <Medal size={14} strokeWidth={2.2} />, label: "Expert Guides" },
      { icon: <Sparkles size={14} strokeWidth={2.2} />, label: "Trusted Since 2012" },
    ],
    stats: [
      { val: "12+", label: "Years of Service" },
      { val: "100%", label: "Authentic Itineraries" },
      { val: "3", label: "Sacred Cities" },
    ],
    cta: "Our Story",
    ctaHref: "/about",
    overlayGrad: "linear-gradient(105deg, rgba(4,18,10,0.90) 0%, rgba(6,24,14,0.74) 45%, rgba(0,0,0,0.20) 100%)",
  },
  {
    id: "offer",
    bg: bannerOffer,
    eyebrow: "What We Offer",
    headline: "Packages Crafted\nfor the Soul",
    body: "Choose from intimate private retreats, group pilgrimages, and tailor-made circuits. Every package includes ritual immersion, cultural depth, and premium comfort — without the price tag of excess.",
    accentColor: "#C4762E",
    accentGlow: "rgba(196,118,46,0.35)",
    pillBg: "rgba(196,118,46,0.15)",
    pillBorder: "rgba(196,118,46,0.4)",
    chips: [
      { icon: <Milestone size={14} strokeWidth={2.2} />, label: "Sacred Cities" },
      { icon: <Users size={14} strokeWidth={2.2} />, label: "Private & Group" },
      { icon: <Settings2 size={14} strokeWidth={2.2} />, label: "Customisable" },
    ],
    stats: [
      { val: "20+", label: "Curated Packages" },
      { val: "3–10", label: "Nights Available" },
      { val: "₹0", label: "Hidden Charges" },
    ],
    cta: "View Packages",
    ctaHref: "/packages",
    overlayGrad: "linear-gradient(105deg, rgba(14,6,2,0.92) 0%, rgba(22,8,2,0.76) 45%, rgba(0,0,0,0.22) 100%)",
  },
];

/* ─────────────────────────────────────────────────────────────────── */
/*  COMPONENT                                                           */
/* ─────────────────────────────────────────────────────────────────── */
export default function InfoBannerStrip() {
  const [active, setActive]     = useState(0);
  const [animKey, setAnimKey]   = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = banners.length;

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setAnimKey(k => k + 1);
  }, []);

  const next = useCallback(() => goTo((active + 1) % total), [active, goTo, total]);
  const prev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo((active - 1 + total) % total);
    timerRef.current = setInterval(next, 7000);
  };
  const pick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(i);
    timerRef.current = setInterval(next, 7000);
  };

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  const b = banners[active];

  return (
    <section
      id="info-banner"
      style={{ position: "relative", width: "100%", background: "#0a0806", overflow: "hidden" }}
    >
      <style>{`
        /* ── slide animations ── */
        @keyframes ib-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ib-img-zoom {
          from { transform: scale(1.06); }
          to   { transform: scale(1); }
        }
        .ib-enter       { animation: ib-fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .ib-enter-d1    { animation: ib-fade-up 0.65s 0.08s cubic-bezier(0.22,1,0.36,1) both; }
        .ib-enter-d2    { animation: ib-fade-up 0.65s 0.17s cubic-bezier(0.22,1,0.36,1) both; }
        .ib-enter-d3    { animation: ib-fade-up 0.65s 0.26s cubic-bezier(0.22,1,0.36,1) both; }
        .ib-enter-d4    { animation: ib-fade-up 0.65s 0.35s cubic-bezier(0.22,1,0.36,1) both; }
        .ib-img-zoom    { animation: ib-img-zoom 8s ease forwards; }

        /* ── chip ── */
        .ib-chip {
          display: inline-flex; align-items: center; gap: 7px;
          border-radius: 99px; padding: 6px 14px; font-size: 12px;
          font-weight: 600; letter-spacing: 0.03em; white-space: nowrap;
          border: 1px solid; transition: opacity 0.2s;
        }

        /* ── stat ── */
        .ib-stat { text-align: center; }
        .ib-stat-val {
          font-family: var(--font-heading); font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 700; line-height: 1; color: #fff; margin-bottom: 4px;
        }
        .ib-stat-label {
          font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.5);
          letter-spacing: 0.06em; text-transform: uppercase;
        }

        /* ── nav arrow ── */
        .ib-arrow {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.07); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; transition: all 0.22s ease; flex-shrink: 0;
        }
        .ib-arrow:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.35); }

        /* ── dot ── */
        .ib-dot {
          height: 3px; border-radius: 99px; border: none; padding: 0; cursor: pointer;
          transition: all 0.35s ease; flex-shrink: 0;
        }

        /* ── cta ── */
        .ib-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border-radius: 18px; border: none;
          font-size: 14px; font-weight: 700; letter-spacing: 0.02em;
          cursor: pointer; text-decoration: none; transition: all 0.25s ease;
          color: #fff; flex-shrink: 0;
        }
        .ib-cta:hover { filter: brightness(1.1); box-shadow: 0 10px 32px rgba(0,0,0,0.25) !important; }

        /* ── tab strip ── */
        .ib-tab {
          flex: 1; padding: 16px 20px; background: none; border: none;
          cursor: pointer; text-align: left; position: relative;
          border-top: 2px solid rgba(255,255,255,0.08);
          transition: background 0.22s ease;
        }
        .ib-tab:hover { background: rgba(255,255,255,0.04); }
        .ib-tab.active { border-top-color: var(--ib-accent); }
        .ib-tab-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; margin-bottom: 4px;
          transition: color 0.22s;
        }
        .ib-tab-title {
          font-family: var(--font-heading); font-size: 14px;
          color: rgba(255,255,255,0.55); font-weight: 600;
          transition: color 0.22s;
        }
        .ib-tab.active .ib-tab-title { color: rgba(255,255,255,0.92); }

        /* ── stat divider ── */
        .ib-stat-divider {
          width: 1px; background: rgba(255,255,255,0.12); align-self: stretch;
        }

        /* responsive */
        @media (max-width: 768px) {
          .ib-stats-row { flex-wrap: wrap; gap: 0 !important; justify-content: center; width: 100%; border-radius: 12px !important; }
          .ib-stat { flex: 1 1 33%; min-width: 80px; padding: 14px 8px !important; border-bottom: 1px solid rgba(255,255,255,0.05); }
          .ib-stat-divider { display: none; }
          .ib-tab-title { font-size: 12px; }
          .ib-chips-row { flex-wrap: wrap; justify-content: center; gap: 6px !important; }
          .ib-container { padding: 32px 16px 0 !important; }
          .ib-content-block { text-align: center; margin: 0 auto; align-items: center !important; }
          .ib-stats-nav { align-items: center !important; width: 100%; gap: 24px !important; }
          .ib-headline { text-align: center; font-size: 28px !important; line-height: 1.2 !important; }
          .ib-body { text-align: center; margin-left: auto; margin-right: auto; font-size: 13px !important; margin-bottom: 24px !important; }
          .ib-cta { width: auto !important; padding: 12px 24px !important; align-self: center !important; border-radius: 16px !important; }
        }
      `}</style>

      {/* ── BACKGROUND IMAGE (crossfade via opacity) ── */}
      {banners.map((bn, i) => (
        <div
          key={bn.id}
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            opacity: i === active ? 1 : 0,
            transition: "opacity 1.1s ease",
          }}
        >
          <Image
            src={bn.bg}
            alt={bn.id}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center right" }}
            className={i === active ? "ib-img-zoom" : ""}
            key={`${bn.id}-${animKey}`}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* ── OVERLAY ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: b.overlayGrad, transition: "background 0.8s ease" }} />
      {/* subtle noise texture */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.4 }} />

      {/* ── CONTENT ── */}
      <div className="ib-container" style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 0", display: "flex", flexDirection: "column", minHeight: 650 }}>

        {/* ── TOP ROW: main content + nav ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", marginBottom: 56 }}>
          {banners.map((bn, i) => {
            const isActive = i === active;
            return (
              <div
                key={isActive ? `active-${animKey}` : `inactive-${bn.id}`}
                style={{
                  gridArea: "1 / 1",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 32,
                  flexWrap: "wrap",
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                  visibility: isActive ? "visible" : "hidden",
                  zIndex: isActive ? 10 : 1,
                }}
              >
                {/* TEXT BLOCK */}
                <div className="ib-content-block" style={{ maxWidth: 580, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <div className={isActive ? "ib-enter" : ""} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, justifyContent: "inherit" }}>
                    <div style={{ width: 32, height: 1.5, background: bn.accentColor, borderRadius: 99, flexShrink: 0 }} />
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: bn.accentColor }}>
                      {bn.eyebrow}
                    </span>
                  </div>

                  <h2 className={`${isActive ? "ib-enter-d1" : ""} ib-headline`} style={{
                    fontFamily: "var(--font-heading)", fontWeight: 700, color: "#fff",
                    fontSize: "clamp(34px, 4.2vw, 58px)", lineHeight: 1.12,
                    marginBottom: 24, whiteSpace: "pre-line",
                    textShadow: `0 2px 32px ${bn.accentGlow}`,
                  }}>
                    {bn.headline}
                  </h2>

                  <p className={`${isActive ? "ib-enter-d2" : ""} ib-body`} style={{
                    color: "rgba(255,255,255,0.68)", fontSize: "clamp(13px, 1.3vw, 15px)",
                    lineHeight: 1.78, fontWeight: 300, marginBottom: 32, maxWidth: 500,
                  }}>
                    {bn.body}
                  </p>

                  <div className={isActive ? "ib-enter-d3 ib-chips-row" : "ib-chips-row"} style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
                    {bn.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className="ib-chip"
                        style={{ background: bn.pillBg, borderColor: bn.pillBorder, color: "rgba(255,255,255,0.82)" }}
                      >
                        <span style={{ color: bn.accentColor }}>{chip.icon}</span>
                        {chip.label}
                      </span>
                    ))}
                  </div>

                  <a
                    href={bn.ctaHref}
                    className={isActive ? "ib-enter-d4 ib-cta" : "ib-cta"}
                    style={{ background: bn.accentColor, boxShadow: `0 8px 28px ${bn.accentGlow}` }}
                  >
                    {bn.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>

                {/* STATS + NAV */}
                <div className="ib-stats-nav" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 32 }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button className="ib-arrow" onClick={prev} aria-label="Previous">
                      <ChevronLeft size={18} />
                    </button>
                    <button className="ib-arrow" onClick={() => pick((active + 1) % total)} aria-label="Next">
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div
                    className={isActive ? "ib-enter-d2 ib-stats-row" : "ib-stats-row"}
                    style={{
                      display: "flex", gap: 0, alignItems: "center",
                      background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.10)", borderRadius: 16,
                      overflow: "hidden",
                    }}
                  >
                    {bn.stats.map((st, j) => (
                      <div key={st.label} style={{ display: "flex", alignItems: "center" }}>
                        <div className="ib-stat" style={{ padding: "20px 28px" }}>
                          <div className="ib-stat-val" style={{ color: bn.accentColor }}>{st.val}</div>
                          <div className="ib-stat-label">{st.label}</div>
                        </div>
                        {j < bn.stats.length - 1 && <div className="ib-stat-divider" />}
                      </div>
                    ))}
                  </div>

                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em" }}>
                    0{active + 1} &nbsp;/&nbsp; 0{total}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM TAB STRIP ── */}
        <div style={{ display: "flex", borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: "auto" }}>
          {banners.map((bn, i) => (
            <button
              key={bn.id}
              className={`ib-tab ${i === active ? "active" : ""}`}
              style={{ "--ib-accent": bn.accentColor } as React.CSSProperties}
              onClick={() => pick(i)}
            >
              <div
                className="ib-tab-eyebrow"
                style={{ color: i === active ? bn.accentColor : "rgba(255,255,255,0.35)" }}
              >
                {bn.eyebrow}
              </div>
              <div className="ib-tab-title">
                {bn.headline.split("\n").slice(0, 2).join(" · ")}
              </div>

              {/* progress bar */}
              {i === active && (
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                  background: bn.accentColor,
                  animation: "ib-progress 7s linear forwards",
                }}>
                  <style>{`
                    @keyframes ib-progress {
                      from { transform: scaleX(0); transform-origin: left; }
                      to   { transform: scaleX(1); transform-origin: left; }
                    }
                  `}</style>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* bottom padding */}
      <div style={{ height: 0 }} />
    </section>
  );
}
