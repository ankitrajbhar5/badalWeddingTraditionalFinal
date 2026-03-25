import React from 'react';
import { MapPin } from 'lucide-react';

const Venue = () => {
  const mapUrl = "https://www.google.com/maps/place/Ichak,+Jharkhand+825402/data=!4m2!3m1!1s0x39f362bb40494ce7:0x4c33beb74cdbd191?sa=X&ved=1t:242&ictx=111";

  return (
    <section className="py-24 px-4 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 mandala-pattern opacity-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <MapPin className="w-16 h-16 mx-auto mb-8 text-gold-light animate-pulse" />

        <h2 className="text-5xl md:text-7xl font-greatvibes text-gold-light mb-8 underline decoration-gold/30">
          The Grand Palace
        </h2>

        <div className="text-2xl md:text-3xl font-playfair mb-8 italic space-y-2">
          <p>Ichak, Hazaribagh</p>
          <p>Jharkhand, India</p>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 gold-border text-gold-light font-playfair text-xl hover:bg-gold hover:text-maroon transition-all duration-300 font-bold uppercase tracking-widest"
        >
          View on Maps
        </a>
      </div>
    </section>
  );
};

export default Venue;
