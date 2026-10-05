import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Clock, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  appBarberUrl: string;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, appBarberUrl }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'barba', label: 'Barba' },
    { id: 'outros', label: 'Tratamentos & Estética' },
  ];

  const filteredServices = services.filter((service) => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'cabelo') return service.category === 'cabelo';
    if (activeCategory === 'barba') return service.category === 'barba';
    if (activeCategory === 'outros') return service.category === 'estetica' || service.category === 'tratamentos';
    return true;
  });

  return (
    <section id="servicos" className="py-20 bg-[#090d10] border-b border-[#172124]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#00c9b7]">
            Cardápio Oficial
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
            Serviços & Valores
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            Escolha o cuidado que melhor combina com o seu momento.
          </p>
        </div>

        {/* Clean, essential category tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#00c9b7] text-black shadow-md shadow-[#00a896]/20'
                  : 'bg-[#12191d] text-[#9ca3af] hover:text-white border border-[#1f2c31] hover:border-[#2a3c42]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Harmonious Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#0c1014] border p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-[#00c9b7]/60 hover:bg-[#0f1419] ${
                service.popular ? 'border-[#00c9b7]/40 shadow-lg shadow-[#00c9b7]/5' : 'border-[#182327]'
              }`}
            >
              <div>
                {/* Header of Card */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading tracking-tight leading-snug">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[10px] font-black text-black bg-[#00c9b7] px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Price & Duration Badge (Identical to AppBarber system) */}
                <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-[#162125]">
                  <span className="text-2xl font-black text-[#00c9b7] font-heading tabular-nums">
                    R$ {service.price},00
                  </span>
                  <span className="text-[#374151]">|</span>
                  <span className="text-xs font-semibold text-[#cbd5e1] flex items-center gap-1.5 bg-[#141b20] px-2.5 py-1 rounded-md border border-[#1f2c32]">
                    <Clock className="w-3.5 h-3.5 text-[#00c9b7]" />
                    {service.durationMinutes} min
                  </span>
                </div>

                {/* Short, elegant description */}
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-4 text-left font-normal">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5 text-xs text-[#d1d5db] pt-1 text-left">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-[#00c9b7]/15 active:scale-[0.98]"
              >
                <span>Agende agora</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
