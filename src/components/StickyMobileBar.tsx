import React from 'react';
import { Calendar, MessageCircle, Navigation } from 'lucide-react';
import { trackBookingClick, trackWhatsAppClick } from '../utils/analytics';

interface StickyMobileBarProps {
  appBarberUrl: string;
  whatsappNumber: string;
  shopName: string;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  appBarberUrl,
  whatsappNumber,
  shopName,
}) => {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const message = `Olá! Gostaria de agendar um horário na ${shopName}.`;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  const wazeUrl = 'https://waze.com/ul?q=Barbearia%20do%20Lucas%20Rua%20Orfanato%20508%20Vila%20Prudente';

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b0e]/95 backdrop-blur-lg border-t border-[#182327] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.7)] animate-fadeIn">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Quick Route on Waze */}
        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir rota no Waze"
          className="p-2.5 rounded-xl bg-[#121a1d] hover:bg-[#182327] border border-[#203136] text-[#9ca3af] hover:text-[#00c9b7] flex items-center justify-center transition-colors shrink-0"
        >
          <Navigation className="w-4 h-4 text-[#00c9b7]" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('sticky_mobile_bar')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#112420] hover:bg-[#16302b] border border-[#22c55e]/30 text-[#22c55e] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-[#22c55e]/20" />
          <span>WhatsApp</span>
        </a>

        {/* Primary Schedule CTA */}
        <a
          href={appBarberUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBookingClick('sticky_mobile_bar')}
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#00c9b7]/25 active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4" />
          <span>Agendar</span>
        </a>

      </div>
    </div>
  );
};
