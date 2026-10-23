/** TV2 card list. The cigarettes card is present only while the live TV flag is on. */
export function visibleTvCards<T extends { id: string }>(cards: readonly T[], tvShow: boolean): T[] {
  return cards.filter((card) => card.id !== "CIGARETTES" || tvShow);
}
