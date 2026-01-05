
import React from 'react';
import { html } from 'htm/react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 focus:ring-indigo-500",
    outline: "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500"
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
