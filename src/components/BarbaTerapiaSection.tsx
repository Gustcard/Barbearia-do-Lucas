import React from 'react';
import { Flame, Droplets, Shield, Scissors, Sparkles, Calendar, ArrowRight, Check } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface BarbaTerapiaSectionProps {
  info: BarbershopInfo;
  barberPhoto?: string;
  enhancedQuality?: boolean;
}

export const BarbaTerapiaSection: React.FC<BarbaTerapiaSectionProps> = ({ info, barberPhoto, enhancedQuality = true }) => {
  const pillars = [
    {
      icon: <Flame className="w-5 h-5 text-amber-400" />,
      title: "Toalha quente",
      desc: "Abertura dos poros, relaxamento da musculatura facial e amolecimento dos fios para corte suave."
    },
    {
      icon: <Droplets className="w-5 h-5 text-sky-400" />,
      title: "Hidratação dos fios",
      desc: "Nutrição profunda que deixa a barba macia, sem aspecto ressecado ou pontas espetadas."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Cuidado com a pele",
      desc: "Prevenção contra foliculite, pelos encravados, vermelhidão e irritações de lâmina."
    },
    {
      icon: <Scissors className="w-5 h-5 text-[#00c9b7]" />,
      title: "Acabamento preciso",
      desc: "Desenho simétrico que valoriza as linhas da mandíbula e o formato único do seu rosto."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-rose-400" />,
      title: "Mais maciez e conforto",
      desc: "Toque agradável, perfume refinado e sensação duradoura de frescor e bem-estar."
    }
  ];

  return (
    <section id="barbaterapia" className="py-20 bg-[#090d10] border-b border-[#1b262a] relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00a896]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a896]/15 border border-[#00a896]/30 text-[#00c9b7] text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Ritual de Barboterapia</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            BARBATERAPIA
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-[#00c9b7] font-heading mt-2">
            Cuidar da barba vai muito além de simplesmente aparar os pelos.
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#cbd5e1] leading-relaxed">
            A Barbaterapia é um momento de cuidado completo: preparação da pele, toalha quente, produtos específicos e técnicas que proporcionam uma experiência muito mais confortável durante o atendimento.
          </p>

          <p className="mt-2 text-sm sm:text-base text-[#9ca3af] leading-relaxed">
            Além de deixar a barba alinhada, o cuidado ajuda a manter a pele mais limpa, hidratada e bem cuidada. Aqui, cada detalhe importa. Você entra para cuidar da barba e sai com aquela sensação de ter feito algo por você.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f1518] border border-[#1e2d31] hover:border-[#00a896]/50 transition-all flex flex-col justify-between space-y-3 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141e21] border border-[#233539] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Experience Feature Block */}
        <div className="rounded-3xl bg-gradient-to-r from-[#122226] via-[#0e171a] to-[#122226] border border-[#21373c] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          {/* Photo side of the experience (Only if user uploaded) */}
          {barberPhoto && (
            <div className="w-full lg:w-72 xl:w-80 shrink-0">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#263e44] shadow-xl group">
                <img
                  src={barberPhoto}
                  alt="Ritual de Barbaterapia e cuidado na Barbearia do Lucas"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    enhancedQuality ? 'contrast-[1.06] brightness-[1.03] saturate-[1.08]' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-black bg-[#00c9b7] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Experiência Exclusiva
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">Toalha quente & cuidado com a pele</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00c9b7]">
              Sua barba também precisa de cuidado
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Hidratação profunda e acabamento impecável.
            </h3>

            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
              Na Barbaterapia da Barbearia do Lucas, além de alinhar e cuidar dos fios, você também pode aproveitar uma hidratação que ajuda a deixar a barba mais macia, confortável e com aparência bem cuidada. O cuidado começa na preparação da pele e vai até os detalhes finais da barba.
            </p>

            {/* User's Exact Closing Quote */}
            <div className="p-4 rounded-xl bg-[#0b1214] border border-[#1c2c30] text-sm text-[#00c9b7] font-semibold italic">
              "Porque uma barba bem cuidada não é só sobre aparência. É sobre se sentir bem com você mesmo."
            </div>

            <div className="text-xs text-[#9ca3af] font-medium tracking-wide">
              Barbearia do Lucas · Seu estilo. Seu momento. Sua experiência.
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-3 w-full lg:w-auto">
            <a
              href={info.appBarberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-all shadow-xl shadow-[#00a896]/20 flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              Agende agora
            </a>

            <a
              href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar uma Barbaterapia na Barbearia do Lucas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold text-[#cbd5e1] hover:text-[#00c9b7] text-center border border-[#233539] rounded-xl hover:bg-[#131d20] transition-colors"
            >
              Tirar Dúvidas sobre a Barbaterapia
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
