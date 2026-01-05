
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const Layout = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return html`
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <${Link} to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">UrbanStay</span>
            <//>
            <nav className="flex items-center gap-4">
              <button 
                onClick=${toggleLanguage}
                className="px-2 py-1 border border-gray-300 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                ${language === 'en' ? 'PL' : 'EN'}
              </button>
              <${Link} to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                ${t('nav.homes')}
              <//>
              <button className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                ${t('nav.login')}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        ${children}
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">UrbanStay</h3>
              <p className="text-gray-400 text-sm">${t('footer.about')}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">${t('footer.help')}</a></li>
                <li><a href="#" className="hover:text-white">${t('footer.cancel')}</a></li>
                <li><a href="#" className="hover:text-white">${t('footer.safety')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">${t('footer.contact')}</h3>
              <p className="text-gray-400 text-sm">
                123 Market Street<br />
                San Francisco, CA 94103<br />
                hello@urbanstay.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; ${new Date().getFullYear()} ${t('footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  `;
};
