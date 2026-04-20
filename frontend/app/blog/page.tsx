"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Home, SlidersHorizontal } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

import gangaAarti from "@/assets/ -6.jpg";
import boatGanges from "@/assets/Cyberian birds on prayagraj.jpg";
import ayodhyaTemple from "@/assets/ -10.jpg";
import varanasiStreets from "@/assets/varanasi-streets.jpg";
import templePrayer from "@/assets/Wishes.jpg";
import palaceImg from "@/assets/premium-about-palace.png";
import keralaImg from "@/assets/premium-about-kerala.png";
import himalayasImg from "@/assets/premium-about-himalayas.png";
import resortImg from "@/assets/premium-custom-resort.png";

const featuredPost = {
  category: "FEATURED STORY",
  title: "The Mystical Ganga Aarti: A Complete Guide to the Evening Ritual",
  preview: "Discover the centuries-old evening ritual that transforms the banks of Varanasi into a realm of divine light and spiritual awakening. A journey through faith, fire, and the eternal river.",
  author: "BY EXPERT GUIDES",
  date: "OCT 12, 2023",
  readTime: "5 MIN READ",
  image: gangaAarti,
};

const posts = [
  {
    category: "CULTURE & TRADITION",
    title: "Navigating the Ghats at Sunrise",
    preview: "A serene morning boat ride along the Ganges reveals the ancient soul of Varanasi.",
    author: "LOCAL EDITORS",
    image: boatGanges,
  },
  {
    category: "HIDDEN GEMS",
    title: "Secrets of Varanasi's Old Alleys",
    preview: "Lose yourself in the labyrinth of ancient streets and hidden shrines.",
    author: "TRAVEL EXPERTS",
    image: varanasiStreets,
  },
  {
    category: "PILGRIMAGE",
    title: "Ayodhya's Ram Mandir Experience",
    preview: "Everything you need to know before visiting the magnificent temple.",
    author: "DIVINE JOURNEYS",
    image: ayodhyaTemple,
  },
  {
    category: "RITUALS",
    title: "Spiritual Practices for Travelers",
    preview: "Prepare your mind and soul for a journey that goes beyond tourism.",
    author: "GUEST WRITERS",
    image: templePrayer,
  },
  {
    category: "HERITAGE STAYS",
    title: "The Royal Echoes of Rajasthan",
    preview: "Experience the grandeur of ancient palaces and uncover stories of a bygone regal era.",
    author: "TRAVEL EXPERTS",
    image: palaceImg,
  },
  {
    category: "NATURE RETREATS",
    title: "Finding Serenity in Kerala",
    preview: "Disconnect from the noise and drift along the tranquil backwaters of God's Own Country.",
    author: "LOCAL EDITORS",
    image: keralaImg,
  },
  {
    category: "MINDFULNESS",
    title: "Meditating in the Himalayas",
    preview: "A guide to finding inner peace amidst the breathtaking snow-capped peaks.",
    author: "GUEST WRITERS",
    image: himalayasImg,
  },
  {
    category: "BESPOKE TRAVEL",
    title: "The Art of Custom Journeys",
    preview: "How we craft luxury itineraries that perfectly match your spiritual and comfort needs.",
    author: "DIVINE JOURNEYS",
    image: resortImg,
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] pt-28 pb-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        
        <div className="mb-12 md:mb-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>The Journal</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Journal
            </h1>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Travel stories, expert guides, and inspiration for your next divine journey. Curated by the people who know India best.
            </p>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-5" />
          </div>
        </div>

        {/* FEATURED POST */}
        <div className="mb-16 md:mb-24">
          <Link href="/blog/template" className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] block">
            <div className="relative aspect-square lg:aspect-auto lg:h-full overflow-hidden">
              <Image 
                src={featuredPost.image} 
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                priority
              />
            </div>
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold text-[hsl(var(--primary))] tracking-[0.2em] uppercase">
                  {featuredPost.category}
                </span>
                <span className="w-8 h-px bg-gray-200"></span>
                <span className="text-[10px] font-semibold text-gray-400 tracking-[0.1em] uppercase">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] group-hover:text-[hsl(var(--primary))] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {featuredPost.preview}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-gray-400 tracking-[0.15em] uppercase mb-1">
                    {featuredPost.author}
                  </span>
                  <span className="text-xs text-gray-900 font-medium">{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  <span className="text-[11px] font-bold text-[hsl(var(--primary))] uppercase tracking-wider">
                    Read Full Story
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))] group-hover:text-white transition-all text-gray-900">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* LATEST POSTS GRID */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
            <h3 className="font-heading text-2xl font-bold text-gray-900">Latest Stories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {posts.map((post, i) => (
              <Link href="/blog/template" key={i} className="flex flex-col group cursor-pointer h-full block">
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 bg-[#f4f2ee] rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[9px] font-bold text-[hsl(var(--primary))] tracking-[0.2em] uppercase mb-3">
                    {post.category}
                  </span>
                  <h4 className="font-heading font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-[hsl(var(--primary))] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 font-normal leading-relaxed text-[13px] mb-5">
                    {post.preview}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 transition-colors flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-gray-400 tracking-[0.15em] uppercase">
                      BY {post.author}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 group-hover:text-[hsl(var(--primary))] flex items-center gap-1 transition-colors uppercase tracking-[0.1em]">
                      Read Full <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* LOAD MORE */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-xl text-xs font-bold tracking-[0.15em] text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all uppercase shadow-sm">
            Load More Stories
          </button>
        </div>

      </div>
    </main>
  );
}
