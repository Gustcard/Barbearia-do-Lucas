import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  shopName: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber, shopName }) => {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const message = `Olá! Gostaria de agendar um horário na ${shopName}.`;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="hidden md:block fixed bottom-6 right-6 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('botao_flutuante')}
        aria-label="Falar no WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp Barbearia
        </span>
      </a>
    </aside>
  );
};
