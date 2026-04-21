"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  MapPin, Clock, Star, Check, X, Calendar, Users, Shield, 
  ChevronDown, ArrowRight, FileText, Share2, Image as ImageIcon
} from "lucide-react";

import CustomisedPackageModal from "@/components/CustomisedPackageModal";
import EnquireNowModal from "@/components/EnquireNowModal";

// Import images for the Bento Gallery
import mainHeroImg from "@/assets/ram haweli 💘🥹.jpg";
import subImg1 from "@/assets/ayodhya Ram Lalla murti photo.jpg";
import subImg2 from "@/assets/Cyberian birds on prayagraj.jpg";
import subImg3 from "@/assets/ -8.jpg";
import subImg4 from "@/assets/ -11.jpg";

// DUMMY DATA FOR TEMPLATE
const dummyPackage = {
  title: "Divine Ayodhya & Kashi Pilgrimage",
  destination: "Ayodhya & Varanasi",
  duration: "5 Days / 4 Nights",
  rating: 4.9,
  reviews: 128,
  price: "₹18,500",
  about: "Embark on a deeply moving spiritual journey through two of India's most sacred cities. This curated experience takes you from the birthplace of Lord Rama in Ayodhya to the eternal ghats of Varanasi. Witness the spectacular Ganga Aarti, enjoy VIP darshan at key temples, and find peace with expert local guides who understand the true essence of these holy sites.",
  highlights: [
    "VIP Darshan at Ram Mandir, Ayodhya",
    "Private boat ride during the mesmerizing Ganga Aarti",
    "Exclusive Kashi Vishwanath Temple corridor tour",
    "Premium Heritage Hotel stays",
    "Chauffeur-driven AC vehicle for all transfers"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Ayodhya & Evening Aarti",
      desc: "Upon arrival in Ayodhya, our representative will greet you and transfer you to your premium hotel. In the evening, witness the divine Saryu River Aarti, a deeply peaceful experience to begin your pilgrimage."
    },
    {
      day: "Day 2",
      title: "Ram Mandir Darshan & Travel to Varanasi",
      desc: "Early morning VIP access to the grand Ram Mandir. After breakfast, we drive to Varanasi (approx 4 hours). Check into your heritage property by the ghats."
    },
    {
      day: "Day 3",
      title: "Subah-e-Banaras & Temple Trails",
      desc: "Start before dawn with a boat ride on the Ganges. Visit Kashi Vishwanath, Annapurna Temple, and Kaal Bhairav. Evening is reserved for the world-famous Ganga Aarti at Dashashwamedh Ghat."
    },
    {
      day: "Day 4",
      title: "Sarnath Excursion",
      desc: "A short drive to Sarnath, where Lord Buddha gave his first sermon. Explore the ancient ruins, Dhamek Stupa, and the museum. Return to Varanasi for leisure time or silk shopping."
    },
    {
      day: "Day 5",
      title: "Departure",
      desc: "After a final morning walk along the peaceful ghats and breakfast, transfer to Varanasi Airport/Railway Station with divine memories."
    }
  ],
  included: [
    "4 Nights premium accommodation",
    "Daily buffet breakfast",
    "Private AC vehicle for all transfers and sightseeing",
    "Expert English/Hindi speaking local guide",
    "VIP Darshan arrangements",
    "Private boat ride in Varanasi"
  ],
  excluded: [
    "Flight / Train tickets",
    "Lunch and Dinner",
    "Personal expenses",
    "Camera fees at monuments"
  ],
  faq: [
    {
      q: "Is the VIP Darshan guaranteed?",
      a: "Yes, our team pre-arranges the VIP access passes to ensure you have a smooth and uncrowded darshan experience."
    },
    {
      q: "Are the hotels wheelchair accessible?",
      a: "We handpick premium properties. If you have specific accessibility needs, please let us know so we can ensure the perfect room assignment."
    },
    {
      q: "What is the best time to book this package?",
      a: "Varanasi and Ayodhya are beautiful year-round, but October to March offers the most pleasant weather for exploring."
    }
  ]
};

export default function PackageTemplate() {
  const params = useParams();
  const [openDay, setOpenDay] = useState(0);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [customiseOpen, setCustomiseOpen] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: dummyPackage.title,
      text: dummyPackage.about,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.url}`);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      
      {/* ── HEADER TITLE & DETAILS ── */}
      <section className="pt-28 pb-6 px-6 bg-[#fafaf8]">
        <div className="container mx-auto">
          {/* Breadcrumbs - Without any grey background */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
             <Link href="/" className="hover:text-[hsl(var(--primary))] transition-colors">Home</Link>
             <span>/</span>
             <Link href="/packages" className="hover:text-[hsl(var(--primary))] transition-colors">Packages</Link>
             <span>/</span>
             <span className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-none">{dummyPackage.title}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-4xl">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-5 leading-[1.1]">
                {dummyPackage.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base font-medium">
                <span className="flex items-center gap-1.5 text-gray-900 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{dummyPackage.rating}</span> 
                  <span className="text-gray-500 underline decoration-gray-300 underline-offset-2">({dummyPackage.reviews} Reviews)</span>
                </span>
                <span className="flex items-center gap-1.5"><MapPin size={18} className="text-gray-400" /> {dummyPackage.destination}</span>
                <span className="flex items-center gap-1.5"><Clock size={18} className="text-gray-400" /> {dummyPackage.duration}</span>
              </div>
            </div>
            
            <div className="flex gap-3 shrink-0">
               <button onClick={handleShare} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-sm font-semibold text-gray-700 shadow-sm">
                  <Share2 size={16} /> <span className="hidden sm:inline">Share</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO PHOTO GALLERY ── */}
      <section className="px-6 pb-12 bg-[#fafaf8]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-4 h-[40vh] min-h-[350px] md:h-[65vh] md:min-h-[550px]">
            {/* Main Image - Left half */}
            <div className="col-span-1 md:col-span-7 row-span-2 relative group cursor-pointer overflow-hidden rounded-[24px]">
              <Image src={mainHeroImg} alt="Main View" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                 <p className="text-[10px] font-bold text-[hsl(var(--primary))] uppercase tracking-widest mb-3">Experience My India Exclusive</p>
                 <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 shadow-sm leading-tight">{dummyPackage.title}</h3>
                 <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-medium border border-white/20">
                   Save ₹15000 • VIP Darshan • Premium Stays
                 </div>
              </div>
            </div>
            
            {/* Top Right Grid */}
            <div className="col-span-1 md:col-span-5 row-span-2 grid grid-cols-2 grid-rows-2 gap-4">
              {/* Sub Image 1 */}
              <div className="relative group cursor-pointer overflow-hidden rounded-[24px]">
                <Image src={subImg1} alt="Destinations" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 z-10">
                   <p className="text-white font-semibold text-sm tracking-wide">Destinations</p>
                </div>
              </div>
              {/* Sub Image 2 */}
              <div className="relative group cursor-pointer overflow-hidden rounded-[24px]">
                <Image src={subImg2} alt="Luxury Stays" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 z-10">
                   <p className="text-white font-semibold text-sm tracking-wide">Luxury Stays</p>
                </div>
              </div>
              {/* Sub Image 3 */}
              <div className="relative group cursor-pointer overflow-hidden rounded-[24px]">
                <Image src={subImg3} alt="Experiences" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 z-10">
                   <p className="text-white font-semibold text-sm tracking-wide">Experiences</p>
                </div>
              </div>
              {/* Sub Image 4 */}
              <div className="relative group cursor-pointer overflow-hidden rounded-[24px]">
                <Image src={subImg4} alt="Hidden Gems" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-5 left-6 z-10">
                   <p className="text-white font-semibold text-sm tracking-wide">Hidden Gems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="py-8 md:py-16 px-6 border-t border-gray-200/60 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[65%] space-y-16">
            
            {/* Overview */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6">About the Journey</h2>
              <p className="text-gray-600 leading-relaxed text-[17px] mb-8">
                {dummyPackage.about}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {dummyPackage.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#fafaf8] p-4 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="mt-0.5 bg-white shadow-sm text-[hsl(var(--primary))] rounded-full p-1.5 flex-shrink-0 border border-gray-100">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calendar className="text-[hsl(var(--primary))]" /> Detailed Itinerary
              </h2>
              
              <div className="space-y-4">
                {dummyPackage.itinerary.map((day, i) => (
                  <div key={i} className={`border rounded-2xl overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 ${openDay === i ? 'border-[hsl(var(--primary))]/40 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                    <button 
                      onClick={() => setOpenDay(openDay === i ? -1 : i)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-5">
                        <span className={`text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider transition-colors ${openDay === i ? 'bg-[hsl(var(--primary))] text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {day.day}
                        </span>
                        <h3 className="font-bold text-gray-900 text-lg font-heading">{day.title}</h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openDay === i ? 'bg-orange-50 text-[hsl(var(--primary))]' : 'bg-gray-50 text-gray-400'}`}>
                         <ChevronDown className={`transition-transform duration-300 ${openDay === i ? "rotate-180" : ""}`} size={18} />
                      </div>
                    </button>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${openDay === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-1">
                          <div className="pl-5 ml-[22px] border-l-2 border-dashed border-gray-200">
                            <p className="text-gray-600 leading-relaxed text-[15px]">{day.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#fafaf8] rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -z-0" />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                     <Check size={16} strokeWidth={3} />
                  </div>
                  What's Included
                </h3>
                <ul className="space-y-4 relative z-10">
                  {dummyPackage.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#fafaf8] rounded-3xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-full -z-0" />
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                     <X size={16} strokeWidth={3} />
                  </div>
                  What's Excluded
                </h3>
                <ul className="space-y-4 relative z-10">
                  {dummyPackage.excluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {dummyPackage.faq.map((f, i) => (
                  <div key={i} className="bg-[#fafaf8] border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{f.q}</h4>
                    <p className="text-gray-600 text-[15px] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT STICKY SIDEBAR */}
          <div className="w-full lg:w-[35%] relative">
            <div className="sticky top-28 bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 overflow-hidden">
              <div className="text-left mb-8">
                <h3 className="font-heading text-3xl text-gray-900 mb-2 font-bold tracking-tight">Start Your Request</h3>
                <p className="text-gray-500 text-sm font-medium">
                  Provide your details and we'll craft your bespoke journey.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="pkg-name" className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 ml-1">
                    Full Name
                  </label>
                  <input 
                    id="pkg-name" 
                    type="text"
                    placeholder="John Doe" 
                    className="w-full h-14 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/20 rounded-xl px-4 text-base shadow-sm placeholder:text-gray-400 transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pkg-phone" className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 ml-1">
                    Phone Number
                  </label>
                  <input 
                    id="pkg-phone" 
                    type="tel"
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full h-14 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/20 rounded-xl px-4 text-base shadow-sm placeholder:text-gray-400 transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pkg-email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 ml-1">
                    Email Address
                  </label>
                  <input 
                    id="pkg-email" 
                    type="email"
                    placeholder="you@example.com" 
                    className="w-full h-14 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/20 rounded-xl px-4 text-base shadow-sm placeholder:text-gray-400 transition-all outline-none" 
                    required 
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pkg-dest" className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 ml-1">
                    Preferred Destination
                  </label>
                  <input 
                    id="pkg-dest" 
                    type="text"
                    defaultValue={dummyPackage.destination}
                    className="w-full h-14 bg-gray-50 border border-gray-200 focus:bg-white focus:border-[hsl(var(--primary))] focus:ring-1 focus:ring-[hsl(var(--primary))]/20 rounded-xl px-4 text-base shadow-sm placeholder:text-gray-400 transition-all outline-none" 
                    required 
                  />
                </div>

                <button type="submit" className="w-full bg-[hsl(var(--primary))] text-white font-medium h-14 rounded-xl hover:brightness-105 active:scale-[0.98] transition-all text-base mt-2 shadow-sm">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      <EnquireNowModal open={enquireOpen} onOpenChange={setEnquireOpen} />
      <CustomisedPackageModal open={customiseOpen} onOpenChange={setCustomiseOpen} />
    </main>
  );
}
