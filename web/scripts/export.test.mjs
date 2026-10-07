import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve("out");
const routes = [
  "/",
  "/products/",
  "/services/",
  "/about/",
  "/contact/",
  "/careers/",
  "/privacy/",
  "/terms/",
];
const routeFile = (route) => resolve(root, `.${route}`, "index.html");
const html = new Map();
for (const route of routes)
  html.set(route, await readFile(routeFile(route), "utf8"));

for (const [route, content] of html) {
  test(`${route} exports a complete accessible page shell`, () => {
    assert.equal((content.match(/<h1[\s>]/g) || []).length, 1);
    assert.match(content, /<html lang="en"/);
    assert.match(content, /<main id="main-content"/);
    assert.match(content, /Skip to content/);
    assert.match(content, /<title>[^<]+<\/title>/);
    assert.match(content, /name="description"/);
    assert.match(content, /name="viewport"/);
    assert.match(content, /noindex/);
    assert.match(content, /NOIRDAZ/);
    assert.doesNotMatch(
      content,
      /(?:href|src)="(?:#|undefined|null|javascript:[^"]*)"/,
    );
  });
  test(`${route} has no missing local link targets or assets`, async () => {
    const refs = [...content.matchAll(/(?:href|src)="([^"<>]+)"/g)].map(
      (match) => match[1],
    );
    for (const ref of new Set(refs)) {
      if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
      const url = new URL(
        ref.replaceAll("&amp;", "&"),
        `http://preview.local${route}`,
      );
      let path = resolve(root, `.${url.pathname}`);
      if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
      assert.ok((await stat(path)).isFile(), `${route}: ${ref}`);
      if (url.hash) {
        const target = await readFile(path, "utf8");
        assert.ok(
          target.includes(`id="${url.hash.slice(1)}"`),
          `Missing anchor ${ref}`,
        );
      }
    }
  });
}
test("Public output excludes planning documents and unverified contact claims", async () => {
  for (const content of html.values()) {
    assert.doesNotMatch(
      content,
      /555[- .]|NOREDAZ|Noredaz|Neon Gorilla|gorilla|LLC|mailto:|tel:/i,
    );
  }
  await assert.rejects(stat(resolve(root, "docs/SMALL_BUSINESS_GUIDE.md")));
});
test("Contact preview and legal placeholders are explicitly labeled", () => {
  assert.match(html.get("/contact/"), /does not send or save messages/);
  assert.match(html.get("/contact/"), /type="button"[^>]*>Preview enquiry/);
  assert.doesNotMatch(html.get("/contact/"), /type="submit"/);
  for (const route of ["/privacy/", "/terms/"])
    assert.match(html.get(route), /not an approved legal document/);
});
test("Preview cannot index and includes a custom not-found page", async () => {
  assert.match(
    await readFile(resolve(root, "robots.txt"), "utf8"),
    /Disallow: \//,
  );
  assert.match(
    await readFile(resolve(root, "404.html"), "utf8"),
    /A different way forward/,
  );
});
