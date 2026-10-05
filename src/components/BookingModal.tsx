import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Scissors, User, Phone, CheckCircle2, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { ServiceItem, Barber, Appointment, BarbershopInfo } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  barbers: Barber[];
  info: BarbershopInfo;
  selectedServiceInitial?: ServiceItem | null;
  selectedBarberInitial?: Barber | null;
  onBookingConfirmed: (appointment: Appointment) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  services,
  barbers,
  info,
  selectedServiceInitial,
  selectedBarberInitial,
  onBookingConfirmed
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [anyBarber, setAnyBarber] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);

  // Initialize from props if opened from specific card
  useEffect(() => {
    if (selectedServiceInitial) {
      setSelectedService(selectedServiceInitial);
      setStep(2);
    } else if (services.length > 0 && !selectedService) {
      setSelectedService(services[0]);
    }
  }, [selectedServiceInitial, services]);

  useEffect(() => {
    if (selectedBarberInitial) {
      setSelectedBarber(selectedBarberInitial);
      setAnyBarber(false);
      if (selectedService) setStep(3);
    }
  }, [selectedBarberInitial]);

  // Generate available next 7 dates
  const nextDays = Array.from({ length: 7 }).map((_, index) => {
    const d = new Date();
    d.setDate(d.getDate() + index);
    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return {
      raw: d.toISOString().split('T')[0],
      dayName: dayNames[d.getDay()],
      dayNumber: d.getDate(),
      month: monthNames[d.getMonth()],
      isSunday: d.getDay() === 0
    };
  }).filter(d => !d.isSunday); // Filter out closed days

  useEffect(() => {
    if (!selectedDate && nextDays.length > 0) {
      setSelectedDate(nextDays[0].raw);
    }
  }, []);

  const timeSlots = [
    '09:00', '09:45', '10:30', '11:15', '13:00', '13:45', '14:30', '15:15', '16:00', '16:45', '17:30', '18:15', '19:00'
  ];

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !customerName.trim() || !customerPhone.trim()) {
      return;
    }

    const newAppointment: Appointment = {
      id: 'apt-' + Date.now(),
      customerName,
      customerPhone,
      serviceId: selectedService.id,
      barberId: anyBarber || !selectedBarber ? 'any' : selectedBarber.id,
      date: selectedDate,
      time: selectedTime,
      notes,
      createdAt: new Date().toISOString(),
      status: 'confirmado'
    };

    setCreatedAppointment(newAppointment);
    onBookingConfirmed(newAppointment);
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    if (!createdAppointment || !selectedService) return;
    const barberName = anyBarber || !selectedBarber ? 'Qualquer barbeiro disponível' : selectedBarber.name;
    const textMessage = `Olá! Gostaria de confirmar meu agendamento na ${info.name}:
• Serviço: ${selectedService.name} (R$ ${selectedService.price})
• Barbeiro: ${barberName}
• Data: ${createdAppointment.date} às ${createdAppointment.time}
• Nome do Cliente: ${createdAppointment.customerName}
• Telefone: ${createdAppointment.customerPhone}
${notes ? `• Observação: ${notes}` : ''}

Por favor, confirme meu horário!`;

    const url = `https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#11131a] border border-[#262b3b] rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1c292d] bg-[#0e1619]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                {isSuccess ? 'Agendamento Realizado!' : 'Agendamento Online'}
              </h3>
              {!isSuccess && (
                <div className="text-xs text-[#9ca3af]">
                  Passo {step} de 4 · {info.name}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9ca3af] hover:text-white rounded-lg hover:bg-[#1a2529] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess && createdAppointment && selectedService ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white font-heading">
                  Horário Reservado com Sucesso!
                </h4>
                <p className="text-sm text-[#9ca3af] mt-1 max-w-md mx-auto">
                  Seu horário foi registrado na Barbearia do Lucas. Para confirmar imediatamente com a equipe, clique no botão do WhatsApp abaixo.
                </p>
              </div>

              {/* Appointment summary receipt */}
              <div className="p-5 rounded-xl bg-[#0f171a] border border-[#1f2f33] text-left max-w-md mx-auto space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-[#1a272a] pb-2">
                  <span className="text-[#9ca3af]">Procedimento:</span>
                  <span className="font-semibold text-white">{selectedService.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#1a272a] pb-2">
                  <span className="text-[#9ca3af]">Valor:</span>
                  <span className="font-bold text-[#00c9b7]">R$ {selectedService.price}</span>
                </div>
                <div className="flex justify-between border-b border-[#1a272a] pb-2">
                  <span className="text-[#9ca3af]">Profissional:</span>
                  <span className="font-semibold text-white">
                    {anyBarber || !selectedBarber ? 'Primeiro disponível' : selectedBarber.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1a272a] pb-2">
                  <span className="text-[#9ca3af]">Data & Hora:</span>
                  <span className="font-semibold text-white">{createdAppointment.date} às {createdAppointment.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9ca3af]">Cliente:</span>
                  <span className="font-semibold text-white">{customerName} ({customerPhone})</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3 px-5 text-sm font-bold text-black bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  Confirmar via WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 px-5 text-sm font-medium text-white hover:text-white bg-[#162125] hover:bg-[#1e2c31] border border-[#26373c] rounded-xl transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step flow */
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1c292d] text-xs">
                <span className={`font-semibold ${step === 1 ? 'text-[#00c9b7]' : 'text-[#9ca3af]'}`}>
                  1. Procedimento
                </span>
                <span className="text-[#4b5563]">→</span>
                <span className={`font-semibold ${step === 2 ? 'text-[#00c9b7]' : 'text-[#9ca3af]'}`}>
                  2. Barbeiro
                </span>
                <span className="text-[#4b5563]">→</span>
                <span className={`font-semibold ${step === 3 ? 'text-[#00c9b7]' : 'text-[#9ca3af]'}`}>
                  3. Data & Hora
                </span>
                <span className="text-[#4b5563]">→</span>
                <span className={`font-semibold ${step === 4 ? 'text-[#00c9b7]' : 'text-[#9ca3af]'}`}>
                  4. Seus Dados
                </span>
              </div>

              {/* Step 1: Escolha do Serviço */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-left">
                    Selecione o Serviço Desejado:
                  </h4>
                  <div className="space-y-2.5">
                    {services.map((svc) => (
                      <div
                        key={svc.id}
                        onClick={() => setSelectedService(svc)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedService?.id === svc.id
                            ? 'border-[#00a896] bg-[#00a896]/15'
                            : 'border-[#1e2a2e] bg-[#0f1418] hover:border-[#2a3c42]'
                        }`}
                      >
                        <div className="text-left">
                          <div className="text-sm font-bold text-white font-heading">{svc.name}</div>
                          <div className="text-xs text-[#9ca3af] mt-0.5">{svc.durationMinutes} min · {svc.shortDescription}</div>
                        </div>
                        <div className="text-right shrink-0 ml-3">
                          <div className="text-sm font-bold text-[#00c9b7] font-heading">R$ {svc.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      disabled={!selectedService}
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] disabled:opacity-50 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      Avançar para Barbeiro <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Escolha do Barbeiro */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-left">
                    Com quem você prefere ser atendido?
                  </h4>

                  {/* Any barber option */}
                  <div
                    onClick={() => {
                      setAnyBarber(true);
                      setSelectedBarber(null);
                    }}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      anyBarber
                        ? 'border-[#00a896] bg-[#00a896]/15'
                        : 'border-[#1e2a2e] bg-[#0f1418] hover:border-[#2a3c42]'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="w-10 h-10 rounded-lg bg-[#182326] flex items-center justify-center text-[#00c9b7]">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">Qualquer profissional disponível</div>
                        <div className="text-xs text-[#9ca3af]">Opção ideal para encontrar o horário mais próximo</div>
                      </div>
                    </div>
                  </div>

                  {/* Barbers list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {barbers.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => {
                          setSelectedBarber(b);
                          setAnyBarber(false);
                        }}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center gap-3 text-left ${
                          !anyBarber && selectedBarber?.id === b.id
                            ? 'border-[#00a896] bg-[#00a896]/15'
                            : 'border-[#1e2a2e] bg-[#0f1418] hover:border-[#2a3c42]'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#162125] border border-[#233539] flex items-center justify-center text-[#00c9b7] font-bold text-sm shrink-0">
                          {b.initials}
                        </div>
                        <div className="overflow-hidden">
                          <div className="text-sm font-bold text-white truncate">{b.name}</div>
                          <div className="text-xs text-[#9ca3af] truncate">{b.role}</div>
                          <div className="text-[11px] text-amber-400 font-bold mt-0.5">★ {b.rating}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-[#9ca3af] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                    </button>
                    <button
                      disabled={!anyBarber && !selectedBarber}
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] disabled:opacity-50 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      Avançar para Horários <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Data e Horário */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                      Escolha o Dia:
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {nextDays.map((day) => (
                        <button
                          key={day.raw}
                          onClick={() => setSelectedDate(day.raw)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            selectedDate === day.raw
                              ? 'border-[#00c9b7] bg-[#00c9b7] text-black font-extrabold shadow-md'
                              : 'border-[#1e2a2e] bg-[#0f1418] text-[#cbd5e1] hover:border-[#2a3c42]'
                          }`}
                        >
                          <div className="text-[11px] uppercase font-bold">{day.dayName}</div>
                          <div className="text-base font-black my-0.5">{day.dayNumber}</div>
                          <div className="text-[10px]">{day.month}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                      Horários Disponíveis:
                    </h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 px-3 rounded-xl border text-xs font-bold tabular-nums transition-all ${
                            selectedTime === slot
                              ? 'border-[#00c9b7] bg-[#00c9b7] text-black shadow-md'
                              : 'border-[#1e2a2e] bg-[#0f1418] text-[#cbd5e1] hover:border-[#2a3c42]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-semibold text-[#9ca3af] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                    </button>
                    <button
                      disabled={!selectedDate || !selectedTime}
                      onClick={() => setStep(4)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] disabled:opacity-50 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      Preencher Meus Dados <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Dados do Cliente */}
              {step === 4 && (
                <form onSubmit={handleConfirm} className="space-y-4 text-left">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Informações para Contato e Confirmação:
                  </h4>

                  {/* Summary badge */}
                  <div className="p-3.5 rounded-xl bg-[#0f171a] border border-[#1f2f33] text-xs text-[#cbd5e1] flex justify-between">
                    <div>
                      <strong className="text-white">{selectedService?.name}</strong>
                      <span className="text-[#9ca3af]"> · {anyBarber || !selectedBarber ? 'Primeiro disponível' : selectedBarber.name}</span>
                    </div>
                    <div className="font-bold text-[#00c9b7]">
                      {selectedDate} às {selectedTime}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ex: Carlos Oliveira"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f1418] border border-[#202f33] text-white text-sm focus:outline-hidden focus:border-[#00c9b7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Seu WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="(11) 99999-8888"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0f1418] border border-[#202f33] text-white text-sm focus:outline-hidden focus:border-[#00c9b7]"
                    />
                    <span className="text-[11px] text-[#9ca3af] mt-1 block">
                      Enviaremos o lembrete e confirmação direta no seu WhatsApp.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#9ca3af] mb-1">
                      Observações ou Preferências (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Preferência por degradê navalhado, corte infantil, etc."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#0f1418] border border-[#202f33] text-white text-sm focus:outline-hidden focus:border-[#00c9b7]"
                    />
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-4 py-2 text-xs font-semibold text-[#9ca3af] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Voltar
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs sm:text-sm font-bold text-black bg-[#00c9b7] hover:bg-[#1fe2cf] rounded-xl transition-colors flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Finalizar e Confirmar Horário
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
