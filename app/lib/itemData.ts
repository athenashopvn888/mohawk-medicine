export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

export function getItemData(category: string, name: string): ItemEffects {
  const categoryLabel = category.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
  return {
    effects: [
      { emoji: "", label: categoryLabel },
      { emoji: "", label: "Package Details" },
    ],
    description: `${name} is listed in the ${categoryLabel} category at Mohawk Medicine. Check the current menu and product package for item details before visiting 2655 Eglinton Ave E.`,
    metaDescription: `Browse ${name} in the ${categoryLabel} category at Mohawk Medicine in Scarborough. Check the current menu before visiting.`,
    consume: "Review the product label and package details before purchase.",
  };
}
