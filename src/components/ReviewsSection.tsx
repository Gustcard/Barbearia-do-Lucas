import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, Heart, MessageSquare, Share2, ThumbsUp, ShieldCheck } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onOpenReviewModal?: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Barbearia do Lucas Rua Orfanato Vila Prudente São Paulo');
  const googleReviewUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Barbearia do Lucas Rua Orfanato Vila Prudente');

  const filterTags = [
    { id: 'todos', label: 'Todas as avaliações (323)' },
    { id: 'Atendimento & Ambiente', label: 'Atendimento & Ambiente' },
    { id: 'Cabelo, Barba & Depilação', label: 'Cabelo, Barba & Depilação' },
    { id: 'Experiência Nota 1000', label: 'Experiência Nota 1000' },
    { id: 'Clube do Lucas', label: 'Clube do Lucas' },
    { id: 'Barbearia Kids', label: 'Kids & Família' },
  ];

  const filteredReviews = selectedTag === 'todos' 
    ? reviews 
    : reviews.filter(r => r.highlightTag === selectedTag);

  return (
    <section id="avaliacoes" className="py-20 bg-gradient-to-b from-[#080b0e] via-[#0b0f13] to-[#080b0e] border-b border-[#182327] relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#00c9b7]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131b20] border border-[#23353c] text-[#00c9b7] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00c9b7]" />
            <span>Mural Oficial de Avaliações Google</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
            O que nossos clientes dizem
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af] max-w-xl mx-auto">
            Avaliações 100% reais e verificadas de quem vive a experiência da Barbearia do Lucas na Vila Prudente.
          </p>
        </div>

        {/* Google Profile Showcase Card (Replicating Image 1 from Google Maps) */}
        <div className="mb-12 rounded-3xl bg-[#0f1418] border border-[#202f35] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00c9b7]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            
            {/* Google Business Info */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                {/* Official Google G Icon */}
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight flex items-center gap-2">
                    Barbearia do Lucas
                    <CheckCircle className="w-5 h-5 text-[#00c9b7] fill-[#00c9b7]/20" />
                  </h3>
                  <p className="text-xs text-[#9ca3af]">
                    Rua Orfanato · Vila Prudente, São Paulo - SP, 03131-010, Brasil
                  </p>
                </div>
              </div>

              {/* Exact Google Rating Block from User's Screenshot */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">
                  5,0
                </span>
                
                {/* 5 Filled Yellow Stars */}
                <div className="flex items-center text-[#fbbc04]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#fbbc04] stroke-[#fbbc04]" />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#cbd5e1]">
                  <strong className="text-white font-bold">323 avaliações</strong>
                  <span className="text-xs text-[#9ca3af] border border-[#374151] rounded-full w-4 h-4 inline-flex items-center justify-center font-serif text-[10px]">
                    i
                  </span>
                </div>

                <span className="text-xs font-bold text-black bg-[#00c9b7] px-2.5 py-1 rounded-full uppercase tracking-wider ml-auto sm:ml-0">
                  Avaliação Máxima Google
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00c9b7]/20 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Avaliar no Google</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#172227] hover:bg-[#202e35] text-white border border-[#273a42] text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-[#00c9b7]" />
                <span>Ver no Google Maps</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {filterTags.map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTag(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedTag === tab.id
                  ? 'bg-[#00c9b7] text-black shadow-md shadow-[#00c9b7]/20'
                  : 'bg-[#0f1418] text-[#9ca3af] hover:text-white border border-[#1b262b] hover:border-[#2a3c44]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mural of Reviews Grid (Replicating Image 2 and Image 3 with authentic Google aesthetics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id] || false;

            return (
              <div
                key={rev.id}
                className="rounded-2xl bg-[#0d1216] border border-[#1d2a30] hover:border-[#00c9b7]/40 p-6 flex flex-col justify-between transition-all shadow-lg hover:shadow-xl hover:shadow-[#00c9b7]/5 relative group"
              >
                <div>
                  {/* Review Header: User Avatar + Name + Subtitle/Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      
                      {/* Avatar with authentic letter badge or color */}
                      <div className={`w-11 h-11 rounded-full ${rev.avatarColor || 'bg-[#2d3748]'} text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0 border border-white/10`}>
                        {rev.avatarLetter || rev.author[0]}
                      </div>

                      <div className="leading-tight">
                        <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                          <span>{rev.author}</span>
                          {rev.userBadge?.includes('Local Guide') && (
                            <span className="w-2 h-2 rounded-full bg-[#fbbc04]" title="Local Guide" />
                          )}
                        </div>
                        
                        <div className="text-xs text-[#9ca3af] mt-0.5 font-normal">
                          {rev.userBadge || 'Avaliação Verificada'}
                        </div>
                      </div>

                    </div>

                    {/* Google 3-dots icon */}
                    <div className="text-[#64748b] hover:text-white transition-colors cursor-pointer text-sm font-bold px-1">
                      •••
                    </div>
                  </div>

                  {/* Stars & Relative Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-[#fbbc04]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbc04] stroke-[#fbbc04]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#9ca3af]">{rev.date}</span>
                  </div>

                  {/* Spent amount tag (present in Pedro Loterio review) */}
                  {rev.spentAmount && (
                    <div className="mb-3">
                      <span className="inline-block text-xs font-semibold text-[#cbd5e1] bg-[#141d22] border border-[#23333a] px-2.5 py-0.5 rounded-md">
                        {rev.spentAmount}
                      </span>
                    </div>
                  )}

                  {/* Review Comment Text (Verbatim from screenshots) */}
                  <p className="text-sm text-[#e2e8f0] leading-relaxed mb-5 font-normal">
                    {rev.comment}
                  </p>
                </div>

                {/* Google Footer Bar: Heart / React + Share + Verified Check */}
                <div className="pt-3.5 border-t border-[#182329] flex items-center justify-between text-xs text-[#9ca3af]">
                  <button
                    onClick={() => toggleLike(rev.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isLiked ? 'text-rose-400 font-bold' : 'hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>{isLiked ? 'Gostei' : 'Passe o cursor para reagir'}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: `Avaliação de ${rev.author} - Barbearia do Lucas`,
                            text: rev.comment,
                            url: googleMapsUrl
                          }).catch(() => {});
                        }
                      }}
                      className="hover:text-white transition-colors p-1"
                      title="Compartilhar avaliação"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1 text-[11px] text-[#00c9b7] font-semibold bg-[#00c9b7]/10 px-2 py-0.5 rounded-full border border-[#00c9b7]/20">
                      <CheckCircle className="w-3 h-3 text-[#00c9b7]" />
                      <span>Google</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0f161a] border border-[#1f2e34] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white font-heading">
              Já cortou seu cabelo ou fez a barba conosco?
            </h4>
            <p className="text-xs text-[#9ca3af] mt-0.5">
              Sua avaliação ajuda a fortalecer a comunidade da Barbearia do Lucas na Vila Prudente.
            </p>
          </div>

          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#00c9b7] hover:bg-[#1fe2cf] text-black text-xs font-bold transition-all shrink-0 shadow-md shadow-[#00c9b7]/15 flex items-center gap-2"
          >
            <Star className="w-4 h-4 fill-black" />
            <span>Deixar minha avaliação no Google</span>
          </a>
        </div>

      </div>
    </section>
  );
};
