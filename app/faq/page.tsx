import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Mohawk Medicine | Scarborough Dispensary Questions",
  description:
    "Frequently asked questions about Mohawk Medicine in Scarborough. Hours, location, products, pricing, delivery updates, and what to check before visiting.",
  alternates: {
    canonical: "https://mohawkmedicine.com/faq",
  },
};

const FAQS = [
  {
    q: "Where is Mohawk Medicine located?",
    a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in the Scarborough area near Brimley Rd. The listed store name is Mohawk Craft Dispensary. Call +1 (437) 524-9335.",
  },
  {
    q: "What are your hours?",
    a: "The store lists Open 24 Hours. Bring valid 19+ government ID when visiting.",
  },
  {
    q: "Do I need to make an appointment?",
    a: "The site presents Mohawk Medicine as a walk-in shop. Check the contact page or current store listing if you need confirmation before visiting.",
  },
  {
    q: "What product categories are shown on the site?",
    a: "The site includes Exotic, Premium, AAA+, AA, Budget, edibles, pre-rolls, THC Vape, Nic Vape, concentrates, cigarettes, accessories, and specialty categories.",
  },
  {
    q: "What is the cheapest flower tier listed?",
    a: "Budget is the lowest-priced flower tier shown on the site. Check the Budget page for current products and prices.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes. Local delivery is available from the Eglinton East shop at 2655 Eglinton Ave E. Browse the live delivery menu, then start LIVE ORDER so the dispatcher can confirm availability, range, and timing. Delivery is not listed as 24 hours. The walk-in shop lists Open 24 Hours / 7 Days a Week separately. Use the Scarborough cannabis delivery page at /cannabis-delivery-scarborough for neighbourhood details.",
  },
  {
    q: "What ID is accepted?",
    a: "Bring valid government-issued photo ID proving you are 19 years of age or older.",
  },
  {
    q: "Do you have deals or specials?",
    a: "Check the current Budget, AA, AAA+, Premium, and Exotic pages for listed prices and bundle options because product mix can change.",
  },
  {
    q: "Do you carry accessories?",
    a: "The site includes an accessories category. Check the current page for listed items before visiting.",
  },
  {
    q: "Can I buy cannabis online?",
    a: "Use the online menu for browsing and planning. Confirm ordering details with the store before relying on any purchase flow.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "100px", background: "#FFFFFF" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section style={{ width: "100%", overflow: "hidden" }}>
        <img
          src="/banners/FAQ.webp"
          alt="Mohawk Medicine FAQ"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ padding: "48px 0", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Inter,system-ui,sans-serif", fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 900, color: "#1B5E20", marginBottom: "8px", letterSpacing: "0" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "16px", color: "#424242", marginBottom: "40px", lineHeight: 1.7 }}>
            Answers for shoppers checking Mohawk Medicine at 2655 Eglinton Ave E in Scarborough.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {FAQS.map((faq, i) => (
              <details
                key={i}
                style={{
                  border: "1px solid rgba(27,94,32,0.15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  background: "#FFFFFF",
                }}
              >
                <summary style={{ padding: "18px 22px", fontSize: "15px", fontWeight: 700, color: "#1A1A1A", cursor: "pointer", listStyle: "none" }}>
                  {faq.q}
                </summary>
                <p style={{ padding: "4px 22px 18px", fontSize: "14px", color: "#424242", lineHeight: 1.75, margin: 0 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontSize: "14px", color: "#424242", lineHeight: 1.7 }}>
            For Scarborough / Eglinton East delivery hours, area, and how to order, open the{" "}
            <Link href="/cannabis-delivery-scarborough">Scarborough cannabis delivery page</Link>.
            For a 24-hour walk-in, use the <Link href="/visit">24-hour Scarborough walk-in guide</Link>.
            Native cigarettes and nicotine vapes have separate guides at{" "}
            <Link href="/native-cigarettes-scarborough">/native-cigarettes-scarborough</Link> and{" "}
            <Link href="/nicotine-vape-scarborough">/nicotine-vape-scarborough</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
