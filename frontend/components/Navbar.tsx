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
        transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 180ms ease, transform 180ms ease",
      }}
    >
      <div style={{
        background: "hsl(var(--background) / 0.98)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid hsl(var(--border))",
        borderRadius: "16px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        overflow: "hidden",
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>
          Curated Travel Experiences
        </p>
        <Link href="/packages" style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", display: "flex", alignItems: "center", gap: 4 }}>
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
                  <p style={{ fontSize: 13, fontWeight: 700, color: "hsl(var(--foreground))", lineHeight: 1.3, marginBottom: 4 }} className="mega-pkg-title">{pkg.title}</p>
                  <p style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 4, marginBottom: 12 }}>
                    <Clock size={11} />{pkg.sub}
                  </p>
                  
                  <div style={{ display: "flex", gap: 6 }}>
                    <Link href="/packages/divine-ayodhya-kashi-pilgrimage" style={{ 
                      flex: 1, textAlign: "center", fontSize: 10, fontWeight: 700, 
                      padding: "7px 0", borderRadius: 6, border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))", background: "#fff", transition: "all 0.2s"
                    }} className="mega-btn-sec">Details</Link>
                    <button style={{ 
                      flex: 1, fontSize: 10, fontWeight: 700, 
                      padding: "7px 0", borderRadius: 6, 
                      color: "#fff", background: "hsl(var(--primary))", transition: "all 0.2s"
                    }} className="mega-btn-pri">Enquire</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — duration sidebar */}
        <div style={{ padding: "20px 18px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 12 }}>
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
        .mega-pkg-card { display:block; border-radius:10px; transition:all 200ms ease; }
        .mega-pkg-card:hover .mega-img { transform:scale(1.08); }
        .mega-pkg-card:hover .mega-pkg-title { color:hsl(var(--primary)); }
        .mega-btn-sec:hover { background:hsl(var(--accent)) !important; border-color:hsl(var(--primary)) !important; color:hsl(var(--primary)) !important; }
        .mega-btn-pri:hover { brightness:1.1; transform:translateY(-1px); box-shadow:0 4px 12px hsl(var(--primary)/0.2); }
        .mega-side-link { display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border-radius:8px; transition:background 180ms ease; }
        .mega-side-link:hover { background:hsl(var(--accent)); }
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
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>
          Travel Stories &amp; Guides
        </p>
        <Link href="/blog" style={{ fontSize: 11, fontWeight: 600, color: "hsl(var(--primary))", display: "flex", alignItems: "center", gap: 4 }}>
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
                  <span style={{ fontSize: 9, fontWeight: 700, color: "hsl(var(--primary))", textTransform: "uppercase", letterSpacing: "0.08em" }}>{post.cat}</span>
                  <span style={{ fontSize: 9, color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 3 }}>
                    <BookOpen size={8} />{post.time}
                  </span>
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "hsl(var(--foreground))", lineHeight: 1.35 }} className="blog-title">{post.title}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ padding: "20px 18px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 10 }}>
            Categories
          </p>
          {blogCategories.map((c) => (
            <Link href="/blog" key={c.label} className="blog-cat">
              <span style={{ fontSize: 12, color: "hsl(var(--foreground))" }}>{c.label}</span>
              <span style={{ fontSize: 10, color: "hsl(var(--muted-foreground))" }}>{c.count}</span>
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
        .nav-trigger { position:relative; display:flex; align-items:center; gap:4px; font-size:13.5px; font-weight:500; padding:7px 12px; border-radius:8px; transition:color 180ms ease; cursor:pointer; background:none; border:none; }
        .nav-trigger::after { content:''; position:absolute; bottom:2px; left:12px; right:12px; height:1.5px; background:hsl(var(--primary)); border-radius:99px; transform:scaleX(0); transition:transform 220ms ease; }
        .nav-trigger:hover::after, .nav-trigger.active::after { transform:scaleX(1); }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/97 backdrop-blur-md border-b border-border shadow-sm" : "bg-background/80 backdrop-blur-[6px]"
      }`}>
        <div className="container mx-auto px-6 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-heading text-lg font-bold text-foreground whitespace-nowrap z-10" prefetch={true}>
            <span className="text-primary">ॐ</span> Ayodhya Varanasi Tourism
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center relative">
            {navItems.map((item) =>
              item.key ? (
                <div key={item.label} className="relative" onMouseEnter={() => enter(item.key)} onMouseLeave={leave}>
                  <Link href={item.href} className={`nav-trigger flex items-center gap-1 ${active === item.key ? "active text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${active === item.key ? "rotate-180" : ""}`} />
                  </Link>
                  {item.key === "packages" && <PackagesMega visible={active === "packages"} />}
                  {item.key === "blog"     && <BlogMega     visible={active === "blog"}     />}
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="nav-trigger text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <button
              onClick={() => setCustomiseOpen(true)}
              className="text-sm bg-[hsl(var(--primary))] font-semibold text-white px-5 py-2.5 rounded-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
            >
              Customize Package
            </button>
            <a href="tel:+919876543210" className="w-9 h-9 rounded-lg bg-[hsl(var(--primary))] flex items-center justify-center hover:brightness-110 transition-colors shadow-sm" aria-label="Call us">
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
          <div className="md:hidden bg-background border-t border-border px-6 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) =>
              item.key ? (
                <div key={item.label}>
                  <div className="w-full flex items-center justify-between py-3 border-b border-border/50">
                    <Link href={item.href} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-muted-foreground flex-1">
                      {item.label}
                    </Link>
                    <button onClick={() => setMobileExp(mobileExp === item.key ? null : item.key)} className="p-2 -mr-2 text-muted-foreground">
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
                            <p className="text-sm font-semibold text-foreground">{p.title}</p>
                            <p className="text-xs text-muted-foreground">{p.sub}</p>
                          </div>
                        </Link>
                      ))}
                      <Link href="/packages" onClick={() => setMobileOpen(false)} className="block text-primary text-sm font-semibold">View all packages →</Link>
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
                            <p className="text-sm font-semibold text-foreground">{d.name}</p>
                            <p className="text-xs text-muted-foreground">{d.tagline}</p>
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
                            <p className="text-sm font-semibold text-foreground line-clamp-1">{p.title}</p>
                            <p className="text-xs text-muted-foreground">{p.time}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-muted-foreground py-3 border-b border-border/50">
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <button onClick={() => { setCustomiseOpen(true); setMobileOpen(false); }} className="btn-divine text-xs py-2 px-4 w-full">
                Customize Package
              </button>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-sm text-primary font-medium py-2">
                <Phone size={14} /> +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </nav>

      <CustomisedPackageModal open={customiseOpen} onOpenChange={setCustomiseOpen} />
    </>
  );
}
