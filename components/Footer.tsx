"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Experience_my_India.webp";

const Footer = () => {
  return (
    <footer className="relative py-8 md:py-12 px-6 overflow-hidden" style={{ background: "#0a0805" }}>
      {/* ── premium animated gradient orbs - Orange theme ── */}
      <div style={{
        position: "absolute",
        top: "-30%",
        right: "-5%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(232,123,44,0.25) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(232,123,44,0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 10s ease-in-out infinite 1s",
      }} />
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(232,123,44,0.12) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        animation: "float 12s ease-in-out infinite 2s",
        transform: "translateX(-50%)",
      }} />
      
      {/* ── subtle grid pattern with orange tint ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: `
          linear-gradient(rgba(232,123,44,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,123,44,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.6,
      }} />
      
      {/* ── enhanced background effects ── */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(45px)",
        animation: "float 15s ease-in-out infinite 3s",
      }} />
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "20%",
        width: "350px",
        height: "350px",
        background: "radial-gradient(circle, rgba(232,123,44,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(50px)",
        animation: "float 18s ease-in-out infinite 4s",
      }} />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/5">
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image 
                src={logo} 
                alt="Experience My India" 
                height={36} 
                width={160}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-white/75 text-sm leading-relaxed font-light">
              Crafting sacred journeys to India's holiest destinations with devotion, care, and authenticity.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/#packages" },
                { label: "Blog", href: "/#blog" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund Policy", href: "/refund-policy" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "6px";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
                    (e.currentTarget as HTMLAnchorElement).style.paddingLeft = "0";
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">Destinations</h4>
            <div className="space-y-3">
              {["Ayodhya", "Varanasi", "Prayagraj"].map((dest) => (
                <span key={dest} className="block text-white/75 text-sm font-light hover:text-white/95 transition-colors cursor-default">{dest}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="text-white/75 text-sm flex items-center gap-2 hover:text-white/95 transition-colors group">
                <Phone size={14} className="text-[#E87B2C] group-hover:scale-110 transition-transform" /> 
                <span className="font-light">+91 98765 43210</span>
              </a>
              <a href="mailto:ayodhavaranasitourism@gmail.com" className="text-white/75 text-sm flex items-center gap-2 hover:text-white/95 transition-colors group">
                <Mail size={14} className="text-[#E87B2C] group-hover:scale-110 transition-transform" /> 
                <span className="font-light">ayodhavaranasitourism@gmail.com</span>
              </a>
              <p className="text-white/75 text-sm flex items-center gap-2">
                <MapPin size={14} className="text-[#E87B2C] flex-shrink-0" /> 
                <span className="font-light">Uttar Pradesh</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/50 text-xs font-light tracking-wide">© 2026 Experience My India. All rights reserved.</p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <a key={i} href="#" className="text-white/50 text-xs hover:text-white/75 transition-colors font-light">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
