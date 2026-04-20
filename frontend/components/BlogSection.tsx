"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import gangaAarti from "@/assets/ -6.jpg";
import boatGanges from "@/assets/Cyberian birds on prayagraj.jpg";
import ayodhyaTemple from "@/assets/ -10.jpg";
import varanasiStreets from "@/assets/varanasi-streets.jpg";
import templePrayer from "@/assets/Wishes.jpg";

const mainPost = {
  id: "mystical-ganga-aarti",
  category: "DIVINE JOURNEYS",
  title: "The Mystical Ganga Aarti: A Complete Guide to the Evening Ritual",
  preview: "Discover the centuries-old evening ritual that transforms the banks of Varanasi into a realm of divine light and spiritual awakening.",
  author: "BY EXPERT GUIDES",
  image: gangaAarti,
  imgAspect: "aspect-[4/5]", // Fixed aspect for main
};

const leftPosts = [
  {
    id: "navigating-ghats",
    category: "CULTURE & TRADITION",
    title: "Navigating the Ghats at Sunrise",
    preview: "A serene morning boat ride along the Ganges reveals the ancient soul of Varanasi.",
    author: "BY LOCAL EDITORS",
    image: boatGanges,
    imgAspect: "aspect-[4/3]", // Consistent
  },
  {
    id: "varanasi-alleys",
    category: "HIDDEN GEMS",
    title: "Secrets of Varanasi's Old Alleys",
    preview: "Lose yourself in the labyrinth of ancient streets and hidden shrines.",
    author: "BY TRAVEL EXPERTS",
    image: varanasiStreets,
    imgAspect: "aspect-[4/3]", // Consistent
  }
];

const rightPosts = [
  {
    id: "ayodhya-experience",
    category: "PILGRIMAGE",
    title: "Ayodhya's Ram Mandir Experience",
    preview: "Everything you need to know before visiting the magnificent temple.",
    author: "BY DIVINE JOURNEYS",
    image: ayodhyaTemple,
    imgAspect: "aspect-[4/3]", // Consistent
  },
  {
    id: "spiritual-practices",
    category: "RITUALS",
    title: "Spiritual Practices for Travelers",
    preview: "Prepare your mind and soul for a journey that goes beyond tourism.",
    author: "BY GUEST WRITERS",
    image: templePrayer,
    imgAspect: "aspect-[4/3]", // Consistent
  }
];

const ArticleCard = ({ post, isMain = false }: { post: any, isMain?: boolean }) => {
  return (
    <Link href="/blog/template" className="flex flex-col group cursor-pointer h-full">
      <div className={`relative w-full overflow-hidden mb-3.5 bg-[#f4f2ee] ${post.imgAspect} rounded-xl`}>
        <Image
           src={post.image}
           alt={post.title}
           fill
           className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
           sizes={isMain ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 25vw"}
           loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-[9px] font-bold text-[hsl(var(--primary))] tracking-[0.2em] uppercase mb-2">
          {post.category}
        </span>
        <h3 className={`font-heading font-bold text-gray-900 mb-2 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors ${isMain ? 'text-2xl lg:text-[28px]' : 'text-[15px] lg:text-base'}`}>
          {post.title}
        </h3>
        <p className={`text-gray-500 font-normal leading-relaxed mb-4 ${isMain ? 'text-sm lg:text-[15px]' : 'text-xs lg:text-[13px]'}`}>
          {post.preview}
        </p>
        <div className="mt-auto pt-1 flex justify-between items-center border-t border-gray-100/50 pt-3">
          <span className="text-[9px] font-semibold text-gray-400 tracking-[0.15em] uppercase">
            {post.author}
          </span>
          <span className="text-[11px] font-bold text-gray-400 group-hover:text-[hsl(var(--primary))] flex items-center gap-1 transition-colors uppercase tracking-[0.1em]">
            Read Full <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  )
}

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-[#fcfbf9] border-t border-gray-100">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b border-gray-200 pb-5 relative">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mx-auto text-center w-full uppercase tracking-tight">
            Travel Stories & Guides
          </h2>
          <Link href="/blog" className="mt-4 md:mt-0 md:absolute right-0 flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.15em] text-[hsl(var(--primary))] bg-white border border-[hsl(var(--primary))] px-6 py-3 rounded-xl hover:bg-[hsl(var(--primary))] hover:text-white transition-all shadow-sm uppercase group">
            Explore More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* MASONRY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-stretch">
           
          {/* LEFT COLUMN */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-10 lg:border-r lg:border-gray-200 lg:pr-8">
            {leftPosts.map((post, i) => (
               <div key={i} className="flex-1">
                 <ArticleCard post={post} />
               </div>
            ))}
          </div>

          {/* MIDDLE COLUMN */}
          <div className="lg:col-span-6 flex flex-col lg:border-r lg:border-gray-200 lg:pr-8 h-full">
            <ArticleCard post={mainPost} isMain />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-10">
            {rightPosts.map((post, i) => (
               <div key={i} className="flex-1">
                 <ArticleCard post={post} />
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
