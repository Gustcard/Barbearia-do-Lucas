/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClubSection } from './components/ClubSection';
import { BarbaTerapiaSection } from './components/BarbaTerapiaSection';
import { ServicesSection } from './components/ServicesSection';
import { KidsSection } from './components/KidsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import {
  initialBarbershopInfo,
  initialServices,
  clubPlans,
  initialBarbers,
  initialReviews,
  defaultGallerySlots
} from './data/defaultData';
import { BarbershopInfo, ServiceItem, Barber, Appointment, Review, GalleryPhoto } from './types';

export default function App() {
  // Barbershop data state (persisted in localStorage)
  const [shopInfo, setShopInfo] = useState<BarbershopInfo>(() => {
    try {
      const saved = localStorage.getItem('barbearia_lucas_info_v4');
      return saved ? JSON.parse(saved) : initialBarbershopInfo;
    } catch {
      return initialBarbershopInfo;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('barbearia_lucas_services_v5');
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [barbers] = useState<Barber[]>(initialBarbers);
  const [reviews] = useState<Review[]>(initialReviews);

  // Real photos of the barbershop (persisted in localStorage)
  const [photos, setPhotos] = useState<GalleryPhoto[]>(() => {
    try {
      const saved = localStorage.getItem('barbearia_lucas_user_photos_v2');
      return saved ? JSON.parse(saved) : defaultGallerySlots;
    } catch {
      return defaultGallerySlots;
    }
  });

  const [enhancedQuality, setEnhancedQuality] = useState<boolean>(true);

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const saved = localStorage.getItem('barbearia_lucas_appointments_v5');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);

  const [preSelectedService, setPreSelectedService] = useState<ServiceItem | null>(null);
  const [preSelectedBarber, setPreSelectedBarber] = useState<Barber | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('barbearia_lucas_info_v4', JSON.stringify(shopInfo));
  }, [shopInfo]);

  useEffect(() => {
    localStorage.setItem('barbearia_lucas_services_v5', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('barbearia_lucas_appointments_v5', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('barbearia_lucas_user_photos_v2', JSON.stringify(photos));
  }, [photos]);

  const handleUpdatePhoto = (slotId: string, dataUrl: string) => {
    setPhotos(prev => prev.map(p => p.id === slotId ? { ...p, imageUrl: dataUrl } : p));
  };

  const handleUpdateAllPhotos = (updates: { slotId: string; dataUrl: string }[]) => {
    setPhotos(prev => {
      const updateMap = new Map(updates.map(u => [u.slotId, u.dataUrl]));
      return prev.map(p => updateMap.has(p.id) ? { ...p, imageUrl: updateMap.get(p.id)! } : p);
    });
  };

  const handleRemovePhoto = (slotId: string) => {
    setPhotos(prev => prev.map(p => p.id === slotId ? { ...p, imageUrl: '' } : p));
  };

  // Helper mappings for real photos
  const salonPhoto = photos.find(p => p.id === 'slot-salao-led')?.imageUrl || '';
  const barberPhoto = photos.find(p => p.id === 'slot-barbeiro')?.imageUrl || '';
  const kidsPhoto = photos.find(p => p.id === 'slot-kids')?.imageUrl || '';
  const facadePhoto = photos.find(p => p.id === 'slot-fachada')?.imageUrl || '';

  // Handlers
  const handleOpenBooking = (service?: ServiceItem, barber?: Barber) => {
    setPreSelectedService(service || null);
    setPreSelectedBarber(barber || null);
    setIsBookingOpen(true);
  };

  const handleBookingConfirmed = (newAppointment: Appointment) => {
    setAppointments(prev => [newAppointment, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080b0e] text-[#e5e7eb] font-sans antialiased selection:bg-[#00c9b7] selection:text-black">
      {/* Header */}
      <Header
        info={shopInfo}
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentsCount={appointments.length}
      />

      <main>
        {/* Hero Section */}
        <Hero
          info={shopInfo}
          onOpenBooking={() => handleOpenBooking()}
          salonPhoto={salonPhoto}
          enhancedQuality={enhancedQuality}
        />

        {/* Clube do Lucas: Assinatura Mensal */}
        <ClubSection
          plans={clubPlans}
          info={shopInfo}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Galeria do Espaço & Ambiente Real da Barbearia */}
        <GallerySection
          photos={photos}
          onOpenBooking={() => handleOpenBooking()}
          onUpdatePhoto={handleUpdatePhoto}
          onUpdateAllPhotos={handleUpdateAllPhotos}
          onRemovePhoto={handleRemovePhoto}
          enhancedQuality={enhancedQuality}
          onToggleEnhancedQuality={() => setEnhancedQuality(!enhancedQuality)}
        />

        {/* Barbaterapia Dedicada (Toalha Quente, Hidratação e Cuidados) */}
        <BarbaTerapiaSection
          info={shopInfo}
          barberPhoto={barberPhoto}
          enhancedQuality={enhancedQuality}
        />

        {/* Services & Treatments */}
        <ServicesSection
          services={services}
          appBarberUrl={shopInfo.appBarberUrl}
          onSelectService={(service) => handleOpenBooking(service)}
        />

        {/* Barbearia do Lucas Kids */}
        <KidsSection
          info={shopInfo}
          onOpenBooking={() => handleOpenBooking()}
          kidsPhoto={kidsPhoto}
          enhancedQuality={enhancedQuality}
        />

        {/* Customer Reviews */}
        <ReviewsSection
          reviews={reviews}
        />

        {/* Location, Hours & FAQ */}
        <LocationAndHours
          info={shopInfo}
          onOpenBooking={() => handleOpenBooking()}
          facadePhoto={facadePhoto}
          enhancedQuality={enhancedQuality}
        />
      </main>

      {/* Footer */}
      <Footer
        info={shopInfo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating WhatsApp for Fast Lead Generation */}
      <FloatingWhatsApp
        whatsappNumber={shopInfo.whatsapp}
        shopName={shopInfo.name}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        services={services}
        barbers={barbers}
        info={shopInfo}
        selectedServiceInitial={preSelectedService}
        selectedBarberInitial={preSelectedBarber}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Customer's Appointments List */}
      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        services={services}
        barbers={barbers}
        info={shopInfo}
        onCancelAppointment={handleCancelAppointment}
      />
    </div>
  );
}
