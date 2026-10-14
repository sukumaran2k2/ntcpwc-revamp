import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './ServiceDetail.css';

const servicesData = {
  'design-engineering': {
    name: 'Design & Engineering',
    tag: 'Engineering',
    accent: '#4A9ECC',
    overview: `Preparation of Detailed Project Report/ Feasibility Report including detailed design and drawings

- For construction of Onshore structures
- Container terminals
- General cargo berths
- Oil jetties
- Floating jetties`,
    specs: [
      { label: 'Service Type', value: 'Design, DPR, Feasibility Studies' },
      { label: 'Infrastructure', value: 'Ports, berths, jetties, breakwaters, channels' },
      { label: 'Standards', value: 'IS, IRS, BS, PIANC, USACE guidelines' },
      { label: 'Software', value: 'AutoCAD, STAAD, MIKE, Delft3D' },
      { label: 'Clients', value: 'Major Indian ports, IWAI, MoPSW' },
      { label: 'Output', value: 'DPR, detailed drawings, BoQ, specifications' },
    ],
    items: [
      { title: 'Preparation of Detailed Project Report (DPR)', desc: 'Preparation of DPR / Feasibility Report including detailed design and drawings for container terminals, general cargo berths, oil jetties and floating jetties.' },
      { title: 'Floating Jetties', desc: 'Design and engineering of floating jetty systems for inland waterways, marinas and port facilities — adaptable to tidal and river conditions.' },
      { title: 'Port Layout & Master Planning', desc: 'Comprehensive master planning for greenfield and brownfield port developments including traffic simulation and berth optimisation.' },
      { title: 'Structural Design', desc: 'Detailed structural design of berths, quay walls, breakwaters and allied port infrastructure using latest codes and standards.' },
    ],
    photos: [
      { src: '/assets/images/services/DPR.jpg', caption: 'Port layout design — master plan view' },
    ],
  },
  'project-management': {
    name: 'Floating Jetties',
    tag: 'Consultancy',
    accent: '#5BB8B2',
    overview: `NTCPWC, the National Technology Centre for Ports, Waterways and Coasts, plays a key role in the development of floating jetties in India. They provide technical support for the design and implementation of these structures, particularly for fishing harbors, marinas, and other water-based facilities. NTCPWC provides guidelines and technical support for the development of floating jetties, which are platforms supported by pontoons and used in various settings like fishing harbors, marinas, and waterdromes.`,
    specs: [
      { label: 'Service Type', value: 'PMC, Construction Supervision, QA/QC' },
      { label: 'Project Types', value: 'Ports, jetties, dredging, coastal structures' },
      { label: 'Methodology', value: 'PMI PMBOK aligned project management' },
      { label: 'Tools', value: 'MS Project, Primavera P6' },
      { label: 'Clients', value: 'Major Indian ports, Gujarat Maritime Board, IWAI' },
      { label: 'Experience', value: '20+ major infrastructure projects delivered' },
    ],
    items: [
      { title: 'Ship Repair Facility, Pandu, Guwahati', desc: 'Development of Ship Repair Facility at Pandu, Guwahati, Assam — full PMC from concept to commissioning.' },
      { title: 'Ghogha Ro-Ro Terminal', desc: 'Dredging in approach channel, turning circle, berth pockets and surrounding of landing pontoon.' },
      { title: 'Weighbridge Modernization', desc: 'Modernization of weighbridges at various major ports across India.' },
      { title: 'Coast Guard Jetties, Gujarat', desc: 'Construction of Coast Guard jetty in Porbandar, Okha & Mundra under Gujarat Maritime Board.' },
      { title: 'Oil Jetty Rehabilitation', desc: 'Rehabilitation of oil jetties and allied structures in Gujarat.' },
      { title: 'Maintenance Dredging', desc: 'Maintenance dredging of Mumbai Channel & JN Port Channel.' },
    ],
    photos: [
      { src: '/assets/images/services/Floating Jetty.png', caption: 'Ship repair facility — Pandu, Guwahati' },
    ],
  },
  'condition-assessment': {
    name: 'Project Management Consultancy',
    tag: 'Assessment',
    accent: '#9B7FE8',
    overview: `Providing expert advice and management services to ensure the successful execution of projects within scope, time, cost, and quality constraints. NTCPWC supports clients through the entire project lifecycle including planning, execution, monitoring, and successful completion.`,
    specs: [
      { label: 'Service Type', value: 'NDT, Condition Assessment, Rehabilitation Advisory' },
      { label: 'Structures', value: 'Berths, jetties, quay walls, marine structures' },
      { label: 'Standards', value: 'IS 13311, ASTM, BS EN standards' },
      { label: 'Equipment', value: 'UPV tester, rebar locator, half-cell apparatus' },
      { label: 'Output', value: 'Detailed condition report with BoQ and drawings' },
      { label: 'Clients', value: 'Major Indian ports, maritime infrastructure owners' },
    ],
    items: [
      { title: 'Ultrasonic Pulse Velocity Test (UPV)', desc: 'Assessment of concrete quality and detection of internal defects using ultrasonic pulse velocity measurement across structural elements.' },
      { title: 'Core Drilling & Carbonation Test', desc: 'Extraction and testing of concrete cores for compressive strength; carbonation depth and pH assessment for durability evaluation.' },
      { title: 'Half-Cell Potential Test', desc: 'Evaluation of corrosion risk in reinforced concrete structures using half-cell potential mapping to identify active corrosion zones.' },
      { title: 'Reporting & Rehabilitation Advisory', desc: 'Detailed NDT condition assessment reports with repair/rehabilitation methodology and Bill of Quantity for distressed RC elements.' },
    ],
    photos: [
      { src: '/assets/Wavebasin.jpg', caption: 'UPV testing on a berth structure' },
      { src: '/assets/Wavebasin.jpg', caption: 'Core drilling at a jetty' },
      { src: '/assets/Wavebasin.jpg', caption: 'Half-cell potential mapping' },
      { src: '/assets/Wavebasin.jpg', caption: 'Condition assessment report preparation' },
      { src: '/assets/Wavebasin.jpg', caption: 'Rehabilitation works in progress' },
      { src: '/assets/Wavebasin.jpg', caption: 'Post-rehabilitation structure inspection' },
    ],
  },
  'project-managements': {
    name: 'Project Management Consultancy',
    tag: 'Assessment',
    accent: '#9B7FE8',
    overview: `Providing expert advice and management services to ensure the successful execution of projects within scope, time, cost, and quality constraints. NTCPWC supports clients through the entire project lifecycle including planning, execution, monitoring, and successful completion.`,
    specs: [
      { label: 'Service Type', value: 'NDT, Condition Assessment, Rehabilitation Advisory' },
      { label: 'Structures', value: 'Berths, jetties, quay walls, marine structures' },
      { label: 'Standards', value: 'IS 13311, ASTM, BS EN standards' },
      { label: 'Equipment', value: 'UPV tester, rebar locator, half-cell apparatus' },
      { label: 'Output', value: 'Detailed condition report with BoQ and drawings' },
      { label: 'Clients', value: 'Major Indian ports, maritime infrastructure owners' },
    ],
    items: [
      { title: 'Ultrasonic Pulse Velocity Test (UPV)', desc: 'Assessment of concrete quality and detection of internal defects using ultrasonic pulse velocity measurement across structural elements.' },
      { title: 'Core Drilling & Carbonation Test', desc: 'Extraction and testing of concrete cores for compressive strength; carbonation depth and pH assessment for durability evaluation.' },
      { title: 'Half-Cell Potential Test', desc: 'Evaluation of corrosion risk in reinforced concrete structures using half-cell potential mapping to identify active corrosion zones.' },
      { title: 'Reporting & Rehabilitation Advisory', desc: 'Detailed NDT condition assessment reports with repair/rehabilitation methodology and Bill of Quantity for distressed RC elements.' },
    ],
    photos: [
      { src: '/assets/Wavebasin.jpg', caption: 'UPV testing on a berth structure' },
      { src: '/assets/Wavebasin.jpg', caption: 'Core drilling at a jetty' },
      { src: '/assets/Wavebasin.jpg', caption: 'Half-cell potential mapping' },
      { src: '/assets/Wavebasin.jpg', caption: 'Condition assessment report preparation' },
      { src: '/assets/Wavebasin.jpg', caption: 'Rehabilitation works in progress' },
      { src: '/assets/Wavebasin.jpg', caption: 'Post-rehabilitation structure inspection' },
    ],
  },
  'hydrodynamic-studies': {
    name: 'Hydrodynamic Studies',
    tag: 'Research',
    accent: '#E8A730',
    overview: `NTCPWC delivers high-fidelity hydrodynamic investigations — from wave climate studies to tidal flushing and sediment transport analysis — informing port design, dredging strategy and environmental assessments.

Using state-of-the-art numerical models and physical model studies in our wave basin facility, we provide the hydrodynamic data and analysis needed for safe and efficient port design.`,
    specs: [
      { label: 'Service Type', value: 'Numerical modelling, Physical model studies' },
      { label: 'Models Used', value: 'MIKE, Delft3D, SWAN, OpenFOAM' },
      { label: 'Facility', value: 'Wave Basin, Sedimentation Basin at IIT Madras' },
      { label: 'Parameters', value: 'Waves, currents, tides, sediment, coastal morphology' },
      { label: 'Output', value: 'Technical reports, design parameters, EIA inputs' },
      { label: 'Clients', value: 'Ports, IWAI, coastal state governments, MoPSW' },
    ],
    items: [
      { title: 'Wave & Current Studies', desc: 'Numerical and physical modelling of wave transformation, current patterns and tidal behaviour for port approach channels and harbour basins.' },
      { title: 'Sedimentation Studies', desc: 'Assessment of sediment transport pathways, siltation rates and dredging requirements using coupled hydrodynamic-sediment models.' },
      { title: 'Coastal Impact Assessment', desc: 'Environmental and morphological impact assessments for port expansion, reclamation and coastal protection works.' },
      { title: 'Physical Model Studies', desc: 'Scaled physical model experiments in the NTCPWC wave basin for validation and design optimisation of complex coastal structures.' },
    ],
    photos: [
      { src: '/assets/Wavebasin.jpg', caption: 'Wave basin physical model study' },
      { src: '/assets/Wavebasin.jpg', caption: 'Numerical wave modelling output' },
      { src: '/assets/Wavebasin.jpg', caption: 'Sediment transport study results' },
      { src: '/assets/Wavebasin.jpg', caption: 'Tidal current mapping' },
      { src: '/assets/Wavebasin.jpg', caption: 'Coastal morphology change analysis' },
      { src: '/assets/Wavebasin.jpg', caption: 'Port design optimisation using hydrodynamic data' },
    ],
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];
  const [lightbox, setLightbox] = useState(null);

  if (!service) {
    return (
      <div className="sd-404">
        <p>Service not found.</p>
        <a href="/services">← Back to Services</a>
      </div>
    );
  }

  return (
    <div className="sd-page">

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero__img-wrap">
          <img src={service.photos[0].src} alt={service.name} className="sd-hero__img" />
          <div className="sd-hero__scrim" />
        </div>
        <div className="sd-hero__content">
          <a href="/services" className="sd-back">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd"/>
            </svg>
            All Services
          </a>
          <span className="sd-tag" style={{ color: service.accent }}>{service.tag}</span>
          <h1 className="sd-name">{service.name}</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sd-overview">
        <div className="sd-overview__inner">
          <div className="sd-overview__left">
            <p className="sd-eyebrow">Overview</p>
            <h2 className="sd-heading">About this service.</h2>
          </div>
          <div className="sd-overview__right">
            {service.overview.split('\n\n').map((p, i) => (
              <p key={i} className="sd-para">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="sd-specs">
        <div className="sd-specs__inner">
          <p className="sd-eyebrow">Details</p>
          <div className="sd-specs-grid">
            {service.specs.map((s, i) => (
              <div key={i} className="sd-spec-row">
                <span className="sd-spec-label">{s.label}</span>
                <span className="sd-spec-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sd-items">
        <div className="sd-items__inner">
          <div className="sd-items__left">
            <p className="sd-eyebrow sd-eyebrow--light">What We Do</p>
            <h2 className="sd-heading sd-heading--light">Scope of work.</h2>
          </div>
          <ul className="sd-list">
            {service.items.map((item, i) => (
              <li key={i} className="sd-list__item">
                <span className="sd-list__n" style={{ color: service.accent }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="sd-list__title">{item.title}</p>
                  <p className="sd-list__desc">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="sd-gallery">
        <div className="sd-gallery__inner">
          <p className="sd-eyebrow">Gallery</p>
          <h2 className="sd-heading">Photos.</h2>
          <div className="sd-photo-grid">
            {service.photos.map((p, i) => (
              <div key={i} className="sd-photo" onClick={() => setLightbox(i)}>
                <img src={p.src} alt={p.caption} className="sd-photo__img" />
                <div className="sd-photo__overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK */}
      <section className="sd-footer">
        <div className="sd-footer__inner">
          <a href="/services" className="sd-back-btn">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd"/>
            </svg>
            Back to all services
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="sd-lightbox" onClick={() => setLightbox(null)}>
          <div className="sd-lightbox__inner" onClick={e => e.stopPropagation()}>
            <button className="sd-lightbox__close" onClick={() => setLightbox(null)}>×</button>
            <img src={service.photos[lightbox].src} alt={service.photos[lightbox].caption} className="sd-lightbox__img" />
            <p className="sd-lightbox__cap">{service.photos[lightbox].caption}</p>
            <div className="sd-lightbox__nav">
              <button onClick={() => setLightbox((lightbox - 1 + service.photos.length) % service.photos.length)}>←</button>
              <span>{lightbox + 1} / {service.photos.length}</span>
              <button onClick={() => setLightbox((lightbox + 1) % service.photos.length)}>→</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
