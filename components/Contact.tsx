
import React from 'react';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <span className="text-lime-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">Ready for a <br /><span className="text-lime-500">Fresh Start?</span></h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed">
                Contact Abel and the team for reliable service that doesn't break the bank. We're ready when you are.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-lime-50 p-8 rounded-[2rem] border border-lime-100 shadow-sm">
                <div className="w-12 h-12 bg-white text-lime-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Phone size={24} strokeWidth={2.5} />
                </div>
                <h4 className="font-black text-gray-900 text-lg mb-1">Call Us Now</h4>
                <p className="text-lime-700 font-bold">(800) 211-0708</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-white text-gray-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Clock size={24} strokeWidth={2.5} />
                </div>
                <h4 className="font-black text-gray-900 text-lg mb-1">Our Hours</h4>
                <p className="text-gray-600 font-bold">Opens 7 AM Mon</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-[2rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                <MapPin size={100} />
              </div>
              <div className="relative z-10">
                <h4 className="font-black text-xl mb-2">Our Location</h4>
                <p className="text-gray-300 font-medium mb-6">14620 Keswick St, Van Nuys, CA 91405</p>
                <div className="flex items-center space-x-2 text-lime-400 font-bold text-sm mb-6">
                   <CheckCircle size={16} />
                   <span>Serving All Van Nuys Residents</span>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-lime-500 text-white rounded-xl font-black text-sm hover:bg-lime-600 transition-colors shadow-lg shadow-lime-500/20"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-lime-900/5 border border-lime-50">
            <h3 className="text-3xl font-black text-gray-900 mb-8">Fast Quote Request</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all font-semibold text-gray-900" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all font-semibold text-gray-900" 
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all font-semibold text-gray-900" 
              />
              <textarea 
                rows={4} 
                placeholder="Message"
                className="w-full px-6 py-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-lime-500/10 focus:border-lime-500 transition-all font-semibold text-gray-900"
              ></textarea>
              <button className="w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white font-black py-6 rounded-2xl shadow-xl shadow-lime-200 transition-all transform hover:-translate-y-1 text-lg">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
