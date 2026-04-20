import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 md:py-14 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10">
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-bold text-white">
              <span className="text-primary">ॐ</span> Ayodhya Varanasi Tourism
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Crafting sacred journeys to India's holiest destinations with devotion, care, and authenticity.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-white/50 text-sm hover:text-primary transition-colors">Home</Link>
              <Link href="/#packages" className="block text-white/50 text-sm hover:text-primary transition-colors">Packages</Link>
              <Link href="/#blog" className="block text-white/50 text-sm hover:text-primary transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="block text-white/50 text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/refund-policy" className="block text-white/50 text-sm hover:text-primary transition-colors">Refund Policy</Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Destinations</h4>
            <div className="space-y-2">
              {["Ayodhya", "Varanasi", "Prayagraj", "Mathura"].map((dest) => (
                <span key={dest} className="block text-white/50 text-sm">{dest}</span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h4>
            <div className="space-y-2">
              <p className="text-white/50 text-sm flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 98765 43210</p>
              <p className="text-white/50 text-sm flex items-center gap-2"><Mail size={14} className="text-primary" /> ayodhavaranasitourism@gmail.com</p>
              <p className="text-white/50 text-sm flex items-center gap-2"><MapPin size={14} className="text-primary" /> Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/30 text-xs">© 2026 Ayodha Varanasi Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
