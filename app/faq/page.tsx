import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Mohawk Medicine — Toronto Cannabis Dispensary",
  description:
    "Frequently asked questions about Mohawk Medicine at 2655 Eglinton Ave E, Toronto. Open 24/7, walk-ins welcome.",
  alternates: { canonical: "https://mohawkmedicine.com/faq" },
};

const FAQS = [
  {
    q: "Where is Mohawk Medicine located?",
    a: "We are at 2655 Eglinton Ave E, Toronto, ON M1K 2S2, in Scarborough near Brimley Rd.",
  },
  {
    q: "What are your hours?",
    a: "Mohawk Medicine is open 24 hours a day, 7 days a week. We never close.",
  },
  {
    q: "Do I need to make an appointment?",
    a: "No appointment needed! Just walk in any time. Our staff are always ready to help.",
  },
  {
    q: "What quality tiers of cannabis do you carry?",
    a: "We carry Exotic, Premium, AAA+, AA, and Budget tiers, plus daily deals. We also stock Edibles, Pre-Rolls, Vapes, Concentrates, Magic Stuff, and Accessories.",
  },
  {
    q: "What is the cheapest flower you have?",
    a: "Our Budget tier starts at $4/g and includes shreds, popcorn buds, and bulk ounce deals.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes! We offer local delivery to Scarborough and surrounding Toronto neighbourhoods. Visit our Delivery page for details and minimums.",
  },
  {
    q: "What ID is accepted?",
    a: "We accept any government-issued photo ID proving you are 19 years of age or older (Ontario driver's licence, passport, PR card, etc.).",
  },
  {
    q: "Do you have daily deals or specials?",
    a: "Yes! Check our Budget page for daily deals. New specials are added regularly.",
  },
  {
    q: "Do you carry accessories?",
    a: "Yes, we carry a selection of accessories including papers, pipes, grinders, and more.",
  },
  {
    q: "Can I buy cannabis online?",
    a: "Browse our full menu online, then visit us in-store. We do not currently have an online checkout, but you can see exactly what we have before you arrive.",
  },
];

export default function FAQPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "100px", background: "#FFFFFF" }}>
      <Navbar />

      {/* FAQ Banner */}
      <section style={{ width: "100%", overflow: "hidden" }}>
        <img
          src="/banners/14_Mohawk_FAQ_Info.webp"
          alt="Mohawk Medicine FAQ"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ padding: "48px 0", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "Inter,system-ui,sans-serif", fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 900, color: "#1B5E20", marginBottom: "8px", letterSpacing: "-0.03em" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "16px", color: "#424242", marginBottom: "40px", lineHeight: 1.7 }}>
            Everything you need to know about Mohawk Medicine at 2655 Eglinton Ave E, Toronto.
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
