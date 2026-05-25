#!/usr/bin/env node
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cssPath = join(root, 'assets/system.css');
const css = readFileSync(cssPath, 'utf8');

const requiredSelectors = [
  '.topnav',
  '.brand-logo',
  '.bottom-dock',
  '.dock-btn .icon',
  '.grid {',
  'grid-template-columns: repeat(12',
  '.icon {',
  'width: 24px',
  '.app-icon img',
  '.rank-icon svg',
];

const missing = requiredSelectors.filter((selector) => !css.includes(selector));
if (missing.length) {
  console.error('CSS audit failed. Missing:', missing.join(', '));
  process.exit(1);
}

console.log('CSS audit passed.');

const chromeCandidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
];

const chrome = chromeCandidates.find((path) => existsSync(path));
if (!chrome) {
  console.warn('Chrome not found; skipped screenshot render check.');
  process.exit(0);
}

const outDir = join(root, '.render-check');
mkdirSync(outDir, { recursive: true });

const targets = [
  ['index', join(root, 'index.html')],
  ['catalog', join(root, 'screens/catalog.html')],
  ['manage', join(root, 'screens/manage.html')],
  ['users', join(root, 'screens/users.html')],
  ['detail', join(root, 'screens/detail.html')],
];

let failed = 0;

for (const [name, file] of targets) {
  const png = join(outDir, `${name}.png`);
  const url = `file://${file}`;
  const result = spawnSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--window-size=1280,720',
      `--screenshot=${png}`,
      url,
    ],
    { encoding: 'utf8' }
  );

  if (result.status !== 0 || !existsSync(png)) {
    failed += 1;
    console.error(`Screenshot failed for ${name}:`, result.stderr || result.stdout);
    continue;
  }

  const size = readFileSync(png).length;
  console.log(`Screenshot ok: ${name}.png (${Math.round(size / 1024)} KB)`);
}

if (failed) process.exit(1);
console.log('Render check complete.');
