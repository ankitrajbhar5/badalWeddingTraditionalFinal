import React from 'react';
import EventCard from './EventCard';
import { Heart, Flower, Sparkles } from 'lucide-react';

const Schedule = () => {
  const events = [
    {
      title: "Haldi Ceremony",
      date: "18th April 2026",
      time: "10:00 AM Onwards",
      location: "The Grand Palace, Ichak",
      icon: Flower
    },
    {
      title: "Mehendi Ceremony",
      date: "19th April 2026",
      time: "4:00 PM Onwards",
      location: "The Grand Palace, Ichak",
      icon: Sparkles
    },
    {
      title: "Wedding Phere",
      date: "20th April 2026",
      time: "8:00 PM Onwards",
      location: "The Grand Palace, Ichak",
      icon: Heart
    }
  ];

  return (
    <section className="py-20 px-4 bg-maroon relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none mandala-pattern"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-greatvibes text-gold-light mb-4">Wedding Festivities</h2>
          <div className="h-px w-32 bg-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
