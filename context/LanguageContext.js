
import React, { createContext, useState, useContext } from 'react';
import { translations } from '../translations.js';
import { html } from 'htm/react';

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return (translations[language] && translations[language][key]) || key;
  };

  return html`
    <${LanguageContext.Provider} value=${{ language, setLanguage, t }}>
      ${children}
    <//>
  `;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
