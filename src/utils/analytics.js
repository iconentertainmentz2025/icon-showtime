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
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      })
    }

    // Meta Pixel
    if (window.fbq) {
      console.log('FBQ: Tracking PageView')
      window.fbq('track', 'PageView')
    } else {
      console.warn('FBQ: window.fbq not found during PageView tracking')
    }
  }
}

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined') {
    // Google Analytics
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }

    // Meta Pixel
    if (window.fbq) {
      console.log('FBQ: Tracking Custom Event', action)
      window.fbq('trackCustom', action, {
        category: category,
        label: label,
        value: value,
      })
    } else {
      console.warn('FBQ: window.fbq not found during event tracking')
    }
  }
}

// Track custom events specific to ICON Entertainmentz
export const trackCustomEvents = {
  // Standard Event: ViewContent
  viewContent: (contentName, contentCategory = 'General') => {
    trackEvent('view_content', contentCategory, contentName)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event ViewContent')
      window.fbq('track', 'ViewContent', {
        content_name: contentName,
        content_category: contentCategory
      })
    }
  },

  // Standard Event: Contact
  contact: (method) => {
    trackEvent('contact', 'engagement', method)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Contact')
      window.fbq('track', 'Contact', {
        content_name: method
      })
    }
  },

  // Standard Event: Lead
  lead: (formType) => {
    trackEvent('generate_lead', 'conversion', formType)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Lead')
      window.fbq('track', 'Lead', {
        content_name: formType
      })
    }
  },

  // Standard Event: CompleteRegistration
  completeRegistration: (contentName) => {
    trackEvent('sign_up', 'conversion', contentName)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event CompleteRegistration')
      window.fbq('track', 'CompleteRegistration', {
        content_name: contentName
      })
    }
  },

  // Standard Event: InitiateCheckout
  initiateCheckout: (contentName, value = 0.00, currency = 'USD') => {
    trackEvent('begin_checkout', 'ecommerce', contentName)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event InitiateCheckout')
      window.fbq('track', 'InitiateCheckout', {
        content_name: contentName,
        value: value,
        currency: currency
      })
    }
  },

  // Standard Event: Schedule
  schedule: (contentName) => {
    trackEvent('schedule', 'conversion', contentName)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Schedule')
      window.fbq('track', 'Schedule', {
        content_name: contentName
      })
    }
  },

  // Standard Event: Search
  search: (searchTerm) => {
    trackEvent('search', 'engagement', searchTerm)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Search')
      window.fbq('track', 'Search', {
        search_string: searchTerm
      })
    }
  },

  // Legacy mappings for backward compatibility (optional, but good for existing code)
  ticketClick: (eventName) => {
    // Mapping ticket clicks to ViewContent as per previous logic, or maybe InitiateCheckout?
    // User requirement said: "InitiateCheckout: When user starts booking/checkout process"
    // A ticket click is starting that process.
    trackCustomEvents.initiateCheckout(eventName)
  },
  socialMedia: (platform) => {
    // Social media clicks can be considered 'Contact' if it's a way to reach them, 
    // or just a custom event. Sticking to generic or Contact.
    trackCustomEvents.contact(`Social: ${platform}`)
  },
  phoneCall: () => trackCustomEvents.contact('Phone'),
  emailClick: () => trackCustomEvents.contact('Email'),
  newsletterSignup: () => trackCustomEvents.completeRegistration('Newsletter'),
}