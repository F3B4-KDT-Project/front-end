import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as monaco from 'monaco-editor';


const queryClient = new QueryClient();

/* monaco-editor 세팅 */

// 성공
// (window as any).MonacoEnvironment = {
//   getWorkerUrl(moduleId: string, label: string) {
//     switch (label) {
//       case 'typescript':
//         return `${window.location.origin}/monaco-editor/vs/language/typescript/ts.worker.js`;
//       case 'javascript':
//         return `${window.location.origin}/monaco-editor/vs/language/typescript/ts.worker.js`;
//       case 'css':
//         return `${window.location.origin}/monaco-editor/vs/language/css/css.worker.js`;
//       case 'html':
//         return `${window.location.origin}/monaco-editor/vs/language/html/html.worker.js`;
//       case 'json':
//         return `${window.location.origin}/monaco-editor/vs/language/json/json.worker.js`;
//       default:
//         return `${window.location.origin}/monaco-editor/vs/editor/editor.worker.js`;
//     }
//   },
// };

// (window as any).MonacoEnvironment = {
//   getWorkerUrl(moduleId: string, label: string) {
//     const version = '1.0.0';
//     switch (label) {
//       case 'typescript':
//         return `/monaco-editor/vs/language/typescript/ts.worker.js?v=${version}`;
//       default:
//         return `/monaco-editor/vs/editor/editor.worker.js?v=${version}`;
//     }
//   },
// };

// (window as any).MonacoEnvironment = {
//   getWorkerUrl(moduleId: string, label: string) {
//     switch (label) {
//       case 'typescript':
//         return '/monaco-editor/vs/language/typescript/ts.worker.js';
//       case 'javascript':
//         return '/monaco-editor/vs/language/typescript/ts.worker.js';
//       case 'css':
//         return '/monaco-editor/vs/language/css/css.worker.js';
//       case 'html':
//         return '/monaco-editor/vs/language/html/html.worker.js';
//       case 'json':
//         return '/monaco-editor/vs/language/json/json.worker.js';
//       default:
//         return '/monaco-editor/vs/editor/editor.worker.js';
//     }
//   },
// };

// (window as any).MonacoEnvironment = {
//   getWorkerUrl(moduleId: string, label: string) {
//     switch (label) {
//       case 'editorWorkerService':
//         return '/monaco-editor/vs/editor/common/services/editorSimpleWorker.js';
//       case 'css':
//         return '/monaco-editor/vs/language/css/css.worker.js';
//       case 'html':
//         return '/monaco-editor/vs/language/html/html.worker.js';
//       case 'json':
//         return '/monaco-editor/vs/language/json/json.worker.js';
//       case 'typescript':
//         return '/monaco-editor/vs/language/typescript/ts.worker.js';
//       default:
//         return '/monaco-editor/vs/editor/editor.worker.js';
//     }
//   },
// };

(window as any).MonacoEnvironment = {
  getWorkerUrl(moduleId: string, label: string) {
    switch (label) {
      case 'typescript':
        return '/monaco-editor/vs/language/typescript/ts.worker.js';
      case 'css':
        return '/monaco-editor/vs/language/css/css.worker.js';
      case 'html':
        return '/monaco-editor/vs/language/html/html.worker.js';
      case 'json':
        return '/monaco-editor/vs/language/json/json.worker.js';
      default:
        return '/monaco-editor/vs/editor/editor.worker.js';
    }
  },
};


// (window as any).MonacoEnvironment = {
//   getWorkerUrl: function (moduleId, label) {
//     const workerSource = `
//       importScripts('/monaco-editor/vs/language/typescript/ts.worker.js');
//     `;
//     const blob = new Blob([workerSource], { type: 'application/javascript' });
//     return URL.createObjectURL(blob);
//   },
// };


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <QueryClientProvider client={queryClient}>
  //     <App />
  //   </QueryClientProvider>
  // </StrictMode>
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>
);
