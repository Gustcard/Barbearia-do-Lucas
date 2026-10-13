import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onOpenReviewModal?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [selectedTag, setSelectedTag] = useState<string>('todos');

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Barbearia do Lucas Rua Orfanato Vila Prudente São Paulo');
  const googleReviewUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Barbearia do Lucas Rua Orfanato Vila Prudente');

  const filterTags = [
    { id: 'todos', label: 'Todas (323)' },
    { id: 'Atendimento & Ambiente', label: 'Atendimento' },
    { id: 'Cabelo, Barba & Depilação', label: 'Cortes & Barba' },
    { id: 'Experiência Nota 1000', label: 'Nota 1000' },
  ];

  const filteredReviews = selectedTag === 'todos' 
    ? reviews.slice(0, 4) 
    : reviews.filter(r => r.highlightTag === selectedTag).slice(0, 4);

  return (
    <section id="avaliacoes" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-[#080b0e] via-[#0b0f13] to-[#080b0e] border-b border-[#182327] relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00c9b7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131b20] border border-[#23353c] text-[#00c9b7] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00c9b7]" />
            <span>Avaliações Reais Google</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-heading">
            O que nossos clientes dizem
          </h2>

          <p className="text-xs sm:text-sm text-[#9ca3af] max-w-xl mx-auto">
            Mais de 320 avaliações de clientes que confiam na Barbearia do Lucas.
          </p>
        </div>

        {/* Google Profile Showcase Card */}
        <div className="mb-6 sm:mb-10 rounded-2xl bg-[#0f1418] border border-[#202f35] p-4 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading flex items-center gap-1.5">
                    Barbearia do Lucas
                    <CheckCircle className="w-4 h-4 text-[#00c9b7]" />
                  </h3>
                  <p className="text-[11px] text-[#9ca3af]">Rua Orfanato, 508 · Vila Prudente</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-3xl font-black text-white font-heading">5,0</span>
                <div className="flex text-[#fbbc04]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] stroke-[#fbbc04]" />
                  ))}
                </div>
                <span className="text-xs text-[#cbd5e1] font-semibold">323 avaliações no Google</span>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#142226] border border-[#00c9b7]/30 text-[#00c9b7] text-xs font-bold hover:bg-[#00c9b7] hover:text-black transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver perfil no Google</span>
            </a>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-1.5 mb-6 flex-wrap">
          {filterTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedTag === tag.id
                  ? 'bg-[#00c9b7] text-black font-black'
                  : 'bg-[#12191d] text-[#9ca3af] hover:text-white border border-[#1f2c31]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-xl bg-[#0c1114] border border-[#1a262a] space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#16272b] text-[#00c9b7] font-bold text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{rev.author}</div>
                      <div className="text-[10px] text-[#64748b]">{rev.date}</div>
                    </div>
                  </div>
                  <div className="flex text-[#fbbc04]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#fbbc04] stroke-[#fbbc04]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#cbd5e1] leading-relaxed mt-2">
                  "{rev.comment}"
                </p>
              </div>

              {rev.highlightTag && (
                <div className="pt-2 border-t border-[#162024] flex items-center justify-between text-[10px]">
                  <span className="text-[#00c9b7] font-semibold">{rev.highlightTag}</span>
                  <span className="text-[#64748b]">Avaliação verificada</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
