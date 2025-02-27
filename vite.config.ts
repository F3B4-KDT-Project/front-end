import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [react()],
  publicDir: 'public', // 정적 파일 경로 명시

  /* IDE 라이브러리 - css시 필요한 모듈 설정 */
  resolve: {
    alias: {
      fs: 'vite-plugin-node-polyfills/polyfills/fs',
      path: 'vite-plugin-node-polyfills/polyfills/path',
      os: 'vite-plugin-node-polyfills/polyfills/os',
      util: 'vite-plugin-node-polyfills/polyfills/util',
    },
  },

  /* IDE 라이브러리 - monako 번들링 코드 */
  optimizeDeps: {
    include: ['monaco-editor', '@monaco-editor/react'],

    /* monako 렌더링 중 이슈 - process 객제 정의되지 않아 발생.
    브라우저에서 process를 사용할 수 있도록 Polyfill을 추가. */
    esbuildOptions: {
      define: {
        global: 'globalThis', // 브라우저 환경에서 global 객체 지원
        'process.env.NODE_ENV': JSON.stringify('development'), // process.env 지원
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },

  server: {
    headers: {
      // 'Content-Type': 'application/javascript', // MIME 유형 설정
      'Cross-Origin-Embedder-Policy': 'require-corp', // CORS 설정 추가
      'Cross-Origin-Opener-Policy': 'same-origin', // CORS 설정 추가
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': [
            'monaco-editor',
            'monaco-editor/esm/vs/editor/editor.main',
          ], // Monaco Editor를 별도 번들로 분리
        },
        // assetFileNames: 'monaco-editor/[name].[ext]',
        assetFileNames : (chunkInfo)=>{
          if(chunkInfo.name?.includes('worker')){
            return 'monaco-editor-workers/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
});
