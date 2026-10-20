import React from 'react';
import { Activity, Check, MapPin, Radio } from 'lucide-react';

function TrackerSection() {
  return (
    <section aria-labelledby="tracker-title" className="tracker-section">
      <div className="tracker-visual">
        <img
          alt="Close-up of connected electronics used in vehicle tracking technology"
          className="tracker-image"
          loading="lazy"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=85"
        />
        <div className="tracker-image-shade" />
        <div className="tracker-device-label">
          <span className="device-icon"><Radio size={20} /></span>
          <span><strong>SwiftHush tracker</strong><small>Connected vehicle technology</small></span>
        </div>
        <div className="tracker-signal-card">
          <span className="tracker-signal-icon"><MapPin size={17} /></span>
          <span className="tracker-signal-copy"><strong>Vehicle location</strong><small><i /> Signal connected</small></span>
          <Activity className="signal-wave" size={21} />
        </div>
        <span aria-hidden="true" className="tracker-orbit tracker-orbit-a" />
        <span aria-hidden="true" className="tracker-orbit tracker-orbit-b" />
      </div>
      <div className="tracker-copy">
        <span className="section-kicker">THE TECHNOLOGY, MADE PERSONAL</span>
        <h2 id="tracker-title">A smarter way<br />to stay <em>close.</em></h2>
        <p>SwiftHush pairs a discreet vehicle tracker with a clear, helpful experience. Know where your car is, keep up with its journeys, and get useful alerts when it matters.</p>
        <ul className="tracker-points">
          <li><Check size={16} /> Vehicle location at a glance</li>
          <li><Check size={16} /> Helpful movement and boundary alerts</li>
          <li><Check size={16} /> Journey details when you need them</li>
        </ul>
        <div className="tracker-footnote"><span className="tracker-live-dot" /> Connected to what matters</div>
      </div>
    </section>
  );
}

export default TrackerSection;