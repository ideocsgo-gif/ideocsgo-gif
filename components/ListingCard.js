
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const ListingCard = ({ apartment }) => {
  const { language, t } = useLanguage();
  
  const title = language === 'pl' ? apartment.title_pl || apartment.title : apartment.title;
  const description = language === 'pl' ? apartment.description_pl || apartment.description : apartment.description;
  const location = language === 'pl' ? apartment.location_pl || apartment.location : apartment.location;

  return html`
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src=${apartment.images[0]} 
          alt=${title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm">
          ★ ${apartment.rating}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">
          ${location}
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
          ${title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
          ${description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-gray-900">$${apartment.pricePerNight}</span>
            <span className="text-gray-500 text-sm"> ${t('card.night')}</span>
          </div>
          <${Link} to=${`/listing/${apartment.id}`}>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
              ${t('card.view')}
            </button>
          <//>
        </div>
      </div>
    </div>
  `;
};
