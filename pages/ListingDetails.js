
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { APARTMENTS } from '../constants.js';
import { Button } from '../components/Button.js';
import { useLanguage } from '../context/LanguageContext.js';
import { html } from 'htm/react';

const API_BASE_URL = 'https://hrdtkk0-production.up.railway.app'; 

export const ListingDetails = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language, t } = useLanguage();
  
  const [bookingStep, setBookingStep] = useState('form');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = APARTMENTS.find((a) => a.id === id);
    if (found) {
      setApartment(found);
      setFormData(prev => ({ ...prev, guests: 1 }));
    }
    setLoading(false);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmPayment = async () => {
    if (!apartment) return;
    setIsProcessing(true);
    setError(null);
    const title = language === 'pl' ? apartment.title_pl || apartment.title : apartment.title;
    try {
      const response = await fetch(`${API_BASE_URL}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          apartmentTitle: title,
          paymentMethod: 'blik'
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setBookingStep('success');
      } else {
        setError(data.error || 'Server error');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) return html`<div className="min-h-screen flex items-center justify-center">${t('loading')}</div>`;
  if (!apartment) return html`<div className="min-h-screen flex flex-col items-center justify-center"><h2>${t('notFound')}</h2></div>`;

  const title = language === 'pl' ? apartment.title_pl || apartment.title : apartment.title;
  const description = language === 'pl' ? apartment.description_pl || apartment.description : apartment.description;
  const location = language === 'pl' ? apartment.location_pl || apartment.location : apartment.location;

  return html`
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-extrabold text-gray-900">${title}</h1>
          <${Link} to="/" className="text-gray-600 hover:text-gray-900">${t('detail.close')}<//>
        </div>

        <div className="relative h-[40vh] rounded-2xl overflow-hidden mb-8 shadow-inner">
           <img src=${apartment.images[0]} className="w-full h-full object-cover" alt=${title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-indigo-900">${location}</h2>
            <div className="flex gap-4 mb-6 text-sm text-gray-600 font-medium">
              <span>👥 ${apartment.guests} ${t('detail.guests')}</span>
              <span>🛏️ ${apartment.beds} ${t('detail.beds')}</span>
              <span>🚿 ${apartment.baths} ${t('detail.baths')}</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">${description}</p>
          </div>

          <div className="relative">
             <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                ${bookingStep === 'form' && html`
                  <form onSubmit=${(e) => { e.preventDefault(); setBookingStep('payment'); }}>
                    <div className="flex justify-between items-baseline mb-6">
                      <span className="text-3xl font-bold">$${apartment.pricePerNight}</span>
                      <span className="text-gray-500">${t('book.price')}</span>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <input type="date" name="checkIn" required value=${formData.checkIn} onChange=${handleInputChange} className="w-full border p-2 rounded-lg text-xs" />
                        <input type="date" name="checkOut" required value=${formData.checkOut} onChange=${handleInputChange} className="w-full border p-2 rounded-lg text-xs" />
                      </div>
                      <select name="guests" value=${formData.guests} onChange=${handleInputChange} className="w-full border p-2 rounded-lg text-sm bg-white">
                        ${[...Array(apartment.guests)].map((_, i) => html`<option key=${i + 1} value=${i + 1}>${i + 1} ${t('detail.guests')}</option>`)}
                      </select>
                      <input type="text" name="firstName" placeholder=${t('book.firstName')} required value=${formData.firstName} onChange=${handleInputChange} className="w-full border p-3 rounded-xl text-sm" />
                      <input type="email" name="email" placeholder=${t('book.email')} required value=${formData.email} onChange=${handleInputChange} className="w-full border p-3 rounded-xl text-sm" />
                      <${Button} type="submit" fullWidth className="py-4 shadow-lg shadow-indigo-100">${t('book.reserve')}<//>
                    </div>
                  </form>
                `}
                
                ${bookingStep === 'payment' && html`
                  <div>
                    <h3 className="font-bold text-xl mb-6">${t('pay.title')}</h3>
                    <div className="w-full flex items-center justify-between p-4 border-2 border-indigo-600 bg-indigo-50 rounded-xl mb-6">
                      <div className="flex items-center gap-3">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Blik_logo.svg" className="h-4" alt="blik" />
                         <span className="font-bold">BLIK</span>
                      </div>
                    </div>
                    ${error && html`<div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg">${error}</div>`}
                    <${Button} onClick=${handleConfirmPayment} fullWidth disabled=${isProcessing} className="py-4">
                      ${isProcessing ? t('pay.processing') : t('pay.confirm')}
                    <//>
                  </div>
                `}

                ${bookingStep === 'success' && html`
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">✓</div>
                    <h3 className="text-xl font-bold mb-2">${t('success.title')}</h3>
                    <${Link} to="/" className="block w-full bg-indigo-600 text-white py-4 rounded-xl font-bold mt-8">${t('success.back')}<//>
                  </div>
                `}
             </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
