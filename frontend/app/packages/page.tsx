"use client";

import { useState } from "react";
import FloatingParticles from "@/components/FloatingParticles";
import FloatingEnquiryButton from "@/components/FloatingEnquiryButton";
import CustomisedPackageModal from "@/components/CustomisedPackageModal";
import { useModal } from "@/lib/ModalContext";
import Image from "next/image";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Clock, MapPin, Star, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

import ayodhyaTemple from "@/assets/ayodhya-temple.png";
import boatGanges from "@/assets/boat-ganges.jpg";
import diyaPrayer from "@/assets/diya-prayer.jpg";
import gangaAarti from "@/assets/ganga-aarti.jpg";
import heroVaranasi from "@/assets/hero-varanasi.jpg";
import varansiStreets from "@/assets/varanasi-streets.jpg";

const allPackages = [
  { image: ayodhyaTemple, title: "Ayodhya Divine Darshan", destination: "Ayodhya", duration: "3 Days / 2 Nights", durationCategory: "2-3", highlights: ["Ram Mandir VIP Darshan", "Saryu River Aarti", "Temple Heritage Walk"], rating: 4.9 },
  { image: boatGanges, title: "Varanasi Soul Journey", destination: "Varanasi", duration: "4 Days / 3 Nights", durationCategory: "4-5", highlights: ["Sunrise Boat Ride", "Ganga Aarti Experience", "Ancient Temple Trail"], rating: 4.8 },
  { image: diyaPrayer, title: "Complete Spiritual Circuit", destination: "Ayodhya + Varanasi", duration: "7 Days / 6 Nights", durationCategory: "6+", highlights: ["Ayodhya + Varanasi + Prayagraj", "All Rituals Included", "Premium Stay"], rating: 5.0 },
  { image: gangaAarti, title: "Ganga Aarti Special", destination: "Varanasi", duration: "2 Days / 1 Night", durationCategory: "2-3", highlights: ["Evening Ganga Aarti", "Morning Boat Ride", "Kashi Vishwanath Temple"], rating: 4.7 },
  { image: heroVaranasi, title: "Varanasi Heritage Retreat", destination: "Varanasi", duration: "5 Days / 4 Nights", durationCategory: "4-5", highlights: ["Sarnath Excursion", "Silk Weaving Tour", "Subah-e-Banaras"], rating: 4.9 },
  { image: varansiStreets, title: "Ayodhya & Kashi Pilgrimage", destination: "Ayodhya + Varanasi", duration: "6 Days / 5 Nights", durationCategory: "6+", highlights: ["Ram Mandir Darshan", "Ganga Aarti", "Hanuman Garhi + Sarnath"], rating: 4.8 },
];

const destinations = ["Ayodhya", "Varanasi", "Ayodhya + Varanasi"];
const durations = [
  { label: "2–3 Days", value: "2-3" },
  { label: "4–5 Days", value: "4-5" },
  { label: "6+ Days", value: "6+" },
];

const Packages = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [customisedModalOpen, setCustomisedModalOpen] = useState(false);
  const { openEnquiry } = useModal();
  const { ref, isVisible } = useScrollAnimation(0.05);

  const filtered = allPackages.filter((pkg) => {
    if (selectedDestination && pkg.destination !== selectedDestination) return false;
    if (selectedDuration && pkg.durationCategory !== selectedDuration) return false;
    return true;
  });

  const clearFilters = () => { setSelectedDestination(null); setSelectedDuration(null); };
  const hasFilters = selectedDestination || selectedDuration;

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Destination</h4>
        <div className="space-y-2">
          {destinations.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDestination(selectedDestination === d ? null : d)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedDestination === d
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Duration</h4>
        <div className="space-y-2">
          {durations.map((d) => (
            <button
              key={d.value}
              onClick={() => setSelectedDuration(selectedDuration === d.value ? null : d.value)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedDuration === d.value
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted border border-transparent"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Special Request</h4>
        <button
          onClick={() => { setCustomisedModalOpen(true); setMobileFiltersOpen(false); }}
          className="w-full px-3 py-2.5 rounded-lg bg-[hsl(var(--primary))]  text-sm font-medium bg-primary/10 text-white border border-primary/20 hover:bg-primary/15 transition-all duration-200"
        >
          Customised Package
        </button>
      </div>

      {hasFilters && (
        <button onClick={clearFilters} className="w-full py-2.5 rounded-lg text-sm font-medium border border-border text-muted-foreground hover:bg-muted transition-all duration-200">
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingParticles />

      {/* Hero Banner */}
      <section className="pt-24 pb-12 px-6 bg-muted/30">
        <div className="container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Packages</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-6 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Our Travel Packages
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm">
              Discover curated journeys to India's most sacred destinations.
            </p>
            <div className="w-12 h-0.5 bg-primary rounded-full mx-auto mt-4" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6" ref={ref}>
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="lg:hidden flex items-center gap-2 btn-outline-divine text-xs py-2.5 px-5 self-start"
          >
            <SlidersHorizontal size={14} />
            {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
          </button>

          <aside className={`lg:w-64 shrink-0 ${mobileFiltersOpen ? "block" : "hidden lg:block"}`}>
            <div className="lg:sticky lg:top-24 bg-background rounded-xl p-5 border border-border shadow-sm">
              <h3 className="font-heading text-base font-bold text-foreground mb-5 flex items-center gap-2">
                <SlidersHorizontal size={16} className="text-primary" />
                Filters
              </h3>
              {filterPanel}
            </div>
          </aside>

          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-muted/30 rounded-xl border border-border">
                <p className="font-heading text-xl text-foreground mb-2">No packages found</p>
                <p className="text-muted-foreground text-sm">Discover divine journeys tailored for your soul</p>
                <button onClick={clearFilters} className="btn-divine text-xs py-2.5 px-5 mt-4">Clear Filters</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-3 gap-6">
                {filtered.map((pkg, i) => (
                  <div
                    key={pkg.title}
                    className={`bg-background rounded-xl overflow-hidden border  border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >

                    <Link href="/packages/divine-ayodhya-kashi-pilgrimage" className="block relative h-48 overflow-hidden">
                      <Image 
                        src={pkg.image} 
                        alt={pkg.title} 
                        fill 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 bg-[hsl(var(--primary-foreground))] rounded-full flex items-center gap-1 border border-border">
                        <Star size={12} className="text-primary fill-primary text-[hsl(var(--primary))]" />
                        <span className="text-xs font-semibold text-foreground">{pkg.rating}</span>
                      </div>
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-900 shadow-sm border border-white/20 uppercase tracking-wider">
                        {pkg.destination}
                      </div>
                    </Link>
                    <div className="p-5 space-y-3">
                      <Link href="/packages/divine-ayodhya-kashi-pilgrimage" className="block hover:text-primary transition-colors">
                        <h3 className="font-heading text-lg font-bold text-foreground">{pkg.title}</h3>
                      </Link>
                      <div className="flex items-center gap-3 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1"><Clock size={13} /> {pkg.duration}</span>
                        <span className="flex items-center gap-1"><MapPin size={13} /> India</span>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((h) => (
                          <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 pt-3 border-t border-border">
                        <Link href="/packages/template" className="btn-outline-divine text-xs py-2 px-4 flex-1 text-center flex items-center justify-center">View Details</Link>
                        <button onClick={openEnquiry} className="btn-divine text-xs py-2 px-4 flex-1">Enquire Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <FloatingEnquiryButton />
      <CustomisedPackageModal open={customisedModalOpen} onOpenChange={setCustomisedModalOpen} />
    </div>
  );
};

export default Packages;
