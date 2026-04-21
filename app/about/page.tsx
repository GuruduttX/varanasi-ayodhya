"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Heart, Shield, MapPin, Award, ChevronRight, Compass, Sparkles, Trophy, Car, GraduationCap } from "lucide-react";

import BannerAbout from "@/assets/banner-offer.png";
import localRootsImg from "@/assets/ -9.jpg";
import timelineBgImg from "@/assets/BAPS in NJ.jpg";

const values = [
  {
    icon: <Heart size={24} />,
    title: "Reverence First",
    desc: "Every itinerary is built around the sacred calendar, honoring ancient traditions before convenience."
  },
  {
    icon: <Shield size={24} />,
    title: "Unwavering Trust",
    desc: "From transparent pricing to VIP security, we protect your peace of mind."
  },
  {
    icon: <Compass size={24} />,
    title: "Generational Guides",
    desc: "Our local experts hold the keys to hidden stories and uncrowded pathways."
  },
  {
    icon: <Award size={24} />,
    title: "Premium Comfort",
    desc: "Spiritual journeys shouldn't mean compromising on world-class hospitality."
  }
];

const inclusions = [
  { 
    title: "VIP Darshan & Pooja", 
    desc: "Skip the lines with our exclusive, pre-arranged temple access and personalized rituals.",
    icon: <Sparkles size={18} strokeWidth={2.2} className="text-[#E87B2C]" />
  },
  { 
    title: "Premium Heritage Stays", 
    desc: "Rest in handpicked luxury hotels, palaces, and boutique properties near sacred sites.",
    icon: <Trophy size={18} strokeWidth={2.2} className="text-[#FBBF24]" />
  },
  { 
    title: "Chauffeur-Driven Transport", 
    desc: "Travel comfortably in private, air-conditioned vehicles with professional drivers.",
    icon: <Car size={18} strokeWidth={2.2} className="text-[#3EB489]" />
  },
  { 
    title: "Expert Local Guides", 
    desc: "Gain deep insights from knowledgeable, government-approved generational guides.",
    icon: <GraduationCap size={18} strokeWidth={2.2} className="text-[#34D399]" />
  }
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf8] selection:bg-[hsl(var(--primary))] selection:text-white pb-10">
      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <Image 
            src={BannerAbout}
            alt="About Us"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-[#fafaf8]" />
        
        <div className="relative z-20 text-center px-6 max-w-4xl mt-20">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/90 uppercase mb-6 block">
            Our Story
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            We don&apos;t sell tours.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E87B2C] to-[#FBBF24]">
              We craft pilgrimages.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Born on the ghats of Varanasi, Divine Journeys was built to restore the sanctity, luxury, and peace of mind to India&apos;s most sacred destinations.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-gray-400">
          <ArrowDown size={20} />
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-24 relative z-30">
        
        {/* ── BENTO GRID ── */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
          
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Philosophy
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Most travel companies focus on checking off lists. We focus on the <strong className="text-gray-900 font-semibold">spaces in between</strong>. Our founders walked the sacred paths for years before building this company. Every decision we make is filtered through a single question: <em className="text-gray-900">&quot;Would this serve a sincere pilgrim?&quot;</em>
            </p>
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="text-4xl font-heading font-bold text-[hsl(var(--primary))]">12+</p>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-2">Years</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-[hsl(var(--primary))]">10k</p>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-2">Pilgrims</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-[hsl(var(--primary))]">100%</p>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-2">Custom</p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#0a0806] rounded-[2rem] overflow-hidden group min-h-[300px]">
            <Image 
              src={localRootsImg}
              alt="Ganges Boat"
              fill
              className="object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <MapPin size={20} className="text-white" />
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Local Roots</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Headquartered in Varanasi, we don&apos;t just visit these cities; we live them.
              </p>
            </div>
          </div>

        </section>

        {/* ── INTERACTIVE VALUES ── */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[hsl(var(--primary))] uppercase mb-4 block">
              Our Pillars
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900">
              Why We Are Different
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[hsl(var(--primary))] hover:shadow-[0_20px_40px_rgba(232,123,44,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-[#fafaf8] text-gray-400 flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PREMIUM INCLUSIONS ── */}
        <section className="bg-[#0a0806] rounded-[2.5rem] overflow-hidden p-10 md:p-24 relative flex items-center justify-center min-h-[700px]">
          <div className="absolute inset-0 opacity-20">
            <Image src={timelineBgImg} alt="Temple" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806] via-[#0a0806]/80 to-[#0a0806]" />
          </div>

          <style>{`
            @keyframes float-slow {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(3deg); }
            }
            @keyframes float-slower {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(15px) rotate(-2deg); }
            }
          `}</style>

          {/* LEFT ANIMATED IMAGE */}
          <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 z-10" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
            <div className="relative w-[280px] h-[380px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
              <Image src={localRootsImg} alt="Floating Diyas" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT ANIMATED IMAGE */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10" style={{ animation: "float-slower 8s ease-in-out infinite" }}>
            <div className="relative w-[280px] h-[380px] rounded-[2rem] overflow-hidden border border-[hsl(var(--primary))]/20 shadow-[0_0_50px_rgba(232,123,44,0.15)] group">
              <Image src={timelineBgImg} alt="Temple View" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[hsl(var(--primary))]/10 mix-blend-overlay" />
            </div>
          </div>

          <div className="relative z-20 max-w-xl text-center w-full">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[hsl(var(--primary))] uppercase mb-4 block">
              What We Provide
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-12">
              The Divine Experience
            </h2>

            <div className="space-y-4 text-left">
              {inclusions.map((item, i) => (
                <div key={i} className="flex gap-6 items-center bg-white/5 p-6 rounded-[1.5rem] border border-white/10 hover:border-[hsl(var(--primary))]/40 transition-all hover:bg-white/10 backdrop-blur-md group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/0 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-[hsl(var(--primary))]/30 transition-all shadow-xl">
                     {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALL TO ACTION ── */}
        <section className="text-center py-24 md:py-32">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to begin your journey?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Let our experts craft a pilgrimage that honors your spiritual goals and exceeds your expectations for comfort.
          </p>
          <Link 
            href="/packages"
            className="inline-flex items-center gap-3 bg-[hsl(var(--primary))] text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:brightness-110 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[hsl(var(--primary))]/20 uppercase text-xs"
          >
            Explore Packages
            <ChevronRight size={16} />
          </Link>
        </section>

      </div>
    </main>
  );
}
