
import React from 'react';
import { Star, CheckCircle, Calendar, Quote } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-50/30 skew-x-12 translate-x-32 hidden lg:block"></div>
        {/* Vibrant Glows */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-lime-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-gray-900 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="inline-flex items-center space-x-2 bg-lime-100 border border-lime-200 px-4 py-1.5 rounded-full shadow-sm">
            <div className="flex text-lime-600">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-lime-700 font-bold text-sm">#1 HVAC Experts in Van Nuys</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight text-gray-900">
            STAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500">COOL</span> <br />
            FEEL <span className="text-blue-600">FRESH</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-medium">
            AG Heating & Air Conditioning brings high-efficiency climate control to your doorstep. Experience premium service with a splash of green energy.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all transform hover:scale-105 shadow-2xl shadow-lime-500/20"
            >
              <Calendar className="mr-2" size={22} />
              Book Estimate
            </a>
            <a 
              href="tel:8002110708" 
              className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all shadow-sm"
            >
              (800) 211-0708
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            {[
              "7 AM Early Starts",
              "Expert Installers",
              "Green Efficiency",
              "Locally Trusted"
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-3 text-gray-700">
                <div className="bg-lime-500/10 p-1.5 rounded-md">
                  <CheckCircle className="text-lime-600" size={18} />
                </div>
                <span className="font-bold text-sm uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Replaced Form with Featured Image and Review Card */}
        <div className="hidden lg:block relative animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="relative group">
            {/* Main Featured Image - Representative of the provided photo of Abel */}
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-lime-900/10">
              <img 
                src="https://images.unsplash.com/photo-1581578731522-7b6349a276fc?auto=format&fit=crop&q=80&w=1000" 
                alt="Abel with Lennox AC Unit" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>

            {/* Floating 5-Star Review Badge */}
            <div className="absolute -bottom-6 -left-10 z-20 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-lime-100 max-w-xs transform hover:-rotate-2 transition-transform duration-500">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <Quote className="text-lime-500 absolute top-4 right-6 opacity-20" size={40} />
              <p className="text-gray-800 font-bold leading-relaxed mb-4">
                "Abel provides excellent service at a great price. He responded to our call quickly and fixed everything same day!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center text-white font-black mr-3 shadow-md">
                  V
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-sm">Verified Resident</h4>
                  <p className="text-lime-600 font-bold text-[10px] uppercase tracking-widest">Van Nuys, CA</p>
                </div>
              </div>
            </div>

            {/* Background Accent Circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-500/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
