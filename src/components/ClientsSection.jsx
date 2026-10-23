import React from 'react';

const clients = [
  { name: 'Quality Foods (DODO PIZA)', logo: '/clients/dodo-pizza.webp', alt: 'Dodo Pizza logo' },
  { name: 'SPACE MERCHANT Logistics' },
  { name: 'IKI Leads Ltd (Makers of Pasa Bitters)', logo: '/clients/iki-leads.png', alt: 'Iki Leads logo' },
  { name: 'Binqom Beverages' },
  { name: 'Opeyemi Foods', logo: '/clients/opeyemi-foods.png', alt: 'Opeyemi Foods logo' },
  { name: 'ANAP JETS', logo: '/clients/anap-jets.png', alt: 'Anap Jets logo' },
  { name: 'OTL gas and Logistics' },
  { name: "Jason David's Events" },
  { name: 'Bunella Events' },
  { name: 'Kart Events' },
  { name: 'Tonnies Events' },
];

function ClientsSection() {
  return (
    <section aria-labelledby="clients-title" className="clients-section">
      <div className="clients-heading">
        <span className="section-kicker">TRUSTED ACROSS INDUSTRIES</span>
        <h2 id="clients-title">Our major clients</h2>
      </div>
      <ul className="clients-list">
        {clients.map(({ name, logo, alt }) => (
          <li key={name}>
            {logo && <span className="client-logo"><img alt={alt} loading="lazy" src={logo} /></span>}
            <span className="client-name">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ClientsSection;