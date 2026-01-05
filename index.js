
import React from 'react';
import { createRoot } from 'react-dom/client';
import { html } from 'htm/react';
import App from './App.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found");
} else {
  const root = createRoot(rootElement);
  root.render(
    html`
      <${React.StrictMode}>
        <${App} />
      <//>
    `
  );
}
