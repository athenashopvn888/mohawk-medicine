import type { Metadata } from "next";
import DeliveryContent from "../delivery/DeliveryContent";
import menu from "../delivery/delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery Toronto | Mohawk Medicine" },
  description: "Use the Mohawk Medicine Weed Delivery menu to browse the catalog and connect with the dispatcher for current delivery details.",
  alternates: { canonical: "https://mohawkmedicine.com/weed-delivery-toronto" },
};

export default function WeedDeliveryTorontoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mohawk Medicine Weed Delivery in Toronto",
    url: "https://mohawkmedicine.com/weed-delivery-toronto",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: menu.products.length,
      itemListElement: menu.products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
      })),
    },
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}

