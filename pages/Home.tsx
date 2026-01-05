import React from 'react';
import { APARTMENTS } from '../constants';
import { ListingCard } from '../components/ListingCard';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <div className="bg-indigo-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/42/1920/1080')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto mb-8">
            {t('hero.desc')}
          </p>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('featured.title')}</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                5 {t('featured.badge')}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                {t('featured.dates')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {APARTMENTS.map((apt) => (
            <ListingCard key={apt.id} apartment={apt} />
          ))}
        </div>
      </div>
    </div>
  );
};