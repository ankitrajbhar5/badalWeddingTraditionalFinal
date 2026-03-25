import React from 'react';
import { MessageCircle } from 'lucide-react';

const RSVP = () => {
  const whatsappNumber = "7236924905";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hi,%20I'm%20confirming%20my%20presence%20at%20the%20wedding!`;

  return (
    <section className="py-32 px-4 bg-maroon relative border-t-2 border-gold/10">
      <div className="absolute inset-0 mandala-pattern opacity-5"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-greatvibes text-gold-light mb-12">Confirm Your Presence</h2>
        <p className="text-xl md:text-2xl font-playfair mb-12 italic leading-relaxed">
          Please let us know if you can make it to our special day before 31st March 2026.
          We would love to celebrate with you!
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-12 py-6 bg-gold text-maroon text-2xl md:text-3xl font-playfair font-black hover:bg-gold-light transition-all duration-300 rounded-lg shadow-2xl hover:scale-105"
          >
            <MessageCircle className="w-10 h-10 md:w-12 md:h-12" />
            RSVP via WhatsApp
          </a>

          <p className="text-gold-light font-playfair text-xl mt-4">
            WhatsApp: +91 {whatsappNumber}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
