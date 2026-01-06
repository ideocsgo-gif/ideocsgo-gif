
import React from 'react';
import { APARTMENTS } from '../constants.js';
import { ListingCard } from '../components/ListingCard.js';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const Home = () => {
  const { t } = useLanguage();

  return html`
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 mt-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">${t('featured.title')}</h2>
          <div className="text-sm font-medium text-gray-500">
            5 ${t('featured.badge')} found in Warsaw
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${APARTMENTS.map((apt) => html`<${ListingCard} key=${apt.id} apartment=${apt} />`)}
        </div>
      </div>
    </div>
  `;
};
