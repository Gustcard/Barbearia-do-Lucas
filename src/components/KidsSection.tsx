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
    <section id="kids" className="py-20 bg-[#0b1013] border-b border-[#1c272a] relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00a896]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#122326] to-[#0c1618] border border-[#23383d] p-8 shadow-2xl overflow-hidden">
              
              {/* Kids Logo Badge */}
              <div className="text-center mb-5">
                <div className="inline-block py-1.5 px-4 rounded-full bg-[#00a896]/20 border border-[#00a896]/40 text-[#00c9b7] font-bold text-xs uppercase tracking-wider mb-2">
                  Espaço Família
                </div>
                
                {/* Styled Barbearia do Lucas Kids Wordmark */}
                <div className="space-y-1">
                  <div className="text-xl font-bold tracking-tight text-white font-heading">
                    Barbearia do Lucas
                  </div>
                  <div className="flex items-center justify-center gap-1 font-extrabold text-3xl tracking-wider">
                    <span className="text-amber-400">K</span>
                    <span className="text-sky-400">I</span>
                    <span className="text-rose-500">D</span>
                    <span className="text-emerald-400">S</span>
                  </div>
                </div>
              </div>

              {/* Real Kids Station Photo Card (Only if user uploaded) */}
              {kidsPhoto && (
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 border border-[#273d43] shadow-md group">
                  <img
                    src={kidsPhoto}
                    alt="Espaço Barbearia do Lucas Kids com cadeira carrinho esportivo"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      enhancedQuality ? 'contrast-[1.06] brightness-[1.03] saturate-[1.08]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#00c9b7] bg-black/70 px-2 py-0.5 rounded-full border border-[#00c9b7]/30">
                      Cadeira Carrinho Esportivo
                    </span>
                    <p className="text-xs font-bold text-white mt-1 drop-shadow-sm">
                      Espaço lúdico com brinquedos, pirulitos e acolhimento
                    </p>
                  </div>
                </div>
              )}

              {/* Pillars checklist from image */}
              <div className="space-y-3 pt-4 border-t border-[#1d2d31]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#162326] border border-[#233539]">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Atendimento especializado</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#162326] border border-[#233539]">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Ambiente confortável e seguro</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#162326] border border-[#233539]">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Cortes modernos e estilosos</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#162326] border border-[#233539]">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-white">Carinho e atenção com cada criança</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#1d2d31] text-center">
                <span className="text-xs text-[#9ca3af]">
                  Corte infantil com desconto especial e pontualidade
                </span>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00c9b7] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Barbearia do Lucas Kids</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Seu estilo começa desde <span className="text-[#00c9b7]">PEQUENO</span>.
            </h2>

            <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
              Na nossa barbearia, os pequenos também têm vez! Oferecemos cortes infantis com paciência, cuidado e muito estilo para deixar a experiência leve e divertida.
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Sabemos que cortar o cabelo pode ser um desafio para algumas crianças. Por isso, nossa equipe trabalha com empatia e tranquilidade, respeitando o ritmo do seu filho para que ele se sinta confiante e saia com um corte incrível.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-all shadow-lg shadow-[#00a896]/20 flex items-center gap-2.5 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Agende agora
              </a>

              <a
                href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar um corte infantil na Barbearia do Lucas Kids.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-white hover:text-[#00c9b7] bg-[#141d20] hover:bg-[#1a272b] border border-[#25363a] rounded-xl transition-colors"
              >
                Tirar Dúvidas via WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
