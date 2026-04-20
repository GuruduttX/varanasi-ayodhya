"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Star, Users, ShieldCheck, Headphones, BadgeCheck, Clock, HeartHandshake, Sparkles, Compass } from "lucide-react";

import heroImage    from "@/assets/varanasiHeroSection.png";
import gangaAarti   from "@/assets/gangaArtiHeroSection.png";
import ayodhyaTemple from "@/assets/ayodhya-temple.png";
import floatingDiyas from "@/assets/floating-diyas.jpg";

const slides = [
  {
    src: heroImage,
    dest: "Varanasi",
    tag: "City of Light",
    h1: "Where Every Dawn Is Sacred",
    sub: "Experience the oldest living city — where the Ganga carries the prayers of a thousand generations.",
  },
  {
    src: gangaAarti,
    dest: "Ganga Aarti",
    tag: "Ancient Ritual",
    h1: "108 Flames Light the Sacred River",
    sub: "Stand at the ghats as priests perform the most mesmerising ceremony in all of India.",
  },
  {
    src: ayodhyaTemple,
    dest: "Ayodhya",
    tag: "Birthplace of Rama",
    h1: "A City Reborn in Divine Splendour",
    sub: "Walk the sacred land of the epics and witness the Ram Mandir in all its timeless glory.",
  },
  {
    src: floatingDiyas,
    dest: "Prayagraj",
    tag: "Triveni Confluence",
    h1: "Three Rivers,One Sacred Soul",
    sub: "The holiest confluence in Hinduism — where Ganga, Yamuna and Saraswati unite.",
  },
];

import { useModal } from "@/lib/ModalContext";

/* Trust items for marquee strip */
const trustItems = [
  { icon: <Star size={14} style={{ color: "hsl(var(--primary))", fill: "hsl(var(--primary))" }} />, text: "4.9 / 5 Average Rating" },
  { icon: <Users size={14} style={{ color: "hsl(var(--primary))" }} />,     text: "5,000+ Happy Pilgrims" },
  { icon: <ShieldCheck size={14} style={{ color: "#059669" }} />,           text: "100% Verified Operators" },
  { icon: <BadgeCheck size={14} style={{ color: "#D97706" }} />,            text: "Govt. Approved Tours" },
  { icon: <Headphones size={14} style={{ color: "hsl(var(--primary))" }} />, text: "24 / 7 Dedicated Support" },
  { icon: <MapPin size={14} style={{ color: "#B45309" }} />,                text: "Ayodhya · Varanasi · Prayagraj" },
  { icon: <Clock size={14} style={{ color: "#78350F" }} />,                 text: "12+ Years of Excellence" },
];

export default function HeroSection() {
  const { openEnquiry } = useModal();
  const [cur, setCur]     = useState(0);
  const [anim, setAnim]   = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setCur(i);
    setAnim(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnim(true)));
  }, []);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);

  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [next]);

  const pick = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    goTo(i);
    timer.current = setInterval(next, 6000);
  };

  const s = slides[cur];

  return (
    <>
      <style>{`
        .h-slide-enter { animation: slideEnter 0.7s cubic-bezier(.22,1,.36,1) both; }
        .h-slide-enter-d1 { animation: slideEnter 0.7s 0.08s cubic-bezier(.22,1,.36,1) both; }
        .h-slide-enter-d2 { animation: slideEnter 0.7s 0.18s cubic-bezier(.22,1,.36,1) both; }
        .h-slide-enter-d3 { animation: slideEnter 0.7s 0.28s cubic-bezier(.22,1,.36,1) both; }
        @keyframes slideEnter {
          from { opacity:0; transform:translateY(15px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .h-slide-enter, .h-slide-enter-d1, .h-slide-enter-d2, .h-slide-enter-d3 { will-change: transform, opacity; }
        @keyframes zoomBg { from { transform:scale(1.05); } to { transform:scale(1); } }
        .hero-bg { animation: zoomBg 8s ease forwards; will-change: transform; }
        @media (max-width: 768px) {
          .hero-bg { animation: none; transform: scale(1); }
          .hero-section { height: 82svh !important; min-height: 600px !important; }
          .hero-ctas { margin-bottom: 24px !important; }
        }
        .hero-ctas { display: flex; gap: 10px; flex-wrap: wrap; alignItems: center; justifyContent: center; }
        .sel-bare {
          background:transparent; border:none; outline:none;
          width:100%; cursor:pointer; appearance:none;
          font-size:14px; color:#111; font-family:inherit;
        }
        .sel-bare option { color:#111; background:#fff; }

        .progress-bar { height:2px; background:rgba(255,255,255,0.15); border-radius:99px; overflow:hidden; }
        .progress-fill {
          height:100%; background:hsl(var(--primary)); border-radius:99px;
          transition:width 0.4s ease;
        }
        .hero-content-pad { padding: 110px 24px 36px; }
        .hero-stats { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
        .hero-progress { display: flex; align-items: center; gap: 12px; }
        .hero-bottom { display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px; width: 100%; }
        @media (min-width: 768px) {
          .hero-content-pad { padding: 140px 64px 48px; }
        }
        @media (max-width: 480px) {
          .hero-stats { gap: 14px; }
          .hero-progress { display: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-section" style={{ position:"relative", width:"100%", height:"85svh", minHeight:580, overflow:"hidden" }}>

        {/* Background images */}
        {slides.map((slide, i) => (
          <div key={i} style={{ 
            position:"absolute", inset:0, zIndex:1, 
            opacity: i===cur ? 1:0, 
            transition:"opacity 1.1s ease",
            willChange: "opacity"
          }}>
            <Image
              src={slide.src} alt={slide.dest} fill 
              sizes="(max-width: 768px) 100vw, 100vw"
              priority={i===0}
              loading={i === 0 ? undefined : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
              style={{ objectFit:"cover", objectPosition:"center" }}
              className={i===cur ? "hero-bg" : ""}
              key={`${i}-${cur}`}
            />
          </div>
        ))}

        {/* Optimized Overlays — single layer with multiple gradients to reduce paint operations */}
        <div style={{ 
          position:"absolute", inset:0, zIndex:2, 
          background:"linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%), linear-gradient(to right, rgba(0,0,0,0.28) 0%, transparent 60%), rgba(0,0,0,0.52)",
          pointerEvents: "none"
        }} />

        {/* Content */}
        <div className="hero-content-pad" style={{ position:"absolute", inset:0, zIndex:10, display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center" }}>



          {/* Main text block — centered vertically */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", maxWidth:620, textAlign:"center" }} key={`block-${cur}`}>

            {/* H1 */}
            {anim && (
              <h1 className="h-slide-enter-d1" style={{
                fontFamily:"var(--font-heading)", fontWeight:700, color:"#fff",
                fontSize:"clamp(35px, 4.5vw, 60px)", lineHeight:1.25,
                marginBottom:24, whiteSpace:"pre-line",
                textShadow:"0 2px 20px rgba(0,0,0,0.4)",
              }}>
                {s.h1}
              </h1>
            )}

            {/* Sub */}
            {anim && (
              <p className="h-slide-enter-d2" style={{
                color:"rgba(255,255,255,0.78)", fontSize:"clamp(14px,1.4vw,17px)",
                lineHeight:1.7, maxWidth:480, marginBottom:36, fontWeight:300, margin:"0 auto 36px",
              }}>
                {s.sub}
              </p>
            )}

            {/* CTAs */}
            {anim && (
              <div className="h-slide-enter-d3 hero-ctas" style={{ display:"flex", gap:10, flexWrap:"wrap", alignItems:"center", justifyContent:"center" }}>
                <button
                  onClick={openEnquiry}
                  style={{
                    background:"hsl(var(--primary))", color:"#fff", border:"none",
                    padding:"14px 30px", borderRadius:10, fontSize:14, fontWeight:600,
                    cursor:"pointer", display:"flex", alignItems:"center", gap:8,
                    boxShadow:"0 6px 24px hsl(var(--primary)/0.45)",
                    transition:"all 0.22s ease",
                  }}
                  onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.transform="translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow="0 10px 32px hsl(var(--primary)/0.55)"; }}
                  onMouseOut={e  => { (e.currentTarget as HTMLButtonElement).style.transform="translateY(0)"; (e.currentTarget as HTMLButtonElement).style.boxShadow="0 6px 24px hsl(var(--primary)/0.45)"; }}
                >
                  Start Your Journey <ArrowRight size={15} />
                </button>
                <a href="#packages"
                  style={{
                    color:"#fff", textDecoration:"none", padding:"14px 26px",
                    borderRadius:10, fontSize:14, fontWeight:500,
                    border:"1.5px solid rgba(255,255,255,0.3)",
                    background:"rgba(255,255,255,0.07)", backdropFilter:"blur(8px)",
                    transition:"all 0.22s ease",
                  }}
                  onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background="rgba(255,255,255,0.14)"; }}
                  onMouseOut={e  => { (e.currentTarget as HTMLAnchorElement).style.background="rgba(255,255,255,0.07)"; }}
                >
                  Explore Packages
                </a>
              </div>
            )}
          </div>

          {/* Bottom row — stats + progress */}
          <div className="hero-bottom">
            {/* Stats */}
            <div className="hero-stats">
              {[
                { val:"4.9", label:"Rating", icon:<Sparkles size={14} strokeWidth={2.5} style={{ color:"hsl(var(--primary))" }} /> },
                { val:"5,000+", label:"Pilgrims", icon:<HeartHandshake size={14} strokeWidth={2.5} style={{ color:"hsl(var(--primary))" }} /> },
                { val:"50+", label:"Destinations", icon:<Compass size={14} strokeWidth={2.5} style={{ color:"#059669" }} /> },
              ].map(st => (
                <div key={st.label} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ 
                    width:36, height:36, borderRadius:10, 
                    background:"linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))", 
                    border: "1px solid rgba(255,255,255,0.15)",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    transform: "translateZ(0)"
                  }}>
                    {st.icon}
                  </div>
                  <div>
                    <p style={{ fontSize:13, fontWeight:700, color:"#fff", lineHeight:1 }}>{st.val}</p>
                    <p style={{ fontSize:10, color:"rgba(255,255,255,0.5)", marginTop:2 }}>{st.label}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Slide progress */}
            <div className="hero-progress">
              <span style={{ fontSize:11, color:"rgba(255,255,255,0.4)", fontWeight:600, letterSpacing:"0.06em" }}>
                0{cur+1} / 0{slides.length}
              </span>
              <div style={{ display:"flex", gap:5 }}>
                {slides.map((_,i) => (
                  <button key={i} onClick={() => pick(i)} style={{ background:"none", border:"none", padding:0, cursor:"pointer" }}>
                    <div className="progress-bar" style={{ width:28 }}>
                      <div className="progress-fill" style={{ width: i===cur ? "100%":"0%" }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST TICKER STRIP ── */}
      <div style={{
        background: "#0f0d0a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        height: 48,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}>
        {/* left & right fade masks */}
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:120, zIndex:2, background:"linear-gradient(to right, #0f0d0a, transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:120, zIndex:2, background:"linear-gradient(to left, #0f0d0a, transparent)", pointerEvents:"none" }} />

        <div style={{
          display: "flex",
          gap: 0,
          animation: "ticker-scroll 32s linear infinite",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}>
          {/* duplicate for seamless loop */}
          {[...trustItems, ...trustItems].map((item, idx) => (
            <span key={idx} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0 32px", fontSize: 12, fontWeight: 600,
              color: "rgba(255,255,255,0.72)", letterSpacing: "0.03em",
              borderRight: "1px solid rgba(255,255,255,0.08)",
            }}>
              {item.icon}
              {item.text}
            </span>
          ))}
        </div>

        <style>{`
          @keyframes ticker-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
}