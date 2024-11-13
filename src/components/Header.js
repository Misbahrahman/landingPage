import React from 'react';
import { Menu, X } from 'lucide-react';
import { GradientButton, NavLink } from './Button';
import Logo from './Logo';


export const Header = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollY, 
  onNavClick 
}) => {
  const navItems = ['Services', 'Industries', 'About', 'Contact'];

  return (
    <header className={`
      fixed top-0 left-0 right-0 
      bg-black/80 backdrop-blur-md z-50 
      border-b border-gray-800 
      transition-all duration-300 
      ${scrollY > 50 ? 'py-1' : 'py-2'}
    `}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item}
              onClick={() => onNavClick(item.toLowerCase())}
            >
              {item}
            </NavLink>
          ))}
          <GradientButton size="default">
            Get Started
          </GradientButton>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden p-4 border-t border-gray-800 bg-black/95 backdrop-blur-md">
          {navItems.map((item) => (
            <NavLink
              key={item}
              onClick={() => onNavClick(item.toLowerCase())}
              isMobile
            >
              {item}
            </NavLink>
          ))}
          <GradientButton 
            className="w-full mt-4"
            size="default"
          >
            Get Started
          </GradientButton>
        </nav>
      )}
    </header>
  );
};