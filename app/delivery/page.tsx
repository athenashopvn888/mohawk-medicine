import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — Mohawk Medicine | Toronto",
  description: "Get notified when Mohawk Medicine launches same-day weed delivery across Toronto and surrounding areas.",
  alternates: {
    canonical: "https://mohawkmedicine.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
