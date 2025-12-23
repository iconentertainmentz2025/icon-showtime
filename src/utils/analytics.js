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
  eventInquiry: (eventName) => trackEvent('event_inquiry', 'engagement', eventName),
  contactForm: (formType) => {
    trackEvent('contact_form_submit', 'conversion', formType)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Contact')
      window.fbq('track', 'Contact')
    }
  },
  ticketClick: (eventName) => {
    trackEvent('ticket_click', 'engagement', eventName)
    // When ticket modal opens or ticket button is clicked, track as ViewContent
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event ViewContent')
      window.fbq('track', 'ViewContent', {
        content_name: eventName,
        content_category: 'Event Ticket'
      })
    }
  },
  socialMedia: (platform) => trackEvent('social_media_click', 'engagement', platform),
  newsletterSignup: () => {
    trackEvent('newsletter_signup', 'conversion', 'footer_signup')
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Subscribe')
      window.fbq('track', 'Subscribe')
    }
  },
  ticketPlatformSelect: (eventName, platform) => {
    trackEvent('ticket_platform_select', 'conversion', `${eventName} - ${platform}`)
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event InitiateCheckout')
      window.fbq('track', 'InitiateCheckout', {
        content_name: eventName,
        payment_method: platform,
        num_items: 1
      })
    }
  },
  phoneCall: () => {
    trackEvent('phone_call', 'conversion', 'contact_page')
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Contact')
      window.fbq('track', 'Contact', {
        contact_method: 'phone'
      })
    }
  },
  emailClick: () => {
    trackEvent('email_click', 'conversion', 'contact_page')
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('FBQ: Tracking Standard Event Contact')
      window.fbq('track', 'Contact', {
        contact_method: 'email'
      })
    }
  },
}