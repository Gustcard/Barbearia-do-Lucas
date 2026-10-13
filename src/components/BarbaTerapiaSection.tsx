import React from 'react';
import { Flame, Droplets, Shield, Scissors, Sparkles, Calendar } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface BarbaTerapiaSectionProps {
  info: BarbershopInfo;
  barberPhoto?: string;
  enhancedQuality?: boolean;
}

export const BarbaTerapiaSection: React.FC<BarbaTerapiaSectionProps> = ({ info, barberPhoto, enhancedQuality = true }) => {
  const pillars = [
    {
      icon: <Flame className="w-4 h-4 text-amber-400 shrink-0" />,
      title: "Toalha quente",
      desc: "Abertura dos poros, relaxamento e corte suave sem puxar fios."
    },
    {
      icon: <Droplets className="w-4 h-4 text-sky-400 shrink-0" />,
      title: "Hidratação dos fios",
      desc: "Nutrição que deixa a barba macia, sem aspecto ressecado."
    },
    {
      icon: <Shield className="w-4 h-4 text-emerald-400 shrink-0" />,
      title: "Cuidado com a pele",
      desc: "Prevenção contra foliculite, pelos encravados e irritações."
    },
    {
      icon: <Scissors className="w-4 h-4 text-[#00c9b7] shrink-0" />,
      title: "Acabamento navalha",
      desc: "Desenho simétrico que valoriza as linhas do seu rosto."
    }
  ];

  return (
    <section id="barbaterapia" className="py-10 sm:py-16 md:py-20 bg-[#090d10] border-b border-[#1b262a] relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#00a896]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a896]/15 border border-[#00a896]/30 text-[#00c9b7] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Ritual de Barboterapia</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading leading-tight">
            BARBATERAPIA
          </h2>

          <p className="text-sm sm:text-lg font-bold text-[#00c9b7] font-heading mt-1">
            Cuidar da barba vai muito além de apenas aparar os pelos.
          </p>

          <p className="text-xs sm:text-base text-[#9ca3af] mt-2 leading-relaxed">
            Uma experiência completa com toalha quente, hidratação profunda, cuidado contra irritações e alinhamento milimétrico na lâmina.
          </p>
        </div>

        {/* Pillars in compact 2-columns on mobile, 4-columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 sm:mb-8 text-left">
          {pillars.map((item, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-[#0e1417] border border-[#1d2a2f] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-[#142024] border border-[#23353b]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#9ca3af] mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#0d1e21] to-[#0d1618] border border-[#00c9b7]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div>
            <div className="text-xs sm:text-sm font-bold text-white">
              Barbaterapia Completa por R$ 40,00 (40 min)
            </div>
            <div className="text-[11px] text-[#9ca3af]">
              Toalha quente, hidratação e navalha inclusas
            </div>
          </div>

          <a
            href={info.appBarberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-[#00c9b7]/20 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Barbaterapia</span>
          </a>
        </div>

      </div>

    </section>
  );
};
