
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

export const ListingCard = ({ apartment }) => {
  const { language, t } = useLanguage();
  
  const title = language === 'pl' ? apartment.title_pl || apartment.title : apartment.title;
  const location = language === 'pl' ? apartment.location_pl || apartment.location : apartment.location;

  return html`
    <div className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden hover:border-gray-300 transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src=${apartment.images[0]} 
          alt=${title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-booking-blue text-white font-bold text-xs px-1.5 py-1 rounded-t-md rounded-br-md">
          ${apartment.rating.toFixed(1)}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 mb-1">
          <${Link} to=${`/listing/${apartment.id}`} className="text-booking-action font-bold text-lg hover:underline decoration-1 leading-snug">
            ${title}
          <//>
        </div>

        <div className="text-xs text-booking-action underline mb-3 cursor-pointer">
          ${location}
        </div>
        
        <div className="mt-auto pt-4 flex flex-col items-end border-t border-gray-100">
          <div className="text-[10px] text-gray-500">Price for 1 night</div>
          <div className="text-xl font-bold leading-tight">PLN ${apartment.pricePerNight}</div>
          <div className="text-[10px] text-gray-500 mb-3">Includes taxes and fees</div>
          <${Link} to=${`/listing/${apartment.id}`} className="bg-booking-action text-white px-4 py-2 rounded-md font-bold text-sm w-full text-center hover:bg-[#0052ad]">
            ${t('card.view')}
          <//>
        </div>
      </div>
    </div>
  `;
};
