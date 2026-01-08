
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BuildingIcon = () => html`
    <svg className="w-5 h-5 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  `;

  const CouchIcon = () => html`
    <svg className="w-5 h-5 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12V8H4v4M20 12a2 2 0 012 2v6h-2v-2H4v2H2v-6a2 2 0 012-2m16 0h-2m-14 0H4m4 6v-2m8 2v-2" />
    </svg>
  `;

  const SparklesIcon = () => html`
    <svg className="w-5 h-5 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  `;

  const LocationIcon = () => html`
    <svg className="w-5 h-5 text-booking-action" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  `;

  const CheckIcon = () => html`
    <svg className="w-5 h-5 text-booking-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  `;

  return html`
    <div className="bg-white min-h-screen pb-16">
      <!-- Header -->
      <div className="bg-booking-blue py-12 text-white text-center px-4">
        <h1 className="text-3xl font-bold">${t('about.title')}</h1>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-16">
        
        <!-- Welcome Section -->
        <section className="text-center max-w-3xl mx-auto">
           <h2 className="text-xl font-bold text-gray-900 mb-6">${t('about.welcome')}</h2>
           <p className="text-gray-700 leading-relaxed text-lg">
             ${t('about.missionIntro')}
           </p>
        </section>

        <!-- Our Apartments -->
        <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">${t('about.apartmentsTitle')}</h2>
          <p className="text-gray-700 mb-6">${t('about.apartmentsIntro')}</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1"><${BuildingIcon} /></div>
              <span className="text-gray-800 font-medium">${t('about.apt1')}</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1"><${CouchIcon} /></div>
              <span className="text-gray-800 font-medium">${t('about.apt2')}</span>
            </div>
            <div className="flex items-start gap-3">
               <div className="mt-1"><${SparklesIcon} /></div>
               <span className="text-gray-800 font-medium">${t('about.apt3')}</span>
            </div>
            <div className="flex items-start gap-3">
               <div className="mt-1"><${LocationIcon} /></div>
               <span className="text-gray-800 font-medium">${t('about.apt4')}</span>
            </div>
          </div>
          <p className="text-gray-700 italic border-l-4 border-booking-action pl-4 py-2 bg-white rounded-r-md">
            ${t('about.apartmentsOutro')}
          </p>
        </section>

        <!-- Our Vision -->
        <section>
           <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">${t('about.visionTitle')}</h2>
           <p className="text-gray-700 leading-relaxed text-lg">
             ${t('about.visionText')}
           </p>
        </section>

        <!-- Why Choose Us -->
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">${t('about.whyTitle')}</h2>
          <ul className="grid md:grid-cols-1 gap-4">
            ${[1, 2, 3, 4, 5].map(i => html`
              <li className="flex items-start gap-3">
                <div className="mt-1"><${CheckIcon} /></div>
                <span className="text-gray-800 font-medium text-lg">${t(`about.why${i}`)}</span>
              </li>
            `)}
          </ul>
        </section>

        <!-- Partners -->
        <section className="bg-booking-blue/5 p-8 rounded-xl">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">${t('about.partnersTitle')}</h2>
           <p className="text-gray-700 leading-relaxed text-lg">
             ${t('about.partnersText')}
           </p>
        </section>

        <!-- Confidence & Slogan -->
        <section className="text-center pt-8 border-t border-gray-200">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">${t('about.confidenceTitle')}</h2>
           <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto mb-8">
             ${t('about.confidenceText')}
           </p>
           <div className="text-xl md:text-2xl font-bold text-booking-action tracking-tight">
             ${t('about.slogan')}
           </div>
        </section>

      </div>
    </div>
  `;
};
