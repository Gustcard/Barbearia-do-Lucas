import React, { useState } from 'react';
import { Camera, Sparkles, X, CheckCircle2, ZoomIn, Calendar, MapPin, Scissors, Baby, Store, Armchair, Users } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  photos: GalleryPhoto[];
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  photos,
  onOpenBooking,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const getSlotIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Store className="w-5 h-5 text-[#00c9b7]" />;
      case 1:
        return <Scissors className="w-5 h-5 text-[#00c9b7]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#00c9b7]" />;
      case 3:
        return <Baby className="w-5 h-5 text-[#00c9b7]" />;
      case 4:
        return <Users className="w-5 h-5 text-[#00c9b7]" />;
      case 5:
        return <Armchair className="w-5 h-5 text-[#00c9b7]" />;
      default:
        return <Camera className="w-5 h-5 text-[#00c9b7]" />;
    }
  };

  return (
    <section id="ambiente" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#080c0e] via-[#0c1215] to-[#080c0e] border-b border-[#182327] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#00a896]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121f22] border border-[#00a896]/30 text-[#00c9b7] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3 h-3 text-[#00c9b7]" />
            <span>Mural Oficial da Barbearia</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading">
            O Espaço da Barbearia do Lucas
          </h2>

          <p className="text-xs sm:text-base text-[#9ca3af] max-w-2xl mx-auto">
            Estrutura climatizada na Vila Prudente: Fachada com Barber Pole, Salão com iluminação Honeycomb LED, Espaço Kids e Bancadas completas.
          </p>
        </div>

        {/* Showcase Grid (Clean 2-cols on mobile, 3-cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 text-left">
          {photos.map((photo, index) => {
            const hasImage = Boolean(photo.imageUrl && photo.imageUrl.trim() !== '');

            return (
              <div
                key={photo.id}
                className="group relative rounded-xl sm:rounded-2xl bg-[#0d1215] border border-[#1e2a2f] hover:border-[#00c9b7]/50 overflow-hidden shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Visual Area */}
                {hasImage ? (
                  <div
                    onClick={() => setSelectedPhoto(photo)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#141d21] cursor-pointer"
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.08] saturate-[1.10] brightness-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e11] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-2 right-2 z-10">
                      <span className="text-[9px] sm:text-[10px] font-bold text-black bg-[#00c9b7] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                        {photo.badge}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#121c20] via-[#0f171a] to-[#0a1012] border-b border-[#1b262a] p-3 sm:p-5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#16272c] border border-[#254149] flex items-center justify-center">
                        {getSlotIcon(index)}
                      </div>
                      <span className="text-[8px] sm:text-[9px] font-bold text-black bg-[#00c9b7] px-1.5 py-0.5 rounded uppercase tracking-wider truncate max-w-[100px]">
                        {photo.badge}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#00c9b7]">
                        0{index + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-heading leading-tight truncate">
                        {photo.title}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Card Description & Call To Action */}
                <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#0c1114]">
                  <p className="text-[11px] sm:text-xs text-[#9ca3af] leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>

                  <div className="pt-2 border-t border-[#182327] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-[11px] sm:text-xs font-bold text-[#00c9b7] hover:underline flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Agendar</span>
                    </button>
                    <span className="text-[10px] text-[#475569] font-medium hidden sm:inline">
                      Sem espera
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 p-4 rounded-xl bg-[#0f1619] border border-[#213137] grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00c9b7] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Climatizado</div>
              <div className="text-[10px] text-[#9ca3af]">Ar-condicionado</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00c9b7] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Espaço Kids</div>
              <div className="text-[10px] text-[#9ca3af]">Cadeira carrinho</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00c9b7] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Luz LED Honeycomb</div>
              <div className="text-[10px] text-[#9ca3af]">Teto hexagonal</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00c9b7] shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Rua Orfanato, 508</div>
              <div className="text-[10px] text-[#9ca3af]">Vila Prudente</div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selectedPhoto.imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0e1417] border border-[#23353c] rounded-2xl overflow-hidden shadow-2xl text-left">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative aspect-[16/10] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 flex items-center justify-between gap-3 bg-[#0a0f12]">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-heading truncate">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#9ca3af] truncate">
                  {selectedPhoto.description}
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenBooking();
                }}
                className="px-4 py-2 rounded-lg bg-[#00c9b7] text-black text-xs font-bold shrink-0"
              >
                Agendar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
