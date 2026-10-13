import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Store, Smartphone, Calendar, CreditCard, Scissors, Flame } from 'lucide-react';
import { ClubPlan, BarbershopInfo } from '../types';

interface ClubSectionProps {
  plans: ClubPlan[];
  info: BarbershopInfo;
  onOpenBooking: () => void;
}

export const ClubSection: React.FC<ClubSectionProps> = ({ plans, info }) => {
  const [activePlanMobile, setActivePlanMobile] = useState<number>(0);

  const handleWhatsAppSubscribe = (planName: string, planPrice: number) => {
    const text = `Olá! Gostaria de assinar o *${planName}* (R$ ${planPrice}/mês) da Barbearia do Lucas. Como faço?`;
    window.open(`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="clube" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#0a0d11] via-[#091516] to-[#0a0d11] border-b border-[#1b2628] relative overflow-hidden">
      
      {/* Background Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00a896]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a896]/20 border border-[#00a896]/40 text-[#00c9b7] text-[11px] font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00c9b7]" />
            <span>Clube de Assinatura</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Seu corte em dia pelo valor fixo mensal
          </h2>

          <p className="text-xs sm:text-base text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto">
            No <strong className="text-white">Clube do Lucas</strong> você corta o cabelo até 4x no mês por um valor fixo. Mais praticidade e visual sempre alinhado na rotina.
          </p>

          {/* 4 Pillars Grid - Compact on Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-left max-w-3xl mx-auto">
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white">4x por mês</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2">
              <CreditCard className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white">Valor fixo</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2">
              <Scissors className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white">Sem filas</span>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white">Sempre alinhado</span>
            </div>
          </div>
        </div>

        {/* Mobile Plan Selector Tabs (Visible only on mobile) */}
        <div className="flex md:hidden items-center justify-center p-1 bg-[#0e1619] border border-[#1e2d31] rounded-xl mb-4 gap-1">
          {plans.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePlanMobile(idx)}
              className={`flex-1 py-2 px-1 text-center rounded-lg text-xs font-bold transition-all ${
                activePlanMobile === idx
                  ? 'bg-[#00c9b7] text-black shadow-md font-black'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              {p.name.replace('Clube ', '')}
            </button>
          ))}
        </div>

        {/* Subscription Plans Cards */}
        <div className="mb-8 sm:mb-12">
          {/* Mobile: Show active plan */}
          <div className="block md:hidden">
            {plans[activePlanMobile] && (
              <div
                className={`relative rounded-2xl p-5 bg-[#0f1418] border transition-all ${
                  plans[activePlanMobile].popular
                    ? 'border-[#00c9b7] bg-gradient-to-b from-[#122223] to-[#0d1719] shadow-lg shadow-[#00a896]/15'
                    : 'border-[#202c30]'
                }`}
              >
                {plans[activePlanMobile].badge && (
                  <div className="inline-block px-3 py-0.5 rounded-full bg-[#00a896] text-black text-[10px] font-black uppercase tracking-wider mb-3">
                    {plans[activePlanMobile].badge}
                  </div>
                )}
                
                <div className="flex items-baseline justify-between pb-3 border-b border-[#1d292c]">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {plans[activePlanMobile].name}
                    </h3>
                    <span className="text-[11px] text-[#00c9b7] font-semibold">Até 4 atendimentos no mês</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#9ca3af]">R$ </span>
                    <span className="text-3xl font-extrabold text-[#00c9b7] font-heading tabular-nums">
                      {plans[activePlanMobile].price}
                    </span>
                    <span className="text-[10px] text-[#9ca3af]">/mês</span>
                  </div>
                </div>

                <ul className="py-4 space-y-2 text-xs text-[#cbd5e1]">
                  {plans[activePlanMobile].features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left">
                      <Check className="w-3.5 h-3.5 text-[#00c9b7] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppSubscribe(plans[activePlanMobile].name, plans[activePlanMobile].price)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-[#00c9b7] text-black shadow-md shadow-[#00a896]/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Assinar este Plano no WhatsApp</span>
                </button>
              </div>
            )}
          </div>

          {/* Desktop: Show all 3 plans in grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#122223] to-[#0d1719] border-2 border-[#00c9b7] shadow-xl shadow-[#00a896]/15 scale-[1.02]'
                    : 'bg-[#0f1418] border border-[#202c30] hover:border-[#00a896]/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00a896] text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="text-center pb-5 border-b border-[#1d292c]">
                    <h3 className="text-lg font-bold text-white font-heading mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-xs font-semibold text-[#9ca3af]">R$</span>
                      <span className="text-4xl font-extrabold text-[#00c9b7] font-heading tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs text-[#9ca3af]">/mês</span>
                    </div>
                    <div className="mt-1 text-[11px] text-[#00c9b7] font-semibold">
                      4 visitas no mês = Valor Fixo
                    </div>
                  </div>

                  <ul className="py-5 space-y-2.5 text-xs text-[#cbd5e1]">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-left">
                        <Check className="w-3.5 h-3.5 text-[#00c9b7] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#1d292c]">
                  <button
                    onClick={() => handleWhatsAppSubscribe(plan.name, plan.price)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? 'bg-[#00c9b7] hover:bg-[#1fe2cf] text-black shadow-md shadow-[#00a896]/20'
                        : 'bg-[#182326] hover:bg-[#00a896] hover:text-black text-white border border-[#2b3d42]'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Assinar pelo WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Como assinar? - Compact Mobile Box */}
        <div className="rounded-xl sm:rounded-2xl bg-[#0f1719] border border-[#1e2f33] p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-bold text-white font-heading mb-1">
            Como funciona a adesão ao clube?
          </h3>
          <p className="text-xs text-[#9ca3af] max-w-xl mx-auto mb-4">
            Você pode assinar diretamente com nosso time pelo WhatsApp ou na recepção ao finalizar seu corte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Quero assinar o Clube do Lucas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#00c9b7] text-black text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#00c9b7]/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Assinar no WhatsApp</span>
            </a>
            <span className="text-xs text-[#64748b] hidden sm:inline">ou</span>
            <span className="text-xs text-[#cbd5e1]">Solicite na recepção na Rua Orfanato, 508</span>
          </div>
        </div>

      </div>

    </section>
  );
};
