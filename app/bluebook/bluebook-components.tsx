import Link from "next/link";
import type { ReactNode } from "react";
import { ThemeToggle } from "../theme-toggle";
import {
  getSectionById,
  playbookChapters,
  playbookSections,
  type PlaybookBlock,
  type RichRun,
} from "../playbook-data";

type PlaybookShellProps = {
  activeId: string;
  children: ReactNode;
};

function sectionNumber(title: string, fallback: number) {
  const match = title.match(/^(\d+\.\d+|Scenario\s+\d+)/);
  return match ? match[1] : String(fallback).padStart(2, "0");
}

function sectionLabel(title: string) {
  return title.replace(/^(\d+\.\d+|Scenario\s+\d+)\s*[:·]?\s*/, "");
}

function workflowText(block: PlaybookBlock) {
  if (block.type !== "table" || block.rows.length !== 1 || block.rows[0].length !== 1) {
    return "";
  }

  return block.rows[0][0].replace(/\s+/g, " ").trim();
}

function singleCellText(block: PlaybookBlock) {
  if (block.type !== "table" || block.rows.length !== 1 || block.rows[0].length !== 1) {
    return "";
  }

  return block.rows[0][0].trim();
}

function renderRuns(runs: RichRun[]) {
  return runs.map((run, index) => {
    let node: ReactNode = run.text;

    if (run.bold) {
      node = <strong>{node}</strong>;
    }

    if (run.italic) {
      node = <em>{node}</em>;
    }

    return <span key={`${run.text}-${index}`}>{node}</span>;
  });
}

function cleanInlineMarkdown(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/(^|[\s([{])\*([^*\n]+)\*($|[\s.,;:!?)}\]])/g, "$1$2$3");
}

function PagerLink({ id, label }: { id: string | null; label: string }) {
  if (!id) {
    return null;
  }

  const section = getSectionById(id);

  return (
    <Link className="pager-link" href={`/bluebook/${id}`}>
      <small>{label}</small>
      <span>{section?.title ?? id}</span>
    </Link>
  );
}

export function PlaybookShell({ activeId, children }: PlaybookShellProps) {
  return (
    <main className="book-page">
      <header className="book-topbar">
        <Link className="wordmark" href="/">
          <img src="/brand/basil-wordmark.png" alt="BasilAOS Work" />
        </Link>
        <span className="book-site">Workbench Playbook</span>
        <div className="nav-spacer" />
        <Link href="/solve-it">Scenario Co-Creation</Link>
        <ThemeToggle />
      </header>

      <div className="book-shell">
        <aside className="book-side" aria-label="Playbook sections">
          <div className="guide-brand">
            <span className="guide-icon-frame" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect
                  x="9"
                  y="10"
                  width="22"
                  height="17"
                  rx="2.8"
                  stroke="currentColor"
                />
                <path d="M16 32H24" stroke="currentColor" />
              </svg>
            </span>
            <strong>Workbench Playbook</strong>
          </div>

          {playbookChapters.map((chapter) => (
            <nav className="side-group" key={chapter.id}>
              <p className="side-part">{chapter.title}</p>
              {chapter.sections.map((section, sectionIndex) => (
                <Link
                  className={activeId === section.id ? "is-active" : ""}
                  href={`/bluebook/${section.id}`}
                  key={section.id}
                >
                  <small>{sectionNumber(section.title, sectionIndex + 1)}</small>
                  {sectionLabel(section.title)}
                </Link>
              ))}
            </nav>
          ))}
        </aside>

        <article className="book-main">{children}</article>

        <aside className="book-toc" aria-label="Section contents">
          <p className="side-part">Contents</p>
          <a href="#top">Top</a>
          <a href="#content">Content</a>
          <a href="#pager">Continue Reading</a>
        </aside>
      </div>
    </main>
  );
}

export function SectionArticle({
  section,
}: {
  section: (typeof playbookSections)[number];
}) {
  return (
    <>
      <section className="section-head" id="top">
        <p className="mono-kicker">{section.chapterTitle}</p>
        <h1>{section.title}</h1>
      </section>

      <section className="section-content" id="content">
        {section.blocks.map((block, index) => (
          <BlockView block={block} index={index} key={`${block.type}-${index}`} />
        ))}
      </section>

      <nav className="section-pager" id="pager" aria-label="Section navigation">
        <PagerLink id={section.prev} label="Previous" />
        <PagerLink id={section.next} label="Next" />
      </nav>
    </>
  );
}

function BlockView({ block, index }: { block: PlaybookBlock; index: number }) {
  if (block.type === "heading") {
    return <h2>{renderRuns(block.runs)}</h2>;
  }

  if (block.type === "paragraph") {
    const hasText = block.runs.some((run) => run.text.trim());
    return hasText ? <p>{renderRuns(block.runs)}</p> : null;
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";

    return (
      <ListTag className="content-list">
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{renderRuns(item)}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === "image") {
    return (
      <figure className="doc-image">
        <img src={block.src} alt={block.alt || `Playbook image ${index + 1}`} />
      </figure>
    );
  }

  if (block.type !== "table") {
    return null;
  }

  const workflow = workflowText(block);

  if (workflow.startsWith("Plain Text State the goal")) {
    return <WorkflowDiagram />;
  }

  if (workflow.startsWith("Plain Text User goal + materials")) {
    return <AiTaskFlowDiagram />;
  }

  const singleText = singleCellText(block);

  if (singleText.includes("my-skill/") && singleText.includes("SKILL.md")) {
    return <SkillFolderDiagram />;
  }

  if (singleText.includes("invoice-skill/") && singleText.includes("SKILL.md")) {
    return <InvoiceSkillDiagram />;
  }

  const [head, ...body] = block.rows;

  if (!head) {
    return null;
  }

  if (body.length === 0 && head.length === 1) {
    return <blockquote>{cleanInlineMarkdown(head[0])}</blockquote>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {head.map((cell, cellIndex) => (
              <th key={`${cell}-${cellIndex}`}>{cleanInlineMarkdown(cell)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`}>{cleanInlineMarkdown(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AiTaskFlowDiagram() {
  const rows = [
    ["User goal + materials", "->", "Agent plans", "->", "LLM understands & generates"],
    ["", "", "↓", "", "↓"],
    ["", "", "Skill methods & scripts", "", "Intermediate results"],
    ["", "", "↓", "", "↓"],
    ["", "", "Tool / Connector", "->", "Checkpoint & review -> Final output"],
    ["", "", "↓", "", ""],
    ["", "", "MCP / API -> Files, spreadsheets & business systems", "", ""],
  ];

  return (
    <figure className="ai-flow-diagram" aria-label="What happens inside an AI task">
      <figcaption>Code block</figcaption>
      <div className="ai-flow-code" role="list">
        {rows.map((cells, index) => (
          <div className="ai-flow-code-row" role="listitem" key={index}>
            <span className="ai-flow-line-number">{index + 1}</span>
            <code className="ai-flow-code-line">
              {cells.map((cell, cellIndex) => (
                <span className={cell === "↓" || cell === "->" ? "ai-flow-symbol" : ""} key={`${cell}-${cellIndex}`}>
                  {cell}
                </span>
              ))}
            </code>
          </div>
        ))}
      </div>
    </figure>
  );
}

function SkillFolderDiagram() {
  const tree = [
    { line: "my-skill/", note: "Skill package root" },
    { line: "├── SKILL.md", note: "Required: skill description" },
    { line: "│" },
    { line: "├── scripts/", note: "Optional: executable scripts" },
    { line: "│   └── check.py" },
    { line: "│" },
    { line: "├── references/", note: "Optional: reference materials" },
    { line: "│   └── guide.md" },
    { line: "│" },
    { line: "└── templates/", note: "Optional: output templates" },
    { line: "    └── template.pptx" },
  ];

  return (
    <figure className="skill-diagram" aria-label="Standard Skill folder structure">
      <figcaption>Code block</figcaption>
      <div className="skill-code" role="list">
        {tree.map((row, index) => (
          <div className="skill-code-row" role="listitem" key={`${row.line}-${index}`}>
            <span className="skill-line-number">{index + 1}</span>
            <code>{row.line}</code>
            {row.note ? <span className="skill-note"># {row.note}</span> : null}
          </div>
        ))}
      </div>
    </figure>
  );
}

function InvoiceSkillDiagram() {
  const tree = [
    { line: "invoice-skill/", note: "Skill package root" },
    { line: "├── SKILL.md", note: "Triggers, steps, boundaries, output" },
    { line: "├── references/", note: "Fields, categories, business rules" },
    { line: "├── scripts/", note: "OCR, validation, table processing" },
    { line: "├── templates/", note: "Excel and report templates" },
    { line: "└── tests/", note: "Normal and edge-case samples" },
  ];

  return (
    <figure className="skill-diagram" aria-label="Invoice Skill folder structure">
      <figcaption>Code block</figcaption>
      <div className="skill-code" role="list">
        {tree.map((row, index) => (
          <div className="skill-code-row" role="listitem" key={`${row.line}-${index}`}>
            <span className="skill-line-number">{index + 1}</span>
            <code>{row.line}</code>
            <span className="skill-note"># {row.note}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

function WorkflowDiagram() {
  const stages = [
    "State the goal",
    "Read Library and table data",
    "Plan steps and pick tools",
    "Execute and produce output",
  ];

  return (
    <figure className="workflow-diagram" aria-label="Workbench task workflow">
      <div className="workflow-lane">
        <div className="workflow-lane-label">
          <span>Agent Work</span>
        </div>
        <div className="workflow-mainline">
          {stages.map((stage, index) => (
            <div className="workflow-node" key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="workflow-lane">
        <div className="workflow-lane-label">
          <span>Human Review</span>
        </div>
        <div className="workflow-branches">
          <div className="workflow-branch workflow-branch--revise">
            <small>Needs Revision</small>
            <span>Revise issue and rerun</span>
          </div>
          <div className="workflow-branch">
            <small>Approved</small>
            <span>Archive or publish</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
