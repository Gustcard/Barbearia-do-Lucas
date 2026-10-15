import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ExternalLink, 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Navigation, 
  Coffee, 
  Wifi, 
  Snowflake, 
  ShieldCheck, 
  Car, 
  Armchair 
} from 'lucide-react';
import { BarbershopInfo } from '../types';
import { faqItems } from '../data/defaultData';
import { trackWhatsAppClick } from '../utils/analytics';

interface LocationAndHoursProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
  facadePhoto?: string;
  enhancedQuality?: boolean;
}

export const LocationAndHours: React.FC<LocationAndHoursProps> = ({ info }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `Barbearia do Lucas ${info.address} ${info.streetNumber || '508'} ${info.neighborhood} ${info.city}`
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    `Barbearia do Lucas Rua Orfanato 508 Vila Prudente`
  )}`;

  // Feature 4: Experiência & Comodidades no Salão (como na 23 Barbearia)
  const amenities = [
    { icon: <Coffee className="w-4 h-4 text-amber-400" />, label: 'Café & Bebidas', desc: 'Espresso e água gelada' },
    { icon: <Snowflake className="w-4 h-4 text-sky-400" />, label: '100% Climatizado', desc: 'Ar-condicionado constante' },
    { icon: <Wifi className="w-4 h-4 text-emerald-400" />, label: 'Wi-Fi 5G', desc: 'Internet rápida para clientes' },
    { icon: <Car className="w-4 h-4 text-rose-400" />, label: 'Espaço Kids', desc: 'Cadeira carrinho esportivo' },
    { icon: <Clock className="w-4 h-4 text-[#00c9b7]" />, label: 'Pontualidade', desc: 'Atendimento na hora marcada' },
    { icon: <Armchair className="w-4 h-4 text-purple-400" />, label: 'Lounge Confortável', desc: 'Poltronas e recepção ampla' },
  ];

  return (
    <section id="localizacao" className="py-10 sm:py-16 md:py-20 bg-[#0a0d10] border-b border-[#182326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 4: Experiência & Comodidades no Salão Header Strip */}
        <div className="mb-10 sm:mb-14 p-5 sm:p-6 rounded-2xl bg-[#0d1417] border border-[#1e2f34] text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[#17252a]">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#00c9b7] bg-[#00c9b7]/10 px-2.5 py-0.5 rounded-full border border-[#00c9b7]/30">
                Experiência Lucas
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading mt-1">
                Conforto pensado nos mínimos detalhes para você
              </h3>
            </div>
            <p className="text-xs text-[#9ca3af] max-w-sm">
              Mais do que cortar o cabelo: um momento relaxante na sua rotina na Vila Prudente.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {amenities.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#10191c] border border-[#1b2b30] flex flex-col items-start gap-2">
                <div className="p-2 rounded-lg bg-[#142327] border border-[#20373e]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{item.label}</div>
                  <div className="text-[10px] text-[#9ca3af] mt-0.5 leading-tight">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Left Column: Hours, Address & Como Chegar Buttons */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00c9b7] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Onde Estamos</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Visite a Barbearia do Lucas
              </h2>
              <p className="mt-1 text-xs sm:text-base text-[#9ca3af] leading-relaxed">
                Rua Orfanato, 508 · Vila Prudente, São Paulo. Fácil acesso e localização privilegiada.
              </p>
            </div>

            {/* Address Card with Feature 2: 1-Click Waze & Google Maps */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0f1418] border border-[#1e2d31] space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white font-heading">Endereço Oficial</h3>
                  <p className="text-xs text-[#cbd5e1] mt-0.5 font-medium">
                    {info.address}, {info.streetNumber || '508'}
                  </p>
                  <p className="text-[11px] text-[#9ca3af]">{info.neighborhood} · {info.city} - SP · CEP 03131-010</p>
                </div>
              </div>

              {/* Feature 2: 1-Click "Como Chegar" Action Buttons */}
              <div className="pt-2 border-t border-[#1a282c] grid grid-cols-2 gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#142226] hover:bg-[#00c9b7] hover:text-black border border-[#00c9b7]/30 text-[#00c9b7] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#17202b] hover:bg-[#33ccff] hover:text-black border border-[#33ccff]/30 text-[#33ccff] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-4 rounded-xl bg-[#0f1418] border border-[#1e2d31] flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white font-heading">Horário de Atendimento</h3>
                <div className="mt-2 space-y-1.5 text-xs text-[#cbd5e1]">
                  <div className="flex justify-between border-b border-[#1b262a] pb-1">
                    <span className="text-[#9ca3af]">Segunda a Sexta:</span>
                    <span className="font-semibold text-white">09:00 às 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1b262a] py-1">
                    <span className="text-[#9ca3af]">Sábado:</span>
                    <span className="font-semibold text-white">08:30 às 19:30</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#9ca3af]">Domingo:</span>
                    <span className="font-bold text-[#00c9b7]">09:00 às 14:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-[#0f1418] border border-[#1e2d31] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-[#22c55e] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Dúvidas rápidas? Fale com a equipe</div>
                  <div className="text-[11px] text-[#9ca3af]">WhatsApp: {info.phone}</div>
                </div>
              </div>
              <a
                href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contato_localizacao')}
                className="px-3.5 py-1.5 rounded-lg bg-[#22c55e] hover:bg-[#1eb054] text-white text-xs font-bold shrink-0 transition-colors"
              >
                Chamar
              </a>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-left">
            <div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00c9b7] mb-1.5 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Dúvidas Frequentes</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-2">
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-[#0e1317] border border-[#1d2b2f] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#00c9b7] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#00c9b7] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 text-xs text-[#9ca3af] leading-relaxed border-t border-[#192428] pt-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
