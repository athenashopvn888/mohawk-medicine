import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohawk Medicine In-Store Flower Display",
  description: "Operational in-store flower menu display for Mohawk Medicine.",
  robots: { index: false, follow: false },
};

export default function TvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style>{`a.deliveryAnnouncement{display:none !important}`}</style>
      {children}
    </>
  );
}
