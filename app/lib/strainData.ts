interface StrainDetails {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  _thc: string,
): StrainDetails {
  const typeLabel = type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierLabel = tier || "flower";
  return {
    effects: [
      { emoji: "", label: typeLabel },
      { emoji: "", label: tierLabel },
    ],
    description: `${name} is listed as a ${typeLabel.toLowerCase()} flower item in the ${tierLabel} tier at Mohawk Medicine. Check the current menu for price and package details before visiting 2655 Eglinton Ave E.`,
    metaDescription: `Browse ${name}, a ${typeLabel.toLowerCase()} flower item in the ${tierLabel} tier at Mohawk Medicine in Scarborough. Check the current menu before visiting.`,
  };
}
