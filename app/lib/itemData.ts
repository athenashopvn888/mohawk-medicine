export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

export function getItemData(category: string, name: string): ItemEffects {
  const cat = category.toUpperCase();

  if (cat === "EDIBLES") {
    return {
      effects: [
        { emoji: "ðŸ•’", label: "Long Lasting" },
        { emoji: "ðŸ˜Œ", label: "Body High" },
        { emoji: "ðŸ¬", label: "Flavorful" },
      ],
      description: `${name} is a premium cannabis edible available at Eglinton Ave E Medicine. Made with high-quality distillate or full-spectrum extract, it provides a consistent, long-lasting, and discreet experience. Perfect for those who prefer not to smoke while still enjoying the full benefits of cannabis.`,
      metaDescription: `Buy ${name} cannabis edibles in Toronto, Scarborough at Eglinton Ave E Medicine. Consistent, discreet, and long-lasting effects. Walk-in available 24/7.`,
      consume: "Start low and go slow. We recommend starting with 5-10mg of THC. Edibles can take 45 to 120 minutes to take full effect. Wait at least 2 hours before consuming more.",
    };
  }

  if (cat.includes("VAPE")) {
    return {
      effects: [
        { emoji: "ðŸ’¨", label: "Fast Acting" },
        { emoji: "âš¡", label: "Potent" },
        { emoji: "ðŸ¤«", label: "Discreet" },
      ],
      description: `${name} is a high-quality vape product available at Eglinton Ave E Medicine. Designed for convenience and discretion, this vape delivers smooth, flavorful vapor and rapid effects. Engineered for reliability, it ensures a premium experience from the first pull to the last.`,
      metaDescription: `Shop ${name} vape pens and cartridges in Toronto, Scarborough at Eglinton Ave E Medicine. Fast-acting and potent. Walk-in available 24/7.`,
      consume: "Take 1-2 small puffs and wait 10-15 minutes to gauge the effects before consuming more. Do not chain-vape to avoid burning the coil.",
    };
  }

  if (cat === "CONCENTRATES") {
    return {
      effects: [
        { emoji: "ðŸš€", label: "Highly Potent" },
        { emoji: "âš¡", label: "Fast Acting" },
        { emoji: "ðŸ’Ž", label: "Pure" },
      ],
      description: `${name} is a premium cannabis concentrate known for its exceptional purity and potency. Crafted using advanced extraction techniques, it preserves the rich terpene profile of the original strain for maximum flavor and effect. Available now at Eglinton Ave E Medicine.`,
      metaDescription: `Buy ${name} cannabis concentrate in Toronto, Scarborough at Eglinton Ave E Medicine. Highly potent and pure extracts. Walk-in available 24/7.`,
      consume: "Best consumed using a dab rig, concentrate pen, or by sprinkling a small amount over flower. Due to its high potency, start with an extremely small amount (the size of a grain of rice).",
    };
  }

  if (cat === "PREROLLS") {
    return {
      effects: [
        { emoji: "ðŸŒ¿", label: "Classic High" },
        { emoji: "â±ï¸", label: "Quick Onset" },
        { emoji: "ðŸ¤", label: "Shareable" },
      ],
      description: `${name} is a ready-to-smoke pre-roll made from premium cannabis flower. Perfectly ground and expertly rolled for a smooth, even burn every time. Skip the rolling and enjoy a high-quality smoke straight out of the tube.`,
      metaDescription: `Get ${name} pre-rolled joints in Toronto, Scarborough at Eglinton Ave E Medicine. Premium flower, perfectly rolled. Walk-in available 24/7.`,
      consume: "Light the end evenly while rotating the joint to prevent canoeing. Take smooth, slow inhales. Wait 10-15 minutes after a few puffs to gauge the effects.",
    };
  }

  if (cat === "MAGIC & OTHERS") {
    return {
      effects: [
        { emoji: "ðŸŒ€", label: "Psychedelic" },
        { emoji: "ðŸ§ ", label: "Mind Expanding" },
        { emoji: "âœ¨", label: "Euphoric" },
      ],
      description: `${name} is a premium psilocybin product curated for quality and consistency. Whether you are micro-dosing for mental clarity or exploring a deeper journey, this product delivers a reliable and profound experience.`,
      metaDescription: `Shop ${name} magic mushrooms and psilocybin products in Toronto, Scarborough at Eglinton Ave E Medicine. High quality and consistent. Walk-in available 24/7.`,
      consume: "For micro-dosing, consume 0.1g - 0.3g. For a full experience, start with 1g - 2g. Always consume in a safe, comfortable environment. Effects can take 30-90 minutes to onset.",
    };
  }

  // Fallback for Add-Ons, Cigarettes, etc.
  return {
    effects: [
      { emoji: "â­", label: "Premium Quality" },
      { emoji: "âœ…", label: "Reliable" },
    ],
    description: `${name} is a top-quality product available right now at Eglinton Ave E Medicine. We source only the best products to ensure our customers are fully satisfied.`,
    metaDescription: `Buy ${name} in Toronto, Scarborough at Eglinton Ave E Medicine. Premium quality and best prices. Walk-in available 24/7.`,
    consume: "Use as directed on the packaging.",
  };
}

