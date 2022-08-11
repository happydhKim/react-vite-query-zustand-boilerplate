import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  resolve: {
    alias: {
      'pages': path.resolve(path.resolve(__dirname, './src/pages/')),
      'components': path.resolve(path.resolve(__dirname, './src/components/')),
      'constants': path.resolve(path.resolve(__dirname, './src/constants/')),
      'styles': path.resolve(path.resolve(__dirname, './src/styles/')),
      'services': path.resolve(path.resolve(__dirname, './src/services/')),
      'utils': path.resolve(path.resolve(__dirname, './src/utils/')),
      'hooks': path.resolve(path.resolve(__dirname, './src/hooks/')),
      'layouts': path.resolve(path.resolve(__dirname, './src/layouts/')),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  esbuild: {
    //https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
