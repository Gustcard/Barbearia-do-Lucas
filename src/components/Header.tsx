import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { BarbershopInfo } from '../types';

interface HeaderProps {
  info: BarbershopInfo;
  onOpenBooking?: () => void;
  onOpenMyAppointments?: () => void;
  appointmentsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ info }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080b0e]/95 backdrop-blur-md border-b border-[#182327]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo matching the official identity */}
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-full bg-[#00c9b7] flex items-center justify-center text-black font-black text-xl shadow-md shadow-[#00c9b7]/20 font-heading">
            L
          </div>
          <div className="text-left flex flex-col justify-center">
            <span className="text-base sm:text-lg font-black tracking-wider text-white group-hover:text-[#00c9b7] transition-colors uppercase font-heading leading-none">
              {info.name}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#00c9b7] tracking-[0.2em] uppercase font-black block mt-1">
              {info.tagline}
            </span>
          </div>
        </a>

        {/* Clean, essential navigation links (no crowding, no text wrapping) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-semibold text-[#cbd5e1]">
          <a
            href="#clube"
            className="text-[#00c9b7] hover:text-[#2be6d5] transition-colors py-1 whitespace-nowrap font-bold"
          >
            Clube do Lucas
          </a>
          <a
            href="#ambiente"
            className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap"
          >
            Nosso Espaço
          </a>
          <a
            href="#servicos"
            className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap"
          >
            Serviços
          </a>
          <a
            href="#barbaterapia"
            className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap"
          >
            Barbaterapia
          </a>
          <a
            href="#localizacao"
            className="hover:text-[#00c9b7] transition-colors py-1 whitespace-nowrap"
          >
            Localização
          </a>
        </nav>

        {/* Essential CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href={info.appBarberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#00a896]/20 whitespace-nowrap flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Agende agora</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#9ca3af] hover:text-white rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1b2629] bg-[#0d1316] px-5 pt-3 pb-6 space-y-4">
          <div className="flex flex-col gap-2 text-sm text-[#cbd5e1] font-medium">
            <a
              href="#ambiente"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Nosso Espaço
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Serviços & Preços
            </a>
            <a
              href="#barbaterapia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Barbaterapia
            </a>
            <a
              href="#clube"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-[#00c9b7] font-bold hover:bg-[#141d20] transition-colors flex items-center justify-between"
            >
              <span>Clube do Lucas</span>
              <span className="text-[10px] bg-[#00a896]/20 px-2 py-0.5 rounded">4x no mês</span>
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#141d20] transition-colors"
            >
              Localização & Horários
            </a>
          </div>

          <div className="pt-3 border-t border-[#1b2629] flex flex-col gap-2.5">
            <a
              href={info.appBarberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-sm font-bold text-black bg-[#00c9b7] rounded-xl flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agende agora
            </a>
            <a
              href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold text-[#cbd5e1] bg-[#151f22] border border-[#223338] rounded-xl"
            >
              WhatsApp: {info.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
