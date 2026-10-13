import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  shopName: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber, shopName }) => {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const message = `Olá! Gostaria de agendar um horário na ${shopName}.`;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-4 right-4 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
