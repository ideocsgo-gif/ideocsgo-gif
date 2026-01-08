
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const SafetyResources = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ShieldIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  `;

  const SirenIcon = () => html`
    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  `;

  const PhoneIcon = () => html`
    <svg className="w-6 h-6 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  `;

  const FirstAidIcon = () => html`
    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
    </svg>
  `;

  const LightBulbIcon = () => html`
    <svg className="w-6 h-6 text-booking-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  `;

  const CheckIcon = () => html`
    <svg className="w-5 h-5 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  `;

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-booking-blue py-12 text-white text-center px-4">
        <h1 className="text-3xl font-bold">${t('safety.title')}</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
        
        <!-- Intro -->
        <section className="text-center max-w-3xl mx-auto">
           <p className="text-gray-700 leading-relaxed text-lg">
             ${t('safety.intro')}
           </p>
        </section>

        <!-- Apartment Safety -->
        <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
           <div className="flex items-center gap-3 mb-6">
              <${ShieldIcon} />
              <h2 className="text-2xl font-bold text-gray-900">${t('safety.aptTitle')}</h2>
           </div>
           <p className="text-gray-700 mb-6">${t('safety.aptIntro')}</p>
           <ul className="grid md:grid-cols-2 gap-4 mb-6">
             ${[1, 2, 3, 4].map(i => html`
               <li className="flex items-start gap-3">
                 <div className="mt-0.5"><${CheckIcon} /></div>
                 <span className="text-gray-800 font-medium">${t(`safety.apt${i}`)}</span>
               </li>
             `)}
           </ul>
           <p className="text-gray-600 italic text-sm border-t border-gray-200 pt-4">
             ${t('safety.aptOutro')}
           </p>
        </section>

        <!-- Emergency Contacts -->
        <section>
          <div className="flex items-center gap-3 mb-6">
             <${SirenIcon} />
             <h2 className="text-2xl font-bold text-gray-900">${t('safety.emergencyTitle')}</h2>
          </div>
          <p className="text-gray-700 mb-6">${t('safety.emergencyIntro')}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-red-50 border border-red-100 p-6 rounded-lg text-center">
                <span className="text-4xl font-bold text-red-600 block mb-2">112</span>
                <span className="font-bold text-gray-900">${t('safety.emergency1')}</span>
             </div>
             <div className="space-y-4">
                ${[2, 3, 4].map(i => html`
                  <div className="flex items-center justify-between bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                     <span className="font-bold text-gray-800">${t(`safety.emergency${i}`).split(':')[0]}</span>
                     <span className="text-xl font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded">${t(`safety.emergency${i}`).split(':')[1]}</span>
                  </div>
                `)}
             </div>
          </div>
        </section>

        <!-- During Stay & Contact -->
        <section className="grid md:grid-cols-2 gap-8">
           <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
             <div className="flex items-center gap-3 mb-4">
                <${PhoneIcon} />
                <h2 className="text-xl font-bold text-gray-900">${t('safety.duringTitle')}</h2>
             </div>
             <p className="text-gray-700 mb-6">${t('safety.duringText')}</p>
             <div className="space-y-3">
               <div className="flex items-center gap-3">
                  <span className="font-bold text-booking-action">📞</span>
                  <a href="tel:+48730983091" className="font-bold text-gray-900 hover:text-booking-action">+48 730 983 091</a>
               </div>
               <div className="flex items-center gap-3">
                  <span className="font-bold text-booking-action">📧</span>
                  <a href="mailto:support@stayinwarsaw.pl" className="font-bold text-gray-900 hover:text-booking-action">support@stayinwarsaw.pl</a>
               </div>
             </div>
           </div>

           <div className="bg-green-50 p-8 rounded-xl border border-green-100">
             <div className="flex items-center gap-3 mb-4">
                <${FirstAidIcon} />
                <h2 className="text-xl font-bold text-gray-900">${t('safety.healthTitle')}</h2>
             </div>
             <p className="text-gray-700 leading-relaxed">
               ${t('safety.healthText')}
             </p>
           </div>
        </section>

        <!-- Safety Tips -->
        <section>
          <div className="flex items-center gap-3 mb-6">
             <${LightBulbIcon} />
             <h2 className="text-2xl font-bold text-gray-900">${t('safety.tipsTitle')}</h2>
          </div>
          <p className="text-gray-700 mb-6">${t('safety.tipsIntro')}</p>
          <ul className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
             ${[1, 2, 3, 4].map(i => html`
               <li className="flex items-start gap-4">
                 <div className="w-6 h-6 rounded-full bg-booking-yellow/20 text-booking-yellow flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                   ${i}
                 </div>
                 <span className="text-gray-800 font-medium">${t(`safety.tip${i}`)}</span>
               </li>
             `)}
          </ul>
        </section>

        <!-- Commitment -->
        <section className="text-center pt-8 border-t border-gray-200">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">${t('safety.commitmentTitle')}</h2>
           <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-8 whitespace-pre-line">
             ${t('safety.commitmentText')}
           </p>
           <p className="font-bold text-booking-action text-lg">${t('safety.footer')}</p>
        </section>

      </div>
    </div>
  `;
};
