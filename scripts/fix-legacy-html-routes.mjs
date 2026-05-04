import { existsSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distRoot = fileURLToPath(new URL('../dist', import.meta.url));
const legacyRoots = ['labprotocols', 'bioinformatics', 'resources'];

function collectDirectories(dir, directories = []) {
  if (!existsSync(dir)) return;

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (!statSync(path).isDirectory()) continue;
    directories.push(path);
    collectDirectories(path, directories);
  }

  return directories;
}

for (const root of legacyRoots) {
  for (const dir of collectDirectories(join(distRoot, root)).sort((a, b) => b.length - a.length)) {
    if (!basename(dir).endsWith('.html')) continue;

    const indexPath = join(dir, 'index.html');
    if (!existsSync(indexPath)) continue;

    const html = readFileSync(indexPath);
    const tempPath = `${dir}.tmp`;
    writeFileSync(tempPath, html);
    rmSync(dir, { recursive: true, force: true });
    renameSync(tempPath, dir);
  }
}

for (const entry of readdirSync(distRoot)) {
  if (!entry.endsWith('.xml')) continue;

  const xmlPath = join(distRoot, entry);
  const xml = readFileSync(xmlPath, 'utf8').replace(/(\.html)\//g, '$1');
  writeFileSync(xmlPath, xml);
}
