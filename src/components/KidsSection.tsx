import React from 'react';
import { Heart, Sparkles, Shield, Smile, Calendar, Check } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface KidsSectionProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
  kidsPhoto?: string;
  enhancedQuality?: boolean;
}

export const KidsSection: React.FC<KidsSectionProps> = ({ info, onOpenBooking, kidsPhoto, enhancedQuality = true }) => {
  return (
    <section id="kids" className="py-10 sm:py-16 md:py-20 bg-[#0b1013] border-b border-[#1c272a] relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#00a896]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#122326] to-[#0c1618] border border-[#23383d] p-5 sm:p-7 shadow-xl overflow-hidden">
              
              {/* Kids Logo Badge */}
              <div className="text-center mb-4">
                <div className="inline-block py-1 px-3 rounded-full bg-[#00a896]/20 border border-[#00a896]/40 text-[#00c9b7] font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-1.5">
                  Espaço Família
                </div>
                
                <div className="space-y-0.5">
                  <div className="text-base sm:text-lg font-bold tracking-tight text-white font-heading">
                    Barbearia do Lucas
                  </div>
                  <div className="flex items-center justify-center gap-1 font-extrabold text-2xl sm:text-3xl tracking-wider">
                    <span className="text-amber-400">K</span>
                    <span className="text-sky-400">I</span>
                    <span className="text-rose-500">D</span>
                    <span className="text-emerald-400">S</span>
                  </div>
                </div>
              </div>

              {/* Real Kids Station Photo Card (Only if user uploaded) */}
              {kidsPhoto && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 border border-[#273d43] shadow-md">
                  <img
                    src={kidsPhoto}
                    alt="Espaço Barbearia do Lucas Kids com cadeira carrinho esportivo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover contrast-[1.06] brightness-[1.03] saturate-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-left">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#00c9b7] bg-black/70 px-2 py-0.5 rounded-full border border-[#00c9b7]/30">
                      Cadeira Carrinho Esportivo
                    </span>
                  </div>
                </div>
              )}

              {/* 3 Kids Pillars */}
              <div className="space-y-2 text-left text-xs">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0e191b] border border-[#1d2d31]">
                  <Smile className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[#cbd5e1]">Cadeira em formato de carrinho esportivo elétrico</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0e191b] border border-[#1d2d31]">
                  <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-[#cbd5e1]">Paciência, acolhimento e pirulito garantido</span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0e191b] border border-[#1d2d31]">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[#cbd5e1]">Segurança total e cortes modernos infantis</span>
                </div>
              </div>

            </div>
          </div>

          {/* Text Description Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-3 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00a896]/15 border border-[#00a896]/30 text-[#00c9b7] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiência Divertida</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading leading-tight">
              Aqui cortar o cabelo é uma aventura, não uma obrigação.
            </h2>

            <p className="text-xs sm:text-base text-[#9ca3af] leading-relaxed">
              Sabemos que para muitas crianças cortar o cabelo pode ser assustador. Por isso, preparamos um ambiente lúdico com cadeira em formato de carrinho esportivo, paciência e muito carinho para que os pequenos saiam felizes e no estilo!
            </p>

            <div className="pt-2">
              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs sm:text-sm font-bold shadow-md shadow-[#00c9b7]/20 transition-all w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Corte Infantil (R$ 40,00)</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
