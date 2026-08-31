import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery Menu | Mohawk Medicine" },
  description: "Use the Mohawk Medicine weed delivery menu to browse the catalog and connect with the dispatcher for current delivery details.",
  alternates: { canonical: "https://mohawkmedicine.com/delivery" },
};

export default function DeliveryPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Mohawk Medicine Weed Delivery Menu", url: "https://mohawkmedicine.com/delivery", mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
