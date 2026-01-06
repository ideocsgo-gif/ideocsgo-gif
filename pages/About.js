
import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const About = () => {
  const { t } = useLanguage();

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-booking-blue py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">${t('about.title')}</h1>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-4">${t('about.mission')}</h2>
             <p className="text-gray-600 leading-relaxed text-lg">
               ${t('about.missionText')}
             </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-64">
             <img src="https://picsum.photos/seed/warsaw1/800/600" className="w-full h-full object-cover" alt="Mission" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center direction-rtl">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 md:order-1 order-2">
             <img src="https://picsum.photos/seed/warsaw2/800/600" className="w-full h-full object-cover" alt="History" />
          </div>
          <div className="md:order-2 order-1">
             <h2 className="text-2xl font-bold text-gray-900 mb-4">${t('about.history')}</h2>
             <p className="text-gray-600 leading-relaxed text-lg">
               ${t('about.historyText')}
             </p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100 text-center">
           <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
           <p className="text-gray-500">We are always here to help you have the best stay possible.</p>
        </div>
      </div>
    </div>
  `;
};
