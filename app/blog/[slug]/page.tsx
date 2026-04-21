"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Share2, MessageCircle, Mail, Link2, Bookmark, Quote, Star, Compass } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";

const EnquireNowModal = dynamic(() => import("@/components/EnquireNowModal"), { ssr: false });
const CustomisedPackageModal = dynamic(() => import("@/components/CustomisedPackageModal"), { ssr: false });

// Using some of the requested premium images for the demo
import mainHeroImg from "@/assets/ -6.jpg"; // Ganga Aarti image
import authorImg from "@/assets/ayodhya Ram Lalla murti photo.jpg"; // Just a dummy avatar image

const dummyArticle = {
  title: "The Mystical Ganga Aarti: A Complete Guide to the Evening Ritual",
  category: "Varanasi",
  date: "October 15, 2024",
  readTime: "5 min read",
  author: {
    name: "Divine Journeys Editorial",
    role: "Spiritual Travel Expert",
  },
  tags: ["Spirituality", "Ghats", "Evening Ritual", "Varanasi"],
};

export default function BlogTemplate() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isCustomiseOpen, setIsCustomiseOpen] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: dummyArticle.title,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] selection:bg-[hsl(var(--primary))] selection:text-white pb-20">
      
      {/* ── HEADER OVERLAY ── */}
      <section className="pt-28 pb-10 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[hsl(var(--primary))] transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Stories
          </Link>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[11px] font-bold text-[hsl(var(--primary))] uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
              {dummyArticle.category}
            </span>
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              {dummyArticle.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              <Clock size={12} /> {dummyArticle.readTime}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-10 tracking-tight">
            {dummyArticle.title}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative shadow-md border-2 border-white">
              <Image src={authorImg} alt="Author" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">{dummyArticle.author.name}</p>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-0.5">{dummyArticle.author.role}</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* ── FULL WIDTH HERO IMAGE ── */}
      <section className="px-6 mb-16">
        <div className="max-w-[1100px] mx-auto relative aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <Image 
            src={mainHeroImg} 
            alt={dummyArticle.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── CONTENT BODY ── */}
      <section className="px-6 relative">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 relative">
          
          {/* LEFT: STICKY SOCIAL SHARE */}
          <div className="hidden lg:block w-16 shrink-0 relative">
            <div className="sticky top-32 flex flex-col gap-4">
              <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Share Article
              </div>
              <button 
                onClick={handleShare}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-all hover:shadow-md bg-white"
                title="Share Article"
              >
                <Share2 size={16} />
              </button>
              <button 
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all hover:shadow-md bg-white"
                title="Copy Link"
              >
                <Link2 size={16} />
              </button>
              <button 
                onClick={() => setIsEnquireOpen(true)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))] transition-all hover:shadow-md bg-white"
                title="Plan Your Journey"
              >
                <Compass size={16} />
              </button>
            </div>
          </div>

          {/* MAIN ARTICLE TEXT */}
          <article className="max-w-[700px] w-full prose prose-lg prose-gray">
            
            <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-8 font-light">
              <span className="float-left text-7xl leading-[0.8] pr-2 font-heading font-bold text-[hsl(var(--primary))]">A</span>s the sun begins to set over the ancient city of Varanasi, a profound transformation takes place along the banks of the sacred river. The chaotic symphony of the day slowly yields to a focused, rhythmic spiritual energy.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">The Anatomy of the Aarti</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The Ganga Aarti is not merely a visual spectacle; it is a meticulously choreographed sequence of offerings. Young priests, draped in traditional saffron and white silks, take their positions on elevated wooden platforms facing the river.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              The ritual begins with the blowing of a conch shell, a sound that cuts through the chatter of the crowd and signals the start of the divine communion. What follows is an offering of the five elements to the river goddess: space, wind, fire, water, and earth.
            </p>

            {/* Premium Blockquote */}
            <blockquote className="relative p-8 my-12 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Quote className="absolute top-6 left-6 text-orange-100 w-12 h-12 rotate-180 -z-0" />
              <p className="relative z-10 text-2xl font-heading font-medium italic text-gray-900 leading-snug">
                "To witness the Aarti is to see devotion made visible. It is the moment when the eternal soul of India speaks through fire and water."
              </p>
            </blockquote>

            <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Where to Watch</h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              While the Dashashwamedh Ghat is the primary and most famous location, the perspective you choose can vastly change your experience:
            </p>

            <ul className="space-y-4 mb-8 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <Star size={10} fill="hsl(var(--primary))" style={{ color: "hsl(var(--primary))", marginTop: "10px", flexShrink: 0 }} />
                <span><strong>From the Ghat Steps:</strong> Puts you in the heart of the energy, surrounded by chanting pilgrims. Arrive at least an hour early.</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={10} fill="hsl(var(--primary))" style={{ color: "hsl(var(--primary))", marginTop: "10px", flexShrink: 0 }} />
                <span><strong>From a Boat:</strong> The most cinematic view. You watch the ritual facing the shore, with the fire reflecting off the dark waters of the Ganges.</span>
              </li>
              <li className="flex items-start gap-3">
                <Star size={10} fill="hsl(var(--primary))" style={{ color: "hsl(var(--primary))", marginTop: "10px", flexShrink: 0 }} />
                <span><strong>From a Balcony:</strong> Many nearby buildings offer rooftop views, providing a panoramic perspective of the entire spectacle.</span>
              </li>
            </ul>

            <div className="h-px w-full bg-gray-200 my-12" />

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-16">
              {dummyArticle.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 uppercase tracking-widest hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

          </article>

          {/* RIGHT: STICKY CONVERSION CTA */}
          <div className="hidden lg:block w-[360px] shrink-0 relative">
            <div className="sticky top-32 bg-white rounded-[2.5rem] p-10 shadow-[0_30px_70px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[hsl(var(--primary))/0.03] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none opacity-40" />
              
              <div className="relative z-10 text-center">
                <h3 className="font-heading text-[28px] font-bold text-gray-900 mb-4 whitespace-nowrap">Inspired to visit?</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-10 px-2">
                  Our local experts are ready to craft your perfect spiritual retreat in these sacred lands.
                </p>
                
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => setIsEnquireOpen(true)}
                    className="w-full py-5 bg-[hsl(var(--primary))] text-white text-sm font-bold rounded-2xl shadow-lg shadow-orange-200/60 hover:brightness-110 hover:-translate-y-0.5 transition-all uppercase tracking-wider"
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => setIsCustomiseOpen(true)}
                    className="w-full py-5 bg-white border border-gray-200 text-gray-900 text-sm font-bold rounded-2xl hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all uppercase tracking-wider shadow-sm"
                  >
                    Customise Journey
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-50 relative z-10">
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-5 text-center">Why book with us?</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[12px] font-medium text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px]">✓</div>
                    Local Expertise & Access
                  </div>
                  <div className="flex items-center gap-3 text-[12px] font-medium text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px]">✓</div>
                    Verified Premium Stays
                  </div>
                  <div className="flex items-center gap-3 text-[12px] font-medium text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 text-[10px]">✓</div>
                    24/7 Spiritual Concierge
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── RELATED POSTS BOTTOM ── */}
      <section className="bg-white border-t border-gray-100 py-16 mt-10">
        <div className="max-w-[1100px] mx-auto px-6">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-10 text-center">More Travel Stories</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Just replicating the structure for the footer related posts */}
            <Link href="/blog" className="group flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <Image src={mainHeroImg} alt="Related" fill className="object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <span className="text-[10px] font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-2">Varanasi</span>
              <h4 className="font-heading font-bold text-lg text-gray-900 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors mb-3">Secrets of Varanasi's Old Alleys</h4>
              <div className="text-[11px] font-bold text-gray-400 flex items-center gap-1 group-hover:text-[hsl(var(--primary))] transition-colors uppercase tracking-wider">
                Read Full <ArrowRight size={14} />
              </div>
            </Link>
            
            <Link href="/blog" className="group flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <Image src={authorImg} alt="Related" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-[10px] font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-2">Spirituality</span>
              <h4 className="font-heading font-bold text-lg text-gray-900 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors mb-3">Spiritual Practices for Travelers</h4>
              <div className="text-[11px] font-bold text-gray-400 flex items-center gap-1 group-hover:text-[hsl(var(--primary))] transition-colors uppercase tracking-wider">
                Read Full <ArrowRight size={14} />
              </div>
            </Link>

            <Link href="/blog" className="group flex flex-col">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <Image src={mainHeroImg} alt="Related" fill className="object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <span className="text-[10px] font-bold text-[hsl(var(--primary))] tracking-widest uppercase mb-2">Ayodhya</span>
              <h4 className="font-heading font-bold text-lg text-gray-900 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors mb-3">Ayodhya's Ram Mandir Experience</h4>
              <div className="text-[11px] font-bold text-gray-400 flex items-center gap-1 group-hover:text-[hsl(var(--primary))] transition-colors uppercase tracking-wider">
                Read Full <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <EnquireNowModal open={isEnquireOpen} onOpenChange={setIsEnquireOpen} />
      <CustomisedPackageModal open={isCustomiseOpen} onOpenChange={setIsCustomiseOpen} />
    </main>
  );
}
