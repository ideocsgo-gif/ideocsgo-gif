
import React from 'react';
import { html } from 'htm/react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-booking-action text-white hover:bg-[#0052ad] focus:ring-[#006ce4]",
    secondary: "bg-white text-booking-action hover:bg-booking-light border border-booking-action focus:ring-[#006ce4]",
    outline: "bg-transparent border border-booking-action text-booking-action hover:bg-booking-light focus:ring-[#006ce4]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return html`
    <button 
      className=${`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      ...${props}
    >
      ${children}
    </button>
  `;
};
