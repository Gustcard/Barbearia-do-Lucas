export type ServiceCategory = 'cabelo' | 'barba' | 'estetica' | 'tratamentos' | 'kids';

export interface ServiceItem {
  id: string;
  name: string;
  titleHighlight: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  popular?: boolean;
}

export interface ClubPlan {
  id: string;
  name: string;
  price: number;
  visitsPerMonth: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  subscriptionChannels: string[];
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialties: string[];
  bio: string;
  rating: number;
  reviewsCount: number;
  initials: string;
  badge?: string;
}

export interface Appointment {
  id: string;
  customerName: string;
  customerPhone: string;
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: string;
  status: 'confirmado' | 'pendente';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service?: string;
  comment: string;
  city?: string;
  avatarColor?: string;
  avatarLetter?: string;
  userBadge?: string;
  spentAmount?: string;
  verifiedGoogle?: boolean;
  highlightTag?: string;
}

export interface BarbershopInfo {
  name: string;
  shortName: string;
  tagline: string;
  sloganBadge: string;
  description: string;
  address: string;
  streetNumber: string;
  neighborhood: string;
  city: string;
  postalCode?: string;
  phone: string;
  whatsapp: string;
  appBarberUrl: string;
  instagram: string;
  instagramUrl?: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  amenities: {
    title: string;
    description: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  badge: string;
  featured?: boolean;
}
