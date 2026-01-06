
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
    <div className="min-h-screen flex flex-col">
      <header className="bg-booking-blue text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
          <${Link} to="/" className="text-2xl font-bold tracking-tight">
            StayInWarsaw<span className="text-booking-yellow">.pl</span>
          <//>
          
          <nav className="flex items-center gap-6">
            <button 
              onClick=${toggleLanguage}
              className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full text-xs font-bold hover:bg-white/10 transition-colors"
            >
              ${language === 'en' ? 'PL' : 'EN'}
            </button>
            <div className="hidden sm:flex items-center gap-6 text-sm font-semibold">
              <${Link} to="/" className="hover:bg-white/10 px-3 py-2 rounded transition-colors">
                ${t('nav.homes')}
              <//>
              <button className="border border-white px-4 py-1.5 rounded hover:bg-white/10 transition-colors">
                ${t('nav.login')}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        ${children}
      </main>

      <footer className="bg-white border-t border-gray-200 pt-10 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-booking-action mb-8">
            <ul className="space-y-2">
              <li className="font-bold text-gray-900">${t('footer.help')}</li>
              <li><a href="#" className="hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:underline">Safety Resource</a></li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold text-gray-900">Partner</li>
              <li><a href="#" className="hover:underline">List your property</a></li>
              <li><a href="#" className="hover:underline">Partner help</a></li>
            </ul>
            <div className="md:col-span-2 text-right text-gray-500">
               <p className="mb-2">StayInWarsaw.pl is part of Urban Holdings Inc.</p>
               <p>© ${new Date().getFullYear()} ${t('footer.rights')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `;
};
