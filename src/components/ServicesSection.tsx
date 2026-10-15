import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Clock, ArrowRight, ChevronRight, Calendar } from 'lucide-react';
import { trackBookingClick } from '../utils/analytics';

interface ServicesSectionProps {
  services: ServiceItem[];
  appBarberUrl: string;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, appBarberUrl }) => {
  const [activeCategory, setActiveCategory] = useState<string>('cabelo');

  const categories = [
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'barba', label: 'Barba' },
    { id: 'outros', label: 'Tratamentos & Estética' },
  ];

  const filteredServices = services.filter((service) => {
    if (activeCategory === 'cabelo') return service.category === 'cabelo';
    if (activeCategory === 'barba') return service.category === 'barba';
    if (activeCategory === 'outros') return service.category === 'estetica' || service.category === 'tratamentos';
    return service.category === 'cabelo';
  });

  return (
    <section id="servicos" className="py-8 sm:py-16 md:py-20 bg-[#090d10] border-b border-[#172124]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10 space-y-1.5">
          <div className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00c9b7]">
            Tabela Oficial
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading">
            Serviços & Valores
          </h2>
          <p className="text-xs sm:text-sm text-[#9ca3af]">
            Escolha o atendimento e reserve seu horário com praticidade.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#00c9b7] text-black shadow-md shadow-[#00a896]/20 font-black'
                  : 'bg-[#12191d] text-[#9ca3af] hover:text-white border border-[#1f2c31]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 📱 MOBILE VIEW: Ultra-lean, fast-scanning list menu */}
        <div className="block md:hidden rounded-xl bg-[#0c1114] border border-[#1b262a] divide-y divide-[#172226] overflow-hidden text-left shadow-lg">
          {filteredServices.map((service) => (
            <a
              key={service.id}
              href={appBarberUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackBookingClick('servico_mobile_' + service.name)}
              className="p-3 flex items-center justify-between gap-2.5 hover:bg-[#11171b] active:bg-[#142024] transition-colors group"
            >
              {/* Left: Service name, duration & subtle note */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00c9b7] transition-colors truncate">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[8px] font-black text-black bg-[#00c9b7] px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0">
                      Top
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-[#9ca3af]">
                  <span className="flex items-center gap-1 shrink-0 text-[#cbd5e1]">
                    <Clock className="w-3 h-3 text-[#00c9b7]" />
                    {service.durationMinutes} min
                  </span>
                  {service.shortDescription && (
                    <>
                      <span className="text-[#334155]">·</span>
                      <span className="truncate text-[#64748b]">
                        {service.shortDescription}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Right: Price & Quick Book Pill */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-black text-[#00c9b7] font-heading tabular-nums">
                  R$ {service.price}
                </span>

                <span className="px-2.5 py-1 rounded-md bg-[#00c9b7]/15 group-hover:bg-[#00c9b7] text-[#00c9b7] group-hover:text-black border border-[#00c9b7]/30 text-[10px] font-extrabold uppercase tracking-wide transition-all flex items-center gap-0.5">
                  <span>Agendar</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* 💻 DESKTOP VIEW: Spacious, elegant card grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-[#0c1014] border p-5 flex flex-col justify-between transition-all hover:border-[#00c9b7]/60 ${
                service.popular ? 'border-[#00c9b7]/40 shadow-sm' : 'border-[#182327]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-lg font-bold text-white font-heading leading-snug">
                    {service.name}
                  </h3>
                  {service.popular && (
                    <span className="text-[9px] font-black text-black bg-[#00c9b7] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#162125]">
                  <span className="text-2xl font-black text-[#00c9b7] font-heading tabular-nums">
                    R$ {service.price},00
                  </span>
                  <span className="text-[#374151]">·</span>
                  <span className="text-xs font-semibold text-[#cbd5e1] flex items-center gap-1 bg-[#141b20] px-2 py-0.5 rounded border border-[#1f2c32]">
                    <Clock className="w-3.5 h-3.5 text-[#00c9b7]" />
                    {service.durationMinutes} min
                  </span>
                </div>

                <p className="text-xs text-[#9ca3af] leading-relaxed mb-3 text-left">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-2 border-t border-[#162125]">
                <a
                  href={appBarberUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick('servico_desktop_' + service.name)}
                  className="w-full py-2 rounded-lg bg-[#142023] hover:bg-[#00c9b7] hover:text-black border border-[#21353b] text-[#00c9b7] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Agendar este serviço</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
