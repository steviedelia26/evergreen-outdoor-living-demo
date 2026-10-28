import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Leaf, Menu, X } from 'lucide-react';
import './styles.css';

const photos = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
  design: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85',
  lawn: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1000&q=85',
  living: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
  garden: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=1200&q=85',
  courtyard: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
  retreat: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  patio: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  about: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=85',
};

const projects = [
  { name: 'The Garden House', place: 'Residential · Garden Design', img: photos.garden, cls: 'project-large' },
  { name: 'A Quiet Courtyard', place: 'Residential · Outdoor Living', img: photos.courtyard, cls: '' },
  { name: 'The Sunday Retreat', place: 'Residential · Landscape Design', img: photos.retreat, cls: '' },
  { name: 'Open Air Living', place: 'Residential · Patio & Planting', img: photos.patio, cls: 'project-large' },
];

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="Evergreen Outdoor Living home"><span className="brand-mark"><Leaf size={19} strokeWidth={1.45} /></span><span className="brand-type"><strong>EVERGREEN</strong><small>OUTDOOR LIVING</small></span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.message.trim()) next.message = 'Tell us a little about your project.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  return <>
    <header className="site-header">
      <div className="nav-wrap"><Brand /><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Our Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main>
      <section className="hero" id="home" style={{ '--hero-image': `url("${photos.hero}")` }}>
        <div className="hero-shade"></div><div className="hero-content"><p className="eyebrow hero-eyebrow"><span></span> LANDSCAPE DESIGN · OUTDOOR LIVING</p><h1>Outdoor Spaces.<br /><em>Thoughtfully</em> Designed.</h1><p className="hero-copy">A more considered way to experience the outdoors—right outside your door.</p><a className="button button-light" href="#contact">Get a Free Estimate <ArrowRight size={17} /></a></div><div className="hero-bottom"><span>CRAFTED FOR THE WAY YOU LIVE</span><a href="#services">SCROLL TO EXPLORE <ArrowDown size={14} /></a><span>01 — 04</span></div>
      </section>

      <section className="intro section-pad" id="services"><div className="intro-top"><p className="eyebrow"><span></span> WHAT WE DO</p><p className="intro-note">Good design grows from a good understanding of place, people, and the way you want to live.</p></div><div className="section-heading"><h2>Room to breathe.<br /><em>Space to belong.</em></h2><p>From the first sketch to the last planted detail, we shape outdoor spaces that feel as if they have always been yours.</p></div>
        <div className="service-grid">{[{n:'01',title:'Landscape Design',copy:'A thoughtful plan for a garden that feels like you, season after season.',img:photos.design,alt:'Lush green plants in a sunlit garden'},{n:'02',title:'Lawn Care',copy:'Carefully considered maintenance that keeps your landscape looking its best.',img:photos.lawn,alt:'Freshly manicured green lawn'},{n:'03',title:'Outdoor Living',copy:'Make room for slow mornings, long dinners, and everything in between.',img:photos.living,alt:'Warm, inviting outdoor living space'}].map(item=><article className="service-card" key={item.n}><a href="#contact" className="service-image"><img src={item.img} alt={item.alt} loading="lazy"/><span className="image-arrow"><ArrowUpRight size={19}/></span></a><div className="service-meta"><span>{item.n} / 03</span><span>EXPLORE SERVICE <ArrowUpRight size={12}/></span></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="work section-pad" id="work"><div className="work-head"><div><p className="eyebrow"><span></span> A FEW THOUGHTFUL SPACES</p><h2>Made for <em>living.</em></h2></div><a className="text-link" href="#contact">Start a project <ArrowUpRight size={16}/></a></div><div className="project-grid">{projects.map((p,i)=><a href="#contact" className={`project-card ${p.cls}`} key={p.name}><img src={p.img} alt={p.name} loading="lazy"/><div className="project-overlay"><span className="project-index">0{i+1} / 04</span><span className="project-arrow"><ArrowUpRight size={18}/></span><div><span>{p.place}</span><h3>{p.name}</h3></div></div></a>)}</div></section>

      <section className="about section-pad" id="about"><div className="about-image"><img src={photos.about} alt="A thoughtfully designed home surrounded by greenery" loading="lazy"/><div className="image-caption"><span>GROWN WITH INTENTION</span><span>EST. 2024</span></div></div><div className="about-copy"><p className="eyebrow"><span></span> A LITTLE ABOUT US</p><h2>Outside is where<br />life <em>opens up.</em></h2><p className="about-lead">We believe your outdoor space should feel every bit as considered as the rooms inside.</p><p className="body-copy">Evergreen is a small, hands-on landscape studio with a simple point of view: listen closely, work with what’s already here, and make something lasting. Every garden begins with a conversation—and grows from there.</p><a className="text-link" href="#contact">Get to know us <ArrowRight size={16}/></a><div className="signature"><span>Considered design. Everyday beauty.</span><Leaf size={26} strokeWidth={1}/></div></div></section>

      <section className="process section-pad"><div className="process-heading"><p className="eyebrow"><span></span> HOW WE WORK</p><h2>From first hello<br />to <em>outside, together.</em></h2><p>A clear, collaborative process keeps the good ideas growing.</p></div><div className="steps">{[{n:'01',title:'Consultation',copy:'We listen, walk the space, and learn what matters to you.'},{n:'02',title:'Design',copy:'We turn your ideas into a considered concept for your space.'},{n:'03',title:'Planning',copy:'The details, materials, and timing all find their place.'},{n:'04',title:'Installation',copy:'Our team brings the plan to life with care and craft.'}].map(step=><article className="step" key={step.n}><span>{step.n}</span><div className="step-line"></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></section>

      <section className="testimonials section-pad"><div className="testimonial-head"><p className="eyebrow"><span></span> KIND WORDS, IMAGINED</p><h2>A feeling worth <em>sharing.</em></h2><p className="sample-note">Sample testimonials · Fictional copy for portfolio demonstration</p></div><div className="quote-grid">{[{q:'“The garden feels like a natural extension of our home. We couldn’t have imagined it better.”',n:'A HOMEOWNER',place:'SAMPLE PROJECT'},{q:'“From the first conversation, the whole process felt personal, thoughtful, and easy.”',n:'A CLIENT',place:'SAMPLE PROJECT'},{q:'“We finally have a space that makes us want to linger outside a little longer.”',n:'A GARDEN LOVER',place:'SAMPLE PROJECT'}].map((quote,i)=><blockquote className="quote-card" key={quote.n}><span className="quote-mark">“</span><p>{quote.q}</p><footer><span className="quote-number">0{i+1}</span><span><strong>{quote.n}</strong><small>{quote.place} · FICTIONAL</small></span></footer></blockquote>)}</div></section>

      <section className="contact section-pad" id="contact"><div className="contact-left"><p className="eyebrow"><span></span> LET’S BEGIN</p><h2>Your outside<br />is calling.</h2><p>Tell us a little about what you’re dreaming up. We’ll be in touch to take it from there.</p><div className="contact-detail"><span>GET IN TOUCH</span><a href="mailto:hello@evergreenoutdoor.example">hello@evergreenoutdoor.example</a><a href="tel:+15550142736">(555) 014-2736</a></div><div className="contact-note">Serving the greater Greenfield area<br/>Monday – Friday, 9am – 5pm</div></div><div className="form-panel">{submitted ? <div className="success-state"><span className="success-icon"><Check size={25}/></span><p className="eyebrow">MESSAGE RECEIVED</p><h3>Thank you, {form.name.split(' ')[0]}.</h3><p>Your note is in good hands. We’ll be in touch soon.</p><button className="text-link" onClick={()=>{setSubmitted(false);setForm({name:'',email:'',phone:'',service:'',message:''})}}>Send another message <ArrowRight size={16}/></button></div> : <form onSubmit={handleSubmit} noValidate><div className="form-heading"><span>01 / 01</span><h3>Tell us about your project.</h3></div><div className="form-row"><label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Jane Smith" aria-invalid={!!errors.name}/>{errors.name&&<small className="error">{errors.name}</small>}</label><label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="jane@example.com" aria-invalid={!!errors.email}/>{errors.email&&<small className="error">{errors.email}</small>}</label></div><label>Phone <span className="optional">OPTIONAL</span><input type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="(555) 000-0000"/></label><label>What are you dreaming up?<span className="select-wrap"><select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} aria-invalid={!!errors.service}><option value="">Choose a service</option><option>Landscape Design</option><option>Lawn Care</option><option>Outdoor Living</option><option>Something else</option></select><ChevronDown size={16}/></span>{errors.service&&<small className="error">{errors.service}</small>}</label><label>A little about your project<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows="3" placeholder="The space, the vision, the wish list…" aria-invalid={!!errors.message}/>{errors.message&&<small className="error">{errors.message}</small>}</label><button className="button button-dark" type="submit">Send your inquiry <ArrowRight size={16}/></button><p className="form-privacy">Just the beginning of a conversation. No pressure, ever.</p></form>}</div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><Brand light/><p>Thoughtful landscapes<br/>for a life well lived.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© 2026 EVERGREEN OUTDOOR LIVING</span><span>DESIGNED TO GROW · GREENFIELD, USA</span><span>FICTIONAL BRAND FOR PORTFOLIO DEMONSTRATION</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
