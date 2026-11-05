// Build with esbuild into dist/. Use --watch to rebuild on change (reload the extension manually).
import * as esbuild from 'esbuild';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const watch = process.argv.includes('--watch');
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist/popup', { recursive: true });
cpSync('public', 'dist', { recursive: true });
cpSync('src/manifest.json', 'dist/manifest.json');
cpSync('src/popup/popup.html', 'dist/popup/popup.html');
cpSync('src/popup/popup.css', 'dist/popup/popup.css');

const options = {
  entryPoints: { background: 'src/background.ts', content: 'src/content.ts', 'popup/popup': 'src/popup/popup.ts' },
  bundle: true,
  format: 'esm',
  target: 'chrome120',
  outdir: 'dist',
  logLevel: 'info',
};
if (watch) await (await esbuild.context(options)).watch();
else await esbuild.build(options);
