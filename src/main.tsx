/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/queryClient.ts';
import App from './App.tsx';

/* monaco-editor 세팅 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);
