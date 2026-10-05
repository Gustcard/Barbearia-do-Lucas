import React from 'react';
import { BarbershopInfo } from '../types';
import { MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface FooterProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ info, onOpenBooking }) => {
  return (
    <footer className="bg-[#06080a] border-t border-[#162023] py-14 text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-left">
          
          {/* Brand block */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00c9b7] to-[#008f8c] flex items-center justify-center text-black font-black text-xl font-serif">
                L
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase font-heading block">
                {info.name}
              </span>
            </div>
            
            <p className="text-xs text-[#00c9b7] font-bold uppercase tracking-wider">
              {info.tagline}
            </p>

            <p className="text-xs leading-relaxed text-[#9ca3af]">
              Cortes masculinos modernos, barboterapia tradicional, estética facial e o Clube do Lucas, nosso clube exclusivo de assinatura mensal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Serviços & Assinatura
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicos" className="hover:text-[#00c9b7] transition-colors">
                  Cortes & Visagismo
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#00c9b7] transition-colors">
                  Limpeza de Pele Profunda
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#00c9b7] transition-colors">
                  Hidratação & Desondulação
                </a>
              </li>
              <li>
                <a href="#clube" className="text-[#00c9b7] font-bold hover:underline transition-colors flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Clube do Lucas (Assinatura)
                </a>
              </li>
              <li>
                <a href="#kids" className="hover:text-[#00c9b7] transition-colors">
                  Barbearia do Lucas Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Horários de Atendimento
            </h4>
            <div className="space-y-1.5 text-xs">
              <div>{info.openingHours.weekdays}</div>
              <div>{info.openingHours.saturday}</div>
              <div className="text-amber-500/80">{info.openingHours.sunday}</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Espaço & Contato
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00c9b7] shrink-0 mt-0.5" />
                <span>{info.address} - {info.neighborhood} · {info.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
                <a
                  href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {info.phone}
                </a>
              </div>
              <div>
                <a
                  href={info.instagramUrl || `https://instagram.com/${info.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c9b7] hover:underline"
                >
                  Instagram: {info.instagram}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={info.appBarberUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-xs font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Agende agora
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-[#131b1e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {info.name}. Todos os direitos reservados.
          </div>
          <div className="text-[#64748b]">
            Mais que corte, é identidade · Barbearia do Lucas
          </div>
        </div>

      </div>
    </footer>
  );
};
