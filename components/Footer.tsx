
import React from 'react';
import { Phone, MapPin, Wind } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-10 flex items-center justify-center overflow-hidden rounded-md">
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-lime-400 opacity-20"></div>
                 <span className="text-2xl font-black tracking-tighter flex items-baseline">
                    <span className="text-cyan-600 leading-none">A</span>
                    <span className="text-lime-500 leading-none -ml-1">G</span>
                 </span>
                 <div className="absolute bottom-1 w-6 h-0.5 bg-blue-600"></div>
                 <div className="absolute bottom-2 w-6 h-0.5 bg-blue-500"></div>
                 <div className="absolute bottom-3 w-6 h-0.5 bg-blue-400"></div>
              </div>
              <div className="flex flex-col leading-none font-black tracking-tight text-gray-900">
                <span className="text-xl">AG Heating & Air</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Van Nuys Professional</span>
              </div>
            </div>
            <p className="max-w-md text-gray-500 text-lg font-medium leading-relaxed">
              Serving the San Fernando Valley and beyond with premium cooling and heating solutions. High-quality work at a price that fits your budget.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all shadow-sm">
                <Wind size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-black text-lg mb-8 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-5 font-bold text-gray-500">
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-cyan-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Get a Quote</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-black text-lg mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6 font-bold text-gray-500">
              <li className="flex items-start">
                <MapPin size={20} className="mr-4 text-cyan-500 mt-1 shrink-0" />
                <span>14620 Keswick St, <br />Van Nuys, CA 91405</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-4 text-cyan-500 shrink-0" />
                <span>(800) 211-0708</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 font-bold text-sm">
            © {new Date().getFullYear()} AG HEATING & AIR CONDITIONING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-xl">
               <span className="text-sm font-black text-gray-600 mr-3">GOOGLE RATING</span>
               <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Wind key={i} size={14} fill="currentColor" />)}
               </div>
               <span className="ml-2 font-black text-gray-900">4.3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
