import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./article.module.css";

const TITLE = "What Is a Percolator? The Bong Part That Turns One Big Bubble Into Hundreds";
const CANONICAL = "https://mohawkmedicine.com/resources/what-is-a-percolator";
const DESCRIPTION = "A percolator is the little glass sculpture inside a bong that turns one big bubble into hundreds of small ones.";

const BODY = `# What Is a Percolator? The Bong Part That Turns One Big Bubble Into Hundreds

Last checked: November 17, 2026

Look at a plain bong and you'll see one tube going into water. Look at a fancier one and there's a little glass sculpture inside: a disc full of holes, a cluster of arms, a spiral. That's the percolator. So, **what is a percolator**, and why does glass with one look so different? We'll keep it to hardware facts here at Mohawk Craft Dispensary. For adults 19+.

## What is a percolator on a bong?

A percolator on a bong is an extra glass piece inside the water chamber that breaks the smoke into many small bubbles as it passes through. Leafly's cannabis glossary describes it as the part of a bong or dab rig that diffuses smoke. Diffuse is the key word: instead of one big gulp of bubbles, you get a spread of little ones.

That's the core answer to what is a percolator: a smoke-splitter that sits in the water.

## What is a perc?

"Perc" is just short for percolator. Same part, fewer syllables. If someone says a piece is "double perc," they mean it has two percolators stacked in the path.

## What does a percolator do?

A percolator spreads the smoke out through the water so it moves through as lots of small bubbles instead of a few large ones. That's the mechanical job, and you can see it happen: a perc'd piece bubbles in a finer, busier pattern than a plain one.

We'll stop at the mechanics. You'll see plenty of marketing about what percs do to your hit. We're not making those claims, and you shouldn't take them from a sales page either.

## Bong percolator vs plain downstem

The difference between a **bong percolator** and a plain downstem is where and how the smoke meets the water.

| | Plain downstem | Percolator |
|---|---|---|
| What it is | One tube from the bowl into the water | An added glass structure with many openings |
| Bubble pattern | Fewer, larger bubbles | Many smaller bubbles |
| Cleaning | Simple, open path | More nooks to reach |
| Where it sits | Under the bowl | In the main chamber or tube, sometimes in addition to a downstem |

Leafly even notes that an "inline" percolator is basically a downstem with holes in it, which shows how close the two ideas are.

## Common percolator shapes

Percs come in a lot of designs. A few names you'll hear, as described in Leafly's glossary:

- **Honeycomb:** a round disc with many small holes.
- **Tree:** a group of glass arms, each with small holes.
- **Inline:** a horizontal tube with slits or holes.
- **Showerhead:** a tube that spreads smoke out at the bottom, like a showerhead.
- **Spiral:** a glass coil the smoke travels through.
- **Turbine:** a design that spins the smoke around the chamber.

Different shapes, same basic job: split the smoke.

## How do you clean a percolator?

You clean a percolator by soaking it, because brushes can't reach inside most designs. Leafly's glossary admits intricate percs are hard to scrub and points to a soak with isopropyl alcohol and salt, with the occasional shake. Then rinse thoroughly with warm water.

For the full routine, including the rinse and drying steps, our guide on [how to clean a glass pipe](/resources/how-to-clean-a-glass-pipe) walks through the method we use for glass. The same habits carry over to a perc piece, just with more patience in the soak.

Two practical notes:

- **Isopropyl alcohol is flammable.** Keep it away from flames and anything hot, and let glass cool completely before cleaning.
- **Dump soak water carefully.** Resin likes to stick to sinks.

## Choosing whether a perc matters to you

This one's personal. A perc adds glass, weight and cleaning time. A plain piece is simpler. Neither is a step up in any official sense. What matters is what you'll actually use and keep clean.

## Quick recap

- **What is a percolator?** An extra glass piece in a bong's water that splits smoke into small bubbles.
- **What is a perc?** The short name for one.
- **What does a percolator do?** Diffuses smoke into many small bubbles.
- **Cleaning:** soak with isopropyl alcohol and salt, then rinse well.

## Glass questions? Come see us

Now you know what is a percolator, come ask us about the parts. Mohawk Craft Dispensary is at 2655 Eglinton Ave E in Scarborough, near Brimley Rd. While you're reading up, our [dense vs fluffy buds guide](/resources/dense-vs-fluffy-buds) is a good next stop on flower basics.

Bring government-issued photo ID.`;

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
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
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

export default function WhatIsAPercolatorPage() {
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
