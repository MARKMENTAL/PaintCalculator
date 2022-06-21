import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    rollupOptions: {
      // list all html pages here so the full app compiles
        input: ["index.html"],
    },
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
