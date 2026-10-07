import { cp, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const staging = await mkdtemp(join(tmpdir(), 'foundry-jev-'));
const output = join(root, 'dist', 'jev-encounter-director.zip');

try {
  await mkdir(join(root, 'dist'), { recursive: true });
  await rm(output, { force: true });
  for (const entry of ['module.json', 'LICENSE', 'README.md', 'styles']) {
    await cp(join(root, entry), join(staging, entry), { recursive: true });
  }
  await mkdir(join(staging, 'scripts'));
  for (const entry of ['core.js', 'main.js']) await cp(join(root, 'scripts', entry), join(staging, 'scripts', entry));
  execFileSync('zip', ['-q', '-r', output, '.'], { cwd: staging });
  console.log(`Created ${output}`);
} finally {
  await rm(staging, { recursive: true, force: true });
}
