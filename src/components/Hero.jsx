import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 mandala-pattern z-0"></div>

      <div className="z-10 px-4">
        <p className="text-xl md:text-2xl font-playfair tracking-[0.3em] mb-4 uppercase">Save The Date</p>

        <div className="space-y-4 mb-8">
            <h1 className="text-6xl md:text-8xl font-greatvibes gold-gradient-text">
            Badal Prasad Mehta
            </h1>
            <p className="text-4xl md:text-5xl font-greatvibes my-2 text-gold">&</p>
            <h1 className="text-6xl md:text-8xl font-greatvibes gold-gradient-text">
            Neha Mehta
            </h1>
        </div>

        <div className="h-px w-24 bg-gold mx-auto mb-8"></div>

        <p className="text-2xl md:text-3xl font-playfair mb-2 italic">Together with their families</p>
        <p className="text-3xl md:text-4xl font-playfair font-bold">20th April 2026</p>

        <div className="mt-12 animate-bounce">
            <svg className="w-8 h-8 mx-auto text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-gold m-8 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-gold m-8 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-gold m-8 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-gold m-8 opacity-50"></div>
    </section>
  );
};

export default Hero;
