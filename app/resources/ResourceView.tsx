import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./resources.module.css";
import type { ResourcePage } from "./resourceData";

type ResourceViewProps = {
  page: ResourcePage;
};

export default function ResourceView({ page }: ResourceViewProps) {
  const faqSchema = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;
  return (
    <main className={styles.main}>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
        </div>
      </section>

      {page.cards.length > 0 && (
        <section className={styles.cardsSection}>
          <div className={styles.grid}>
            {page.cards.map((card) => (
              <Link key={card.href} href={card.href} className={styles.card}>
                <span>{card.title}</span>
                <p>{card.text}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.body}>
        {page.blocks?.slice(page.blocks[0]?.type === "p" && page.blocks[0].text === page.intro ? 1 : 0).map((block, index) => {
          if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
          if (block.type === "list") {
            return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
          }
          return <p key={index}>{block.text}</p>;
        })}
        {!page.blocks && page.sections.map((section) => (
          <article key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
        {page.faqs && page.faqs.length > 0 && (
          <article className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            {page.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </article>
        )}
      </section>
      <Footer />
    </main>
  );
}
