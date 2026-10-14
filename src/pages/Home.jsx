import { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';

const slides = [
  {
    id: 1,
    label: 'State-of-the-art Facility',
    heading: 'National Technology Centre for Ports, Waterways & Coasts',
    desc: 'Creating the Future of Smart Ports, Waterways, and Coastal Infrastructure.',
    cta: 'Explore more',
    href: '/about',
    image: '/assets/images/building.jpg',
    accent: '#4A9ECC',
  },
  {
    id: 2,
    label: 'Innovation Launch',
    heading: 'Secretary, MoPSW Inaugurates iVTS at Chennai Port Authority',
    desc: `A Major Milestone in Maritime Indigenisation with the Launch of India's Indigenous VesselTraffic Service (VTS) System.​`,
    cta: 'Explore Facility',
    href: '/facilities/wave-basin',
    image: '/assets/images/HeroSlide/Inaugurates iVTS.jpg',
    accent: '#5BB8B2',
  },
  {
    id: 3,
    label: 'Strategic Collaboration',
    heading: 'NTCPWC, IIT Madras signs MoU with New Mangalore Port Authority',
    desc: `Advancing Port Modernization through a DedicatedPort Automation Unit.`​,
    cta: 'See Details',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/mou.jpeg',
    accent: '#E8A730',
  },
  {
    id: 4,
    label: 'Innovation Challenge',
    heading: 'MoPSW Launches MAR-a-THON 2025 at IIT Madras',
    desc: `Driving Maritime Transformation through Entrepreneurship and Innovation.​`,
    cta: 'Learn More',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/marathon.jpg',
    accent: '#E8A730',
  },
  {
    id: 5,
    label: 'Indigenous Technology',
    heading: 'Indigenous Development of Vessel Traffic Services (iVTS)',
    desc: `Driving Maritime Safety and Operational Excellence with Indigenous Monitoring Systems​.`,
    cta: 'Explore',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/iVTS.jpg',
    accent: '#E8A730',
  },
  {
    id: 6,
    label: 'Autonomous Systems',
    heading: 'USV-01-ASB – Autonomous Survey Vessel',
    desc: 'Advanced Hydrography,Autonomous Execution.',
    cta: 'Discover',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/USV.jpg',
    accent: '#E8A730',
  },
  {
    id: 7,
    label: 'Research Facility',
    heading: 'Sedimentation & Erosion Management Test Basin',
    desc: 'Advanced Coastal Sediment and Erosion Testing Facility.​',
    cta: 'View Facility',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/Semateb.jpg',
    accent: '#E8A730',
  },
  {
    id: 8,
    label: 'Smart Infrastructure',
    heading: '5G Smart Port',
    desc: 'Next-Generation Maritime Infrastructure Powered by 5G and AI.​',
    cta: 'Explore',
    href: '/facilities/ship-simulator',
    image: '/assets/images/HeroSlide/5Gport.jpeg',
    accent: '#E8A730',
  },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
    title: 'Maritime Technology & Product Development',
    body: "Development of indigenous technologies and products for ports, waterways, coastal infrastructure, navigation, and maritime operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <rect x="6" y="10" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 20c0-2.5 1.5-4 3.5-4s3 1.5 3.5 4-1.5 4-3.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M24 16l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Port Digitalization & Smart Port Solutions',
    body: 'Design and implementation of Digital Twins, AI-enabled systems, IoT platforms, port automation, and intelligent decision-support systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M6 30L14 18l6 8 6-12 8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Vessel Traffic Management & Maritime Safety',
    body: 'Development of Vessel Traffic Management Systems (VTMS), Maritime Domain Awareness platforms, navigation aids, and coastal surveillance solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M20 4L4 14v24h32V14L20 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="14" y="22" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 16h4M22 16h4M17 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Port, Waterway & Coastal Engineering',
    body: 'Research, planning, design, modelling, and consultancy for ports, harbours, waterways, coastal protection, and marine infrastructure.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Research, Innovation & Testing Facilities',
    body: 'Advanced laboratories, simulation facilities, physical modelling, field studies, and applied research to address complex maritime challenges.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: 'Digital Twin',
    body: 'Live 3D replicas of port environments enabling port authorities to simulate, stress-test and optimise operations.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
      </svg>
    ),
    title: 'Capacity Building & Technology Transfer',
    body: "Training, skill development, standards development, industry collaboration, startup incubation, and deployment of innovative maritime technologies.",
  },
];

const facilities = [
  { name: '360° Ship Simulator', tag: 'Simulation', img: '/assets/images/Facility/360.png',  href: '/facilities/ship-simulator' },
  { name: 'Wave Basin',          tag: 'Testing',    img: '/assets/Wavebasin.jpg',             href: '/facilities/wave-basin' },
  { name: 'Marine ICT Lab',      tag: 'Digital',    img: '/assets/images/Facility/ict.png',   href: '/facilities/marine-ict-lab' },
  { name: 'Field Research Lab',  tag: 'Research',   img: '/assets/images/Facility/frl.png',   href: '/facilities/field-research-lab' },
];

const clients = [
  { name: 'Chennai Port',             logo: '/assets/Logo/chennai_port.png' },
  { name: 'Cochin Port',              logo: '/assets/Logo/cochin_port.png' },
  { name: 'Deendayal Port',           logo: '/assets/Logo/dheendayal_port.png' },
  { name: 'IWAI',                     logo: '/assets/Logo/inland_waterways_authority.png' },
  { name: 'Kamarajar Port',           logo: '/assets/Logo/kamarajar_port_limited_logo.png' },
  { name: 'Mumbai Port',              logo: '/assets/Logo/mumbai_port.png' },
  { name: 'NMPA',                     logo: '/assets/Logo/nmpa_port.png' },
  { name: 'Paradip Port',             logo: '/assets/Logo/PPA_port.png' },
  { name: 'SMP Port',                 logo: '/assets/Logo/smp_port.png' },
];

const DRAG_RESISTANCE = 0.14;
const AUTOPLAY_MS = 6000;

/* ── CLIENTS TICKER — infinite auto-scroll ── */
function ClientsTicker() {
  const items = [...clients, ...clients, ...clients];
  return (
    <section className="clients">
      <div className="clients__inner">
        <p className="clients__label">
          <span className="clients__label-line" />
          Trusted by India's leading ports &amp; maritime institutions
          <span className="clients__label-line" />
        </p>
        <div className="clients__viewport">
          <div className="clients__track">
            {items.map((c, i) => (
              <div key={i} className="clients__item">
                <span className="clients__name">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="clients__fade-l" />
          <div className="clients__fade-r" />
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const [idx, setIdx]       = useState(0);
  const [offset, setOffset] = useState(0);
  const [anim, setAnim]     = useState(false);

  const dragging = useRef(false);
  const sx = useRef(0); const st = useRef(0);
  const lx = useRef(0); const vel = useRef(0);
  const wrapRef = useRef(null);
  const autoRef = useRef(null);
  const idxRef  = useRef(idx);
  idxRef.current = idx;
  const total = slides.length;

  const goTo = useCallback((i, smooth = true) => {
    const c = Math.max(0, Math.min(total - 1, i));
    setAnim(smooth); setIdx(c); setOffset(0);
  }, [total]);

  const resetAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => goTo((idxRef.current + 1) % total, true), AUTOPLAY_MS);
  }, [goTo, total]);

  useEffect(() => { resetAuto(); return () => clearInterval(autoRef.current); }, [resetAuto]);

  const onStart = useCallback((x) => {
    clearInterval(autoRef.current);
    dragging.current = true; sx.current = x; lx.current = x;
    st.current = Date.now(); vel.current = 0; setAnim(false);
  }, []);

  const onMove = useCallback((x) => {
    if (!dragging.current || !wrapRef.current) return;
    const w = wrapRef.current.offsetWidth;
    let d = x - sx.current;
    vel.current = x - lx.current; lx.current = x;
    if ((idxRef.current === 0 && d > 0) || (idxRef.current === total - 1 && d < 0)) d *= DRAG_RESISTANCE;
    setOffset((d / w) * 100);
  }, [total]);

  const onEnd = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    const flick = Math.abs(vel.current) > 3 && Date.now() - st.current < 300;
    if (offset < -8 || (flick && vel.current < 0))     goTo(idxRef.current + 1);
    else if (offset > 8 || (flick && vel.current > 0)) goTo(idxRef.current - 1);
    else { setAnim(true); setOffset(0); }
    resetAuto();
  }, [offset, goTo, resetAuto]);

  useEffect(() => {
    const mm = (e) => onMove(e.clientX);
    const mu = () => onEnd();
    window.addEventListener('mousemove', mm);
    window.addEventListener('mouseup', mu);
    return () => { window.removeEventListener('mousemove', mm); window.removeEventListener('mouseup', mu); };
  }, [onMove, onEnd]);

  useEffect(() => {
    const k = (e) => {
      if (e.key === 'ArrowRight') { goTo(idxRef.current + 1); resetAuto(); }
      if (e.key === 'ArrowLeft')  { goTo(idxRef.current - 1); resetAuto(); }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [goTo, resetAuto]);

  const trackX = -(idx * 100) + offset;
  const slide  = slides[idx];

  return (
    <div className="home">

      {/* ══ 1. HERO ══ */}
      <section className="hero" ref={wrapRef}>
        <div
          className="hero-track"
          style={{
            transform: `translateX(${trackX}%)`,
            transition: anim ? 'transform 0.75s cubic-bezier(0.16,1,0.3,1)' : 'none',
            willChange: 'transform',
            cursor: dragging.current ? 'grabbing' : 'grab',
          }}
          onMouseDown={(e) => { e.preventDefault(); onStart(e.clientX); }}
          onTouchStart={(e) => onStart(e.touches[0].clientX)}
          onTouchMove={(e) => { e.preventDefault(); onMove(e.touches[0].clientX); }}
          onTouchEnd={() => onEnd()}
        >
          {slides.map((s, i) => (
            <div key={s.id} className={`hero-slide ${i === idx ? 'is-live' : ''}`}>
              <img src={s.image} alt={s.label} className="hero-slide__img" draggable="false" />
              <div className="hero-slide__scrim" />
              <div className="hero-slide__accent-line" style={{ background: s.accent }} />
              <div className={`hero-slide__text ${i === idx ? 'is-active' : ''}`} key={i === idx ? `s${idx}` : i}>
                <span className="hero-slide__label" style={{ color: s.accent }}>{s.label}</span>
                <h1 className="hero-slide__h">{s.heading.split('\n').map((l, j) => <span key={j}>{l}<br /></span>)}</h1>
                <p className="hero-slide__desc">{s.desc}</p>
                <a href={s.href} className="hero-slide__cta" style={{ background: s.accent }} onMouseDown={e => e.stopPropagation()}>
                  {s.cta}
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-bar">
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button key={i}
                className={`hero-dot ${i === idx ? 'hero-dot--on' : ''}`}
                style={i === idx ? { background: slide.accent, borderColor: slide.accent } : {}}
                onClick={() => { goTo(i); resetAuto(); }} />
            ))}
          </div>
          <div className="hero-scroll" onClick={() => document.querySelector('.about')?.scrollIntoView({ behavior: 'smooth' })}>
            <div className="hero-scroll__mouse">
              <span className="hero-scroll__wheel" />
            </div>
            <span className="hero-scroll__label">Scroll</span>
          </div>
          <div className="hero-navbtns">
            <button className="hero-navbtn" onClick={() => { goTo(idx - 1); resetAuto(); }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="hero-navbtn hero-navbtn--next" style={{ background: slide.accent }}
              onClick={() => { goTo(idx + 1); resetAuto(); }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

      </section>

      {/* ══ 2. ABOUT ══ */}
      <section className="about">
        <div className="about__inner">
          <div className="about__text">
            <p className="sec-eyebrow">About NTCPWC</p>
            <h2 className="sec-heading">India's Premier Centre for Maritime Technology and Innovation</h2>
            <p className="about__para justify-text">The National Technology Centre for Ports, Waterways and Coasts (NTCPWC),
established at IIT Madras under the aegis of the Ministry of Ports, Shipping and
Waterways, Government of India, is a premier Centre of Excellence dedicated to
advancing technology, innovation, and research for the maritime sector. NTCPWC
develops cutting-edge solutions for ports, waterways, and coastal infrastructure,
encompassing areas such as smart ports, vessel traffic management systems,
maritime digitalization, coastal engineering, inland waterways, autonomous systems,
artificial intelligence, and maritime safety. By combining scientific research, engineering
expertise, and industry collaboration, NTCPWC is driving the transformation of India's
maritime ecosystem through indigenous technologies and future-ready solutions that
enhance efficiency, sustainability, safety, and global competitiveness.​</p>
            <a href="/about" className="sec-link">
              Learn about us
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
            </a>
          </div>
          <div className="about__img-wrap">
            <img src="/assets/images/NTCPWC - Building.jpg" alt="NTCPWC Facility" className="about__img" />
          </div>
        </div>
      </section>

      {/* ══ 3. CLIENTS TICKER ══ */}
      <ClientsTicker />

      {/* ══ 4. FEATURES ══ */}
      <section className="features">
        <div className="features__inner">
          <div className="features__header">
            <p className="sec-eyebrow">Capabilities</p>
            <h2 className="sec-heading">Transforming Maritime Challenges into Technology-Driven Solutions​.</h2>
            <p className="features__sub">Leveraging science, technology, and domain expertise to solve complex maritime problems.​</p>
          </div>
          <div className="features__grid">
            {features.map((f, i) => (
              <div key={i} className="feat-card">
                <div className="feat-card__icon">{f.icon}</div>
                <div>
                  <h3 className="feat-card__title">{f.title}</h3>
                  <p className="feat-card__body">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. FULL-WIDTH IMAGE BREAK ══ */}
      <div className="img-break">
        <img src="/assets/Wavebasin.jpg" alt="NTCPWC Research" className="img-break__img" />
        <div className="img-break__over">
          <blockquote className="img-break__quote">
            "To drive innovation and technology for building smart, safe, sustainable, and future-ready ports, waterways, and coastal infrastructure."
          </blockquote>
          <cite className="img-break__cite">NTCPWC Mission Statement</cite>
        </div>
      </div>

      {/* ══ 6. FACILITIES ══ */}
      <section className="facilities">
        <div className="facilities__inner">
          <div className="facilities__header">
            <div>
              <p className="sec-eyebrow">Our Facilities</p>
              <h2 className="sec-heading">World-class infrastructure.</h2>
            </div>
            <a href="/facilities" className="sec-link">View all facilities
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
            </a>
          </div>
          <div className="facilities__grid">
            {facilities.map((f, i) => (
              <a key={i} href={f.href || '/facilities'} className="home-fac-card">
                <div className="home-fac-card__img-wrap">
                  <img src={f.img} alt={f.name} className="home-fac-card__img" />
                  <div className="home-fac-card__overlay" />
                  <span className="home-fac-card__tag">{f.tag}</span>
                  <div className="home-fac-card__body">
                    <h3 className="home-fac-card__name">{f.name}</h3>
                    <span className="home-fac-card__arrow">Explore →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. FAQ ══ */}
      <FaqSection />

      {/* ══ 8. LOCATIONS ══ */}
      <section className="locations">
        <div className="locations__inner">
          <div className="locations__header">
            <p className="sec-eyebrow">Find Us</p>
            <h2 className="sec-heading">Where we are.</h2>
          </div>
          <div className="locations__grid">

            <div className="loc-card">
              <div className="loc-card__map">
                <iframe
                  title="IIT Madras"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0745!2d80.2300!3d12.9900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7a8c2d2d2d%3A0x1b6a0f3e1a2d3b4c!2sIIT%20Madras!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="loc-card__map-badge">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.526 17 13.214 17 10c0-3.866-3.134-7-7-7-3.866 0-7 3.134-7 7 0 3.214 1.698 5.526 3.354 7.105.829.8 1.654 1.38 2.274 1.765a11.62 11.62 0 00.757.433 5.741 5.741 0 00.281.14l.018.008.006.003zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                  Primary Campus
                </div>
              </div>
              <div className="loc-card__info">
                <div className="loc-card__header">
                  <h3 className="loc-card__name">NTCPWC — IIT Madras</h3>
                  <span className="loc-card__tag loc-card__tag--blue">Headquarters</span>
                </div>
                <p className="loc-card__addr">National Technology Centre for Ports,<br />Waterways and Coasts,<br />Campus, Thaiyur Road, Senganmal,<br />Pudupakkam, Tamil Nadu - 603103.​</p>
                <div className="loc-card__contacts">
                  <a href="tel:+914422578915" className="loc-card__contact">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    +91-44-22578916
                  </a>
                  <a href="mailto:ntcpwc@iitm.ac.in" className="loc-card__contact">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    ntcpwc@iitm.ac.in
                  </a>
                </div>
                <a href="https://maps.google.com/?q=IIT+Madras+Chennai" target="_blank" rel="noopener noreferrer" className="loc-card__directions">
                  Get directions
                  <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>

            <div className="loc-card">
              <div className="loc-card__map">
                <iframe
                  title="Port Centre"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sMinistry%20of%20Ports%20Shipping%20and%20Waterways!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="loc-card__map-badge">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.526 17 13.214 17 10c0-3.866-3.134-7-7-7-3.866 0-7 3.134-7 7 0 3.214 1.698 5.526 3.354 7.105.829.8 1.654 1.38 2.274 1.765a11.62 11.62 0 00.757.433 5.741 5.741 0 00.281.14l.018.008.006.003zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                  Ministry Campus
                </div>
              </div>
              <div className="loc-card__info">
                <div className="loc-card__header">
                  <h3 className="loc-card__name">Port Centre</h3>
                  <span className="loc-card__tag loc-card__tag--green">State of the art facility</span>
                </div>
                <p className="loc-card__addr">Port Centre,<br />Senganmal,<br />Pudupakkam, TamilNadu - 603103</p>
                <div className="loc-card__contacts">
                  <a href="tel:+911123714938" className="loc-card__contact">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                    +91-44-22578915/8918
                  </a>
                  <a href="mailto:ntcpwc@iitm.ac.in" className="loc-card__contact">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                    ntcpwc@iitm.ac.in
                  </a>
                </div>
                <a href="https://maps.app.goo.gl/HFuEnsL6cQLQhjNa8" target="_blank" rel="noopener noreferrer" className="loc-card__directions">
                  Get directions
                  <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 9. CTA ══ */}
      <section className="home-cta">
        <div className="home-cta__inner">
          <div className="home-cta__badge">IIT Madras</div>
          <h2 className="home-cta__h">Partner with India's leading<br />maritime research centre.</h2>
          <p className="home-cta__sub">From feasibility studies to full technology deployment — we work with ports, shipping companies and government bodies across India.</p>
          <div className="home-cta__btns">
            <a href="/services" className="home-cta__btn home-cta__btn--white">Explore Services</a>
            <a href="/media"    className="home-cta__btn home-cta__btn--ghost">View Media Coverage</a>
          </div>
        </div>
      </section>

    </div>
  );
}

const faqs = [
  { q: 'What does NTCPWC do?', a: 'NTCPWC is a centre of excellence at IIT Madras under the Ministry of Ports, Shipping and Waterways. We conduct research, develop indigenous technology and provide consultancy services for ports, waterways and coastal infrastructure across India.' },
  { q: 'What products and systems has NTCPWC developed?', a: 'Our key products include the Indigenous Vessel Traffic Management System (iVTS), Sagarmanthan port operating platform, Digital Twin technology, Keel Clearance Management System, and the 3D-VTMS. These are deployed at major Indian ports including Chennai, Paradip, JNPA and others.' },
  { q: 'Can organisations partner with NTCPWC for research or consulting?', a: 'Yes. We work with port authorities, shipping companies, government bodies and private organisations on feasibility studies, hydrodynamic modelling, simulation studies, technology deployment and pilot training programmes.' },
  { q: 'What is the 360° Ship Simulator facility used for?', a: 'Our full-mission bridge simulator replicates real port environments with centimetre-level accuracy. It is used to train port pilots and vessel masters, assess port designs, and simulate navigational scenarios before any real-world change.' },
  { q: 'Is NTCPWC technology available for ports outside India?', a: 'Our technology is primarily deployed across Indian ports under the Sagarmala programme, but we are open to international collaborations. Please reach out to our team to discuss specific requirements.' },
  { q: 'How can I contact NTCPWC or visit the facility?', a: 'NTCPWC is located on the IIT Madras campus in Chennai, Tamil Nadu. You can reach us at ntcpwc@iitm.ac.in or call +91 44 22578915. We also conduct open house events and guided facility visits for delegations.' },
];

function FaqSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <p className="sec-eyebrow">FAQ</p>
          <h2 className="sec-heading">Frequently asked<br />questions.</h2>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq__item ${open === i ? 'faq__item--open' : ''}`}>
              <button className="faq__q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq__icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq__a-wrap">
                <p className="faq__a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}