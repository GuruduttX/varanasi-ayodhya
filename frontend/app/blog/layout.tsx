import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal | Divine Journeys",
  description: "Travel stories, expert guides, and inspiration for your next divine journey to Ayodhya, Varanasi, and Prayagraj.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
