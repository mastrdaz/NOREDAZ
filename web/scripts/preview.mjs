import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve, extname, sep } from "node:path";

// Local-only static preview. No hosting integration or deployment behavior.
const root = resolve("out");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};
export const createPreviewServer = () =>
  createServer(async (req, res) => {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405, { Allow: "GET, HEAD" });
      res.end();
      return;
    }
    try {
      const pathname = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      let file = resolve(root, `.${pathname}`);
      if (file !== root && !file.startsWith(root + sep)) {
        res.writeHead(403);
        res.end();
        return;
      }
      let status = 200;
      try {
        if ((await stat(file)).isDirectory())
          file = resolve(file, "index.html");
      } catch {
        file = resolve(root, "404.html");
        status = 404;
      }
      const content = await readFile(file);
      res.writeHead(status, {
        "Content-Type": mime[extname(file)] || "application/octet-stream",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(req.method === "HEAD" ? undefined : content);
    } catch {
      res.writeHead(400);
      res.end("Unable to read this page. Run npm run build before previewing.");
    }
  });
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const port = Number(process.env.PORT || 3000);
  createPreviewServer().listen(port, "127.0.0.1", () =>
    console.log(`Local preview: http://127.0.0.1:${port}`),
  );
}
