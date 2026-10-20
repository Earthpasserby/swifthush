import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

function SiteFooter({ onQuote }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a aria-label="SwiftHush home" className="footer-brand" href="#home">
            <img alt="SwiftHush" src="/brand/swifthush-horizontal-white.svg" />
          </a>
          <p>Be in charge of your automobile.</p>
        </div>
        <div className="footer-links-group"><span>EXPLORE</span><a href="#solutions">Solutions</a><a href="#how-it-works">How it works</a><a href="#about">About SwiftHush</a></div>
        <div className="footer-links-group"><span>GET IN TOUCH</span><a href="#contact">Contact</a><button onClick={onQuote} type="button">Request a quote <ArrowUpRight size={13} /></button><a href="https://wa.me/2348134225352" rel="noreferrer" target="_blank"><MessageCircle size={13} /> WhatsApp</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} SwiftHush. All rights reserved.</span><a href="#home">Back to top ↑</a><span>Built for the road ahead.</span></div>
    </footer>
  );
}

export default SiteFooter;