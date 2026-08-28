import type { Metadata } from "next";
import Link from "next/link";
import { playbookChapters, playbookTitle } from "../playbook-data";

export const metadata: Metadata = {
  title: "BasilAOS Workbench Playbook",
  description:
    "The English release of the BasilAOS Workbench Playbook, structured as a bluebook reading guide.",
};

function cleanMarkdown(value: string) {
  return value
    .replace(/\\([().&+\-])/g, "$1")
    .replace(/\u00a0/g, " ")
    .trim();
}

function inlineText(value: string) {
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderMarkdown(markdown: string) {
  const blocks: string[] = [];
  const lines = cleanMarkdown(markdown).split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i += 1;
      continue;
    }

    if (line === "```") {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && lines[i].trim() !== "```") {
        code.push(lines[i]);
        i += 1;
      }
      blocks.push(`<pre><code>${inlineText(code.join("\n"))}</code></pre>`);
      i += 1;
      continue;
    }

    if (/^###\s+/.test(line)) {
      blocks.push(`<h3>${inlineText(line.replace(/^###\s+/, ""))}</h3>`);
      i += 1;
      continue;
    }

    if (/^\|.+\|$/.test(line) && /^\|[-:\s|]+$/.test(lines[i + 1]?.trim() ?? "")) {
      const rows: string[][] = [];
      rows.push(line.slice(1, -1).split("|").map((cell) => cell.trim()));
      i += 2;
      while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
        rows.push(lines[i].trim().slice(1, -1).split("|").map((cell) => cell.trim()));
        i += 1;
      }
      const [head, ...body] = rows;
      blocks.push(
        `<div class="table-wrap"><table><thead><tr>${head
          .map((cell) => `<th>${inlineText(cell)}</th>`)
          .join("")}</tr></thead><tbody>${body
          .map(
            (row) =>
              `<tr>${row.map((cell) => `<td>${inlineText(cell)}</td>`).join("")}</tr>`,
          )
          .join("")}</tbody></table></div>`,
      );
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line);
      const items: string[] = [];
      while (
        i < lines.length &&
        (ordered ? /^\d+\.\s+/.test(lines[i].trim()) : /^[-*]\s+/.test(lines[i].trim()))
      ) {
        items.push(lines[i].trim().replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, ""));
        i += 1;
      }
      const tag = ordered ? "ol" : "ul";
      blocks.push(`<${tag}>${items.map((item) => `<li>${inlineText(item)}</li>`).join("")}</${tag}>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        const text = lines[i].trim().replace(/^>\s?/, "");
        if (text) quote.push(text);
        i += 1;
      }
      blocks.push(`<blockquote>${quote.map(inlineText).join("<br />")}</blockquote>`);
      continue;
    }

    if (/^---+$/.test(line)) {
      blocks.push("<hr />");
      i += 1;
      continue;
    }

    const paragraph = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(```|###\s+|\|.+\|$|[-*]\s+|\d+\.\s+|>\s?|---+$)/.test(lines[i].trim())
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    blocks.push(`<p>${inlineText(paragraph.join(" "))}</p>`);
  }

  return blocks.join("");
}

const sectionCount = playbookChapters.reduce(
  (total, chapter) => total + chapter.sections.length,
  0,
);

export default function BluebookPage() {
  return (
    <main className="book-page">
      <header className="book-topbar">
        <Link className="wordmark" href="/">
          <span>BASIL</span>AOS
        </Link>
        <span className="book-site">Workbench Playbook</span>
        <div className="nav-spacer" />
        <Link href="/">Scenario Co-Creation</Link>
      </header>

      <div className="book-shell">
        <aside className="book-side" aria-label="Bluebook chapters">
          <Link className="overview-link" href="#overview">
            Overview
          </Link>
          <p className="side-part">Contents</p>
          <ul>
            {playbookChapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>{chapter.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="book-main">
          <section className="book-hero" id="overview">
            <p className="mono-kicker">ENGLISH RELEASE · BLUEBOOK</p>
            <h1>{playbookTitle}</h1>
            <p className="book-lead">
              A structured field guide for understanding BasilAOS Workbench:
              from the first task and workspace basics to role-specific
              scenarios, Skills, Projects, Works, and the underlying AI work
              system.
            </p>
            <div className="book-stats">
              <span>{playbookChapters.length} chapters</span>
              <span>{sectionCount} sections</span>
              <span>MD sourced content</span>
            </div>
          </section>

          <section className="chapter-directory" aria-label="Chapter directory">
            {playbookChapters.map((chapter, index) => (
              <a className="chapter-tile" href={`#${chapter.id}`} key={chapter.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{chapter.title}</strong>
                <small>{chapter.sections.length} sections</small>
              </a>
            ))}
          </section>

          {playbookChapters.map((chapter, chapterIndex) => (
            <section className="book-chapter" id={chapter.id} key={chapter.id}>
              <p className="mono-kicker">PART {String(chapterIndex + 1).padStart(2, "0")}</p>
              <h2>{chapter.title}</h2>

              {chapter.sections.map((section) => (
                <section className="book-section" id={section.id} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.image ? (
                    <figure className="chapter-shot">
                      <img src={section.image} alt={`${section.title} visual template`} />
                    </figure>
                  ) : null}
                  <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{
                      __html: renderMarkdown(section.markdown),
                    }}
                  />
                </section>
              ))}
            </section>
          ))}
        </article>

        <aside className="book-toc" aria-label="On this page">
          <p className="side-part">Read</p>
          {playbookChapters.map((chapter) => (
            <a key={chapter.id} href={`#${chapter.id}`}>
              {chapter.title.replace(/^Chapter\s+/, "Ch. ")}
            </a>
          ))}
        </aside>
      </div>
    </main>
  );
}
