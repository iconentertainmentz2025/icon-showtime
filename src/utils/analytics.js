// Google Analytics configuration
// Add your Google Analytics 4 Measurement ID here

export const GA_MEASUREMENT_ID = 'G-LPJKBV2E2K' // Your actual GA4 Measurement ID

// Google Analytics gtag script
export const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}', {
    page_title: document.title,
    page_location: window.location.href,
  });
`

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    })
  }
}

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track custom events specific to ICON Entertainmentz
export const trackCustomEvents = {
  eventInquiry: (eventName) => trackEvent('event_inquiry', 'engagement', eventName),
  contactForm: (formType) => trackEvent('contact_form_submit', 'conversion', formType),
  ticketClick: (eventName) => trackEvent('ticket_click', 'engagement', eventName),
  socialMedia: (platform) => trackEvent('social_media_click', 'engagement', platform),
  newsletterSignup: () => trackEvent('newsletter_signup', 'conversion', 'footer_signup'),
  ticketPlatformSelect: (eventName, platform) => trackEvent('ticket_platform_select', 'conversion', `${eventName} - ${platform}`),
  phoneCall: () => trackEvent('phone_call', 'conversion', 'contact_page'),
  emailClick: () => trackEvent('email_click', 'conversion', 'contact_page'),
}