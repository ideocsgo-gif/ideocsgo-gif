
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const PartnerHelp = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Icons as functional components for cleaner usage
  const MegaphoneIcon = () => html`
    <svg className="w-6 h-6 text-booking-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  `;

  const HandshakeIcon = () => html`
    <svg className="w-6 h-6 text-booking-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `;

  const BriefcaseIcon = () => html`
    <svg className="w-6 h-6 text-booking-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  `;

  const PhoneIcon = () => html`
    <svg className="w-6 h-6 text-booking-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238l7.824 4.062a1.75 1.75 0 001.559-.002l7.824-4.062a9 9 0 01-2.167 9.238z" />
    </svg>
  `;

  const ChartIcon = () => html`
    <svg className="w-6 h-6 text-booking-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  `;

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-booking-blue py-12 text-white text-center px-4">
        <h1 className="text-3xl font-bold">${t('partnerHelp.title')}</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
        
        <!-- How to List -->
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">${t('partnerHelp.howToListTitle')}</h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              ${[1, 2, 3, 4].map((step) => html`
                <div className="flex items-start gap-4 relative">
                  <div className="w-8 h-8 rounded-full bg-booking-blue text-white flex items-center justify-center font-bold text-sm shrink-0 z-10 ring-4 ring-white">
                    ${step}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-lg text-gray-800 font-medium">${t(`partnerHelp.step${step}`)}</p>
                  </div>
                </div>
              `)}
            </div>
          </div>
        </section>

        <!-- How We Support -->
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">${t('partnerHelp.supportTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1"><${MegaphoneIcon} /></div>
                <span className="text-gray-800 font-medium">${t('partnerHelp.support1')}</span>
             </div>
             <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1"><${HandshakeIcon} /></div>
                <span className="text-gray-800 font-medium">${t('partnerHelp.support2')}</span>
             </div>
             <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1"><${BriefcaseIcon} /></div>
                <span className="text-gray-800 font-medium">${t('partnerHelp.support3')}</span>
             </div>
             <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <div className="mt-1"><${PhoneIcon} /></div>
                <span className="text-gray-800 font-medium">${t('partnerHelp.support4')}</span>
             </div>
             <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg md:col-span-2">
                <div className="mt-1"><${ChartIcon} /></div>
                <span className="text-gray-800 font-medium">${t('partnerHelp.support5')}</span>
             </div>
          </div>
        </section>

        <!-- Responsibilities -->
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">${t('partnerHelp.responsibilitiesTitle')}</h2>
          <p className="text-gray-600 mb-4">${t('partnerHelp.responsibilitiesIntro')}</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            ${[1, 2, 3, 4].map(i => html`
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800">${t(`partnerHelp.res${i}`)}</span>
              </li>
            `)}
          </ul>
        </section>

        <!-- Commission -->
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">${t('partnerHelp.commissionTitle')}</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            ${t('partnerHelp.commissionText')}
          </p>
        </section>

        <!-- Contact Box -->
        <div className="bg-gray-100 rounded-xl p-8 text-center border border-gray-200">
           <h3 className="text-xl font-bold text-gray-900 mb-2">${t('partnerHelp.contactTitle')}</h3>
           <p className="text-gray-600 mb-6">${t('partnerHelp.contactText')}</p>
           
           <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
             <a href="mailto:partner@stayinwarsaw.pl" className="flex items-center justify-center gap-2 text-booking-action font-bold hover:underline">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               partner@stayinwarsaw.pl
             </a>
             <a href="tel:+48730983091" className="flex items-center justify-center gap-2 text-booking-action font-bold hover:underline">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
               +48 730 983 091
             </a>
           </div>
        </div>

      </div>
    </div>
  `;
};
