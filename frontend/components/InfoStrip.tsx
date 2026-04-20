import { Star, MapPin, Users, Headphones } from "lucide-react";

const items = [
  { icon: Star, label: "Best Rated", value: "4.9 ★" },
  { icon: MapPin, label: "Destinations", value: "50+" },
  { icon: Users, label: "Travelers", value: "5K+" },
  { icon: Headphones, label: "24/7 Support", value: "" },
];

const InfoStrip = () => {
  return (
    <div className="bg-[hsl(var(--primary))] text-primary-foreground">
      <div className="container mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="bg-primary-foreground/20 rounded-full p-1">
            <Star size={14} className="fill-current" />
          </span>
          Exclusive Deals — Up to 40% Off on Selected Packages
        </div>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm">
              <span className="font-medium text-primary-foreground/80">{item.label}</span>
              {item.value && <span className="font-bold">{item.value}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoStrip;