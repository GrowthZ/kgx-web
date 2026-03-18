import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      // draft-js uses 'global' which doesn't exist in browsers
      global: 'globalThis',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    optimizeDeps: {
      include: [
        '@floating-ui/dom',
        '@tiptap/react > @tiptap/extension-bubble-menu',
        'draft-js',
        'react-draft-wysiwyg',
        'draftjs-to-html',
        'html-to-draftjs',
      ],
    },
  };
});

