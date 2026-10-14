import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FacilityDetail.css";

const facilitiesData = {
  "ship-simulator": {
    name: "360° Ship Simulator",
    tag: "Simulation",
    accent: "#4A9ECC",
    overview: `NTCPWC, IIT Madras has commissioned a large 360° projection-based Full Mission Ship Handling Simulator for conducting complex navigation feasibility studies for port development projects, including Inland Waterways. The state-of-the-art simulator is also used for R&D projects at IITM. It is among the largest simulators of its kind in the region, employing the latest marine simulation technology available worldwide. Over 30 navigational studies and more than 200 entry-level pilot training sessions have been successfully conducted using this facility.`,
    specs: [
      {
        label: "Visual System",
        value: "360° full-mission projection, 12-projector array",
      },
      {
        label: "Simulation Fidelity",
        value: "Centimetre-level accuracy with real port bathymetry",
      },
      {
        label: "Vessel Models",
        value: "150+ vessel types including VLCCs, container ships, tugs",
      },
      { label: "Scenarios", value: "25+ Indian port environments pre-loaded" },
      {
        label: "Motion Platform",
        value: "6-DOF motion platform for sea state simulation",
      },
      {
        label: "Capacity",
        value: "Full bridge team training — pilot + officers + VTS",
      },
    ],
    research: [
      "Port approach optimisation for new berth designs",
      "Tug assistance requirement studies",
      "Navigation channel width and depth assessment",
      "Manoeuvring studies for new vessel classes",
      "Pilot training programme development",
    ],
    photos: [
      {
        src: "/assets/images/Facility/360/1.jpg",
        caption: "360° projection system — full bridge view",
      },
      {
        src: "/assets/images/Facility/360/2.jpg",
        caption: "Bridge console with navigational instruments",
      },
      {
        src: "/assets/images/Facility/360/3.jpg",
        caption: "Instructor station and scenario control",
      },
      {
        src: "/assets/images/Facility/360/4.jpg",
        caption: "Port approach simulation — Chennai Port",
      },
      {
        src: "/assets/images/Facility/360/5.jpg",
        caption: "Pilot training session in progress",
      },
      {
        src: "/assets/images/Facility/360/6.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/7.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/8.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/9.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/10.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/11.jpg",
        caption: "Night-time simulation with port lighting",
      },
      {
        src: "/assets/images/Facility/360/12.jpg",
        caption: "Night-time simulation with port lighting",
      },
    ],
    video: null,
  },
  "wave-basin": {
    name: "Sedimentation & Erosion Management Test Basin",
    tag: "Testing & Research",
    accent: "#5BB8B2",
    overview: `The Wave Basin at NTCPWC is a large-scale physical modelling facility designed for studying sediment transport, dredging behaviour, and port siltation. It enables scaled physical reproduction of harbour and channel conditions for comprehensive testing before deployment.

The basin supports long-duration experiments to understand how sediment moves under tidal, wave and current forcing — critical for designing dredging schedules, estimating maintenance costs, and planning port expansion projects.`,
    specs: [
      { label: "Size", value: "65 m x 90 m x 2 m" },
      {
        label: "Wavemakers",
        value: "152 element",
      },
      { label: "Working Depth", value: "Up to 1 m" },
      {
        label: "Wave Types",
        value: "Regular, Random, Cnoidal, or Higher Order",
      },
      {
        label: "Wave Orientation",
        value: "Long-crested or Short-crested",
      },
    ],
    research: [
      "Port siltation rate estimation and dredging optimisation",
      "Sediment budget studies for coastal inlets",
      "Navigation channel maintenance planning",
      "Harbour resonance and wave penetration studies",
      "Coastal erosion and accretion modelling",
    ],
    photos: [
      {
        src: "/assets/images/Facility/semteb/wb1.jpg",
        caption: "Sedimentation basin — full view",
      },
      {
        src: "/assets/images/Facility/semteb/wb2.jpg",
        caption: "Sediment transport experiment in progress",
      },
      { src: "/assets/images/Facility/semteb/wb3.jpg", caption: "Scaled port model setup" },
    ],
    video: null,
  },
  "marine-ict-lab": {
    name: "Marine ICT Lab",
    tag: "Digital",
    accent: "#9B7FE8",
    overview: `The Marine Engineering and ICT Lab integrates a broad spectrum of coastal and marine sciences, ports, and waterway research through a multidisciplinary approach. It is equipped with a variety of instruments for environmental sensing, data collection, communication, and dissemination. The lab leverages large-scale infrastructure and geospatial technologies for monitoring and analysis of marine systems.`,
    specs: [
      {
        label: "Development Areas",
        value: "VTS software, Port OS, Digital Twin, AIS processing",
      },
      {
        label: "Compute Infrastructure",
        value: "High-performance GPU cluster for simulation & AI",
      },
      {
        label: "Sensor Integration",
        value: "AIS, radar, CCTV, IoT, weather sensor fusion",
      },
      {
        label: "GIS Platform",
        value: "Real-time hydrographic and nautical chart processing",
      },
      {
        label: "AI/ML Capability",
        value: "Vessel behaviour prediction, anomaly detection",
      },
      {
        label: "Testing & Research Environment",
        value: "Hardware-in-the-loop testing for embedded systems",
      },
    ],
    research: [
      "Intelligent vessel traffic management algorithms",
      "Real-time port operational dashboards",
      "AI-based berth allocation and scheduling optimisation",
      "Digital twin development for port infrastructure",
      "Autonomous harbour vessel guidance systems",
    ],
    photos: [
      {
        src: "/assets/Wavebasin.jpg",
        caption: "Marine ICT Lab — development workspace",
      },
      { src: "/assets/Wavebasin.jpg", caption: "VTS software demonstration" },
      {
        src: "/assets/Wavebasin.jpg",
        caption: "Digital twin visualisation on display",
      },
      { src: "/assets/Wavebasin.jpg", caption: "Sensor integration testbed" },
      {
        src: "/assets/Wavebasin.jpg",
        caption: "AI model training infrastructure",
      },
      { src: "/assets/Wavebasin.jpg", caption: "AIS data processing platform" },
    ],
    video: null,
  },
  "field-research-lab": {
    name: "Field Research Lab",
    tag: "Research",
    accent: "#E8A730",
    overview: `NTCPWC is equipped with a modern Field Research Laboratory (FRL) to conduct advanced field-based measurements in coastal, marine, and inland water environments. The lab focuses on mapping, water sampling, and monitoring nearshore and inland waterway characteristics. It houses a wide range of instruments for measuring waves, currents, tides, and various marine and atmospheric parameters, backed by dedicated manpower and software infrastructure.`,
    specs: [
      {
        label: "Survey Equipment",
        value: "Multi-beam and single-beam echo sounders, side-scan sonar",
      },
      {
        label: "Wave Monitoring",
        value: "Directional wave buoys, pressure transducers",
      },
      { label: "Current Profiling", value: "Vessel-mounted and moored ADCPs" },
      {
        label: "Sediment Sampling",
        value: "Vibrocorers, grab samplers, bed profilers",
      },
      {
        label: "Remote Sensing",
        value: "Drone-based coastal mapping and LiDAR surveys",
      },
      {
        label: "Data Telemetry",
        value: "Real-time IoT sensor networks at port locations",
      },
    ],
    research: [
      "Long-term coastal erosion and shoreline change monitoring",
      "Port approach channel bathymetric surveys",
      "Wave climate characterisation for port design",
      "Sediment transport pathway mapping",
      "Real-time weather and oceanographic data networks",
    ],
    photos: [
      { src: "/assets/Wavebasin.jpg", caption: "Field survey vessel at work" },
      { src: "/assets/Wavebasin.jpg", caption: "Wave buoy deployment" },
      {
        src: "/assets/Wavebasin.jpg",
        caption: "Coastal LiDAR survey by drone",
      },
      { src: "/assets/Wavebasin.jpg", caption: "Sediment core sampling" },
      {
        src: "/assets/Wavebasin.jpg",
        caption: "Multi-beam survey data visualisation",
      },
      {
        src: "/assets/Wavebasin.jpg",
        caption: "Real-time sensor telemetry station",
      },
    ],
    video: null,
  },
};

export default function FacilityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const facility = facilitiesData[id];
  const [lightbox, setLightbox] = useState(null);

  if (!facility) {
    return (
      <div className="fac-detail-404">
        <p>Facility not found.</p>
        <a href="/facilities">← Back to Facilities</a>
      </div>
    );
  }

  return (
    <div className="fac-detail">
      {/* HERO */}
      <section
        className="fac-detail__hero"
        style={{ "--accent": facility.accent }}
      >
        <div className="fac-detail__hero-img-wrap">
          <img
            src={facility.photos[0].src}
            alt={facility.name}
            className="fac-detail__hero-img"
          />
          <div className="fac-detail__hero-scrim" />
        </div>
        <div className="fac-detail__hero-content">
          <a href="/facilities" className="fac-detail__back">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            All Facilities
          </a>
          <span className="fac-detail__tag" style={{ color: facility.accent }}>
            {facility.tag}
          </span>
          <h1 className="fac-detail__name">{facility.name}</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="fac-detail__overview">
        <div className="fac-detail__overview-inner">
          <div className="fac-detail__overview-left">
            <p className="fd-eyebrow">Overview</p>
            <h2 className="fd-heading">About this facility.</h2>
          </div>
          <div className="fac-detail__overview-right">
            {facility.overview.split("\n\n").map((para, i) => (
              <p key={i} className="fac-detail__para">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="fac-detail__specs">
        <div className="fac-detail__specs-inner">
          <p className="fd-eyebrow">Specifications</p>
          <div className="specs-grid">
            {facility.specs.map((s, i) => (
              <div key={i} className="spec-row">
                <span className="spec-row__label">{s.label}</span>
                <span className="spec-row__value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="fac-detail__gallery">
        <div className="fac-detail__gallery-inner">
          <p className="fd-eyebrow">Gallery</p>
          <h2 className="fd-heading">Photos.</h2>
          <div className="fac-photo-grid">
            {facility.photos.map((p, i) => (
              <div key={i} className="fac-photo" onClick={() => setLightbox(i)}>
                <img src={p.src} alt={p.caption} className="fac-photo__img" />
                <div className="fac-photo__overlay">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      {facility.video && (
        <section className="fac-detail__video">
          <div className="fac-detail__video-inner">
            <p className="fd-eyebrow">Video</p>
            <h2 className="fd-heading">See it in action.</h2>
            <div className="fac-video-wrap">
              <iframe
                src={facility.video}
                title={facility.name}
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        </section>
      )}

      {/* RESEARCH */}
      <section className="fac-detail__research">
        <div className="fac-detail__research-inner">
          <div className="fac-detail__research-left">
            <p className="fd-eyebrow fd-eyebrow--light">Research</p>
            <h2 className="fd-heading fd-heading--light">
              What we study
              <br />
              here.
            </h2>
          </div>
          <ul className="research-list">
            {facility.research.map((r, i) => (
              <li key={i} className="research-item">
                <span className="research-item__n">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="research-item__text">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="fac-detail__footer">
        <div className="fac-detail__footer-inner">
          <a href="/facilities" className="fac-back-btn">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to all facilities
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fac-lightbox" onClick={() => setLightbox(null)}>
          <div
            className="fac-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fac-lightbox__close"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
            <img
              src={facility.photos[lightbox].src}
              alt={facility.photos[lightbox].caption}
              className="fac-lightbox__img"
            />
            <p className="fac-lightbox__cap">
              {facility.photos[lightbox].caption}
            </p>
            <div className="fac-lightbox__nav">
              <button
                onClick={() =>
                  setLightbox(
                    (lightbox - 1 + facility.photos.length) %
                      facility.photos.length,
                  )
                }
              >
                ←
              </button>
              <span>
                {lightbox + 1} / {facility.photos.length}
              </span>
              <button
                onClick={() =>
                  setLightbox((lightbox + 1) % facility.photos.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
