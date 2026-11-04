import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./article.module.css";

const TITLE = "How to Clean a Glass Pipe Fast: A Scarborough Shop's Straight Answer";
const CANONICAL = "https://mohawkmedicine.com/resources/how-to-clean-a-glass-pipe";
const DESCRIPTION = "Here's the straight answer on how to clean a glass pipe fast, with household supplies and no gimmicks.";

const BODY = `# How to Clean a Glass Pipe Fast: A Scarborough Shop's Straight Answer

Last checked: October 30, 2026

A glass pipe starts out clear. A few weeks later it's brown, sticky and pulling like a blocked straw. Here's the straight answer on **how to clean a glass pipe** fast, with household supplies and no gimmicks. Written for adults 19+. We don't recommend products and we make no claims about anything you smoke in it.

## Why resin builds up

Each time flower burns, sticky residue condenses on the cooler glass. It collects in the bowl, along the stem and around the carb hole. Left alone, it hardens, narrows the airflow and changes the taste. The longer you wait, the harder the job.

## The supplies

- Isopropyl alcohol from a pharmacy
- Coarse salt
- A zip-top bag or a sealable container big enough for the pipe
- Pipe cleaners and cotton swabs
- A paper clip or wooden skewer for the bowl hole
- Warm water and a towel

## The fast method, step by step

### 1. Knock out the loose stuff

Tap the bowl upside down over a bin to clear old ash. Use the paper clip or skewer to gently push out anything blocking the bowl hole. Go easy. Glass chips if you lever against it.

### 2. Warm rinse

Run the pipe under warm water for a few seconds to soften the resin. Not hot. Glass that changes temperature fast can crack.

### 3. Bag it with salt and alcohol

Place the pipe in the zip-top bag. Add a good spoonful of coarse salt, then pour in enough isopropyl alcohol to cover the pipe completely. Seal the bag, pushing the air out first.

### 4. Shake

Shake the bag for a minute or two, turning it in every direction so the salt scrubs inside the bowl and the stem. You'll see the alcohol go brown. That's the resin coming off.

### 5. Soak if it's stubborn

Heavy build-up may need a longer soak. Leave the sealed bag flat for a while, then shake again. For pipes that haven't been cleaned in months, replace the dirty alcohol with fresh and repeat.

### 6. Detail the tight spots

Run a pipe cleaner through the stem and use cotton swabs dipped in alcohol around the carb and mouthpiece.

### 7. Rinse thoroughly and dry

Rinse the pipe in warm water until there is no alcohol smell left at all. Dry it with a towel and let it air-dry completely before use. Alcohol is flammable. Never bring a flame near a pipe that still smells of it.

## Quick-clean between deep cleans

You don't need the full routine after every use. A quick habit keeps it manageable:

- Tap out ash after each session.
- Wipe the mouthpiece.
- Run a dry pipe cleaner through the stem once a week.

Small, regular cleaning means the deep clean takes minutes instead of an afternoon.

## What not to do

- **Don't boil it.** Uneven heat is the fastest way to crack glass.
- **Don't scrape with metal tools.** Scratches hold more resin next time.
- **Don't use bleach or oven cleaner.** They're harsh, hard to rinse and not made for this.
- **Don't pour used alcohol near a flame.** Dispose of small amounts down the drain with plenty of running water.

## Silicone or wood pipes?

This method is for glass. Silicone pipes can often be pulled apart and washed; wooden pipes shouldn't be soaked in alcohol at all. Check how your piece is made before you start.

## How to clean a glass pipe without alcohol

If you don't have isopropyl alcohol, a long soak in very warm water with a little dish soap can loosen light build-up, followed by pipe cleaners and a careful rinse. It's slower and less thorough. Alcohol remains the standard method for a reason.

## Quick answers

**How often should I clean a glass pipe?** When you can see build-up or the draw gets tight. Light cleaning weekly keeps it easy.

**Is table salt OK?** It works, but coarse salt scrubs better and dissolves slower.

**How long does it take?** For a lightly used pipe, a few minutes plus drying time.

## Know the flower you're packing

Flower texture affects how a pipe burns and how quickly it builds up. Our article on [dense vs fluffy buds](/resources/dense-vs-fluffy-buds) explains the difference. Our store is at 2655 Eglinton Ave E, Scarborough, near Brimley Rd. Mohawk Craft Dispensary serves adults 19+ only. Bring government-issued photo ID.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  mainEntityOfPage: CANONICAL,
  url: CANONICAL,
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  author: { "@type": "Organization", name: "Mohawk Craft Dispensary" },
  publisher: { "@type": "Organization", name: "Mohawk Craft Dispensary" },
};

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let index = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] != null) {
      nodes.push(<strong key={`${keyPrefix}-s${index}`}>{match[1]}</strong>);
    } else {
      nodes.push(
        <Link key={`${keyPrefix}-a${index}`} href={match[3]}>
          {match[2]}
        </Link>,
      );
    }
    last = match.index + match[0].length;
    index += 1;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function isTableSeparator(line: string): boolean {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function MarkdownArticle({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }
    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
      const id = key;
      key += 1;
      blocks.push(<Tag key={id}>{renderInline(heading[2], `h${id}`)}</Tag>);
      i += 1;
      continue;
    }
    if (line.trim().startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!isTableSeparator(lines[i])) rows.push(splitRow(lines[i]));
        i += 1;
      }
      const [head, ...bodyRows] = rows;
      const id = key;
      key += 1;
      blocks.push(
        <table key={id}>
          {head ? (
            <thead>
              <tr>
                {head.map((cell, cellIndex) => (
                  <th key={cellIndex}>{renderInline(cell, `th${id}-${cellIndex}`)}</th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{renderInline(cell, `td${id}-${rowIndex}-${cellIndex}`)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>,
      );
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i += 1;
      }
      const id = key;
      key += 1;
      blocks.push(
        <ul key={id}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item, `ul${id}-${itemIndex}`)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i += 1;
      }
      const id = key;
      key += 1;
      blocks.push(
        <ol key={id}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item, `ol${id}-${itemIndex}`)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    const id = key;
    key += 1;
    blocks.push(<p key={id}>{renderInline(line, `p${id}`)}</p>);
    i += 1;
  }
  return <>{blocks}</>;
}

export default function HowToCleanAGlassPipePage() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <article className={styles.article}>
        <MarkdownArticle source={BODY} />
      </article>
      <Footer />
    </main>
  );
}
