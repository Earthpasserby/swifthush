import React from 'react';

const clients = [
  'Quality Foods (DODO PIZA)',
  'SPACE MERCHANT Logistics',
  'IKI Leads Ltd (Makers of Pasa Bitters)',
  'Binqom Beverages',
  'Opeyemi Foods',
  'ANAP JETS',
  'OTL gas and Logistics',
  "Jason David's Events",
  'Bunella Events',
  'Kart Events',
  'Tonnies Events',
];

function ClientsSection() {
  return (
    <section aria-labelledby="clients-title" className="clients-section">
      <div className="clients-heading">
        <span className="section-kicker">TRUSTED ACROSS INDUSTRIES</span>
        <h2 id="clients-title">Our major clients</h2>
      </div>
      <ul className="clients-list">
        {clients.map((client) => <li key={client}>{client}</li>)}
      </ul>
    </section>
  );
}

export default ClientsSection;