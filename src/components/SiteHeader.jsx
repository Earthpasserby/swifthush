import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function SiteHeader({ onQuote }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a aria-label="SwiftHush home" className="site-brand" href="#home" onClick={closeMenu}>
        <img alt="SwiftHush" src="/brand/swifthush-horizontal-navy.svg" />
      </a>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav aria-label="Main navigation" className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`}>
        <a href="#solutions" onClick={closeMenu}>Solutions</a>
        <a href="#how-it-works" onClick={closeMenu}>How it works</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <button
          className="header-quote"
          onClick={() => {
            closeMenu();
            onQuote();
          }}
          type="button"
        >
          Request a quote <ArrowUpRight size={15} />
        </button>
      </nav>
    </header>
  );
}

export default SiteHeader;