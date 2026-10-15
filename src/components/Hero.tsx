import React, { useState } from 'react';
import { Calendar, Sparkles, ChevronRight, Star, Scissors, CheckCircle2 } from 'lucide-react';
import { BarbershopInfo } from '../types';
import { trackBookingClick } from '../utils/analytics';

interface HeroProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
  salonPhoto?: string;
  enhancedQuality?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ info, onOpenBooking }) => {
  // Image path in public folder with high-res online fallback
  const [imgError, setImgError] = useState(false);
  const heroImageSrc = imgError 
    ? 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80'
    : '/images/corte-hero.png';

  return (
    <section id="top" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#080b0e] via-[#0b1014] to-[#080b0e] border-b border-[#162125]">
      
      {/* Subtle Teal Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00c9b7]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Announcement Bar: Clube do Lucas */}
        <div className="mb-6 sm:mb-8">
          <a
            href="#clube"
            className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#0d2224] via-[#101b1e] to-[#0d2224] border border-[#00c9b7]/30 hover:border-[#00c9b7] text-left transition-all shadow-md shadow-[#00a896]/10"
          >
            <span className="px-2 py-0.5 rounded-full bg-[#00c9b7] text-black text-[10px] font-black uppercase tracking-wider shrink-0">
              Assinatura
            </span>
            <span className="text-xs text-white font-medium truncate">
              <strong className="text-[#00c9b7] font-bold">Clube do Lucas:</strong> Corte até 4x no mês por valor fixo
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#00c9b7] group-hover:translate-x-0.5 transition-transform shrink-0 ml-auto sm:ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Location & Tagline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00c9b7]">
              <span>Rua Orfanato, 508</span>
              <span aria-hidden="true" className="text-[#3b4c52]">·</span>
              <span>Vila Prudente</span>
              <span aria-hidden="true" className="text-[#3b4c52]">·</span>
              <span>São Paulo</span>
            </div>

            {/* Slogan */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-heading">
              Mais que corte, <br className="hidden sm:inline" />
              é <span className="text-[#00c9b7] italic">identidade</span>.
            </h1>

            <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed">
              Cortes modernos, barboterapia tradicional com toalha quente, estética masculina e o Clube do Lucas. Atendimento de excelência para valorizar o seu estilo único.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick('hero_agendamento')}
                className="w-full sm:w-auto justify-center px-7 py-3.5 text-xs sm:text-sm font-extrabold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-all shadow-lg shadow-[#00a896]/25 flex items-center gap-2 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Agendar Horário Online</span>
              </a>

              <a
                href="#clube"
                className="w-full sm:w-auto justify-center px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:text-[#00c9b7] bg-[#121b1e] hover:bg-[#182428] border border-[#23373c] rounded-xl transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#00c9b7] shrink-0" />
                <span>Conhecer o Clube do Lucas</span>
              </a>
            </div>

            {/* Proof numbers */}
            <div className="pt-5 border-t border-[#1b2629] grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tabular-nums flex items-center gap-1">
                  5.0 <Star className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                </div>
                <div className="text-[10px] sm:text-xs text-[#9ca3af] mt-0.5 leading-tight">323 Avaliações Google</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  4x<span className="text-[#00c9b7] text-sm">/mês</span>
                </div>
                <div className="text-[10px] sm:text-xs text-[#9ca3af] mt-0.5 leading-tight">No Clube Mensal</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-[#9ca3af] mt-0.5 leading-tight">Vila Prudente</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Haircut Cover Showcase (PC & Tablet) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Background cyan glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00c9b7] to-[#008f8c] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />

            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl bg-[#0c1417] border-2 border-[#00c9b7]/40 hover:border-[#00c9b7] p-2.5 sm:p-3 shadow-2xl transition-all duration-300 overflow-hidden group">
              
              {/* Haircut Image Frame */}
              <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#00c9b7]/20 to-[#0c1417]">
                <img
                  src={heroImageSrc}
                  alt="Corte em Destaque na Barbearia do Lucas - Visagismo e Fade"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#00c9b7]/40 text-[#00c9b7] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg">
                    <Scissors className="w-3.5 h-3.5 text-[#00c9b7]" />
                    <span>Fade & Visagismo</span>
                  </span>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-white font-heading leading-tight">
                        Corte & Identidade
                      </h3>
                      <p className="text-[11px] text-[#00c9b7] font-semibold flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Barbearia do Lucas · Vila Prudente</span>
                      </p>
                    </div>

                    <a
                      href={info.appBarberUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-[11px] font-black uppercase tracking-wider transition-all shadow-md shadow-[#00c9b7]/30 shrink-0"
                    >
                      Agendar
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
