/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/queryClient.ts';

/* monaco-editor 세팅 */

(window as any).MonacoEnvironment = {
  getWorkerUrl(label: string) {
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

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
