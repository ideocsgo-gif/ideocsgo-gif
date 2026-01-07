
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const ListYourProperty = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-booking-blue py-16 text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">${t('partner.subtitle')}</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">${t('partner.title')}</p>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12">
        
        <div className="flex justify-center mb-10">
          <img 
             src="https://img.icons8.com/fluency/480/handshake.png" 
             alt="Partnership" 
             className="w-64 h-64 drop-shadow-lg"
          />
        </div>

        <div className="mb-12 text-center">
           <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
             ${t('partner.intro')}
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">${t('partner.whyTitle')}</h2>
             <ul className="space-y-4">
               ${[1, 2, 3, 4, 5].map(i => html`
                 <li className="flex items-start gap-3">
                   <span className="text-booking-action font-bold flex-shrink-0">✓</span>
                   <span className="text-gray-800 font-medium pt-0.5">${t(`partner.why${i}`)}</span>
                 </li>
               `)}
             </ul>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-bold text-gray-900 mb-6">${t('partner.whoTitle')}</h2>
             <ul className="space-y-4 mb-8">
               ${[1, 2, 3].map(i => html`
                 <li className="flex items-start gap-3">
                   <span className="text-booking-action font-bold flex-shrink-0">✓</span>
                   <span className="text-gray-800 font-medium pt-0.5">${t(`partner.who${i}`)}</span>
                 </li>
               `)}
             </ul>
             <p className="text-gray-700 italic border-l-4 border-booking-action pl-4 py-2 bg-gray-50 rounded-r-md">
               ${t('partner.agencyText')}
             </p>
          </div>
        </div>

        <div className="bg-booking-blue text-white p-10 rounded-2xl text-center shadow-lg">
           <h2 className="text-3xl font-bold mb-6">${t('partner.growTitle')}</h2>
           <p className="text-lg leading-relaxed whitespace-pre-line opacity-90">
             ${t('partner.growText')}
           </p>
        </div>
        
      </div>
    </div>
  `;
};
