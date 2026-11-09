import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const scanDist = process.argv.includes("--dist");
const roots = [path.join(root, "public")];
if (scanDist && fs.existsSync(path.join(root, "dist"))) {
  roots.push(path.join(root, "dist"));
}

const blockedPathPatterns = [
  /instructor[^a-z0-9]*schedule/i,
  /assignment[^a-z0-9]*schedule/i,
  /contact[^a-z0-9]*sheet/i,
  /onboarding/i,
  /slack/i,
  /private[^a-z0-9]*google[^a-z0-9]*drive/i,
];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const metadataMarkers = [
  Buffer.from("Exif\0\0", "latin1"),
  Buffer.from("http://ns.adobe.com/xap/", "latin1"),
  Buffer.from("<?xpacket", "latin1"),
  Buffer.from("Photoshop", "latin1"),
  Buffer.from("IPTC", "latin1"),
  Buffer.from("GPSLatitude", "latin1"),
  Buffer.from("GPSLongitude", "latin1"),
];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

for (const rootDir of roots) {
  for (const filePath of walk(rootDir)) {
    const relative = path.relative(root, filePath);
    if (blockedPathPatterns.some((pattern) => pattern.test(relative))) {
      fail(`Private planning asset blocked from public output: ${relative}`);
    }
    if (imageExtensions.has(path.extname(filePath).toLowerCase())) {
      const data = fs.readFileSync(filePath);
      const marker = metadataMarkers.find((item) => data.includes(item));
      if (marker) {
        fail(`Image metadata marker remains in ${relative}`);
      }
    }
  }
}

const manualPages = JSON.parse(fs.readFileSync(path.join(root, "src/data/manualPages.json"), "utf8"));
for (const page of manualPages) {
  if (/<script[\s>]/i.test(page.bodyHtml || "")) {
    fail(`Manual page contains executable script markup: ${page.slug || page.title}`);
  }
}

if (!process.exitCode) {
  console.log("public asset security check passed");
}
