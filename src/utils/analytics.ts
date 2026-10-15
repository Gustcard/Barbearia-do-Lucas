declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Dispara eventos de medição para o Google Ads e Analytics
 */
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        send_to: 'AW-18076670524',
      });
    }
  } catch {
    // Silently continue if adblocker is active
  }
};

export const trackBookingClick = (source: string) => {
  trackEvent('clique_agendamento', 'Agendamento', source);
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('clique_whatsapp', 'Contato', source);
};

export const trackClubSubscribe = (planName: string, price: number) => {
  trackEvent('adesao_clube', 'Clube do Lucas', planName, price);
};
