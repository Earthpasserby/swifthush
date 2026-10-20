import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '2348134225352';

function QuoteDialog({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', vehicle: '', fleetSize: '1 vehicle', interest: 'Vehicle tracking' });

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitQuote(event) {
    event.preventDefault();
    const message = [
      'Hello SwiftHush, I would like a tracking quote.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Vehicle: ${form.vehicle}`,
      `Fleet size: ${form.fleetSize}`,
      `Interested in: ${form.interest}`,
    ].join('\n');
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="quote-backdrop" onMouseDown={onClose} role="presentation">
      <section
        aria-labelledby="quote-title"
        aria-modal="true"
        className="quote-dialog"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <div className="quote-dialog-top">
          <span className="quote-icon"><MessageCircle size={18} /></span>
          <button aria-label="Close quote form" className="quote-close" onClick={onClose} type="button"><X size={19} /></button>
        </div>
        <span className="section-kicker">A FEW DETAILS TO GET STARTED</span>
        <h2 id="quote-title">Let’s find your fit.</h2>
        <p className="quote-intro">Share a little about what you need. We’ll open WhatsApp with your request ready to send.</p>
        <form className="quote-form" onSubmit={submitQuote}>
          <div className="quote-fields-two">
            <label>Your name<input autoFocus autoComplete="name" name="name" onChange={updateField} placeholder="Name" required value={form.name} /></label>
            <label>Phone number<input autoComplete="tel" name="phone" onChange={updateField} placeholder="+234 ..." required type="tel" value={form.phone} /></label>
          </div>
          <label>Vehicle make and model<input name="vehicle" onChange={updateField} placeholder="e.g. Toyota Camry" required value={form.vehicle} /></label>
          <div className="quote-fields-two">
            <label>Fleet size<select name="fleetSize" onChange={updateField} value={form.fleetSize}><option>1 vehicle</option><option>2–5 vehicles</option><option>6–20 vehicles</option><option>21+ vehicles</option></select></label>
            <label>What are you looking for?<select name="interest" onChange={updateField} value={form.interest}><option>Vehicle tracking</option><option>Fleet tracking</option><option>Vehicle security</option><option>Something else</option></select></label>
          </div>
          <button className="button quote-submit" type="submit">Continue to WhatsApp <ArrowUpRight size={16} /></button>
        </form>
        <div className="quote-privacy">Your details are only used to respond to this request.</div>
      </section>
    </div>
  );
}

export default QuoteDialog;