import React from 'react';

export const Section = ({ 
  id, 
  children, 
  className = '', 
  gradient = false 
}) => {
  const baseStyles = "px-4 py-20";
  const gradientStyles = gradient ? 'bg-gradient-to-b from-black to-gray-900' : '';

  return (
    <section id={id} className={`${baseStyles} ${gradientStyles} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  index = 0 
}) => {
  const variants = {
    default: `
      p-6 rounded-2xl 
      bg-gradient-to-br from-gray-800 to-gray-900 
      border border-gray-700 hover:border-blue-500
    `,
    industry: `
      p-4 rounded-xl 
      bg-gradient-to-br from-blue-900/20 to-orange-900/20 
      border border-gray-800 hover:border-orange-500 
      min-h-[140px] w-[300px]
    `
  };

  return (
    <div 
      className={`
        ${variants[variant]}
        transition-all duration-500 ease-out
        hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/30
        flex flex-col items-center justify-center
        opacity-0 animate-zoomInRotate
        ${className}
      `}
      style={{ 
        animationDelay: `${index * 0.15}s`,
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};