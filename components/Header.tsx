
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Styled to match the provided image */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-12 h-10 flex items-center justify-center overflow-hidden rounded-md bg-white">
             <span className="text-2xl font-black tracking-tighter flex items-baseline relative z-10">
                <span className="text-cyan-600 leading-none">A</span>
                <span className="text-lime-500 leading-none -ml-1">G</span>
             </span>
             <div className="absolute bottom-1 w-6 h-0.5 bg-blue-600"></div>
             <div className="absolute bottom-2 w-6 h-0.5 bg-blue-500"></div>
             <div className="absolute bottom-3 w-6 h-0.5 bg-blue-400"></div>
          </div>
          <div className={`flex flex-col leading-none font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            <span className="text-lg">AG</span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">Heating & Air</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center space-x-8 font-semibold ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
          <a href="#services" className="hover:text-lime-500 transition-colors">Services</a>
          <a href="#reviews" className="hover:text-lime-500 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-lime-500 transition-colors">Contact</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-4">
          <a 
            href="tel:8002110708" 
            className="flex items-center space-x-2 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-lime-200/50"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">(800) 211-0708</span>
          </a>
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-2xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold py-2 border-b border-gray-50">Services</a>
          <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold py-2 border-b border-gray-50">Reviews</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 font-bold py-2 border-b border-gray-50">Contact</a>
          <div className="pt-4">
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin size={16} className="mr-2 text-lime-500" />
              14620 Keswick St, Van Nuys, CA
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
