import React from 'react';
import { Smartphone, Bell, UserCheck, Zap, ArrowRight, Star } from 'lucide-react';
import { trackBookingClick } from '../utils/analytics';

interface AppDownloadBannerProps {
  appBarberUrl: string;
}

export const AppDownloadBanner: React.FC<AppDownloadBannerProps> = ({ appBarberUrl }) => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-[#080b0e] via-[#091316] to-[#080b0e] border-b border-[#182327]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0c181b] via-[#0f2125] to-[#0c181b] border-2 border-[#00c9b7]/30 p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden text-left">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#00c9b7]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            
            {/* Left Column: Headline and Features */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00c9b7]/20 border border-[#00c9b7]/40 text-[#00c9b7] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Aplicativo Oficial Barbearia do Lucas</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading leading-tight">
                Seus agendamentos na palma da mão, sem complicações.
              </h2>

              <p className="text-xs sm:text-base text-[#cbd5e1] leading-relaxed max-w-2xl">
                Agende em menos de 1 minuto, escolha seu barbeiro de preferência, receba lembretes automáticos no celular e gerencie suas visitas do Clube do Lucas com total praticidade.
              </p>

              {/* 3 App Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#122226]/80 border border-[#1e383e]">
                  <div className="w-7 h-7 rounded-lg bg-[#00c9b7]/20 text-[#00c9b7] flex items-center justify-center shrink-0">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white">Lembretes antes do horário</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#122226]/80 border border-[#1e383e]">
                  <div className="w-7 h-7 rounded-lg bg-[#00c9b7]/20 text-[#00c9b7] flex items-center justify-center shrink-0">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white">Escolha o seu barbeiro</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#122226]/80 border border-[#1e383e]">
                  <div className="w-7 h-7 rounded-lg bg-[#00c9b7]/20 text-[#00c9b7] flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-white">Marcação em 30 segundos</span>
                </div>
              </div>

            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end justify-center">
              
              <div className="w-full max-w-sm rounded-2xl bg-[#091215] border border-[#233a40] p-5 text-center space-y-3 shadow-xl">
                
                <div className="flex items-center justify-center gap-1 text-[#fbbc04]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04]" />
                  ))}
                  <span className="text-xs font-black text-white ml-1">5.0</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Plataforma Oficial AppBarber
                  </h4>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">
                    Disponível para iPhone (iOS), Android e Web
                  </p>
                </div>

                <a
                  href={appBarberUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookingClick('banner_appbarber')}
                  className="w-full py-3 px-4 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00c9b7]/25 active:scale-95"
                >
                  <span>Abrir Aplicativo de Agendamento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-[10px] text-[#64748b]">
                  Sem necessidade de cadastro demorado
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
