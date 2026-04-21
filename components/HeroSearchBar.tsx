// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, MapPin, Calendar, Navigation } from "lucide-react";

const cities = ["Ayodhya", "Varanasi", "Prayagraj"];
const destinations = ["Ram Mandir", "Kashi Vishwanath", "Ganga Aarti", "Sarnath", "Triveni Sangam", "Hanuman Garhi"];
const dayOptions = ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "7+ Days"];

const HeroSearchBar = () => {
   const router = useRouter();
  const [city, setCity] = useState("");
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (destination) params.set("destination", destination);
    if (days) params.set("days", days);
   router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
      <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-2 flex flex-col md:flex-row items-stretch gap-2">
        {/* City */}
        <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors">
          <MapPin size={16} className="text-primary shrink-0 text-[hsl(var(--primary))]" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground outline-none cursor-pointer appearance-none"
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="hidden md:block w-px bg-border" />

        {/* Destination */}
        <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors">
          <Navigation size={16} className="text-primary shrink-0 text-[hsl(var(--primary))]" />
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground outline-none cursor-pointer appearance-none"
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="hidden md:block w-px bg-border" />

        {/* Days */}
        <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors">
          <Calendar size={16} className="text-primary shrink-0 text-[hsl(var(--primary))]" />
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground outline-none cursor-pointer appearance-none"
          >
            <option value="">Select Days</option>
            {dayOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Search */}
        <button
          onClick={handleSearch}
          className="btn-divine flex items-center justify-center gap-2 px-6 py-3 rounded-lg shrink-0 "
        >
          <Search size={16} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSearchBar;