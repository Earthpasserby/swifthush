import React from 'react';
import { ArrowUpRight, BellRing, History, LocateFixed, ShieldCheck } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: LocateFixed,
    title: 'Know where it is',
    description: 'Check your vehicle’s location and movement when it matters, from a clear, easy-to-use tracking experience.',
    color: 'blue',
  },
  {
    number: '02',
    icon: BellRing,
    title: 'Know when it moves',
    description: 'Get useful alerts for vehicle activity and set boundaries that help you stay informed when plans change.',
    color: 'green',
  },
  {
    number: '03',
    icon: History,
    title: 'See every journey',
    description: 'Review recent trips, routes, and stops to make each vehicle’s day easier to understand.',
    color: 'coral',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Feel more in control',
    description: 'Bring location insights and practical security features together for the vehicles you care about.',
    color: 'lime',
  },
];

function ServiceSection({ onQuote }) {
  return (
    <section aria-labelledby="solutions-title" className="section services-section" id="solutions">
      <div className="section-head services-head">
        <div>
          <span className="section-kicker">A SMARTER WAY TO STAY CONNECTED</span>
          <h2 id="solutions-title">More than a dot<br />on the map.</h2>
        </div>
        <div className="section-intro">
          <p>SwiftHush brings vehicle location, security, and journey insights together, so you can focus on the drive ahead.</p>
          <button className="text-link" onClick={onQuote} type="button">Talk to our team <ArrowUpRight size={16} /></button>
        </div>
      </div>
      <div className="service-list">
        {services.map(({ number, icon: Icon, title, description, color }) => (
          <article className="service-item" key={number}>
            <span className={`service-icon service-icon-${color}`}><Icon size={21} strokeWidth={1.7} /></span>
            <span className="service-number">{number}</span>
            <div className="service-copy"><h3>{title}</h3><p>{description}</p></div>
            <ArrowUpRight aria-hidden="true" className="service-arrow" size={17} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;