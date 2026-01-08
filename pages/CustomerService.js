
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const CustomerService = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CalendarIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  `;

  const EditIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  `;

  const KeyIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  `;

  const CardIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  `;

  const SupportIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238l7.824 4.062a1.75 1.75 0 001.559-.002l7.824-4.062a9 9 0 01-2.167 9.238z" />
    </svg>
  `;

  const ChatIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  `;

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-booking-blue py-12 text-white text-center px-4">
        <h1 className="text-3xl font-bold">${t('service.title')}</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
        
        <section className="text-center max-w-3xl mx-auto">
           <p className="text-gray-700 leading-relaxed text-lg">
             ${t('service.intro')}
           </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">${t('service.howTitle')}</h2>
          <p className="text-gray-600 mb-6">${t('service.howIntro')}</p>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${CalendarIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help1')}</span>
             </div>
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${EditIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help2')}</span>
             </div>
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${KeyIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help3')}</span>
             </div>
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${CardIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help4')}</span>
             </div>
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${SupportIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help5')}</span>
             </div>
             <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="mt-1"><${ChatIcon} /></div>
                <span className="text-gray-800 font-medium">${t('service.help6')}</span>
             </div>
          </div>
        </section>

        <div className="bg-booking-blue/5 border border-booking-blue/10 rounded-xl p-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">${t('service.contactTitle')}</h2>
           <p className="text-gray-600 mb-6">${t('service.contactText')}</p>
           
           <div className="flex flex-col md:flex-row gap-8 mb-6">
             <a href="mailto:help@stayinwarsaw.pl" className="flex items-center gap-3 text-booking-action font-bold hover:underline bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 w-full md:w-auto">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               help@stayinwarsaw.pl
             </a>
             <a href="tel:+48730983091" className="flex items-center gap-3 text-booking-action font-bold hover:underline bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-100 w-full md:w-auto">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
               +48 730 983 091
             </a>
           </div>
           
           <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ${t('service.hours')}
           </div>
           <p className="text-sm text-gray-500">${t('service.response')}</p>
        </div>

        <section>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
             <h3 className="text-xl font-bold text-gray-900 mb-2">${t('service.duringTitle')}</h3>
             <p className="text-gray-700 whitespace-pre-line">${t('service.duringText')}</p>
          </div>
        </section>

        <section className="space-y-6">
           <div>
             <h3 className="text-lg font-bold text-gray-900 mb-2">${t('service.faqTitle')}</h3>
             <p className="text-gray-600">${t('service.faqText')}</p>
           </div>
           
           <div className="border-t border-gray-200 pt-8 text-center">
             <h3 className="text-xl font-bold text-gray-900 mb-2">${t('service.hereTitle')}</h3>
             <p className="text-gray-600 mb-6">${t('service.hereText')}</p>
             <p className="font-bold text-booking-action text-lg">${t('service.thanks')}</p>
           </div>
        </section>

      </div>
    </div>
  `;
};
