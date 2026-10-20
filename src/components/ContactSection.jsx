import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

function ContactSection({ onQuote }) {
  return (
    <section aria-labelledby="contact-title" className="contact-section" id="contact">
      <div className="contact-orbit contact-orbit-one" />
      <div className="contact-orbit contact-orbit-two" />
      <div className="contact-copy">
        <span className="contact-kicker"><MessageCircle size={14} /> LET’S FIND YOUR FIT</span>
        <h2 id="contact-title">Your next drive<br />starts with a hello.</h2>
        <p>Tell us what you drive and what you’d like to keep an eye on. We’ll help you find the right tracking setup.</p>
      </div>
      <div className="contact-action">
        <button className="button button-lime" onClick={onQuote} type="button">Request a quote <ArrowUpRight size={17} /></button>
        <span>Opens WhatsApp with your details ready to send.</span>
      </div>
    </section>
  );
}

export default ContactSection;