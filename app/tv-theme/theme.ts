import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  MEB01: {
    headerImage: "/tv-theme/meb01/header.webp",
    backgroundImage: "/tv-theme/meb01/background.webp",
    cornerLeft: "/tv-theme/meb01/corner-left.png",
    cornerRight: "/tv-theme/meb01/corner-right.png",
    primary: "#063F2D",
    accent: "#C58B2A",
    glow: "rgba(255, 174, 58, 0.4)",
    cardBorder: "rgba(255, 239, 190, 0.9)",
    headerText: "#FFF8E8",
    sloganLeft: "HOT RIGHT NOW",
    sloganRight: "PREMIUM CANNABIS",
    footerLeft: "MOHAWK CRAFTS & MEDICINE",
    footerRight: "PREMIUM CANNABIS · HOT RIGHT NOW",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}
