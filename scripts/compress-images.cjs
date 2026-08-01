/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..", "public", "images");
const JPG_QUALITY = 85;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const SKIP = new Set(["logo"]);

const before = { bytes: 0, files: 0 };
const after = { bytes: 0, files: 0 };
const keptOriginal = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (SKIP.has(entry.name)) return [];
    return [full];
  });
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

(async () => {
  const files = walk(ROOT).filter((file) =>
    EXTENSIONS.has(path.extname(file).toLowerCase())
  );

  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const beforeBytes = fs.statSync(file).size;
    before.bytes += beforeBytes;
    before.files += 1;

    const isPng = path.extname(file).toLowerCase() === ".png";
    const tmp = file + ".tmp";
    const isNewName = isPng ? file.replace(/\.png$/i, ".jpg") : null;

    await sharp(file)
      .rotate()
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: isPng ? 90 : JPG_QUALITY, mozjpeg: true })
      .toFile(tmp);

    const newBytes = fs.statSync(tmp).size;
    if (newBytes < beforeBytes) {
      fs.rmSync(file);
      if (isNewName) {
        fs.renameSync(tmp, isNewName);
      } else {
        fs.renameSync(tmp, file);
      }
      after.bytes += newBytes;
      after.files += 1;
      const pct = Math.round((1 - newBytes / beforeBytes) * 100);
      console.log(
        `✓ ${path.basename(isNewName || file).padEnd(42)} ${formatBytes(beforeBytes).padStart(9)} -> ${formatBytes(newBytes).padStart(9)}  (${pct}% smaller)`
      );
    } else {
      fs.rmSync(tmp);
      keptOriginal.push(path.basename(file));
      after.bytes += beforeBytes;
      after.files += 1;
      const pct = Math.round((newBytes / beforeBytes - 1) * 100);
      console.log(
        `- ${path.basename(file).padEnd(42)} kept original (re-encode ${pct}% bigger)`
      );
    }
  }

  console.log("\n========================================");
  console.log(
    `Total: ${formatBytes(before.bytes)} -> ${formatBytes(after.bytes)}  (${Math.round((1 - after.bytes / before.bytes) * 100)}% smaller, ${after.files}/${before.files} files)`
  );
  if (keptOriginal.length) {
    console.log(`Kept original (no gain): ${keptOriginal.join(", ")}`);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
