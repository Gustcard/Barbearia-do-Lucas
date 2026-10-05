import { BarbershopInfo, ServiceItem, Barber, Review, ClubPlan, GalleryPhoto } from '../types';

export const initialBarbershopInfo: BarbershopInfo = {
  name: "Barbearia do Lucas",
  shortName: "Barbearia do Lucas",
  tagline: "Mais que corte, é identidade",
  sloganBadge: "Mais que corte, é identidade",
  description: "Cortes modernos, barboterapia tradicional, estética facial e o Clube do Lucas, nosso clube exclusivo de assinatura. Atendimento de excelência na Vila Prudente com equipe especializada para valorizar o seu estilo único.",
  address: "Rua Orfanato",
  streetNumber: "",
  neighborhood: "Vila Prudente",
  city: "São Paulo - SP",
  postalCode: "03131-010",
  phone: "(11) 91400-7349",
  whatsapp: "5511914007349",
  appBarberUrl: "https://sites.appbarber.com.br/barbeariadoluca-q0wh?source=google_reserve&rwg_token=AE37R_jz5KoeeUR7H1NS2cJbTub6siOoQOlVdgXmJ8DwKOBJCbS-ZwTxQ1JCd9qqeEIwcKLYF0rPNjj6ltZB6ei_Fjncp3dUhQ%3D%3D",
  instagram: "@barbeariado_lucas",
  instagramUrl: "https://instagram.com/barbeariado_lucas",
  openingHours: {
    weekdays: "Segunda a Sexta: 09:00 às 20:00",
    saturday: "Sábados: 08:30 às 19:30",
    sunday: "Domingos & Feriados: Fechado"
  },
  amenities: [
    {
      title: "Clube do Lucas (Assinatura Mensal)",
      description: "Nosso clube de assinatura exclusivo: corte o cabelo até 4x no mês por um valor fixo. Praticidade total para manter o visual sempre alinhado."
    },
    {
      title: "Barbaterapia Completa",
      description: "Ritual com toalha quente, hidratação dos fios, cuidados especiais com a pele e acabamento impecável na lâmina."
    },
    {
      title: "Barbearia do Lucas Kids",
      description: "Atendimento com carinho, paciência e cortes modernos para que as crianças tenham uma experiência leve e divertida."
    },
    {
      title: "Estética & Cuidados Faciais",
      description: "Limpeza de pele profunda, depilação de orelha/nariz e design de sobrancelha para um cuidado completo."
    }
  ]
};

export const initialServices: ServiceItem[] = [
  // 1. Corte
  {
    id: "corte",
    name: "Corte",
    titleHighlight: "Estilo e personalidade: Cortes que valorizam a sua identidade",
    category: "cabelo",
    price: 50,
    durationMinutes: 40,
    shortDescription: "Corte sob medida respeitando o formato do seu rosto, textura dos fios e estilo de vida.",
    fullDescription: "O corte de cabelo ideal tem o poder de transformar o visual e elevar a sua autoestima. Seja você adepto de um estilo clássico, moderno, despojado ou focado nas últimas tendências, nossa equipe de profissionais está pronta para entender o formato do seu rosto, a textura dos seus fios e o seu estilo de vida. Mais do que cortar, nós criamos um visual sob medida para você, garantindo um caimento perfeito e facilidade na manutenção do dia a dia. Venha renovar o seu corte com quem entende do assunto!",
    popular: true,
    features: [
      "Análise de visagismo e formato facial",
      "Fade disfarçado, social clássico ou tesoura livre",
      "Lavagem capilar e finalização com pomada"
    ]
  },
  // 2. Corte e Barba
  {
    id: "corte-e-barba",
    name: "Corte e Barba",
    titleHighlight: "O combo mais pedido: Visual completo renovado em uma única sessão",
    category: "cabelo",
    price: 90,
    durationMinutes: 80,
    shortDescription: "Corte completo personalizado + ritual de barba com toalha quente e acabamento na navalha.",
    fullDescription: "A experiência completa da Barbearia do Lucas. Alinhamento total do cabelo e da barba com toalha quente, produtos botânicos calmantes e finalização impecável.",
    popular: true,
    features: [
      "Corte personalizado à sua escolha",
      "Ritual de barba com toalha quente",
      "Massagem facial relaxante e balm hidratante",
      "Economia especial no combo"
    ]
  },
  // 3. Barba
  {
    id: "barba",
    name: "Barba (Barbaterapia)",
    titleHighlight: "Cuidar da barba vai muito além de simplesmente aparar os pelos",
    category: "barba",
    price: 40,
    durationMinutes: 40,
    shortDescription: "Preparação da pele, toalha quente, produtos específicos e acabamento preciso.",
    fullDescription: "A Barbaterapia é um momento de cuidado completo: preparação da pele, toalha quente, produtos específicos e técnicas que proporcionam uma experiência muito mais confortável durante o atendimento. Além de deixar a barba alinhada, o cuidado ajuda a manter a pele mais limpa, hidratada e bem cuidada. Aqui, cada detalhe importa. Você entra para cuidar da barba e sai com aquela sensação de ter feito algo por você.",
    popular: true,
    features: [
      "Toalha quente para abertura dos poros",
      "Cuidado com a pele contra irritações",
      "Alinhamento simétrico na lâmina descartável",
      "Pós-barba calmante e hidratante"
    ]
  },
  // 4. Hidratação Barba
  {
    id: "hidratacao-barba",
    name: "hidratação Barba",
    titleHighlight: "Barba macia, confortável e com aparência bem cuidada",
    category: "barba",
    price: 25,
    durationMinutes: 20,
    shortDescription: "Tratamento hidratante para amaciar os fios da barba, eliminar aspereza e dar brilho.",
    fullDescription: "Na Barbaterapia da Barbearia do Lucas, além de alinhar e cuidar dos fios, você também pode aproveitar uma hidratação que ajuda a deixar a barba mais macia, confortável e com aparência bem cuidada. O cuidado começa na preparação da pele e vai até os detalhes finais da barba.",
    popular: false,
    features: [
      "Elimina ressecamento e pontas espetadas",
      "Óleos vegetais nutritivos de rápida absorção",
      "Fragrância masculina e toque suave"
    ]
  },
  // 5. Limpeza de Pele
  {
    id: "limpeza-de-pele",
    name: "Limpeza De Pele",
    titleHighlight: "Renove sua pele: Limpeza de Pele Profunda e Revitalizadora",
    category: "estetica",
    price: 25,
    durationMinutes: 40,
    shortDescription: "Remoção de impurezas, cravos e células mortas com vapor de ozônio e alta frequência.",
    fullDescription: "Uma pele saudável começa com o cuidado certo. Nossa limpeza de pele profunda é um procedimento completo desenvolvido para remover impurezas, cravos, miliuns e células mortas que se acumulam no dia a dia devido à poluição e à oleosidade. O processo inclui higienização, esfoliação, aplicação de emolientes com vapor de ozônio para abertura dos poros, extração cuidadosa, alta frequência (ação bactericida e cicatrizante), além de uma máscara calmante e hidratação final. O resultado é uma pele limpa, oxigenada, com toque macio e o viço natural restaurado. Ideal para todos os tipos de pele.",
    popular: true,
    features: [
      "Higienização profunda e esfoliação",
      "Vapor de ozônio e extração cuidadosa",
      "Alta frequência cicatrizante e bactericida",
      "Máscara calmante e viço natural restaurado"
    ]
  },
  // 6. Depilação Nariz
  {
    id: "depilacao-nariz",
    name: "Depilação Nariz",
    titleHighlight: "Cuidado nos mínimos detalhes: Remoção rápida, confortável e higiênica",
    category: "estetica",
    price: 15,
    durationMinutes: 15,
    shortDescription: "Remoção rápida, segura e duradoura de pelos indesejados na região nasal.",
    fullDescription: "O cuidado com a aparência e a higiene masculina também passa pelos pequenos detalhes. Nossos serviços de depilação para nariz oferecem uma solução rápida, segura e altamente eficaz para a remoção dos pelos indesejados nessas regiões sensíveis. Utilizamos técnicas precisas que garantem o máximo de conforto e durabilidade, evitando cortes ou irritações comuns de métodos tradicionais. Sinta-se renovado, com uma sensação de leveza e o visual sempre impecável.",
    popular: false,
    features: [
      "Técnica rápida e confortável",
      "Sem irritações ou cortes de lâmina",
      "Durabilidade superior de até 4 semanas"
    ]
  },
  // 7. Depilação Orelha
  {
    id: "depilacao-orelha",
    name: "Depilação Orelha",
    titleHighlight: "Visual limpo e alinhado nos pequenos detalhes auriculares",
    category: "estetica",
    price: 15,
    durationMinutes: 15,
    shortDescription: "Eliminação precisa dos pelos na orelha e lóbulo com acabamento higiênico.",
    fullDescription: "O cuidado com a aparência e a higiene masculina também passa pelos pequenos detalhes. Nossos serviços de depilação para orelha oferecem uma solução rápida, segura e altamente eficaz para a remoção dos pelos indesejados nessas regiões sensíveis. Sinta-se renovado, com uma sensação de leveza e o visual sempre impecável.",
    popular: false,
    features: [
      "Procedimento rápido em poucos minutos",
      "Totalmente seguro e sem desconforto",
      "Higiene e visual impecável"
    ]
  },
  // 8. Sobrancelha
  {
    id: "sobrancelha",
    name: "Sobrancelha",
    titleHighlight: "Alinhamento na navalha e pinça respeitando o desenho natural",
    category: "estetica",
    price: 10,
    durationMinutes: 15,
    shortDescription: "Design e limpeza dos excessos com caimento masculino e harmônico.",
    fullDescription: "Limpeza de excessos entre as sobrancelhas e ao redor do contorno, mantendo a naturalidade e destacando o olhar masculino sem afinar excessivamente.",
    popular: false,
    features: [
      "Limpeza entre sobrancelhas",
      "Alinhamento harmônico com o formato do rosto",
      "Acabamento na lâmina e tesoura"
    ]
  },
  // 9. Sobrancelha Cera
  {
    id: "sobrancelha-cera",
    name: "Sobrancelha Cera",
    titleHighlight: "Design duradouro com remoção na cera morna pela raiz",
    category: "estetica",
    price: 15,
    durationMinutes: 10,
    shortDescription: "Remoção rápida pela raiz com cera morna suave para maior durabilidade.",
    fullDescription: "Ideal para quem busca maior durabilidade entre as manutenções. A cera morna remove os pelos pela raiz rapidamente, deixando o contorno limpo por muito mais tempo.",
    popular: false,
    features: [
      "Maior durabilidade entre as visitas",
      "Cera morna antialérgica",
      "Rápido e sem marcas"
    ]
  },
  // 10. Pezinho
  {
    id: "pezinho",
    name: "Pezinho",
    titleHighlight: "Alinhamento e demarcação nítida dos contornos do cabelo",
    category: "cabelo",
    price: 15,
    durationMinutes: 10,
    shortDescription: "Acabamento no contorno da testa, costeletas e nuca com lâmina descartável.",
    fullDescription: "Manutenção rápida para quem já cortou o cabelo recentemente e quer manter o contorno do pezinho sempre alinhado, limpo e simétrico.",
    popular: false,
    features: [
      "Navalhado preciso e simétrico",
      "Loção refrescante pós-navalha",
      "Rápido e prático para o dia a dia"
    ]
  },
  // 11. Raspar Cabelo
  {
    id: "raspar-cabelo",
    name: "Raspar Cabelo",
    titleHighlight: "Praticidade e precisão de máquina em todo o couro cabeludo",
    category: "cabelo",
    price: 30,
    durationMinutes: 40,
    shortDescription: "Corte todo na máquina ou shaver, com acabamento do contorno e lavagem.",
    fullDescription: "Raspagem homogênea em todo o cabelo com máquina ou navalha, lavagem refrescante e hidratação do couro cabeludo.",
    popular: false,
    features: [
      "Uniformidade total de altura",
      "Acabamento do pezinho",
      "Lavagem capilar refrescante"
    ]
  },
  // 12. Raspar Cabelo e Fazer a Barba
  {
    id: "raspar-cabelo-fazer-barba",
    name: "Raspar Cabelo e Fazer a Barba",
    titleHighlight: "Cabelo raspado com acabamento milimétrico + Barba alinhada",
    category: "cabelo",
    price: 70,
    durationMinutes: 80,
    shortDescription: "Raspagem completa do cabelo acompanhada do ritual de barboterapia com toalha quente.",
    fullDescription: "Combo prático para quem usa cabelo raspado e deseja a barba perfeitamente desenhada, macia e com toalha quente.",
    popular: false,
    features: [
      "Raspagem uniforme e rápida",
      "Ritual de barba completo na toalha quente",
      "Hidratação e pós-barba calmante"
    ]
  },
  // 13. Hidratação
  {
    id: "hidratacao",
    name: "Hidratação",
    titleHighlight: "Fios nutridos e brilhantes: O poder da Hidratação Capilar",
    category: "tratamentos",
    price: 25,
    durationMinutes: 40,
    shortDescription: "Tratamento de alta performance para repor água e nutrientes essenciais.",
    fullDescription: "Ressecamento, frizz e opacidade estão com os dias contados. Nosso tratamento de hidratação capilar profunda repõe a água e os nutrientes essenciais que a fibra capilar perde devido a agressões diárias, como sol, poluição, uso de secador, chapinha e processos químicos. Utilizamos produtos de alta performance ricos em vitaminas e agentes umectantes que penetram profundamente nos fios. O resultado imediato é um cabelo extremamente macio, leve, com balanço natural e um brilho espelhado de dar inveja.",
    popular: false,
    features: [
      "Nutrição profunda da fibra capilar",
      "Eliminação imediata do frizz e aspereza",
      "Brilho espelhado e toque maleável"
    ]
  },
  // 14. Alisamento
  {
    id: "alisamento",
    name: "Alisamento",
    titleHighlight: "Liso perfeito e natural: Tratamento de Desondulação e Alisamento",
    category: "tratamentos",
    price: 60,
    durationMinutes: 40,
    shortDescription: "Redução de volume e controle de ondas com tecnologia avançada.",
    fullDescription: "Se você busca praticidade no dia a dia sem abrir mão da saúde dos fios, o nosso serviço de alisamento/desondulação é a escolha ideal. Desenvolvido com tecnologia de ponta, o procedimento alisa ou reduz o volume e as ondas indesejadas de forma progressiva e controlada. Garantimos um alisamento com aspecto natural, livre do frizz, mantendo a estrutura capilar protegida, maleável e com um brilho incrível. Diga adeus às horas perdidas na escova e conquiste um cabelo alinhado e solto por muito mais tempo.",
    popular: false,
    features: [
      "Alisamento com aspecto natural sem rigidez",
      "Redução controlada de volume e ondas",
      "Proteção térmica e da fibra capilar"
    ]
  },
  // 15. Progressiva
  {
    id: "progressiva",
    name: "Progressiva",
    titleHighlight: "Alinhamento capilar prolongado com efeito liso duradouro",
    category: "tratamentos",
    price: 90,
    durationMinutes: 80,
    shortDescription: "Selagem térmica e reconstrução para fios lisos, alinhados e sem volume.",
    fullDescription: "Tratamento intensivo que sela as cutículas dos fios, proporcionando um liso espelhado de longa duração. Reduz o tempo de secagem no dia a dia e protege os fios da umidade e do frizz.",
    popular: true,
    features: [
      "Efeito liso duradouro e alinhado",
      "Selagem térmica e brilho intenso",
      "Facilidade total no dia a dia"
    ]
  },
  // 16. Botox
  {
    id: "botox",
    name: "Botox",
    titleHighlight: "Reconstrução capilar profunda e reposição de massa",
    category: "tratamentos",
    price: 70,
    durationMinutes: 80,
    shortDescription: "Recuperação de fios danificados, alinhamento térmico e redução de frizz.",
    fullDescription: "O botox capilar preenche as fissuras da fibra capilar com queratina, colágeno e aminoácidos. Devolve a densidade natural aos fios enfraquecidos, diminuindo o volume excessivo sem tirar o balanço.",
    popular: false,
    features: [
      "Reposição de massa e queratina",
      "Redução de volume e frizz",
      "Aspecto encorpado e brilhante"
    ]
  },
  // 17. Platinado
  {
    id: "platinado",
    name: "Platinado",
    titleHighlight: "Efeito nevou / platinado impecável sem agredir o couro cabeludo",
    category: "tratamentos",
    price: 120,
    durationMinutes: 120,
    shortDescription: "Descoloração profissional com neutralização de tons amarelados e hidratação.",
    fullDescription: "Técnica apurada de descoloração e matização para alcançar o branco/acinzentado perfeito com segurança. Inclui tratamento protetor do couro cabeludo e hidratação reconstrutora pós-química.",
    popular: true,
    features: [
      "Tom platinado homogêneo e limpo",
      "Proteção térmica e do couro cabeludo",
      "Matização anti-amarelo e hidratação"
    ]
  },
  // 18. Luzes
  {
    id: "luzes",
    name: "Luzes",
    titleHighlight: "Iluminação sutil ou marcante para valorizar a textura do corte",
    category: "tratamentos",
    price: 90,
    durationMinutes: 120,
    shortDescription: "Mechas e pontos de luz na touca ou papel com nuance moderna.",
    fullDescription: "Aplicação de mechas com descoloração controlada para iluminar o visual e dar sensação de profundidade e textura ao corte de cabelo.",
    popular: false,
    features: [
      "Contraste harmônico e moderno",
      "Matização personalizada",
      "Lavagem reconstrutora"
    ]
  },
  // 19. Tintura
  {
    id: "tintura",
    name: "Tintura",
    titleHighlight: "Cobertura de fios brancos ou mudança de tom com efeito natural",
    category: "tratamentos",
    price: 80,
    durationMinutes: 40,
    shortDescription: "Coloração capilar homogênea com produtos suaves e antialérgicos.",
    fullDescription: "Coloração capilar de alto rendimento para cobertura perfeita de fios brancos ou mudança de tom com tonalidades masculinas discretas e uniformes.",
    popular: false,
    features: [
      "Cobertura 100% dos fios brancos",
      "Tons naturais e discretos",
      "Brilho e fixação prolongada"
    ]
  }
];

export const clubPlans: ClubPlan[] = [
  {
    id: "clube-corte",
    name: "Clube do Lucas: Corte",
    price: 100,
    visitsPerMonth: 4,
    badge: "Mais Popular",
    popular: true,
    features: [
      "Corte o cabelo até 4x no mês",
      "Pague um valor fixo de R$ 100/mês",
      "Economia garantida para manter o degradê sempre alinhado",
      "Agendamento prioritário online ou WhatsApp"
    ],
    subscriptionChannels: ["WhatsApp", "Recepção Barbearia do Lucas", "AppBarber"]
  },
  {
    id: "clube-barba",
    name: "Clube do Lucas: Barba",
    price: 80,
    visitsPerMonth: 4,
    features: [
      "Faça a barba até 4x no mês",
      "Pague um valor fixo de R$ 80/mês",
      "Toalha quente e desenho de navalha sempre impecáveis",
      "Produtos pré e pós-barba inclusos"
    ],
    subscriptionChannels: ["WhatsApp", "Recepção Barbearia do Lucas", "AppBarber"]
  },
  {
    id: "clube-corte-barba",
    name: "Clube do Lucas: Corte & Barba",
    price: 180,
    visitsPerMonth: 4,
    badge: "Completo",
    popular: true,
    features: [
      "Corte + Barba até 4x no mês",
      "Pague um valor fixo de R$ 180/mês",
      "Visual renovado semanalmente por menos de R$ 45 a visita",
      "Atendimento VIP e todos os benefícios do clube"
    ],
    subscriptionChannels: ["WhatsApp", "Recepção Barbearia do Lucas", "AppBarber"]
  }
];

export const initialBarbers: Barber[] = [
  {
    id: "lucas-melo",
    name: "Lucas Melo",
    role: "Fundador & Mestre Barbeiro",
    experienceYears: 10,
    specialties: ["Cortes Fade & Visagismo", "Barboterapia", "Consultoria de Estilo"],
    bio: "Idealizador da Barbearia do Lucas. Apaixonado pela arte da barbearia clássica e moderna, com foco em cortes que valorizam a identidade e o estilo de cada cliente.",
    rating: 5.0,
    reviewsCount: 520,
    initials: "LM",
    badge: "Mestre Barbeiro"
  },
  {
    id: "barbeiro-equipe-1",
    name: "Especialista em Degradê & Fade",
    role: "Barbeiro Sênior",
    experienceYears: 6,
    specialties: ["Low Fade / Mid Fade", "Cortes Despojados", "Alinhamento com Shaver"],
    bio: "Focado em transições limpas e precisão cirúrgica de máquina, proporcionando um acabamento moderno e duradouro.",
    rating: 4.96,
    reviewsCount: 340,
    initials: "FD",
    badge: "Fade Master"
  },
  {
    id: "barbeiro-equipe-2",
    name: "Especialista em Cabelo & Química",
    role: "Barbeiro & Colorista",
    experienceYears: 5,
    specialties: ["Desondulação / Alisamento", "Hidratação Profunda", "Barbearia Kids"],
    bio: "Dedicado aos tratamentos capilares, texturização, cuidados masculinos e atendimento com paciência especial para o público infantil.",
    rating: 4.94,
    reviewsCount: 290,
    initials: "EK",
    badge: "Kids & Tratamentos"
  }
];

export const initialReviews: Review[] = [
  {
    id: "rev-google-1",
    author: "RKZ",
    rating: 5,
    date: "um mês atrás",
    userBadge: "1 avaliação",
    comment: "Atendimento do profissional Lucas é algo de outro mundo, e o corte também nem se fala, estrutura é ambiente top, recomendo pra geral ter essa experiência",
    verifiedGoogle: true,
    avatarColor: "bg-[#2d3748]",
    avatarLetter: "R",
    highlightTag: "Atendimento & Ambiente"
  },
  {
    id: "rev-google-2",
    author: "Pedro Loterio",
    rating: 5,
    date: "2 meses atrás",
    userBadge: "Local Guide · 30 avaliações · 3 fotos",
    spentAmount: "R$ 80–100",
    comment: "Atendimento top! Lucas muito atencioso! Cabelo, barba e depilação na orelha sem dor! Galera bem daora! Recomendo.",
    verifiedGoogle: true,
    avatarColor: "bg-[#b45309]",
    avatarLetter: "P",
    highlightTag: "Cabelo, Barba & Depilação"
  },
  {
    id: "rev-google-3",
    author: "Gledson Alexandre De Paula",
    rating: 5,
    date: "4 meses atrás",
    userBadge: "3 avaliações",
    comment: "Excelente experiência na barbearia do Lucas! Profissionais de alta qualidade, super educados e atenciosos, atendimento nota 1000. Ambiente agradável demais, cheio de capricho em cada detalhe. Lugar diferenciado, recomendo muito!",
    verifiedGoogle: true,
    avatarColor: "bg-[#5c6bc0]",
    avatarLetter: "G",
    highlightTag: "Experiência Nota 1000"
  },
  {
    id: "rev-google-4",
    author: "Lucas Souza",
    rating: 5,
    date: "5 meses atrás",
    userBadge: "5 avaliações",
    comment: "Atendimento excelente super atenciosos barbearia muito top clima muito bom, podem ir sem medo os meninos são bons super recomendo.",
    verifiedGoogle: true,
    avatarColor: "bg-[#43a047]",
    avatarLetter: "L",
    highlightTag: "Equipe & Clima"
  },
  {
    id: "rev-google-5",
    author: "Matheus Oliveira",
    rating: 5,
    date: "Há 2 dias",
    userBadge: "Assinante Clube do Lucas",
    comment: "Melhor investimento que fiz! O Clube do Lucas é sensacional, corto 4 vezes no mês e meu degradê está sempre afiado. A Barbearia do Lucas na Vila Prudente é top demais!",
    verifiedGoogle: true,
    avatarColor: "bg-[#00c9b7]",
    avatarLetter: "M",
    highlightTag: "Clube do Lucas"
  },
  {
    id: "rev-google-6",
    author: "Carla Mendes",
    rating: 5,
    date: "Há 1 semana",
    userBadge: "Mãe do Theo (4 anos)",
    comment: "Levei meu filho de 4 anos e a paciência do Lucas e equipe foi exemplar. O corte ficou lindo e meu filho adorou o ambiente. Barbearia nota 10!",
    verifiedGoogle: true,
    avatarColor: "bg-[#ec4899]",
    avatarLetter: "C",
    highlightTag: "Barbearia Kids"
  }
];

export const faqItems = [
  {
    question: "Como funciona o Clube do Lucas de Assinatura?",
    answer: "No Clube do Lucas você paga um valor fixo mensal (ex: R$ 100 para Corte, R$ 80 para Barba ou R$ 180 para Corte + Barba) e tem direito a vir 4 vezes no mês. Você pode assinar diretamente pelo WhatsApp, na recepção da barbearia (Rua Orfanato, Vila Prudente) ou pelo aplicativo AppBarber!"
  },
  {
    question: "Qual o valor e como é feita a Limpeza de Pele?",
    answer: "A Limpeza de Pele custa apenas R$ 25,00 (40 minutos) e inclui higienização, esfoliação, emolientes com vapor de ozônio para abrir os poros, extração cuidadosa de cravos e miliuns, aplicação de alta frequência com ação bactericida e cicatrizante, máscara calmante e hidratação restauradora."
  },
  {
    question: "Qual a diferença entre Alisamento, Botox e Progressiva?",
    answer: "O Alisamento (R$ 60,00 | 40 min) reduz o volume e ondas indesejadas de forma prática e controlada. O Botox (R$ 70,00 | 80 min) reconstrói a fibra capilar repondo massa e queratina. Já a Progressiva (R$ 90,00 | 80 min) promove selagem térmica profunda com efeito liso prolongado."
  },
  {
    question: "O que está incluso na Barbaterapia (Barba)?",
    answer: "A Barbaterapia (R$ 40,00 | 40 min) inclui preparação da pele com toalha quente, desenho preciso na navalha, hidratação dos fios, cuidados contra irritações e aplicação de bálsamo calmante. Você também pode adicionar a Hidratação de Barba por R$ 25,00."
  },
  {
    question: "Como faço para agendar meu horário?",
    answer: "Basta clicar em qualquer botão 'Agende agora' nesta página para escolher o serviço, o barbeiro e o horário de sua preferência no sistema oficial da Barbearia do Lucas, ou entrar em contato pelo nosso WhatsApp (11) 91400-7349."
  }
];

export const defaultGallerySlots: GalleryPhoto[] = [
  {
    id: "slot-fachada",
    title: "Fachada & Entrada Oficial",
    category: "Fachada",
    badge: "Rua Orfanato · Vila Prudente",
    description: "Nossa fachada turquesa com letreiro oficial e o clássico Barber Pole giratório luminoso.",
    imageUrl: "",
    featured: true
  },
  {
    id: "slot-fade",
    title: "Precisão em Degradê & Fade",
    category: "Cortes",
    badge: "Visagismo de Precisão",
    description: "Corte de perfil em degradê sem marcação, transição suave e alinhamento milimétrico.",
    imageUrl: "",
    featured: false
  },
  {
    id: "slot-salao-led",
    title: "Salão & Iluminação Honeycomb LED",
    category: "Ambiente",
    badge: "Teto Hexagonal LED",
    description: "Amplo salão climatizado com nossa assinatura luminosa em hexágonos de LED no teto, poltronas e lavatórios modernos.",
    imageUrl: "",
    featured: true
  },
  {
    id: "slot-kids",
    title: "Espaço Kids: Cadeira Carrinho Esportivo",
    category: "Kids",
    badge: "Exclusivo para os Pequenos",
    description: "Cadeira temática em miniatura de carro esportivo elétrico, brinquedos, pirulitos e acolhimento.",
    imageUrl: "",
    featured: true
  },
  {
    id: "slot-barbeiro",
    title: "Atendimento Amigável & Equipe em Ação",
    category: "Atendimento",
    badge: "Equipe Lucas",
    description: "Barbeiro uniformizado com camiseta oficial, sorriso no rosto e técnica refinada.",
    imageUrl: "",
    featured: false
  },
  {
    id: "slot-bancadas",
    title: "Bancadas Profissionais & Espelhos LED",
    category: "Estrutura",
    badge: "Sem Fila de Espera",
    description: "Estações completas com espelhos emoldurados em luz quente, bancadas em madeira nobre e cadeiras reclináveis.",
    imageUrl: "",
    featured: false
  }
];

export const galleryPhotos = defaultGallerySlots;

