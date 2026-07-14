import type { Metadata } from "next";
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
    a: "Mohawk Medicine is at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in the Scarborough area near Brimley Rd.",
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
    a: "The delivery page is being kept as a local update page while delivery details are prepared. Do not rely on delivery until the store confirms availability.",
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

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "100px", background: "#FFFFFF" }}>
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
