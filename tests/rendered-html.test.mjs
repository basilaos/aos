import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("uses standard Next.js scripts and dependency", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("package.json", root), "utf8"),
  );
  const nextConfig = await readFile(new URL("next.config.ts", root), "utf8");

  assert.equal(packageJson.scripts.dev, "next dev");
  assert.equal(packageJson.scripts.build, "next build");
  assert.equal(packageJson.scripts.start, "next start");
  assert.match(packageJson.dependencies.next, /^16\./);
  assert.match(nextConfig, /devIndicators:\s*false/);
});

test("keeps the product landing page at the site root", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /BasilAOS Workbench Playbook/);
  assert.match(page, /Workbench Playbook/);
  assert.match(page, /Start Reading/);
  assert.match(page, /Case Studies/);
  assert.match(page, /href="\/solve-it"/);
  assert.match(page, /firstPlaybookHref/);
  assert.match(page, /Four Tracks/);
  assert.match(page, /Quick Picks/);
  assert.doesNotMatch(page, /codex-preview|react-loading-skeleton|Our Product/);
});

test("keeps the dark scenario co-creation page in the app router", async () => {
  const page = await readFile(new URL("app/solve-it/page.tsx", root), "utf8");

  assert.match(page, /BasilAOS · Scenario Co-Creation/);
  assert.match(page, /Have a work scenario you want/);
  assert.match(page, /What happens after you submit/);
  assert.match(page, /href="\/bluebook\/"/);
  assert.match(page, /ThemeToggle/);
  assert.doesNotMatch(page, /codex-preview|react-loading-skeleton|Our Product/);
});

test("builds the playbook as docx-sourced section pages with inserted images", async () => {
  const [playbookRoute, sectionPage, components, data] = await Promise.all([
    readFile(new URL("app/bluebook/page.tsx", root), "utf8"),
    readFile(new URL("app/bluebook/[slug]/page.tsx", root), "utf8"),
    readFile(new URL("app/bluebook/bluebook-components.tsx", root), "utf8"),
    readFile(new URL("app/playbook-data.ts", root), "utf8"),
  ]);

  assert.match(playbookRoute, /BasilAOS Workbench Playbook/);
  assert.match(playbookRoute, /redirect\(`\/bluebook\/\$\{playbookSections\[0\]\.id\}`\)/);
  assert.doesNotMatch(playbookRoute, /DOCX sourced content|Images inserted in place|book-stats/);
  assert.doesNotMatch(components, /Overview|activeId === "overview"/);
  assert.doesNotMatch(components, /Part \$\{chapterIndex \+ 1\} · Guide/);
  assert.match(components, /chapter\.title/);
  assert.doesNotMatch(components, /DOCX content|book-stats/);
  assert.match(sectionPage, /generateStaticParams/);
  assert.match(sectionPage, /SectionArticle/);
  assert.match(components, /section\.blocks\.map/);
  assert.doesNotMatch(components, /section\.summary/);
  assert.match(components, /<img src=\{block\.src\}/);
  assert.match(components, /WorkflowDiagram/);
  assert.match(components, /AiTaskFlowDiagram/);
  assert.match(components, /ai-flow-diagram/);
  assert.match(components, /SkillFolderDiagram/);
  assert.match(components, /skill-code/);
  assert.match(components, /BasilAOS Work/);
  assert.match(components, /Workbench Playbook/);
  assert.doesNotMatch(components, /Workbench Guide|BasilAOS Guide/);
  assert.match(components, /guide-icon-frame/);
  assert.match(data, /Chapter 1 · Meet Basil AgentOS/);
  assert.match(data, /Chapter 3 · Role-Specific Scenarios/);
  assert.match(data, /Chapter 4 · Project, Skill & Work/);
  assert.match(data, /Scenario 8 · Merchandise Planning/);
  assert.match(data, /Scenario 6: Personal Folder Organization/);
  assert.match(data, /docx-image-01\.png/);
  assert.doesNotMatch(data, /HR work revolves around/);
  assert.doesNotMatch(data, /\*\*Next chapter:\*\*/);
  assert.doesNotMatch(data, /\*\*/);
  assert.doesNotMatch(data, /bluebook-assets|Chapter01-MeetWorkbench-EN|visual template/);
});

test("removes starter preview and copied reference assets", async () => {
  const [layout, packageJson] = await Promise.all([
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);

  assert.doesNotMatch(layout, /codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("exports the screenshots embedded in the docx draft", async () => {
  const { readdir } = await import("node:fs/promises");
  const images = await readdir(new URL("public/playbook-images/", root));

  assert.equal(images.filter((name) => /^(docx-image-\d+|scenario2-restored-\d+)\.(png|jpg|jpeg)$/.test(name)).length, 47);
});

test("has no Chinese interface copy in the app source", async () => {
  const [layout, home, solveIt, playbookRoute, components, data] = await Promise.all([
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/solve-it/page.tsx", root), "utf8"),
    readFile(new URL("app/bluebook/page.tsx", root), "utf8"),
    readFile(new URL("app/bluebook/bluebook-components.tsx", root), "utf8"),
    readFile(new URL("app/playbook-data.ts", root), "utf8"),
  ]);

  assert.doesNotMatch(`${layout}\n${home}\n${solveIt}\n${playbookRoute}\n${components}\n${data}`, /[\u4e00-\u9fff]/);
});

test("uses Basil brand colors for dark and light themes", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");

  assert.match(css, /--brand-green:\s*#00EDB9/);
  assert.match(css, /--navy-blue:\s*#061639/);
  assert.match(css, /html\[data-theme="light"\][\s\S]*--theme-accent:\s*var\(--navy-blue\)/);
  assert.match(css, /html\[data-theme="dark"\][\s\S]*--theme-accent:\s*var\(--brand-green\)/);
});
