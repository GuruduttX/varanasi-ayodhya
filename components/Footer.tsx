"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Experience_my_India.webp";

const Footer = () => {
  return (
    <footer className="relative py-10 md:py-14 px-6 overflow-hidden select-none" style={{ background: "#030303" }}>
      
      {/* ── Sacred Energy Background ── */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #E87B2C 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "flame-drift 15s ease-in-out infinite alternate",
          zIndex: 1,
        }} 
      />
      
      <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[120%] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, #D4A017 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "flame-drift 20s ease-in-out infinite alternate-reverse",
          zIndex: 1,
        }} 
      />

      {/* ── Golden Dust Particles ── */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: "1.5px",
              height: "1.5px",
              background: i % 2 === 0 ? "#E87B2C" : "#D4A017",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: 0,
              animation: `float-particle ${Math.random() * 8 + 4}s linear infinite ${Math.random() * 5}s`,
              boxShadow: `0 0 6px ${i % 2 === 0 ? "#E87B2C" : "#D4A017"}`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-10 pb-10 border-b border-white/5">
          
          <div className="space-y-6">
            <Link href="/" className="inline-block group perspective-1000">
              <div className="relative p-3.5 rounded-xl bg-gradient-to-br from-white to-[#f0ece4] shadow-2xl transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(232,123,44,0.15)] group-hover:-translate-y-0.5">
                <Image 
                  src={logo} 
                  alt="Experience My India" 
                  height={38} 
                  width={160}
                  className="object-contain" 
                  priority
                />
              </div>
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed font-light font-body max-w-xs">
              Crafting sacred journeys to India's holiest destinations with devotion, care, and authenticity.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white/80 tracking-[0.25em] uppercase font-body">Quick Links</h4>
            <div className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "Packages", href: "/#packages" },
                { label: "Blog", href: "/#blog" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block text-[13px] font-medium text-white/40 hover:text-white transition-all duration-300 font-body"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white/80 tracking-[0.25em] uppercase font-body">Destinations</h4>
            <div className="space-y-3.5">
              {["Ayodhya", "Varanasi", "Prayagraj"].map((dest) => (
                <span key={dest} className="block text-[13px] font-light text-white/40 hover:text-[#D4A017] transition-colors font-body cursor-default">
                  {dest}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white/80 tracking-[0.25em] uppercase font-body">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E87B2C]/10 group-hover:border-[#E87B2C]/30">
                  <Phone size={14} className="text-[#E87B2C]" /> 
                </div>
                <span className="text-[13px] text-white/60 group-hover:text-white font-medium font-body transition-colors">+91 98765 43210</span>
              </a>
              <a href="mailto:ayodhavaranasitourism@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#E87B2C]/10 group-hover:border-[#E87B2C]/30">
                  <Mail size={14} className="text-[#E87B2C]" /> 
                </div>
                <span className="text-[13px] text-white/60 group-hover:text-white font-medium font-body transition-colors truncate">ayodhavaranasitourism@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 font-body">
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            © 2026 EXPERIENCE MY INDIA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Cookies"].map((item, i) => (
              <a key={i} href="#" className="relative text-white/20 text-[10px] hover:text-white transition-all duration-300 tracking-[0.15em] uppercase group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flame-drift {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.05) translate(10px, 15px); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          20% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-60px) scale(0); opacity: 0; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;





