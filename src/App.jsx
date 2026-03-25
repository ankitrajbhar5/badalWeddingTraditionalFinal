import React from 'react';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import RSVP from './components/RSVP';

function App() {
  return (
    <main className="min-h-screen bg-maroon text-gold overflow-x-hidden">
      {/* Background patterns and decorative elements */}
      <div className="fixed inset-0 mandala-pattern pointer-events-none z-0"></div>

      {/* Content wrapper to ensure z-index is correct */}
      <div className="relative z-10">
        <Hero />

        <div className="h-24 bg-gradient-to-b from-transparent to-maroon"></div>

        <Schedule />

        <Venue />

        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="h-px bg-gold opacity-30 w-full mb-12"></div>
            <p className="text-center font-playfair italic text-xl md:text-2xl mb-12">
                "Two hearts join to become one, as our journey of love and togetherness truly begins."
            </p>
            <div className="h-px bg-gold opacity-30 w-full mb-12"></div>
        </div>

        <RSVP />

        <footer className="py-8 bg-maroon border-t border-gold/10 text-center font-playfair text-lg italic opacity-75">
          <p>© 2026 Wedding of Badal & Neha. All rights reserved.</p>
        </footer>
      </div>

      {/* Side Decorative Borders for large screens */}
      <div className="hidden lg:block fixed left-4 top-4 bottom-4 w-1 bg-gold opacity-20"></div>
      <div className="hidden lg:block fixed right-4 top-4 bottom-4 w-1 bg-gold opacity-20"></div>
    </main>
  );
}

export default App;
