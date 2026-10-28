import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./article.module.css";

const TITLE = "Dense vs Fluffy Buds: Why Some Nugs Are Rock-Hard and Others Are Airy";
const CANONICAL = "https://mohawkmedicine.com/resources/dense-vs-fluffy-buds";
const DESCRIPTION = "Pick up two buds of the same weight and they can look like they came from different planets.";

const BODY = `# Dense vs Fluffy Buds: Why Some Nugs Are Rock-Hard and Others Are Airy

Last checked: October 27, 2026

Pick up two buds of the same weight and they can look like they came from different planets. One is tight, heavy and rock-hard. The other is loose, leafy and light as a cotton ball. Dense vs fluffy buds is one of the oldest debates at any cannabis counter, and it's packed with myths. At Mohawk Craft Dispensary, 2655 Eglinton Ave E near Brimley Rd in Scarborough, we lay out what actually shapes bud structure, for adults 19+.

## Dense vs fluffy buds: the short answer

Bud density is about structure: how tightly the flowers on a branch stack together. A cannabis bud is really a cluster of many small flowers (calyxes) packed along a stem, with pistils and sugar leaves mixed in. When those flowers stack close, you get a dense nug. When they're spaced out, you get an airy one.

Density describes shape and feel. It isn't a reading of cannabinoids, and it isn't on the label.

## What shapes bud density

Several things push a bud toward tight or toward loose. None of them work alone.

### 1. Genetics
Different cultivars grow differently. Some lines naturally form compact, chunky flowers. Others stretch out with more space between calyxes. Breeders select for these traits on purpose.

### 2. Where the bud grew on the plant
The top bud on a main stem, often called the cola, sits closest to the light and tends to fill out. Buds lower down, shaded by the canopy, often stay smaller and looser. Growers have a slang word for those lower, wispy buds: **larf**.

### 3. Light and growing conditions
Light reaching the bud, airflow, temperature and the overall health of the plant all play a part. Shaded or stressed parts of a plant tend to produce less filled-out flower.

### 4. Harvest timing
Flowers keep developing through the flowering stage. When a plant is harvested shapes how far that development went.

### 5. Drying and trim
Drying shrinks a bud as water leaves it. Trimming then shapes the outside. A tight trim makes any bud look neater; a loose trim leaves more leaf, which can make a bud look fluffier than it is.

## Dense vs fluffy buds at a glance

| | Dense buds | Fluffy / airy buds |
|---|---|---|
| Feel | Firm, heavy for their size | Light, springy, spacious |
| Structure | Calyxes stacked tight | Calyxes spaced out |
| Common source | Top colas, compact cultivars | Lower branches, stretchy cultivars |
| Grinding | Takes more work | Breaks apart easily |
| Shown on label | No | No |

## What density does NOT tell you

We hear these myths every week. Here's where we land:

- **Not a THC number.** The only reliable cannabinoid values are Total THC and Total CBD on a legal label.
- **Not a quality grade by itself.** A dense bud can be old. An airy bud can be fresh and well kept.
- **Not proof of "indoor."** Indoor and outdoor plants can both produce dense or loose flower.
- **Not a weight trick.** Net weight is printed on the package. A gram of airy flower is still a gram. It just takes up more room.

## Why airy buds look like "more" in the jar

Same weight, different volume. Because loose buds have more space inside, 3g of fluffy flower can fill a container far more than 3g of dense flower. That's why it's smart to go by the net weight on the label, not by how full a jar looks.

## How to read bud structure with your own eyes

When the package lets you see the flower:

1. **Look at the stacking.** Are the calyxes packed tight or spread along the stem?
2. **Check the leaf.** Lots of leaf can make structure look looser than it is.
3. **Look for intact frost** on the surface. Heavy handling knocks it off any bud, dense or airy.
4. **Check the packaging date.** Fresher flower is easier to judge.
5. **Go by net weight,** not jar fill.

## Handling both kinds

Dense buds can take more effort to break up. Airy buds crumble easily, so be gentle with them. Either way, keep flower in its original sealed, labelled container in a cool, dark place, out of reach of children and pets.

## Questions we hear on Eglinton East

**Are dense buds better?** We don't rank them. They're a structure, not a score. Read the label and look at the flower.

**What is larf?** Grower slang for the small, loose buds that form low on a plant, usually where less light reaches.

**Are fluffy buds the same as shake?** No. Shake is loose broken material that falls off buds. Fluffy buds are whole buds with an open structure.

## The bottom line

Dense vs fluffy buds comes down to how tightly the flowers stacked on the branch, shaped by genetics, position on the plant, growing conditions, harvest timing, drying and trim. It changes how a bud looks, feels and grinds. It doesn't replace the label.

Planning your visit? Our [Eglinton East Scarborough visit guide](/resources/eglinton-east-scarborough-visit-guide) covers the area. Mohawk Craft Dispensary is for adults 19 and over. Bring government-issued photo ID.`;

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
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
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

export default function DenseVsFluffyBudsPage() {
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
