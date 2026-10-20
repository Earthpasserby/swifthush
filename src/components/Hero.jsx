import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

function Hero({ onQuote }) {
  return (
    <section aria-labelledby="hero-title" className="hero" id="home">
      <img
        alt="A premium vehicle ready for the open road"
        className="hero-image"
        fetchPriority="high"
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=88"
      />
      <div className="hero-shade" />
      <div className="hero-brand-plate">
        <img alt="SwiftHush, be in charge of your automobile" src="/brand/swifthush-horizontal-white.svg" />
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow"><span className="hero-pin"><MapPin size={13} /></span> VEHICLE TRACKING, MADE CLEAR</div>
        <h1 id="hero-title">Your car.<br />Always in view.</h1>
        <p>Real-time tracking and thoughtful security tools that bring a little more peace of mind to every drive.</p>
        <div className="hero-actions">
          <button className="button button-lime" onClick={onQuote} type="button">Find your tracking solution <ArrowUpRight size={17} /></button>
          <a className="hero-secondary" href="#solutions">Explore what we do <ArrowDown size={14} /></a>
        </div>
      </div>
      <div aria-label="Live tracking preview" className="hero-location">
        <span className="location-pulse"><MapPin size={15} /></span>
        <span><strong>Always a little closer</strong><small>Your vehicle, right where you need it.</small></span>
        <span className="signal-bars"><i /><i /><i /><i /></span>
      </div>
      <a aria-label="Scroll to solutions" className="scroll-cue" href="#solutions"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}

export default Hero;