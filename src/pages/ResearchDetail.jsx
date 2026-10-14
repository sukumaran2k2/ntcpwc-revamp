import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './ServiceDetail.css';

const servicesData = {
  '3D-numerical': {
    name: 'Development of a customizable 3d numerical hydrodynamics and siltation tool',
    tag: 'Engineering',
    accent: '#4A9ECC',
    overview: `DEVELOPMENT OF A CUSTOMIZABLE 3D NUMERICAL HYDRODYNAMICS AND SILTATION TOOL


    - The study aims to implement an integrated model for quantifying baroclinic and barotropic circulation in the shelf seas and provide a platform for obtaining sediment load. The following tasks are proposed.


    - To incorporate various forcing factors such as inflows, tides, density variation and wind stress for simulating the hydrodynamics of the shallow water areas with baroclinicity.


    - Explain the behaviour of baroclinic effects based on vertical mixing and apply proper turbulence closure methods.


    - Develop a methodology to generate boundary forcing to regional circulation model that focus on shallow water regions.


    - Develop new models for sediment load generation and mixing in the water column. Validate these models in the laboratories at department of Ocean Engineering, IIT Madras and also using field data from 3 typical sites along indian coast.


    - Modeling sediment transport in the area of interest and analyze the erosional and depositional patterns by understanding the turbidity plumes.


    - A regional model covering southern indian coastlines and northern indian ocean has been implemented by the PI recently. Using this as launch pad, we propose to extend this to model complex hydrodynamic and sediment dynamic computations in the estuaries, ports and waterways with appropriate boundary conditions, validation of the same and extending the model capabilities and customization will be carried out under this study.


    - To start with, it is envisaged to extend the model domain to Hooghly estuary. Validation will be carried out with extensive field data collected by IITM along with KoPT.


    - Implementing the corresponding boundary conditions for barotrophic and baroclinic forcings will be taken up and validation will be carried out with available data.


    - Experiments will be conducted in the field and in the lab to correlate the sediment generation mechanism from shallow water due to wave and current action. The measurements will be carried out at 2 sites along Indian coast (Hooghly Estuary and Gulf of Kutch).


    -Sediment generation and transport in the regional circulation model will be implemented and validated with data from field experiments.`,
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
      { src: '/assets/images/research/1.jpg', caption: 'Port layout design — master plan view' },
      { src: '/assets/images/research/3D-numerical/hugli-3dview.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/hugli-depth.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/hugli-mesh.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/hugli-velocity.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/kutch-3dview.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/kutch-depth.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/3D-numerical/kutch-mesh.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
    ],
  },
  'inlet-dynamics': {
    name: 'Inlet dynamics & shoal processes – a complete numerical, laboratory and field study',
    tag: 'Consultancy',
    accent: '#5BB8B2',
    overview: `The coastal zone is an area of interaction between land and sea. It includes both terrestrial as well as marine resources, which may be renewable as well as non-renewable. In addition, interaction between various natural processes and human activities are important factors in the coastal area. The coastal zone in India assumes its importance because of high productivity of its ecosystems, concentration of population, exploitation of natural resources, discharge of waste effluent and municipal sewage, development of industries, increasing load on harbours, spurt in recreational activities and petroleum exploration activities. Thus, there is a need to protect the coastal environment, while, ensuring continuing production and development.`,
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
      { src: '/assets/images/research/2.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },
      { src: '/assets/images/research/inland-dynamics/inlet-dynamics-and-shoal-processes.jpg', caption: 'Ship repair facility — Pandu, Guwahati' },

    ],
  },
  'inland-waterways': {
    name: 'Assessment tool for assessing the impact of ShipBoat Wake Waves on the banks and protection measures for Inland Waterways',
    tag: 'Assessment',
    accent: '#9B7FE8',
    overview: `It is well known that vessels in any waterway generate waves which in turn can sometimes have significant adverse effects on the river banks. In this proposal, it is proposed to develop a numerical model to arrive at the speed of the moving vessels to protect the banks of the inland national waterways. This is of immediate concern due to the recent government plan to extend our national waterways in a phased manner, as water transport is safe, cheap and has a lower carbon footprint. The need for this study is highlighted in this proposal with evidence from google images. The proposed study will ascertain the impact of vessel generated wake waves on the protected or unprotected banks of the waterways which is the need of the hour. In order to validate the developed numerical model for the moving vessels in a channel, it is proposed to carry out the field investigations
(i) at the inner harbour area of Cochin port where the channels are narrower, and
(ii) in 2 sites along the proposed National Waterways. Further, the use of existing empirical models from river and coastal engineering will be investigated for the design of bank protection.

Mainak Chakraborty, V. Sriram and K. Murali (2022) Field measurement and analysis of ship generated waves in Hooghly river, India Applied Ocean Research Volume 128, November 2022, 103337 ​

Mainak Chakraborty, V. Sriram and K. Murali (2022) Impact of the Ship Waves and Tidal Forces on The Sediment Resuspension in Inland Waterways. (2023). Coastal Engineering Proceedings, 37, papers.52.`,
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
      { src: '/assets/images/research/inland-waterways/Ship1.png', caption: 'UPV testing on a berth structure' },
      { src: '/assets/images/research/inland-waterways/Ship2_D0p5L.png', caption: 'UPV testing on a berth structure' },
      { src: '/assets/images/research/inland-waterways/Ship2_D1p0L.png', caption: 'UPV testing on a berth structure' },
      { src: '/assets/images/research/inland-waterways/Ship1.png', caption: 'UPV testing on a berth structure' },
    ],
  },
  'hydrodynamic': {
    name: 'Hydrodynamic study and simulation of multiple ship interactions in inland waterways and shallow waters',
    tag: 'Assessment',
    accent: '#9B7FE8',
    overview: `India has thousands of kilometres of waterways with potential for efficient transport of large quantities of cargo such as agricultural, mineral and heavy-industry products. Compared to other means of cargo transport over land, that on waterways can be environmentally friendly and also cost-wise the most efficient provided efficient means of navigation are put in place. Navigation of multiple ships in confined waters is a challenging task because the hydrodynamic interactions occurring between ships and with channel boundaries can be quite complex, which if not properly managed through appropriate navigations, could lead to collisions between ships and with channel boundaries. In the proposed work, numerical models will be developed to determine the hydrodynamic forces and moments generated by the interactions which can be useful for designing efficient controllers for ship navigations in inland channels. The numerical results will be validated through comparison with experiments that will be carried out in the towing tank on the main Adayar campus of IIT Madras and in the new shallow water basin at the Thaiyur campus of IIT Madras. The hydrodynamic model can be integrated into control algorithms for navigation of multiple ships in confined waters.`,
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
      { src: '/assets/images/research/hydrodynamic/project-single-10.jpg', caption: 'Core drilling at a jetty' },
    ],
  },
  'maintenance-dredging': {
    name: 'Comprehensive study of the maintenance dredging requirements of all major ports and national waterways and strategies and technical solutions to reduce the cost in short term and long term',
    tag: 'Research',
    accent: '#E8A730',
    overview: `The ports are continually being modernized to facilitate international trade. National waterways Transport facilities available by ship along India’s vast coastline are part of the coastal shipping system. India has made great progress in shipping and gradually became the second largest shipping country in Asia and sixth largest in the world. Indian ships ply on most of the shipping route of the world. Shipping channels are of equal important like our road and rail networks and, like these networks, need to be maintained and developed as trade grows. Dredging of shipping channels is an essential part of port operation globally. Although shipping channels are declared in naturally deep-water areas, thus enabling the safe passage of shipping, dredging is always be required. Capital (also termed developmental) dredging is also required to create new or improve existing channels and berths. Channel widening and deepening is necessary to ensure ports can accommodate the increasing numbers of ships trading with all ports as the international economy grows and larger ships are used to achieve economies of scale. Port related dredging and, for many ports, at-sea placement of dredged material is an economic imperative required to maintain and develop shipping channels. In this section of investigation, a proper management plan including shape of dredging pattern and reclamation for short term and long term solution to reduce the cost.
    
    The problem addressed carry out comprehensive studies through continuous field monitoring, computer aided numerical modelling and custom model development for optimized maintenance dredging for all minor, major ports and national waterways. The solutions also include Coastal and River Engineering solutions for slipway, bank protection, safe navigation and design of protection of structures.
    
    To require development of deep-water ports become more expensive, multiple use of the facility would lead to higher techno economic feasibility. Carrying out this research in the present context would lead to multiple benefits in port, waterways and coastal development.`,
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
      { src: '/assets/images/research/maintenance-dredging/project-single-11.jpg', caption: 'Wave basin physical model study' },
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
            <h2 className="sd-heading">About this research.</h2>
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
          <a href="/research" className="sd-back-btn">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd"/>
            </svg>
            Back to all research
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
