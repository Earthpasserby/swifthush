import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="about-section" id="about">
      <div className="about-image-wrap">
        <img
          alt="A car travelling through the city"
          className="about-image"
          loading="lazy"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1500&q=85"
        />
        <div className="about-image-caption"><span>BE IN CHARGE</span><span>of your automobile.</span></div>
      </div>
      <div className="about-copy">
        <span className="section-kicker">A LITTLE ABOUT US</span>
        <h2 id="about-title">Peace of mind<br />should come<br /><em>standard.</em></h2>
        <p>At SwiftHush, we believe keeping an eye on your vehicle should feel simple. We bring dependable tracking technology and a human touch together, helping drivers and businesses feel more connected to the cars that keep life moving.</p>
        <ul className="about-points">
          <li><Check size={15} /> Thoughtful tools, without the learning curve</li>
          <li><Check size={15} /> Flexible support for personal and business use</li>
          <li><Check size={15} /> A clearer picture of every journey</li>
        </ul>
        <a className="text-link" href="#contact">Get to know SwiftHush <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}

export default AboutSection;