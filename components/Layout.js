
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const Layout = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "bg-white/20" : "";
  };

  return html`
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-booking-blue text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center relative">
          
          <${Link} to="/" className="text-2xl font-bold tracking-tight z-50" onClick=${closeMenu}>
            StayInWarsaw<span className="text-booking-yellow">.pl</span>
          <//>
          
          <div className="flex items-center gap-4">
             <button 
                onClick=${toggleLanguage}
                className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full text-xs font-bold hover:bg-white/10 transition-colors z-50"
              >
                ${language === 'en' ? 'PL' : 'EN'}
             </button>

             <button 
               className="md:hidden z-50 p-2 focus:outline-none" 
               onClick=${() => setIsMenuOpen(!isMenuOpen)}
               aria-label="Toggle menu"
             >
               <div className="w-6 h-5 flex flex-col justify-between">
                 <span className=${`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                 <span className=${`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                 <span className=${`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
               </div>
             </button>

             <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
               <${Link} to="/" className=${`hover:bg-white/10 px-3 py-2 rounded transition-colors ${isActive('/')}`}>
                 ${t('nav.home')}
               <//>
               <${Link} to="/about" className=${`hover:bg-white/10 px-3 py-2 rounded transition-colors ${isActive('/about')}`}>
                 ${t('nav.about')}
               <//>
               <${Link} to="/properties" className=${`hover:bg-white/10 px-3 py-2 rounded transition-colors ${isActive('/properties')}`}>
                 ${t('nav.properties')}
               <//>
             </nav>
          </div>
        </div>

        <div className=${`fixed inset-0 bg-booking-blue z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-bold">
             <${Link} to="/" className="hover:text-booking-yellow transition-colors" onClick=${closeMenu}>
               ${t('nav.home')}
             <//>
             <${Link} to="/about" className="hover:text-booking-yellow transition-colors" onClick=${closeMenu}>
               ${t('nav.about')}
             <//>
             <${Link} to="/properties" className="hover:text-booking-yellow transition-colors" onClick=${closeMenu}>
               ${t('nav.properties')}
             <//>
           </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        ${children}
      </main>

      <footer className="bg-white border-t border-gray-200 pt-10 pb-8 mt-auto">
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
