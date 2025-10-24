import React from 'react';
import { Mail } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import SEOData from '../components/SEOData';

const NewsletterPage = () => {
  const newsletterSEO = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Subscribe to ICON Entertainmentz Newsletter",
    "description": "Stay updated with the latest Indian cultural events, concerts, and exclusive offers from ICON Entertainmentz.",
    "url": "https://icon-entertainmentz.com/newsletter",
    "publisher": {
      "@type": "Organization",
      "name": "ICON Entertainmentz",
      "logo": "https://icon-entertainmentz.com/Asset_ICON.png"
    }
  };

  return (
    <div className="pt-24 pb-16">
      <SEOData
        title="Subscribe to Our Newsletter | ICON Entertainmentz"
        description="Stay updated with the latest Indian cultural events, concerts, and exclusive offers from ICON Entertainmentz. Subscribe to our newsletter for event updates and special promotions."
        keywords="ICON Entertainmentz newsletter, event updates, Indian events newsletter, cultural events subscription, entertainment updates, Austin events newsletter"
        url="/newsletter"
        structuredData={newsletterSEO}
      />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-orange-500" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Never Miss an Event
            </h1>
            <p className="text-lg text-gray-600">
              Subscribe to our newsletter and stay updated with the latest events, exclusive offers, 
              and cultural celebrations in your area.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <Newsletter />
          </div>

          <div className="text-sm text-gray-500">
            By subscribing, you agree to receive email communications from ICON Entertainmentz. 
            You can unsubscribe at any time. We respect your privacy.
          </div>

          <div className="pt-8 border-t border-gray-200 mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Event Updates',
                  description: 'Be the first to know about upcoming events and concerts'
                },
                {
                  title: 'Exclusive Offers',
                  description: 'Get access to special discounts and early bird tickets'
                },
                {
                  title: 'Cultural Content',
                  description: 'Stay connected with Indian cultural news and stories'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;