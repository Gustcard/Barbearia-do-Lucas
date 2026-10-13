import { BarbershopInfo } from '../types';
import { MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface FooterProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ info, onOpenBooking }) => {
  return (
    <footer className="bg-[#06080a] border-t border-[#162023] py-8 sm:py-12 text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 text-left">
          
          {/* Official Brand block */}
          <div className="space-y-2">
            <OfficialLogo height={34} />
            
            <p className="text-[11px] text-[#00c9b7] font-bold uppercase tracking-wider">
              {info.tagline}
            </p>

            <p className="text-xs leading-relaxed text-[#9ca3af]">
              Cortes masculinos modernos, barboterapia tradicional, estética e o Clube do Lucas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Navegação Rápida
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#clube" className="text-[#00c9b7] font-bold hover:underline">
                  Clube do Lucas (Assinatura)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Tabela de Serviços & Valores
                </a>
              </li>
              <li>
                <a href="#barbaterapia" className="hover:text-white transition-colors">
                  Barbaterapia Tradicional
                </a>
              </li>
              <li>
                <a href="#kids" className="hover:text-white transition-colors">
                  Espaço Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Horários de Atendimento
            </h4>
            <div className="space-y-1 text-xs">
              <div>{info.openingHours.weekdays}</div>
              <div>{info.openingHours.saturday}</div>
              <div className="text-[#00c9b7] font-semibold">{info.openingHours.sunday}</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Espaço & Contato
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00c9b7] shrink-0 mt-0.5" />
                <span>{info.address}, {info.streetNumber || '508'} · Vila Prudente, SP</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#00c9b7] shrink-0" />
                <span>WhatsApp: {info.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#141c1f] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748b] text-center sm:text-left">
          <p>© {new Date().getFullYear()} {info.name}. Todos os direitos reservados.</p>
          <p>Rua Orfanato, 508 · Vila Prudente · São Paulo - SP</p>
        </div>

      </div>
    </footer>
  );
};
