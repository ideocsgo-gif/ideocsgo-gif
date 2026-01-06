
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
  const [isChecking, setIsChecking] = useState(false);
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

  // Lightbox State
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = APARTMENTS.find((a) => a.id === id);
    if (found) {
      setApartment(found);
    }
    setLoading(false);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) return 0;
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const totalPrice = apartment ? (nights || 1) * apartment.pricePerNight : 0;

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    if (!formData.checkIn || !formData.checkOut) {
      setError(language === 'pl' ? 'Wybierz daty' : 'Please select dates');
      return;
    }
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
       setError(language === 'pl' ? 'Wypełnij wszystkie pola' : 'Please fill in all fields');
       return;
    }

    setIsChecking(true);
    // Simulate a check delay
    setTimeout(() => {
      setIsChecking(false);
      setBookingStep('payment');
    }, 1000);
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
          paymentMethod: 'blik',
          totalPrice: `PLN ${totalPrice}`,
          nights: nights || 1
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setBookingStep('success');
      } else {
        setError(data.error || 'Server error');
      }
    } catch (err) {
      setError('Connection failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  if (loading) return html`<div className="min-h-screen flex items-center justify-center font-bold text-gray-500">${t('loading')}</div>`;
  if (!apartment) return html`<div className="min-h-screen flex flex-col items-center justify-center font-bold text-gray-500"><h2>${t('notFound')}</h2></div>`;

  const title = language === 'pl' ? apartment.title_pl || apartment.title : apartment.title;
  const description = language === 'pl' ? apartment.description_pl || apartment.description : apartment.description;
  const location = language === 'pl' ? apartment.location_pl || apartment.location : apartment.location;
  const today = new Date().toISOString().split('T')[0];

  const renderStars = (rating) => {
    const stars = Math.floor(rating);
    return html`<span className="text-booking-yellow text-xs">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>`;
  };

  return html`
    <div className="pb-20 bg-white">
      
      ${activePhotoIndex !== null && html`
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center select-none" onClick=${closeLightbox}>
          <button className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-colors" onClick=${closeLightbox}>×</button>
          
          <button className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors" onClick=${prevPhoto}>
            <span className="text-2xl">❮</span>
          </button>
          
          <img 
            src=${apartment.images[activePhotoIndex]} 
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" 
            onClick=${(e) => e.stopPropagation()} 
          />
          
          <button className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors" onClick=${nextPhoto}>
            <span className="text-2xl">❯</span>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
            ${activePhotoIndex + 1} / ${apartment.images.length}
          </div>
        </div>
      `}

      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
               <span className="bg-gray-400 text-white text-[10px] font-bold px-1 rounded-sm uppercase tracking-tighter">Apartment</span>
               <div className="flex text-booking-yellow text-xs font-bold">★★★★★</div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">${title}</h1>
            <div className="flex items-center gap-2 text-sm text-booking-action mt-2 font-semibold">
               <span className="text-gray-900">📍</span>
               <span className="underline cursor-pointer">${location}</span>
               <span className="text-gray-400 font-normal">• Excellent location</span>
            </div>
          </div>
          <div className="flex gap-4">
             <button className="text-booking-action text-2xl font-light">♡</button>
             <${Link} to="/" className="bg-booking-action text-white px-6 py-2 rounded font-bold text-sm hover:bg-[#0052ad]">${t('detail.close')}<//>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] mb-8 overflow-hidden rounded-lg">
           <div className="col-span-2 row-span-2 relative">
              <img 
                src=${apartment.images[0]} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                onClick=${() => setActivePhotoIndex(0)}
              />
           </div>
           <div className="col-span-1 row-span-1">
              <img 
                src=${apartment.images[1] || apartment.images[0]} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                onClick=${() => setActivePhotoIndex(1)}
              />
           </div>
           <div className="col-span-1 row-span-1">
              <img 
                src=${apartment.images[2] || apartment.images[0]} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                onClick=${() => setActivePhotoIndex(2)}
              />
           </div>
           <div className="col-span-1 row-span-1">
              <img 
                src=${apartment.images[3] || apartment.images[0]} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                onClick=${() => setActivePhotoIndex(3)}
              />
           </div>
           <div className="col-span-1 row-span-1 relative">
              <img 
                src=${apartment.images[4] || apartment.images[0]} 
                className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity" 
                onClick=${() => setActivePhotoIndex(4)}
              />
              <div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-sm cursor-pointer"
                onClick=${() => setActivePhotoIndex(4)}
              >
                + more
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Description</h3>
            <p className="text-[#1a1a1a] leading-relaxed mb-10 text-[15px] font-medium opacity-90">${description}</p>
            
            <div className="border-t border-gray-200 pt-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-booking-blue text-white font-bold px-2 py-1 rounded-t-md rounded-br-md text-lg">
                  ${apartment.rating.toFixed(1)}
                </div>
                <div className="font-bold text-gray-900 text-lg">${t('reviews.title')}</div>
              </div>

              <div className="space-y-8">
                ${apartment.reviewsList.slice(0, 3).map(review => html`
                  <div key=${review.id} className="border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <div className="font-bold text-sm text-gray-900">${review.author}</div>
                        <div className="flex items-center gap-2">
                           ${renderStars(review.rating)}
                           <span className="text-[10px] text-gray-400 font-bold uppercase">${review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm italic text-gray-700 font-medium leading-relaxed mt-2">"${review.text}"</p>
                  </div>
                `)}
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="sticky top-20 bg-[#ebf3ff] p-6 rounded border border-gray-200 shadow-sm">
                ${bookingStep === 'form' && html`
                  <form onSubmit=${handleCheckAvailability}>
                    <h3 className="font-bold text-lg mb-6 text-gray-900">Reserve your stay</h3>

                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border border-gray-300">
                         <label className="block text-[10px] font-extrabold text-gray-500 uppercase mb-1">${t('book.checkIn')}</label>
                         <input type="date" name="checkIn" required min=${today} value=${formData.checkIn} onChange=${handleInputChange} className="w-full outline-none text-sm font-bold text-gray-800" />
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-300">
                         <label className="block text-[10px] font-extrabold text-gray-500 uppercase mb-1">${t('book.checkOut')}</label>
                         <input type="date" name="checkOut" required min=${formData.checkIn || today} value=${formData.checkOut} onChange=${handleInputChange} className="w-full outline-none text-sm font-bold text-gray-800" />
                      </div>
                      <div className="bg-white p-3 rounded border border-gray-300">
                        <label className="block text-[10px] font-extrabold text-gray-500 uppercase mb-1">${t('book.guests')}</label>
                        <select name="guests" value=${formData.guests} onChange=${handleInputChange} className="w-full outline-none bg-white text-sm font-bold text-gray-800">
                          ${[...Array(Math.max(7, apartment.guests))].map((_, i) => html`<option key=${i + 1} value=${i + 1}>${i + 1} adults</option>`)}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <input type="text" name="firstName" placeholder=${t('book.firstName')} required value=${formData.firstName} onChange=${handleInputChange} className="w-full border border-gray-300 p-3 rounded text-sm font-semibold outline-booking-action" />
                        <input type="text" name="lastName" placeholder=${t('book.lastName')} required value=${formData.lastName} onChange=${handleInputChange} className="w-full border border-gray-300 p-3 rounded text-sm font-semibold outline-booking-action" />
                      </div>
                      <input type="tel" name="phone" placeholder=${t('book.phone')} required value=${formData.phone} onChange=${handleInputChange} className="w-full border border-gray-300 p-3 rounded text-sm font-semibold outline-booking-action" />
                      <input type="email" name="email" placeholder=${t('book.email')} required value=${formData.email} onChange=${handleInputChange} className="w-full border border-gray-300 p-3 rounded text-sm font-semibold outline-booking-action" />

                      ${error && html`
                        <div className="bg-red-50 text-red-600 p-2 text-xs rounded mt-2 border border-red-100 font-bold">
                          ${error}
                        </div>
                      `}

                      <div className="pt-6 border-t border-gray-300 mt-6">
                        <div className="text-3xl font-bold mb-1 text-gray-900">PLN ${totalPrice || apartment.pricePerNight}</div>
                        <div className="text-[10px] text-gray-500 mb-6 font-bold uppercase tracking-wider">
                          ${nights > 1 
                            ? (language === 'pl' ? `za ${nights} nocy` : `for ${nights} nights`) 
                            : t('book.price')}
                        </div>
                        
                        <${Button} type="submit" fullWidth disabled=${isChecking} className="py-3 bg-booking-action text-white hover:bg-[#0052ad] font-bold rounded-md text-base">
                          ${isChecking ? t('book.checking') : t('book.reserve')}
                        <//>
                      </div>
                    </div>
                  </form>
                `}
                
                ${bookingStep === 'payment' && html`
                  <div>
                    <h3 className="font-bold text-lg mb-6 text-gray-900">${t('pay.title')}</h3>
                    <div className="bg-white p-4 rounded border border-gray-300 mb-6">
                       <div className="flex justify-between text-sm font-bold text-gray-900 mb-2">
                          <span className="text-gray-500">Guest</span>
                          <span>${formData.firstName} ${formData.lastName}</span>
                       </div>
                       <div className="flex justify-between text-sm font-bold text-gray-900">
                          <span className="text-gray-500">${t('book.total')}</span>
                          <span>PLN ${totalPrice}</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-booking-action bg-white rounded mb-6">
                       <div className="flex items-center gap-3">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Blik_logo.svg" className="h-4" />
                         <span className="font-bold text-sm text-gray-900">BLIK</span>
                       </div>
                    </div>

                    <${Button} onClick=${handleConfirmPayment} fullWidth disabled=${isProcessing} className="py-3 bg-booking-action text-white font-bold rounded-md">
                      ${isProcessing ? t('pay.processing') : t('pay.confirm')}
                    <//>
                    <button onClick=${() => setBookingStep('form')} className="mt-4 text-xs text-booking-action w-full text-center hover:underline font-bold">← ${t('pay.back')}</button>
                  </div>
                `}

                ${bookingStep === 'success' && html`
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-booking-success text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">✓</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">${t('success.title')}</h3>
                    <p className="text-xs text-gray-600 mb-8 font-medium leading-relaxed">${t('success.msg')}</p>
                    <${Link} to="/" className="block w-full bg-booking-action text-white py-3 rounded-md font-bold text-sm hover:bg-[#0052ad]">Return Home<//>
                  </div>
                `}
             </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
