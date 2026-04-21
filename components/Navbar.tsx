"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ArrowRight, MapPin, Clock, Star, BookOpen } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const CustomisedPackageModal = dynamic(() => import("@/components/CustomisedPackageModal"), { ssr: false });

import pkgPrayagraj     from "@/assets/pkg-prayagraj.png";
import pkgSarnath       from "@/assets/pkg-sarnath.png";
import pkgGangesSunrise from "@/assets/pkg-ganges-sunrise.png";
import heroVaranasi     from "@/assets/hero-varanasi.jpg";
import ayodhyaTemple    from "@/assets/ayodhya-temple.png";
import gangaAarti       from "@/assets/ganga-aarti.jpg";
import diyaPrayer       from "@/assets/diya-prayer.jpg";
import logo             from "@/assets/Experience_my_India.webp";

/* ── Data ─────────────────────────────────────────────────────── */
const featuredPackages = [
  { image: pkgPrayagraj,     title: "Prayagraj Sangam Retreat", sub: "2 Days · 1 Night",  dest: "Prayagraj", rating: 4.7, label: "Triveni" },
  { image: pkgSarnath,       title: "Sarnath Heritage Trail",   sub: "2 Days · 1 Night",  dest: "Sarnath",   rating: 4.6, label: "Buddhist" },
  { image: pkgGangesSunrise, title: "Sacred Ganges Sunrise",    sub: "2 Days · 1 Night",  dest: "Varanasi",  rating: 5.0, label: "Experience" },
];

const durationLinks = [
  { label: "Weekend Escapes",  sub: "2 – 3 Days",  count: 4 },
  { label: "Classic Journeys", sub: "4 – 5 Days",  count: 6 },
  { label: "Grand Pilgrimages",sub: "6 Days & above", count: 3 },
];

const destinations = [
  { image: ayodhyaTemple, name: "Ayodhya",    tagline: "Birthplace of Lord Rama",      spots: ["Ram Mandir", "Saryu Ghat Aarti", "Hanuman Garhi"] },
  { image: heroVaranasi,  name: "Varanasi",   tagline: "City of Light & Liberation",   spots: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"] },
  { image: gangaAarti,    name: "Prayagraj",  tagline: "The Sacred Triveni Confluence", spots: ["Triveni Sangam", "Anand Bhavan", "Allahabad Fort"] },
];

const blogPosts = [
  { image: gangaAarti,    title: "The Mystical Ganga Aarti: A Complete Guide",        cat: "Varanasi", time: "5 min read" },
  { image: ayodhyaTemple, title: "Ayodhya's Ram Mandir: What to Expect",              cat: "Ayodhya",  time: "4 min read" },
  { image: diyaPrayer,    title: "Spiritual Practices for the Modern Traveler",       cat: "Guide",    time: "6 min read" },
];

const blogCategories = [
  { label: "Ayodhya",     count: 8  },
  { label: "Varanasi",    count: 12 },
  { label: "Travel Tips", count: 5  },
  { label: "Spirituality",count: 7  },
];

/* ── Mega Menu Shell ──────────────────────────────────────────── */
function MegaShell({ visible, width, children }: { visible: boolean; width: number; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 10px)",
        left: "50%",
        width,
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(-50%) translateY(0) scale(1)" : "translateX(-50%) translateY(-12px) scale(0.95)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 250ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <div
      style={{
        background: "hsl(var(--background) / 0.98)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid hsl(var(--border))",
        borderRadius: "16px",
        boxShadow: "0 20px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4)",
        overflow: "hidden",
        fontFamily: "var(--font-roboto)",
      }}>
        {children}
      </div>
    </div>
  );
}

/* ── Packages Mega Menu ───────────────────────────────────────── */
function PackagesMega({ visible }: { visible: boolean }) {
  return (
    <MegaShell visible={visible} width={880}>
      {/* Top strip */}
      <div style={{ borderBottom: "1px solid hsl(var(--border))", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-roboto)" }}>
          Curated Travel Experiences
        </p>
        <Link href="/packages" style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-roboto)" }}>
          View all packages <ArrowRight size={11} />
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 192px", gap: 0 }}>
        {/* Left — package cards */}
        <div style={{ padding: "24px", borderRight: "1px solid hsl(var(--border))" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {featuredPackages.map((pkg) => (
              <div key={pkg.title} className="mega-pkg-card group">
                <div style={{ position: "relative", height: 130, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
                  <Image src={pkg.image} alt={pkg.title} fill sizes="260px" style={{ objectFit: "cover", transition: "transform 600ms cubic-bezier(0.2, 0, 0.2, 1)" }} className="mega-img" loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  
                  <span style={{
                    position: "absolute", top: 10, left: 10,
                    background: "rgba(255,255,255,0.2)", backdropFilter: "blur(12px)",
                    color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 9px",
                    borderRadius: 99, letterSpacing: "0.06em", textTransform: "uppercase",
                    border: "1px solid rgba(255,255,255,0.25)"
                  }}>{pkg.label}</span>

                  <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 3, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", padding: "2px 6px", borderRadius: 4 }}>
                      <Star size={9} style={{ color: "hsl(var(--primary))", fill: "hsl(var(--primary))" }} />
                      <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>{pkg.rating}</span>
                    </div>
                    <span style={{ display: "flex", alignItems: "center", gap: 3, color: "rgba(255,255,255,0.9)", fontSize: 9, fontWeight: 600 }}>
                      <MapPin size={9} />{pkg.dest}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "0 2px" }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))", lineHeight: 1.3, marginBottom: 4, fontFamily: "var(--font-roboto)" }} className="mega-pkg-title">{pkg.title}</p>
                  <p style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 4, marginBottom: 12, fontFamily: "var(--font-roboto)" }}>
                    <Clock size={11} />{pkg.sub}
                  </p>
                  
                  <div style={{ display: "flex", gap: 6 }}>
                    <Link href="/packages/divine-ayodhya-kashi-pilgrimage" style={{ 
                      flex: 1, textAlign: "center", fontSize: 10, fontWeight: 700, 
                      padding: "8px 0", borderRadius: 7, border: "1.5px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))", background: "#fff", transition: "all 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                      position: "relative", overflow: "hidden"
                    }} className="mega-btn-sec">Details</Link>
                    <button style={{ 
                      flex: 1, fontSize: 10, fontWeight: 700, 
                      padding: "8px 0", borderRadius: 7, 
                      color: "#fff", background: "hsl(var(--primary))", transition: "all 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                      position: "relative", overflow: "hidden", boxShadow: "0 2px 8px hsl(var(--primary) / 0.2)"
                    }} className="mega-btn-pri">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — duration sidebar */}
        <div style={{ padding: "20px 18px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 12, fontFamily: "var(--font-roboto)" }}>
            Browse by Duration
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {durationLinks.map((d) => (
              <Link href="/packages" key={d.label} className="mega-side-link">
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "hsl(var(--foreground))" }}>{d.label}</p>
                  <p style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", marginTop: 1 }}>{d.sub}</p>
                </div>
                <span style={{ fontSize: 10, background: "hsl(var(--primary)/0.08)", color: "hsl(var(--primary))", padding: "2px 8px", borderRadius: 99, fontWeight: 700 }}>
                  {d.count}
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid hsl(var(--border))" }}>
            <div style={{ background: "hsl(var(--accent))", borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "hsl(var(--accent-foreground))", marginBottom: 3 }}>Tailor Your Journey</p>
              <p style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", lineHeight: 1.5 }}>Every detail crafted to your vision.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mega-pkg-card { 
          display: block; border-radius: 10px; 
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid transparent;
        }

        .mega-pkg-card:hover {
          box-shadow: 0 12px 32px hsl(var(--primary) / 0.15);
          border-color: hsl(var(--primary) / 0.2);
        }

        .mega-pkg-card:hover .mega-img { 
          transform: scale(1.1) rotate(1deg);
        }

        .mega-pkg-card:hover .mega-pkg-title { 
          color: hsl(var(--primary)); 
        }

        .mega-btn-sec { 
          position: relative;
          transition: all 280ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mega-btn-sec::before {
          content: '';
          position: absolute;
          inset: 0;
          background: hsl(var(--primary) / 0.08);
          border-radius: 7px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 280ms cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
        }

        .mega-btn-sec:hover::before {
          transform: scaleX(1);
        }

        .mega-btn-sec:hover { 
          background: hsl(var(--accent)) !important; 
          border-color: hsl(var(--primary)) !important; 
          color: hsl(var(--primary)) !important;
          transform: translateY(-1px);
        }

        .mega-btn-pri { 
          position: relative;
          transition: all 280ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .mega-btn-pri::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
          border-radius: 7px;
          opacity: 0;
          transition: opacity 250ms ease;
        }

        .mega-btn-pri:hover { 
          transform: translateY(-2px);
          box-shadow: 0 8px 20px hsl(var(--primary) / 0.3) !important;
        }

        .mega-btn-pri:hover::after {
          opacity: 1;
        }

        .mega-side-link { 
          display: flex; align-items: center; justify-content: space-between; 
          padding: 10px 10px; border-radius: 8px; 
          transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
          border-left: 3px solid transparent;
          position: relative;
        }

        .mega-side-link:hover { 
          background: hsl(var(--primary) / 0.08);
          border-left-color: hsl(var(--primary));
          transform: translateX(2px);
        }
      `}</style>
    </MegaShell>
  );
}

/* ── Places Mega Menu ─────────────────────────────────────────── */
function PlacesMega({ visible }: { visible: boolean }) {
  return (
    <MegaShell visible={visible} width={740}>
      <div style={{ borderBottom: "1px solid hsl(var(--border))", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>
          Sacred Destinations
        </p>
        <Link href="/packages" style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", display: "flex", alignItems: "center", gap: 4 }}>
          All destinations <ArrowRight size={11} />
        </Link>
      </div>

      <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
        {destinations.map((d) => (
          <Link href="/packages" key={d.name} className="places-card">
            <div style={{ position: "relative", height: 148, borderRadius: 10, overflow: "hidden" }}>
              <Image src={d.image} alt={d.name} fill sizes="230px" style={{ objectFit: "cover", transition: "transform 450ms ease" }} className="places-img" loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.10) 55%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: "12px 14px" }}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>{d.name}</p>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>{d.tagline}</p>
              </div>
            </div>
            <div style={{ padding: "10px 4px 4px" }}>
              {d.spots.map((s) => (
                <p key={s} style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <Star size={8} fill="hsl(var(--primary))" style={{ color: "hsl(var(--primary))", flexShrink: 0 }} />
                  {s}
                </p>
              ))}
              <p style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", marginTop: 6, display: "flex", alignItems: "center", gap: 4 }} className="places-explore">
                Explore <ArrowRight size={10} />
              </p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .places-card { display:block; transition:all 220ms ease; }
        .places-card:hover .places-img { transform:scale(1.07); }
        .places-card:hover .places-explore { gap:8px; }
      `}</style>
    </MegaShell>
  );
}

/* ── Blog Mega Menu ───────────────────────────────────────────── */
function BlogMega({ visible }: { visible: boolean }) {
  return (
    <MegaShell visible={visible} width={760}>
      <div style={{ borderBottom: "1px solid hsl(var(--border))", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-roboto)" }}>
          Travel Stories &amp; Guides
        </p>
        <Link href="/blog" style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-roboto)" }}>
          All articles <ArrowRight size={11} />
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 156px", gap: 0 }}>
        <div style={{ padding: "20px 24px", borderRight: "1px solid hsl(var(--border))", display: "flex", flexDirection: "column", gap: 4 }}>
          {blogPosts.map((post) => (
            <Link href="/blog/the-mystical-ganga-aarti-guide" key={post.title} className="blog-row">
              <div style={{ width: 60, height: 60, borderRadius: 8, overflow: "hidden", flexShrink: 0, position: "relative" }}>
                <Image src={post.image} alt={post.title} fill sizes="60px" style={{ objectFit: "cover", transition: "transform 400ms ease" }} className="blog-img" loading="lazy" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "hsl(var(--primary))", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--font-roboto)" }}>{post.cat}</span>
                  <span style={{ fontSize: 9, color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 3, fontFamily: "var(--font-roboto)" }}>
                    <BookOpen size={8} />{post.time}
                  </span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.35, fontFamily: "var(--font-roboto)" }} className="blog-title">{post.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ padding: "20px 18px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 10, fontFamily: "var(--font-roboto)" }}>
            Categories
          </p>
          {blogCategories.map((c) => (
            <Link href="/blog" key={c.label} className="blog-cat">
              <span style={{ fontSize: 12, color: "hsl(var(--foreground))", fontFamily: "var(--font-roboto)" }}>{c.label}</span>
              <span style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-roboto)" }}>{c.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .blog-row { display:flex; align-items:center; gap:14px; padding:10px 8px; border-radius:10px; transition:background 180ms ease; }
        .blog-row:hover { background:hsl(var(--muted)/0.5); }
        .blog-row:hover .blog-img { transform:scale(1.08); }
        .blog-row:hover .blog-title { color:hsl(var(--primary)); }
        .blog-cat { display:flex; align-items:center; justify-content:space-between; padding:7px 8px; border-radius:7px; transition:background 180ms ease; }
        .blog-cat:hover { background:hsl(var(--accent)); }
      `}</style>
    </MegaShell>
  );
}

/* ── Navbar ───────────────────────────────────────────────────── */
type Menu = "packages" | "places" | "blog" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [customiseOpen, setCustomiseOpen] = useState(false);
  const [active, setActive] = useState<Menu>(null);
  const [mobileExp, setMobileExp] = useState<Menu>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const enter = (m: Menu) => { if (timer.current) clearTimeout(timer.current); setActive(m); };
  const leave = () => { timer.current = setTimeout(() => setActive(null), 130); };

  const navItems: { label: string; key: Menu; href: string }[] = [
    { label: "Home",     key: null, href: "/" },
    { label: "Packages", key: "packages", href: "/packages" },
    { label: "About Us", key: null, href: "/about" },
    { label: "Blogs",    key: "blog", href: "/blog" },
  ];

  return (
    <>
      <style>{`
        /* Premium Nav Links */
        .nav-trigger { 
          position: relative; display: flex; align-items: center; gap: 4px; 
          font-size: 13.5px; font-weight: 500; padding: 8px 14px; border-radius: 8px; 
          transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1); cursor: pointer; 
          background: none; border: none; font-family: var(--font-roboto); 
          color: #374151;
        }
        
        /* Animated underline */
        .nav-trigger::after { 
          content: ''; position: absolute; bottom: 2px; left: 14px; right: 14px; 
          height: 2px; background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.6));
          border-radius: 99px; transform: scaleX(0); transform-origin: center;
          transition: transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 8px hsl(var(--primary) / 0.3);
        }
        
        /* Background pill effect on hover */
        .nav-trigger::before {
          content: ''; position: absolute; inset: 0; border-radius: 8px;
          background: linear-gradient(135deg, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.02));
          opacity: 0; transform: scale(0.95);
          transition: opacity 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;
        }
        
        .nav-trigger:hover::before {
          opacity: 1; transform: scale(1);
        }
        
        .nav-trigger:hover::after, 
        .nav-trigger.active::after { 
          transform: scaleX(1);
        }
        
        .nav-trigger:hover { 
          color: hsl(var(--primary)); 
          letter-spacing: 0.3px;
        }
        
        .nav-trigger:active {
          transform: translateY(1px);
        }

        /* Button Hover Effects */
        .premium-btn {
          position: relative; overflow: hidden;
          transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .premium-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
          opacity: 0; transform: translateX(-100%);
          transition: transform 400ms ease, opacity 250ms ease;
        }

        .premium-btn:hover::before {
          opacity: 1; transform: translateX(100%);
        }

        .premium-btn:hover {
          box-shadow: 0 8px 24px hsl(var(--primary) / 0.25), 
                      0 0 1px hsl(var(--primary) / 0.5);
          transform: translateY(-2px);
        }

        .premium-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 12px hsl(var(--primary) / 0.15);
        }

        /* Icon animation */
        .premium-btn svg {
          transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .premium-btn:hover svg {
          transform: rotate(-10deg) translateX(2px);
        }

        /* Call button special effect */
        .call-btn {
          position: relative;
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .call-btn::after {
          content: ''; position: absolute; inset: 0; border-radius: 8px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.3), transparent);
          opacity: 0; animation: pulse-ring 0.6s ease-out forwards;
        }

        .call-btn:hover::after {
          animation: pulse-ring 0.6s ease-out;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* Mega menu animations */
        @keyframes menuSlideDown {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes menuSlideUp {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-12px) scale(0.95);
          }
        }

        .mega-pkg-card {
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid transparent;
        }

        .mega-pkg-card:hover {
          border-color: hsl(var(--primary) / 0.2);
          box-shadow: 0 12px 32px hsl(var(--primary) / 0.12);
          transform: translateY(-4px);
        }

        .mega-pkg-card:hover .mega-img { 
          transform: scale(1.08) rotate(0.5deg);
        }

        .mega-pkg-card:hover .mega-pkg-title { 
          color: hsl(var(--primary));
        }

        .places-card {
          transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid transparent;
        }

        .places-card:hover {
          border-color: hsl(var(--primary) / 0.2);
          box-shadow: 0 12px 32px hsl(var(--primary) / 0.12);
          transform: translateY(-4px);
        }

        .places-card:hover .places-img { 
          transform: scale(1.08) rotate(-0.3deg);
        }

        .places-card:hover .places-explore { 
          gap: 8px;
          color: hsl(var(--primary));
          font-weight: 700;
        }

        .blog-row {
          transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
          border-left: 3px solid transparent;
          padding-left: 8px;
        }

        .blog-row:hover {
          background: hsl(var(--primary) / 0.05);
          border-left-color: hsl(var(--primary));
          transform: translateX(4px);
        }

        .blog-row:hover .blog-img { 
          transform: scale(1.1) rotate(1deg);
        }

        .blog-row:hover .blog-title { 
          color: hsl(var(--primary));
        }

        /* Staggered animations for dropdown items */
        .mega-pkg-card {
          animation: fadeInUp 0.5s ease forwards;
        }

        .mega-pkg-card:nth-child(1) { animation-delay: 0.05s; }
        .mega-pkg-card:nth-child(2) { animation-delay: 0.1s; }
        .mega-pkg-card:nth-child(3) { animation-delay: 0.15s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Chevron icon animation */
        .nav-trigger svg {
          transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-trigger:hover svg {
          transform: scale(1.1);
        }

        /* Link arrow animation */
        .places-explore, .places-card .places-explore {
          transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .places-explore svg {
          transition: transform 250ms cubic-bezier(0.23, 1, 0.32, 1);
        }

        .places-card:hover .places-explore svg {
          transform: translateX(3px);
        }

        /* Mobile menu item borders */
        .mobile-menu-item {
          position: relative;
          transition: all 250ms ease;
        }

        .mobile-menu-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary) / 0.5));
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mobile-menu-item:hover::before {
          transform: scaleY(1);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-sm`}>
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="z-10 block" prefetch={true}>
            <Image 
              src={logo} 
              alt="Experience My India" 
              height={28} 
              width={125}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3 flex-1 justify-center relative">
            {navItems.map((item) =>
              item.key ? (
                <div key={item.label} className="relative" onMouseEnter={() => enter(item.key)} onMouseLeave={leave}>
                  <Link href={item.href} className={`nav-trigger flex items-center gap-1 ${active === item.key ? "active text-primary" : "text-gray-700 hover:text-primary"}`}>
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${active === item.key ? "rotate-180" : ""}`} />
                  </Link>
                  {item.key === "packages" && <PackagesMega visible={active === "packages"} />}
                  {item.key === "blog"     && <BlogMega     visible={active === "blog"}     />}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-trigger text-gray-700 hover:text-primary">
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4 z-10">
            <button
              onClick={() => setCustomiseOpen(true)}
              className="premium-btn text-sm bg-[hsl(var(--primary))] font-semibold text-white px-5 py-2.5 rounded-lg shadow-md"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              Customize Package
            </button>
            <a href="tel:+919876543210" className="call-btn w-10 h-10 rounded-lg bg-[hsl(var(--primary))] flex items-center justify-center shadow-md" aria-label="Call us">
              <Phone size={16} className="text-white" />
            </a>
          </div>

          {/* Mobile burger */}
          <button type="button" className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-6 space-y-1 max-h-[80vh] overflow-y-auto" style={{ fontFamily: "var(--font-roboto)" }}>
            {navItems.map((item) =>
              item.key ? (
                <div key={item.label}>
                  <div className="w-full flex items-center justify-between py-3 border-b border-gray-200">
                    <Link href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-700 flex-1" style={{ fontFamily: "var(--font-roboto)" }}>
                      {item.label}
                    </Link>
                    <button onClick={() => setMobileExp(mobileExp === item.key ? null : item.key)} className="p-2 -mr-2 text-gray-600">
                      <ChevronDown size={14} className={`transition-transform ${mobileExp === item.key ? "rotate-180 text-primary" : ""}`} />
                    </button>
                  </div>
                  {mobileExp === item.key && item.key === "packages" && (
                    <div className="py-3 pl-3 space-y-3">
                      {featuredPackages.map((p) => (
                        <Link key={p.title} href="/packages" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0">
                            <Image src={p.image} alt={p.title} fill sizes="44px" style={{ objectFit: "cover" }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{p.title}</p>
                            <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{p.sub}</p>
                          </div>
                        </Link>
                      ))}
                      <Link href="/packages" onClick={() => setMobileOpen(false)} className="block text-primary text-sm font-semibold" style={{ fontFamily: "var(--font-roboto)" }}>View all packages →</Link>
                    </div>
                  )}
                  {mobileExp === item.key && item.key === "places" && (
                    <div className="py-3 pl-3 space-y-3">
                      {destinations.map((d) => (
                        <Link key={d.name} href="/packages" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0">
                            <Image src={d.image} alt={d.name} fill sizes="44px" style={{ objectFit: "cover" }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{d.name}</p>
                            <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{d.tagline}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {mobileExp === item.key && item.key === "blog" && (
                    <div className="py-3 pl-3 space-y-3">
                      {blogPosts.map((p) => (
                        <Link key={p.title} href="/blog/the-mystical-ganga-aarti-guide" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0">
                            <Image src={p.image} alt={p.title} fill sizes="44px" style={{ objectFit: "cover" }} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{p.title}</p>
                            <p className="text-xs text-muted-foreground" style={{ fontFamily: "var(--font-roboto)" }}>{p.cat}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-3 border-b border-gray-200">
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <button onClick={() => { setCustomiseOpen(true); setMobileOpen(false); }} className="premium-btn btn-divine text-xs py-2.5 px-4 w-full font-semibold text-white bg-[hsl(var(--primary))] rounded-lg shadow-md" style={{ fontFamily: "var(--font-roboto)" }}>
                Customize Package
              </button>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-sm text-primary font-semibold py-2.5 border-2 border-primary rounded-lg transition-all duration-200 hover:bg-primary/5 active:bg-primary/10" style={{ fontFamily: "var(--font-roboto)" }}>
                <Phone size={16} /> +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </nav>

      <CustomisedPackageModal open={customiseOpen} onOpenChange={setCustomiseOpen} />
    </>
  );
}
