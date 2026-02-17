
import React from 'react';
import { Wind, Thermometer, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'AC Installation',
    desc: 'Expertly sized and professionally installed air conditioning units for your home or rental property.',
    icon: Wind,
    color: 'bg-cyan-50 text-cyan-600 border-cyan-100'
  },
  {
    title: 'Heating Solutions',
    desc: 'Reliable furnace and heater repairs to keep your home warm and cozy during the winter months.',
    icon: Thermometer,
    color: 'bg-lime-50 text-lime-600 border-lime-100'
  },
  {
    title: 'HVAC Repair',
    desc: 'Quick response service for broken units. Abel and the team diagnose issues fast and fix them at a great price.',
    icon: Settings,
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    title: 'Maintenance Plans',
    desc: 'Routine checks and cleaning to ensure your HVAC system runs efficiently and lasts for years.',
    icon: ShieldCheck,
    color: 'bg-gray-50 text-gray-600 border-gray-100'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Premium Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-500">Total Comfort</span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg font-medium max-w-sm">
            Serving Van Nuys and Greater LA with specialized heating and cooling care since day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-100 transition-all duration-500 flex flex-col">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform duration-500 ${s.color}`}>
                <s.icon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">
                {s.desc}
              </p>
              <a href="#contact" className="inline-flex items-center text-cyan-600 font-bold hover:translate-x-2 transition-transform">
                Get Service <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
