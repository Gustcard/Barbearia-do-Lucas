import React from 'react';
import { X, Calendar, Clock, Trash2, CheckCircle2 } from 'lucide-react';
import { Appointment, ServiceItem, Barber, BarbershopInfo } from '../types';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  services: ServiceItem[];
  barbers: Barber[];
  info: BarbershopInfo;
  onCancelAppointment: (id: string) => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  services,
  barbers,
  info,
  onCancelAppointment
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-[#0f1418] border border-[#202f33] rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#1c292d] bg-[#0c1214]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="text-base font-bold text-white font-heading">
                Seus Agendamentos
              </h3>
              <p className="text-xs text-[#9ca3af]">
                Barbearia do Lucas · Horários Marcados
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#9ca3af] hover:text-white rounded-lg hover:bg-[#182326] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of appointments */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4 text-left">
          {appointments.length === 0 ? (
            <div className="text-center py-8 text-[#9ca3af] text-sm">
              Você ainda não tem horários agendados.
            </div>
          ) : (
            appointments.map((apt) => {
              const service = services.find(s => s.id === apt.serviceId);
              const barber = barbers.find(b => b.id === apt.barberId);

              return (
                <div
                  key={apt.id}
                  className="p-4 rounded-xl bg-[#131c1f] border border-[#223337] space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white font-heading">
                        {service?.name || 'Procedimento'}
                      </h4>
                      <div className="text-xs text-[#00c9b7] font-semibold mt-0.5">
                        R$ {service?.price || '45'} · {service?.durationMinutes || 40} min
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Confirmado
                    </span>
                  </div>

                  <div className="text-xs text-[#cbd5e1] space-y-1 border-t border-[#1d2c30] pt-2.5">
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Profissional:</span>
                      <span className="font-semibold text-white">
                        {apt.barberId === 'any' ? 'Primeiro disponível' : barber?.name || 'Lucas Melo'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Data & Horário:</span>
                      <span className="font-bold text-[#00c9b7]">
                        {apt.date} às {apt.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9ca3af]">Cliente:</span>
                      <span className="text-white">{apt.customerName}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#1d2c30]">
                    <button
                      onClick={() => onCancelAppointment(apt.id)}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-medium"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Cancelar horário
                    </button>
                    <a
                      href={`https://wa.me/${info.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá, gostaria de falar sobre meu agendamento na Barbearia do Lucas no dia ${apt.date} às ${apt.time}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#00c9b7] hover:underline font-semibold"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0c1214] border-t border-[#1c292d] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1b272b] hover:bg-[#25373d] rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
