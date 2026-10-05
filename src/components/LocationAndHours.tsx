import React, { useState } from 'react';
import { MapPin, Clock, Phone, ExternalLink, HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
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
    <section id="localizacao" className="py-20 bg-[#0a0d10] border-b border-[#182326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Hours, Address & Contacts */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00c9b7] mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Onde Estamos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Visite a Barbearia do Lucas
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#9ca3af] leading-relaxed">
                Localizada na Vila Prudente, a Barbearia do Lucas oferece atendimento com hora marcada, praticidade no agendamento e o melhor clube de assinatura da região.
              </p>
            </div>

            {/* Address & Hours cards */}
            <div className="space-y-4">
              
              {/* Facade Photo Card (Only if user uploaded) */}
              {facadePhoto && (
                <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-[#1e2d31] shadow-lg group">
                  <img
                    src={facadePhoto}
                    alt="Fachada Barbearia do Lucas na Rua Orfanato"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      enhancedQuality ? 'contrast-[1.06] brightness-[1.03] saturate-[1.08]' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                    <div>
                      <span className="text-[10px] font-black uppercase text-[#00c9b7] bg-black/75 px-2 py-0.5 rounded-full border border-[#00c9b7]/30">
                        Entrada Real · Rua Orfanato
                      </span>
                      <p className="text-xs font-bold text-white mt-1">Barber Pole tradicional e fachada turquesa</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Address card */}
              <div className="p-6 rounded-2xl bg-[#0f1418] border border-[#1e2d31] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white font-heading">Endereço</h3>
                  <p className="text-sm text-[#cbd5e1] mt-1 font-medium">
                    {info.address} - {info.neighborhood}
                  </p>
                  <p className="text-xs text-[#9ca3af]">
                    {info.city} · CEP {info.postalCode || '03131-010'}
                  </p>
                  
                  <div className="mt-3 flex items-center gap-4">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00c9b7] hover:underline"
                    >
                      <span>Abrir rota no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-2xl bg-[#0f1418] border border-[#1e2d31] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white font-heading">Horário de Atendimento</h3>
                  <div className="mt-2 space-y-2 text-xs sm:text-sm text-[#cbd5e1]">
                    <div className="flex justify-between border-b border-[#1b262a] pb-1.5">
                      <span className="text-[#9ca3af]">Segunda a Sexta:</span>
                      <span className="font-semibold text-white">{info.openingHours.weekdays.replace('Segunda a Sexta: ', '')}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1b262a] py-1.5">
                      <span className="text-[#9ca3af]">Sábado:</span>
                      <span className="font-semibold text-white">{info.openingHours.saturday.replace('Sábados: ', '')}</span>
                    </div>
                    <div className="flex justify-between pt-1.5">
                      <span className="text-[#9ca3af]">Domingos & Feriados:</span>
                      <span className="font-semibold text-amber-500/90">{info.openingHours.sunday.replace('Domingos & Feriados: ', '')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contacts & Instagram */}
              <div className="p-6 rounded-2xl bg-[#0f1418] border border-[#1e2d31] flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00a896]/15 border border-[#00a896]/30 flex items-center justify-center text-[#00c9b7] shrink-0 mt-0.5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white font-heading">Canais Oficiais</h3>
                  <div className="mt-2 text-xs text-[#9ca3af] space-y-1">
                    <div>WhatsApp: <strong className="text-white">{info.phone}</strong></div>
                    <div>Instagram: <a href={info.instagramUrl || `https://instagram.com/${info.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-[#00c9b7] hover:underline font-semibold">{info.instagram}</a></div>
                  </div>
                  <div className="mt-3.5 flex flex-wrap gap-2.5">
                    <a
                      href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de falar com a Barbearia do Lucas.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Conversar no WhatsApp
                    </a>
                    <a
                      href={info.instagramUrl || `https://instagram.com/${info.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-[#152023] hover:bg-[#1b2b30] border border-[#25393f] rounded-lg transition-colors"
                    >
                      Ver Instagram
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00c9b7] mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Dúvidas Frequentes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Tudo o que você precisa saber
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0f1418] border border-[#1e2d31] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-bold text-white font-heading">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00c9b7] transition-transform duration-200 shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#9ca3af] leading-relaxed border-t border-[#182528] pt-3.5">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick booking banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#122226] to-[#0c1618] border border-[#21373c] text-center space-y-3">
              <h3 className="text-base font-bold text-white font-heading">
                Pronto para viver essa experiência?
              </h3>
              <p className="text-xs text-[#9ca3af]">
                Agende online ou venha conhecer nosso espaço. Mais que corte, é identidade!
              </p>
              <a
                href={info.appBarberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-colors shadow-md inline-block"
              >
                Agende agora
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
