import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Delivery | Mohawk Medicine — Toronto Cannabis Delivery",
  description:
    "Mohawk Medicine offers cannabis delivery in Scarborough and Toronto. Located at 2655 Eglinton Ave E. Order online or call ahead.",
  alternates: { canonical: "https://mohawkmedicine.com/delivery" },
};

export default function DeliveryPage() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "100px", background: "#FFFFFF" }}>
      <Navbar />
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ width: "100%", overflow: "hidden", marginBottom: "40px" }}>
          <img
            src="/banners/10_Mohawk_Delivery.webp"
            alt="Mohawk Medicine Delivery"
            style={{ width: "100%", maxHeight: "360px", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingBottom: "60px" }}>
          <h1 style={{ fontFamily: "Inter,system-ui,sans-serif", fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 900, color: "#1B5E20", marginBottom: "12px", letterSpacing: "-0.03em" }}>
            Cannabis Delivery — Toronto
          </h1>
          <p style={{ fontSize: "16px", color: "#424242", marginBottom: "36px", lineHeight: 1.7 }}>
            Mohawk Medicine offers local cannabis delivery from our store at 2655 Eglinton Ave E, Scarborough.
            Fast, discreet, and professional delivery to your door.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px", marginBottom: "40px" }}>
            {[
              { icon: "🕐", title: "Available 24/7", desc: "Delivery available any time, 7 days a week — just like our store." },
              { icon: "📍", title: "Scarborough & Toronto", desc: "We deliver throughout Scarborough and surrounding Toronto areas. Contact us for exact coverage." },
              { icon: "💰", title: "Minimum Order", desc: "Delivery minimums may apply. Contact us directly for current rates and minimums." },
              { icon: "📦", title: "Discreet Packaging", desc: "All orders are packaged discreetly for your privacy." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#F8FDF8", border: "1px solid rgba(27,94,32,0.12)", borderRadius: "12px", padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "28px" }}>{item.icon}</span>
                <div>
                  <h2 style={{ fontFamily: "Inter,system-ui,sans-serif", fontSize: "16px", fontWeight: 800, color: "#1B5E20", marginBottom: "4px" }}>{item.title}</h2>
                  <p style={{ fontSize: "14px", color: "#424242", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: "#1B5E20", color: "white", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Inter,system-ui,sans-serif", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>Want Delivery?</h2>
            <p style={{ fontSize: "15px", marginBottom: "20px", opacity: 0.85 }}>
              Visit us at 2655 Eglinton Ave E, Toronto, ON M1K 2S2 or contact us to arrange delivery.
            </p>
            <a
              href="https://maps.google.com/?q=2655+Eglinton+Ave+E,+Toronto,+ON+M1K+2S2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "12px 32px", background: "white", color: "#1B5E20", fontFamily: "Inter,system-ui,sans-serif", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", borderRadius: "8px", textDecoration: "none" }}
            >
              Find Us on Google Maps
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
