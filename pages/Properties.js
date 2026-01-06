
import React from 'react';
import { APARTMENTS } from '../constants.js';
import { ListingCard } from '../components/ListingCard.js';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const Properties = () => {
  const { t } = useLanguage();

  return html`
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">${t('props.title')}</h1>
          <p className="text-gray-500">${t('props.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${APARTMENTS.map((apt) => html`<${ListingCard} key=${apt.id} apartment=${apt} />`)}
        </div>
      </div>
    </div>
  `;
};
