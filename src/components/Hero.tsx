import React from 'react';
import { Calendar, Sparkles, Star, ChevronRight, Clock, Check, Scissors } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface HeroProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
  salonPhoto?: string;
  enhancedQuality?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ info, salonPhoto, enhancedQuality = true }) => {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#080b0e] via-[#0b1014] to-[#080b0e] border-b border-[#162125]">
      
      {/* Subtle Teal Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00c9b7]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Announcement Bar: Clube do Lucas */}
        <div className="mb-10 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0d2224] via-[#101b1e] to-[#0d2224] border border-[#00c9b7]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-lg shadow-[#00a896]/10">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full bg-[#00c9b7] text-black text-[11px] font-bold uppercase tracking-wider shrink-0">
              Plano Mensal
            </span>
            <p className="text-xs sm:text-sm text-white font-medium">
              Conheça o <strong className="text-[#00c9b7] font-bold">Clube do Lucas</strong>: corte até 4x no mês por um valor fixo mensal!
            </p>
          </div>
          <a
            href="#clube"
            className="text-xs sm:text-sm font-bold text-[#00c9b7] hover:text-[#2be6d5] flex items-center gap-1 shrink-0"
          >
            Ver Planos do Clube <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Headline Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Tagline */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00c9b7]">
              <span>Rua Orfanato · Vila Prudente</span>
              <span aria-hidden="true">·</span>
              <span>Cortes & Barboterapia</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo</span>
            </div>

            {/* Slogan */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.08] font-heading">
              Mais que corte, <br />
              é <span className="text-[#00c9b7] italic">identidade</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#9ca3af] max-w-2xl leading-relaxed">
              {info.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#clube"
                className="px-7 py-4 text-sm sm:text-base font-extrabold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-all shadow-xl shadow-[#00a896]/25 flex items-center gap-2.5 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                Conhecer o Clube do Lucas
              </a>

              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-sm sm:text-base font-bold text-white hover:text-[#00c9b7] bg-[#121b1e] hover:bg-[#182428] border border-[#23373c] rounded-xl transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#00c9b7]" />
                Agende agora
              </a>
            </div>

            {/* Proof numbers */}
            <div className="pt-6 border-t border-[#1b2629] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tabular-nums">
                  5.0<span className="text-[#fbbc04] text-xl ml-0.5">★</span>
                </div>
                <div className="text-xs text-[#9ca3af] mt-0.5">323 Avaliações Google</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  4x<span className="text-[#00c9b7] text-xl">/mês</span>
                </div>
                <div className="text-xs text-[#9ca3af] mt-0.5">No Clube do Lucas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  100%
                </div>
                <div className="text-xs text-[#9ca3af] mt-0.5">Clientes Satisfeitos</div>
              </div>
            </div>

          </div>

          {/* Right Visual Card - Spotlight on Clube do Lucas */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#121e21] to-[#0c1316] border-2 border-[#00c9b7]/40 p-6 sm:p-7 shadow-2xl shadow-[#00a896]/15 text-left">
              
              {/* Header of Highlight Card */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1e2f33]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00a896] text-black flex items-center justify-center font-black text-xl font-serif">
                    L
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">Clube do Lucas</h3>
                    <p className="text-xs text-[#00c9b7] font-semibold">Assinatura Mensal Exclusiva</p>
                  </div>
                </div>
                <span className="text-[11px] text-black font-extrabold bg-[#00c9b7] px-2.5 py-1 rounded-full uppercase">
                  Destaque
                </span>
              </div>

              {/* Real Salon Photo (Only if uploaded by user) */}
              {salonPhoto && (
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden my-4 border border-[#233b40] shadow-md group">
                  <img
                    src={salonPhoto}
                    alt="Salão Barbearia do Lucas Vila Prudente"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      enhancedQuality ? 'contrast-[1.06] brightness-[1.03] saturate-[1.08]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                    <span className="text-[10px] font-black uppercase text-[#00c9b7] bg-black/75 px-2 py-0.5 rounded-full border border-[#00c9b7]/30">
                      Ambiente Real · Vila Prudente
                    </span>
                    <span className="text-[10px] text-white/90 font-medium">Teto Honeycomb LED</span>
                  </div>
                </div>
              )}

              {/* Highlights Snapshot */}
              <div className="py-5 space-y-4">
                <div className="p-4 rounded-xl bg-[#152327] border border-[#233b40] space-y-2">
                  <div className="text-xs font-bold text-[#00c9b7] uppercase tracking-wider">
                    "Você não espera crescer para marcar. Você mantém."
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    Pague um valor fixo mensal e venha até 4 vezes no mês. Praticidade total para manter seu corte e barba sempre alinhados.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#142125] border border-[#233539] space-y-1">
                    <span className="text-[#00c9b7] font-bold block">4 Visitas no Mês</span>
                    <p className="text-[#9ca3af] text-[11px] leading-tight">Sempre alinhado com frequência constante.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#142125] border border-[#233539] space-y-1">
                    <span className="text-[#00c9b7] font-bold block">Valor Fixo</span>
                    <p className="text-[#9ca3af] text-[11px] leading-tight">Sem surpresas no fim do mês.</p>
                  </div>
                </div>
              </div>

              {/* Fast Action */}
              <div className="pt-4 border-t border-[#1c2c30] flex items-center justify-between">
                <a
                  href="#clube"
                  className="text-xs font-bold text-white hover:text-[#00c9b7] flex items-center gap-1"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#00c9b7]" />
                  <span>Ver todos os planos</span>
                </a>
                <a
                  href={info.appBarberUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#00c9b7] hover:underline flex items-center gap-1"
                >
                  <span>Agende agora →</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
