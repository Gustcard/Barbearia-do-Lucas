import React from 'react';
import { Coffee, Beer, Sparkles, Car, Shield, Music, Tv, Check } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface LoungeAndAmenitiesProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
}

export const LoungeAndAmenities: React.FC<LoungeAndAmenitiesProps> = ({ info, onOpenBooking }) => {
  return (
    <section id="experiencia" className="py-20 bg-[#0c0d10] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#c59a58] mb-2">
            A Experiência Imperial
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Muito mais do que apenas cortar o cabelo.
          </h2>
          <p className="mt-3 text-base text-[#9ca3af]">
            Criamos um refúgio acolhedor e sofisticado para você desconectar da rotina, tomar uma bebida de qualidade e cuidar da sua autoestima com respeito total ao seu tempo.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {info.amenities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#13151c] border border-[#222633] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1b1f29] border border-[#2b3040] flex items-center justify-center text-[#c59a58] mb-4">
                  {index === 0 && <Beer className="w-6 h-6" />}
                  {index === 1 && <Sparkles className="w-6 h-6" />}
                  {index === 2 && <Music className="w-6 h-6" />}
                  {index === 3 && <Car className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner Showcase */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171a23] to-[#101217] border border-[#272b38] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4 text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#c59a58]">
              Tradição e Hospitalidade
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Seu momento de pausa na semana.
            </h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Aqui você nunca é atendido com pressa. Cada cliente tem sua cadeira reservada e o tempo necessário para um acabamento impecável, sem fila de espera ou atrasos.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#cbd5e1] pt-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#c59a58]" /> Wi-Fi de alta velocidade
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#c59a58]" /> Climatização individual
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#c59a58]" /> Produtos hipoalergênicos
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 text-sm font-semibold text-black bg-[#c59a58] hover:bg-[#d8ae6c] rounded-lg transition-all shadow-md active:scale-[0.98] whitespace-nowrap"
            >
              Reservar Meu Momento
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
