import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Updates - Mohawk Medicine | Scarborough",
  description: "Mohawk Medicine delivery updates for Scarborough shoppers. Check this page for local delivery information as details are prepared.",
  alternates: {
    canonical: "https://mohawkmedicine.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
