import React, { useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import Hero from './components/Hero.jsx';
import ServiceSection from './components/ServiceSection.jsx';
import ClientsSection from './components/ClientsSection.jsx';
import TrackerSection from './components/TrackerSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import QuoteDialog from './components/QuoteDialog.jsx';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <SiteHeader onQuote={() => setQuoteOpen(true)} />
      <main>
        <Hero onQuote={() => setQuoteOpen(true)} />
        <div className="trust-strip" aria-label="SwiftHush service highlights">
          <span className="trust-intro">A clearer view of every journey</span>
          <span><i /> Live location</span>
          <span><i /> Smart alerts</span>
          <span><i /> Trip history</span>
          <span><i /> Support that stays close</span>
        </div>
        <ServiceSection onQuote={() => setQuoteOpen(true)} />
        <ClientsSection />
        <TrackerSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection onQuote={() => setQuoteOpen(true)} />
      </main>
      <SiteFooter onQuote={() => setQuoteOpen(true)} />
      {quoteOpen && <QuoteDialog onClose={() => setQuoteOpen(false)} />}
    </>
  );
}

export default App;