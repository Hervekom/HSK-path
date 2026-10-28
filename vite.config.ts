import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

// Lists every built script and stylesheet so the service worker can keep the pages that are
// loaded on demand (code splitting) and the app still opens offline from the first visit.
const assetList = (): Plugin => ({
  name: 'hsk-asset-list',
  apply: 'build',
  generateBundle(_options, bundle) {
    const files = Object.keys(bundle).filter((f) => /\.(js|css)$/.test(f)).map((f) => `/${f}`);
    this.emitFile({ type: 'asset', fileName: 'asset-list.json', source: JSON.stringify(files) });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), assetList()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
