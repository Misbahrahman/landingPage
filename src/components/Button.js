import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GradientButton = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'default',
  withArrow = false,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
}) => {
  const sizes = {
    small: 'px-4 py-1.5 text-sm',
    default: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3.5 text-lg'
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500
      hover:from-orange-400 hover:via-orange-300 hover:to-orange-400
      text-black font-semibold
      shadow-[0_0_20px_rgba(249,115,22,0.3)]
      hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
    `,
    secondary: `
      bg-gradient-to-r from-amber-500 to-orange-500
      hover:from-amber-400 hover:to-orange-400
      text-black font-semibold
      shadow-[0_0_20px_rgba(245,158,11,0.3)]
      hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]
    `,
    outline: `
      bg-transparent 
      border-2 border-orange-500
      hover:border-orange-400
      text-orange-500 hover:text-orange-400
      shadow-[0_0_20px_rgba(249,115,22,0.15)]
      hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]
    `,
    dark: `
      bg-gradient-to-r from-black to-gray-900
      hover:from-gray-900 hover:to-black
      text-orange-500
      border border-orange-500/30
      shadow-[0_0_20px_rgba(249,115,22,0.15)]
      hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-full font-medium 
        transition-all duration-300 ease-out
        transform hover:-translate-y-0.5 hover:scale-[1.02]
        active:scale-95
        inline-flex items-center justify-center gap-2
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
      {withArrow && (
        <ArrowRight 
          size={size === 'small' ? 16 : size === 'large' ? 24 : 20} 
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export const NavLink = ({ 
  children, 
  onClick, 
  isMobile = false,
  active = false,
  className = ''
}) => {
  const baseStyles = `
    relative
    text-gray-300 hover:text-white 
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:ring-offset-2 focus:ring-offset-black
  `;

  const mobileStyles = `
    block w-full py-2.5 px-4
    hover:bg-orange-500/10
    hover:translate-x-2
    rounded-lg
  `;

  const desktopStyles = `
    py-1 px-2
    hover:scale-105 transform
    after:content-[''] after:absolute after:bottom-0 after:left-0 
    after:w-full after:h-0.5 after:bg-orange-500
    after:transform after:scale-x-0 after:origin-left
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `;

  const activeStyles = active ? `
    text-orange-500
    after:scale-x-100
  ` : '';

  return (
    <button
      onClick={onClick}
      className={`
        ${baseStyles}
        ${isMobile ? mobileStyles : desktopStyles}
        ${activeStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};