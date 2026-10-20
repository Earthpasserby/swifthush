import React from 'react';
import { ArrowUpRight, Check, MessageCircle, Radio, Route } from 'lucide-react';

const steps = [
  { number: '01', icon: MessageCircle, title: 'Tell us what you need', copy: 'Share a little about your vehicle or fleet. We’ll help you choose the right setup.' },
  { number: '02', icon: Radio, title: 'Get set up', copy: 'Our team will guide you through device installation and getting connected.' },
  { number: '03', icon: Route, title: 'Track with confidence', copy: 'See useful location and trip information, wherever the day takes you.' },
];

function ProcessSection() {
  return (
    <section aria-labelledby="process-title" className="process-section" id="how-it-works">
      <div className="process-topline"><span className="section-kicker">SIMPLE FROM THE START</span><span className="process-note"><Check size={14} /> Real people, here to help</span></div>
      <div className="process-heading-row">
        <h2 id="process-title">A better view<br />starts here.</h2>
        <p>Getting connected shouldn’t be complicated. We keep the steps clear and stay with you along the way.</p>
      </div>
      <div className="steps-list">
        {steps.map(({ number, icon: Icon, title, copy }) => (
          <article className="step-item" key={number}>
            <div className="step-mark"><span>{number}</span><Icon size={19} /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;