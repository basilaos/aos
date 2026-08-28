import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the dark scenario co-creation homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /BasilAOS · Scenario Co-Creation/);
  assert.match(html, /Have a work scenario you want/);
  assert.match(html, /What happens after you submit/);
  assert.match(html, /Workbench Playbook/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|我们的产品/);
});

test("server-renders the bluebook from the uploaded markdown", async () => {
  const response = await render("/bluebook");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /BasilAOS Workbench Playbook/);
  assert.match(html, /Chapter 1 · Meet Basil AgentOS/);
  assert.match(html, /Chapter 4 · Project, Skill/);
  assert.match(html, /AI Work System in One Chapter/);
  assert.match(html, /MD sourced content/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton/);
});

test("keeps generated pages free of starter preview imports", async () => {
  const [page, bluebook, layout, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/bluebook/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(bluebook, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
