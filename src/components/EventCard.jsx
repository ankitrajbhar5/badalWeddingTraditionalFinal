import React from 'react';

const EventCard = ({ title, date, time, location, icon: Icon }) => {
  return (
    <div className="p-8 gold-border bg-maroon text-center flex flex-col items-center gap-4 transition-transform hover:scale-105 duration-300 shadow-2xl">
      {Icon && <Icon className="w-12 h-12 text-gold-light" />}

      <h3 className="text-3xl md:text-4xl font-greatvibes text-gold-light border-b border-gold/30 pb-4 mb-2">
        {title}
      </h3>

      <div className="flex flex-col gap-2 font-playfair tracking-wide">
        <p className="text-xl md:text-2xl font-bold">{date}</p>
        <p className="text-lg opacity-90">{time}</p>
        <p className="mt-4 italic text-gold">{location}</p>
      </div>
    </div>
  );
};

export default EventCard;
