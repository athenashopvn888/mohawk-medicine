/** Card list for /tv2. This store hides the cigarettes card when the feed flag is off. */
export function tvCardsForCigaretteFlag<T extends { id: string }>(cards: readonly T[], tvOn: boolean): T[] {
  if (tvOn) return [...cards];
  return cards.filter((card) => card.id !== "CIGARETTES");
}

/** Ribbon line for /tv and /tv2. Empty unless the feed flag is on and the caller supplies copy. */
export function cigaretteFlashLine(tvOn: boolean, line: string | null | undefined): string {
  if (!tvOn) return "";
  return (line ?? "").trim();
}
