import React, { useState, useRef } from 'react';
import { Camera, Sparkles, X, ChevronRight, Upload, Trash2, Sliders, CheckCircle2, ZoomIn, Calendar, Image as ImageIcon } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  photos: GalleryPhoto[];
  onOpenBooking: () => void;
  onUpdatePhoto: (slotId: string, dataUrl: string) => void;
  onUpdateAllPhotos?: (updates: { slotId: string; dataUrl: string }[]) => void;
  onRemovePhoto: (slotId: string) => void;
  enhancedQuality: boolean;
  onToggleEnhancedQuality: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  photos,
  onOpenBooking,
  onUpdatePhoto,
  onUpdateAllPhotos,
  onRemovePhoto,
  enhancedQuality,
  onToggleEnhancedQuality,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeUploadSlot, setActiveUploadSlot] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const batchFileInputRef = useRef<HTMLInputElement>(null);

  // Single file change
  const handleSingleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadSlot) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          onUpdatePhoto(activeUploadSlot, result);
        }
      };
      reader.readAsDataURL(file);
    }
    if (e.target) e.target.value = '';
    setActiveUploadSlot(null);
  };

  // Batch files handler (select all 6 together)
  const processBatchFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (fileArray.length === 0) return;

    const updates: { slotId: string; dataUrl: string }[] = [];
    let processed = 0;

    fileArray.slice(0, 6).forEach((file, index) => {
      const slot = photos[index];
      if (!slot) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updates.push({ slotId: slot.id, dataUrl: result });
        }
        processed++;
        if (processed === Math.min(fileArray.length, 6)) {
          if (onUpdateAllPhotos) {
            onUpdateAllPhotos(updates);
          } else {
            updates.forEach(u => onUpdatePhoto(u.slotId, u.dataUrl));
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleBatchFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processBatchFiles(e.target.files);
    }
    if (e.target) e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processBatchFiles(e.dataTransfer.files);
    }
  };

  const triggerSingleUpload = (slotId: string) => {
    setActiveUploadSlot(slotId);
    singleFileInputRef.current?.click();
  };

  const triggerBatchUpload = () => {
    batchFileInputRef.current?.click();
  };

  const uploadedCount = photos.filter(p => p.imageUrl && p.imageUrl.trim() !== '').length;

  return (
    <section id="ambiente" className="py-20 bg-gradient-to-b from-[#080c0e] via-[#0c1215] to-[#080c0e] border-b border-[#182327] relative overflow-hidden">
      
      {/* Hidden file inputs for native image loading */}
      <input
        type="file"
        ref={singleFileInputRef}
        onChange={handleSingleFileChange}
        accept="image/*"
        className="hidden"
      />
      <input
        type="file"
        ref={batchFileInputRef}
        onChange={handleBatchFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00a896]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121f22] border border-[#00a896]/30 text-[#00c9b7] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-[#00c9b7]" />
            <span>Mural Oficial de Fotos do Espaço</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            O Espaço Real da Barbearia do Lucas
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl mx-auto">
            Fotografias reais da nossa estrutura na Vila Prudente: Fachada com Barber Pole, Salão com iluminação Honeycomb LED, Espaço Kids e Bancadas profissionais.
          </p>
        </div>

        {/* Batch Upload Dropzone Banner */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerBatchUpload}
          className={`mb-8 p-6 sm:p-8 rounded-3xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center relative overflow-hidden ${
            isDragging
              ? 'border-[#00c9b7] bg-[#00c9b7]/10 scale-[1.01]'
              : 'border-[#00c9b7]/40 bg-gradient-to-r from-[#0d181b] via-[#091114] to-[#0d181b] hover:border-[#00c9b7]'
          }`}
        >
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00c9b7] text-black flex items-center justify-center shadow-lg shadow-[#00c9b7]/25">
              <Upload className="w-6 h-6 stroke-[2.5]" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-black text-white font-heading">
                Carregar as 6 Fotos da Barbearia de uma vez
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af]">
                Clique aqui para selecionar as 6 fotos do seu computador ou celular, ou simplesmente arraste e solte todas elas aqui.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] font-bold text-[#00c9b7] bg-[#122327] border border-[#00c9b7]/30 px-3 py-1 rounded-full">
                {uploadedCount === 6 ? '✓ Todas as 6 fotos carregadas' : `${uploadedCount} de 6 fotos carregadas`}
              </span>
            </div>
          </div>
        </div>

        {/* Quality Enhancer Control Bar */}
        <div className="mb-10 p-4 rounded-2xl bg-[#0f1619] border border-[#21333a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#00c9b7]/15 border border-[#00c9b7]/30 text-[#00c9b7] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                Tratamento de Qualidade & Otimização Visual
                <span className="text-[10px] bg-[#00c9b7] text-black font-extrabold px-2 py-0.5 rounded-full uppercase">
                  {enhancedQuality ? 'HD Ativo' : 'Original'}
                </span>
              </div>
              <div className="text-xs text-[#9ca3af]">
                {enhancedQuality
                  ? 'Ajuste de contraste, nitidez, iluminação equilibrada e realce das cores turquesa e LED.'
                  : 'Exibindo imagens com balanço original de captura.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleEnhancedQuality}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                enhancedQuality
                  ? 'bg-[#00c9b7] text-black shadow-md shadow-[#00c9b7]/20 font-black'
                  : 'bg-[#182327] text-white border border-[#26373e]'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{enhancedQuality ? 'Qualidade Otimizada (Ativa)' : 'Ativar Otimização HD'}</span>
            </button>
          </div>
        </div>

        {/* Photo Grid (6 Dedicated Slots) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {photos.map((photo, index) => {
            const hasImage = Boolean(photo.imageUrl && photo.imageUrl.trim() !== '');

            return (
              <div
                key={photo.id}
                className="group relative rounded-2xl bg-[#0d1215] border border-[#1e2a2f] hover:border-[#00c9b7]/50 overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Photo or Empty Slot Frame */}
                {hasImage ? (
                  <div
                    onClick={() => setSelectedPhoto(photo)}
                    className="relative aspect-[4/3] w-full overflow-hidden bg-[#141d21] cursor-pointer"
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        enhancedQuality ? 'contrast-[1.08] saturate-[1.10] brightness-[1.03]' : ''
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090e11] via-[#090e11]/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-bold text-black bg-[#00c9b7] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                        {photo.badge}
                      </span>
                    </div>

                    {/* Zoom hover indicator */}
                    <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-[#00c9b7]" />
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => triggerSingleUpload(photo.id)}
                    className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#121a1d] to-[#0c1316] border-b border-[#1b262a] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#152125] transition-colors"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#162428] border border-[#253940] text-[#00c9b7] flex items-center justify-center mb-3 shadow-inner">
                      <ImageIcon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-bold text-white mb-1">
                      Foto {index + 1}: {photo.title}
                    </span>
                    <p className="text-[11px] text-[#9ca3af] max-w-[200px] mb-4">
                      {photo.description}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerSingleUpload(photo.id);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-black transition-all flex items-center gap-1.5 shadow-md shadow-[#00c9b7]/20"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Carregar esta foto</span>
                    </button>
                  </div>
                )}

                {/* Footer description & management */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#0c1114]">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-white font-heading">
                        {photo.title}
                      </h3>
                      <span className="text-[10px] text-[#64748b] uppercase font-bold">
                        Foto {index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#9ca3af] mt-1 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  {/* Actions bar */}
                  <div className="pt-3 border-t border-[#182327] flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => triggerSingleUpload(photo.id)}
                      className="text-[#00c9b7] hover:underline font-bold flex items-center gap-1 text-[11px]"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{hasImage ? 'Trocar foto' : 'Enviar foto'}</span>
                    </button>

                    {hasImage && (
                      <button
                        type="button"
                        onClick={() => onRemovePhoto(photo.id)}
                        className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 text-[11px]"
                        title="Remover foto"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remover</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative summary bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0f1619] border border-[#213137] grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Ambiente Climatizado</div>
              <div className="text-[11px] text-[#9ca3af]">Ar condicionado & conforto</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Espaço Kids Especial</div>
              <div className="text-[11px] text-[#9ca3af]">Cadeira carrinho & acolhimento</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Luz Honeycomb LED</div>
              <div className="text-[11px] text-[#9ca3af]">Iluminação sem sombras</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00a896]/15 text-[#00c9b7] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Rua Orfanato, 508</div>
              <div className="text-[11px] text-[#9ca3af]">Vila Prudente · Fácil acesso</div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selectedPhoto.imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#0e1417] border border-[#23353c] rounded-3xl overflow-hidden shadow-2xl text-left">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo large display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-contain ${
                  enhancedQuality ? 'contrast-[1.08] saturate-[1.10] brightness-[1.03]' : ''
                }`}
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-black text-black bg-[#00c9b7] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {selectedPhoto.badge}
                </span>
              </div>
            </div>

            {/* Modal Info Bar */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0a0f12]">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenBooking();
                }}
                className="px-6 py-3 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-black transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-[#00c9b7]/20 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
