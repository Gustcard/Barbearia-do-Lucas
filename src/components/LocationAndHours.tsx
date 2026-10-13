import React, { useState } from 'react';
import { MapPin, Clock, ExternalLink, HelpCircle, ChevronDown, MessageCircle, Calendar } from 'lucide-react';
import { BarbershopInfo } from '../types';
import { faqItems } from '../data/defaultData';

interface LocationAndHoursProps {
  info: BarbershopInfo;
  onOpenBooking: () => void;
  facadePhoto?: string;
  enhancedQuality?: boolean;
}

export const LocationAndHours: React.FC<LocationAndHoursProps> = ({ info, onOpenBooking, facadePhoto, enhancedQuality = true }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Barbearia do Lucas ${info.address} ${info.city}`
  )}`;

  return (
    <section id="localizacao" className="py-10 sm:py-16 md:py-20 bg-[#0a0d10] border-b border-[#182326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Left Column: Hours, Address & Contacts */}
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
                Atendimento com hora marcada na Vila Prudente com equipe especializada e sem filas.
              </p>
            </div>

            {/* Address & Hours cards */}
            <div className="space-y-3">
              
              {/* Address Card */}
              <div className="p-4 rounded-xl bg-[#0f1418] border border-[#1e2d31] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white font-heading">Endereço</h3>
                  <p className="text-xs text-[#cbd5e1] mt-0.5 font-medium">
                    {info.address}, {info.streetNumber || '508'}
                  </p>
                  <p className="text-[11px] text-[#9ca3af]">{info.neighborhood} · {info.city}</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#00c9b7] hover:underline font-bold"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
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
                  <MessageCircle className="w-5 h-5 text-[#00c9b7] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Dúvidas ou agendamento rápido?</div>
                    <div className="text-[11px] text-[#9ca3af]">WhatsApp: {info.phone}</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#00c9b7] text-black text-xs font-bold shrink-0"
                >
                  Chamar
                </a>
              </div>

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
