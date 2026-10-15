import React, { useState } from 'react';
import { Calendar, Menu, X, MessageCircle, Clock, MapPin } from 'lucide-react';
import { BarbershopInfo } from '../types';
import { OfficialLogo } from './OfficialLogo';
import { trackBookingClick } from '../utils/analytics';

interface HeaderProps {
  info: BarbershopInfo;
  onOpenBooking?: () => void;
  onOpenMyAppointments?: () => void;
  appointmentsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ info }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080b0e]/95 backdrop-blur-md border-b border-[#182327] w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        
        {/* Official Brand Logo */}
        <a href="#top" className="flex items-center gap-2 group shrink-0 py-1" aria-label="Barbearia do Lucas">
          <OfficialLogo height={38} className="transform hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-[#cbd5e1]">
          <a href="#clube" className="text-[#00c9b7] hover:text-[#2be6d5] transition-colors py-1 whitespace-nowrap font-bold">
            Clube do Lucas
          </a>
          <a href="#servicos" className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap">
            Serviços
          </a>
          <a href="#barbaterapia" className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap">
            Barbaterapia
          </a>
          <a href="#localizacao" className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap">
            Localização
          </a>
        </nav>

        {/* Header Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={info.appBarberUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick('header_botao')}
            className="px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] active:scale-[0.98] rounded-lg sm:rounded-xl transition-all shadow-md shadow-[#00a896]/20 flex items-center gap-1.5 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="inline sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agende agora</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#9ca3af] hover:text-white rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1b2629] bg-[#0c1215] px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-1 text-sm text-[#cbd5e1] font-medium">
            <a
              href="#clube"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[#00c9b7] font-bold bg-[#00c9b7]/10 flex items-center justify-between"
            >
              <span>Clube do Lucas (Assinatura)</span>
              <span className="text-[10px] bg-[#00c9b7] text-black px-2 py-0.5 rounded font-black uppercase">Até 4x/mês</span>
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Tabela de Serviços & Valores
            </a>
            <a
              href="#barbaterapia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Barbaterapia com Toalha Quente
            </a>
            <a
              href="#kids"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Barbearia Kids (Cadeira Carrinho)
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Localização & Horários
            </a>
          </div>

          <div className="pt-3 border-t border-[#182327] flex flex-col gap-2">
            <a
              href={info.appBarberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#00c9b7] text-black font-black text-center text-xs uppercase tracking-wider shadow-lg shadow-[#00c9b7]/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar no Sistema Oficial</span>
            </a>

            <a
              href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#142327] border border-[#00c9b7]/30 text-[#00c9b7] font-bold text-center text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp ({info.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
