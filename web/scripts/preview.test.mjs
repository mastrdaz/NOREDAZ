import { test } from "node:test";
import assert from "node:assert/strict";
import { createPreviewServer } from "./preview.mjs";

test("Local HTTP preview serves all routes, assets, HEAD, and honest 404s", async () => {
  const server = createPreviewServer();
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const route of [
      "/",
      "/products/",
      "/services/",
      "/about/",
      "/contact/",
      "/careers/",
      "/privacy/",
      "/terms/",
      "/brand/nd-mark.svg",
      "/robots.txt",
    ]) {
      const response = await fetch(origin + route);
      assert.equal(response.status, 200, route);
      assert.ok((await response.text()).length > 0, route);
    }
    const head = await fetch(origin + "/", { method: "HEAD" });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), "");
    const missing = await fetch(origin + "/does-not-exist/");
    assert.equal(missing.status, 404);
    assert.match(await missing.text(), /A different way forward/);
    assert.equal(
      (await fetch(origin + "/contact/", { method: "POST" })).status,
      405,
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
