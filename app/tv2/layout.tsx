import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohawk Medicine In-Store Accessories Display",
  description: "Operational in-store accessories menu display for Mohawk Medicine.",
  robots: { index: false, follow: false },
};

export default function TvTwoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
