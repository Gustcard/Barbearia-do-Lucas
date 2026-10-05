import React from 'react';
import { Check, Sparkles, MessageCircle, Store, Smartphone, Calendar, CreditCard, Scissors, Flame } from 'lucide-react';
import { ClubPlan, BarbershopInfo } from '../types';

interface ClubSectionProps {
  plans: ClubPlan[];
  info: BarbershopInfo;
  onOpenBooking: () => void;
}

export const ClubSection: React.FC<ClubSectionProps> = ({ plans, info, onOpenBooking }) => {
  const handleWhatsAppSubscribe = (planName: string, planPrice: number) => {
    const text = `Olá! Gostaria de assinar o *${planName}* (R$ ${planPrice}/mês) da Barbearia do Lucas. Como faço?`;
    window.open(`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="clube" className="py-20 bg-gradient-to-b from-[#0a0d11] via-[#091516] to-[#0a0d11] border-b border-[#1b2628] relative overflow-hidden">
      
      {/* Background Teal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a896]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with User's Exact Copy */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a896]/20 border border-[#00a896]/40 text-[#00c9b7] text-xs font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00c9b7]" />
            <span>Clube de Assinatura · Barbearia do Lucas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Seu corte em dia, sem precisar pensar toda vez que vai marcar.
          </h2>

          <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            No <strong className="text-white">Clube do Lucas</strong>, você paga um valor fixo por mês e pode vir 4 vezes no mês, mantendo seu visual sempre alinhado. É mais praticidade, mais frequência e a experiência da Barbearia do Lucas fazendo parte da sua rotina.
          </p>

          {/* Punchy Manifesto Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1a1c] border border-[#20373d] max-w-2xl mx-auto text-center space-y-1.5 shadow-lg">
            <p className="text-base sm:text-lg font-bold text-white font-heading">
              "Você não espera o cabelo crescer para marcar. Você simplesmente mantém."
            </p>
            <p className="text-xs text-[#00c9b7] font-semibold uppercase tracking-wider">
              Clube do Lucas · Mais que um corte, uma rotina de cuidado.
            </p>
          </div>

          {/* 4 Pillars Grid from User */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
            <div className="p-3.5 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">4 cortes por mês</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Valor fixo mensal</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Mais praticidade</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#121c1f] border border-[#1e2f33] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white">Visual sempre em dia</span>
            </div>
          </div>
        </div>

        {/* 3 Subscription Plans Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#122223] to-[#0d1719] border-2 border-[#00c9b7] shadow-xl shadow-[#00a896]/15 scale-[1.02]'
                  : 'bg-[#0f1418] border border-[#202c30] hover:border-[#00a896]/50'
              }`}
            >
              {/* Highlight badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00a896] text-black text-xs font-extrabold uppercase tracking-wider shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-center pb-6 border-b border-[#1d292c]">
                  <h3 className="text-xl font-bold text-white font-heading mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-semibold text-[#9ca3af]">R$</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#00c9b7] font-heading tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#9ca3af]">/mês</span>
                  </div>
                  <div className="mt-2 text-xs text-white font-semibold uppercase tracking-wider bg-[#00a896]/20 py-1 px-3 rounded-md inline-block">
                    4 visitas no mês = Valor Fixo
                  </div>
                </div>

                {/* Features list */}
                <ul className="py-6 space-y-3.5 text-xs sm:text-sm text-[#cbd5e1]">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-left">
                      <div className="w-4 h-4 rounded-full bg-[#00a896]/20 text-[#00c9b7] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1d292c] space-y-2">
                <button
                  onClick={() => handleWhatsAppSubscribe(plan.name, plan.price)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.popular
                      ? 'bg-[#00c9b7] hover:bg-[#1fe2cf] text-black shadow-lg shadow-[#00a896]/20'
                      : 'bg-[#182326] hover:bg-[#00a896] hover:text-black text-white border border-[#2b3d42]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Assinar pelo WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Como assino o Clube do Lucas? */}
        <div className="rounded-2xl bg-[#0f1719] border border-[#1e2f33] p-8 lg:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white font-heading">
              Como assino o Clube do Lucas?
            </h3>
            <p className="text-sm text-[#9ca3af] mt-2">
              Escolha a forma mais prática para você e comece a manter sua rotina de cuidado:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            {/* 1. WhatsApp */}
            <div className="p-6 rounded-xl bg-[#131e21] border border-[#22353a] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center mx-auto">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">1. Assine pelo WhatsApp</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Envie uma mensagem para nossa equipe e ative seu plano em menos de 2 minutos.
              </p>
              <a
                href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de saber mais e assinar o Clube do Lucas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-[#00c9b7] hover:underline pt-1"
              >
                Chamar no WhatsApp →
              </a>
            </div>

            {/* 2. Recepção */}
            <div className="p-6 rounded-xl bg-[#131e21] border border-[#22353a] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center mx-auto">
                <Store className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">2. Assine na Recepção</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Ao terminar o seu corte ou barba na Barbearia do Lucas, solicite a adesão na recepção.
              </p>
              <span className="text-xs text-[#9ca3af] block pt-1">
                {info.address} · Vila Prudente
              </span>
            </div>

            {/* 3. AppBarber */}
            <div className="p-6 rounded-xl bg-[#131e21] border border-[#22353a] space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center mx-auto">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">3. Assine pelo AppBarber</h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                Utilize o app oficial AppBarber para agendar e gerenciar seus horários mensais.
              </p>
              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-[#00c9b7] hover:underline pt-1"
              >
                Agende agora →
              </a>
            </div>

          </div>

          {/* Slogan Banner */}
          <div className="mt-8 pt-6 border-t border-[#1d2c30] flex items-center justify-center gap-3 text-center">
            <div className="w-7 h-7 rounded-full bg-[#00a896] text-black font-extrabold flex items-center justify-center text-xs">
              L
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-white/90">
              Mais que corte, uma rotina de cuidado · Barbearia do Lucas
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
