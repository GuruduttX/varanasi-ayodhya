import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Tour Packages | Divine Journeys",
  description: "Explore our curated spiritual tour packages to Ayodhya, Varanasi, and Prayagraj. Experience VIP Darshan, expert local guides, and premium accommodation.",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
