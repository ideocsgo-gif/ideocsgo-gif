
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { html } from 'htm/react';
import { Layout } from './components/Layout.js';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Properties } from './pages/Properties.js';
import { ListingDetails } from './pages/ListingDetails.js';
import { LanguageProvider } from './context/LanguageContext.js';

const App = () => {
  return html`
    <${LanguageProvider}>
      <${HashRouter}>
        <${Layout}>
          <${Routes}>
            <${Route} path="/" element=${html`<${Home} />`} />
            <${Route} path="/about" element=${html`<${About} />`} />
            <${Route} path="/properties" element=${html`<${Properties} />`} />
            <${Route} path="/listing/:id" element=${html`<${ListingDetails} />`} />
          <//>
        <//>
      <//>
    <//>
  `;
};

export default App;
