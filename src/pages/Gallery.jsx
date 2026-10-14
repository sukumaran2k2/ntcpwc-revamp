import { useState, useEffect, useCallback, useRef } from "react";
import "./Gallery.css";

/* ── GALLERY DATA — replace image paths with real ones ── */
const events = [
  {
    id: 1,
    title: "Secretary, MoPSW Inaugurates iVTS at Chennai Port Authority",
    date: "2026-03-01",
    category: "Visit",
    cover: "/assets/images/gallery/iVTS - inaguration/1.jpg",
    photos: [
      {
        id: 101,
        src: "/assets/images/gallery/iVTS - inaguration/1.jpg",
        caption: "Chairman IWAI Shri Sunil Paliwal at NTCPWC",
      },
      {
        id: 102,
        src: "/assets/images/gallery/iVTS - inaguration/2.jpg",
        caption: "Facility walkthrough at the Port Centre",
      },
      {
        id: 103,
        src: "/assets/images/gallery/iVTS - inaguration/3.jpg",
        caption: "Briefing on NTCPWC research and products",
      },
      {
        id: 104,
        src: "/assets/images/gallery/iVTS - inaguration/4.jpg",
        caption: "Discussion with NTCPWC leadership",
      },
      {
        id: 105,
        src: "/assets/images/gallery/iVTS - inaguration/5.jpg",
        caption: "Demonstration of indigenous technology",
      },
      {
        id: 106,
        src: "/assets/images/gallery/iVTS - inaguration/6.jpg",
        caption: "Group photograph with visiting delegation",
      },
      {
        id: 107,
        src: "/assets/images/gallery/iVTS - inaguration/7.jpg",
        caption: "Group photograph with visiting delegation",
      },
    ],
  },
  {
    id: 2,
    title: "MBA - DMSC students from IIT Madras Visit to Port Centre",
    date: "2026-01-15",
    category: "Inauguration",
    cover: "/assets/images/gallery/MBA Visit/1.jpg",
    photos: [
      {
        id: 201,
        src: "/assets/images/gallery/MBA Visit/1.jpg",
        caption: "Secretary MoPSW addressing the gathering",
      },
      {
        id: 202,
        src: "/assets/images/gallery/MBA Visit/2.jpg",
        caption: "iVTS system demonstration at Chennai Port",
      },
      {
        id: 203,
        src: "/assets/images/gallery/MBA Visit/3.jpg",
        caption: "Officials inspecting the new VTS setup",
      },
      {
        id: 204,
        src: "/assets/images/gallery/MBA Visit/4.jpg",
        caption: "Panel discussion post inauguration",
      },
      {
        id: 205,
        src: "/assets/images/gallery/MBA Visit/5.jpg",
        caption: "Group photo with dignitaries",
      },
      {
        id: 206,
        src: "/assets/images/gallery/MBA Visit/6.jpg",
        caption: "Live monitoring display at iVTS centre",
      },
      {
        id: 207,
        src: "/assets/images/gallery/MBA Visit/7.jpg",
        caption: "Live monitoring display at iVTS centre",
      },
    ],
  },
  {
    id: 3,
    title: "Institute Open House 2026 (Shaastra, IIT Madras)",
    date: "2026-01-08",
    category: "Event",
    cover: "/assets/images/gallery/Institute Open House 2026/IOH5.jpg",
    photos: [
      {
        id: 301,
        src: "/assets/images/gallery/Institute Open House 2026/IOH5.jpg",
        caption: "NTCPWC stall at Shaastra Open House",
      },
      {
        id: 302,
        src: "/assets/images/gallery/Institute Open House 2026/IOH2.jpg",
        caption: "Wave basin demonstration for visitors",
      },
      {
        id: 303,
        src: "/assets/images/gallery/Institute Open House 2026/IOH3.jpg",
        caption: "Students interacting with the ship simulator",
      },
      {
        id: 304,
        src: "/assets/images/gallery/Institute Open House 2026/IOH4.jpg",
        caption: "Research poster presentations",
      },
      {
        id: 305,
        src: "/assets/images/gallery/Institute Open House 2026/IOH6.jpg",
        caption: "Director addressing the open house crowd",
      },
      {
        id: 306,
        src: "/assets/images/gallery/Institute Open House 2026/IOH1.jpg",
        caption: "Director addressing the open house crowd",
      },
    ],
  },
  {
    id: 4,
    title:
      "HD Korea Shipbuilding and Offshore Engineering (HD KSOE) Team Visit to IIT Madras and NTCPWC",
    date: "2025-11-20",
    category: "Visit",
    cover: "/assets/images/gallery/HDKSOE/1.jpg",
    photos: [
      {
        id: 401,
        src: "/assets/images/gallery/HDKSOE/1.jpg",
        caption: "MBA students in the control room",
      },
      {
        id: 402,
        src: "/assets/images/gallery/HDKSOE/2.jpg",
        caption: "Group interaction at the wave basin",
      },
      {
        id: 403,
        src: "/assets/images/gallery/HDKSOE/3.jpg",
        caption: "Briefing session on port operations",
      },
      {
        id: 404,
        src: "/assets/images/gallery/HDKSOE/4.jpg",
        caption: "Students at the ship simulator",
      },
      {
        id: 405,
        src: "/assets/images/gallery/HDKSOE/5.jpg",
        caption: "Q&A with NTCPWC researchers",
      },
      {
        id: 406,
        src: "/assets/images/gallery/HDKSOE/6.jpg",
        caption: "Group photograph at the facility",
      },
      {
        id: 406,
        src: "/assets/images/gallery/HDKSOE/7.jpg",
        caption: "Group photograph at the facility",
      },
    ],
  },
  {
    id: 5,
    title: "NTCPWC at India Maritime Week 2025",
    date: "2025-10-05",
    category: "Event",
    cover: "/assets/images/gallery/India Maritime Week 2025/Image1.jpg",
    photos: [
      {
        id: 501,
        src: "/assets/images/gallery/India Maritime Week 2025/Image1.jpg",
        caption: "Award ceremony at Maritime India Summit",
      },
      {
        id: 502,
        src: "/assets/images/gallery/India Maritime Week 2025/Image2.jpg",
        caption: "Director receiving the excellence award",
      },
      {
        id: 503,
        src: "/assets/images/gallery/India Maritime Week 2025/Image3.jpg",
        caption: "NTCPWC delegation at the summit",
      },
      {
        id: 504,
        src: "/assets/images/gallery/India Maritime Week 2025/Image4.jpg",
        caption: "Product demonstration at the exhibition",
      },
      {
        id: 505,
        src: "/assets/images/gallery/India Maritime Week 2025/Image5.jpg",
        caption: "Product demonstration at the exhibition",
      },
      {
        id: 506,
        src: "/assets/images/gallery/India Maritime Week 2025/Image6.jpg",
        caption: "Product demonstration at the exhibition",
      },
    ],
  },
  {
    id: 6,
    title:
      "NTCPWC, IIT MADRAS signs MOU with New Mangalore Port Authority to establish the Port Automation Unit",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/MOU Signing/Image1.jfif",
    photos: [
      {
        id: 601,
        src: "/assets/images/gallery/MOU Signing/Image1.jfif",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 602,
        src: "/assets/images/gallery/MOU Signing/Image2.jfif",
        caption: "Cultural programme by staff",
      },
      {
        id: 603,
        src: "/assets/images/gallery/MOU Signing/Image3.jfif",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 604,
        src: "/assets/images/gallery/MOU Signing/Image4.jfif",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 605,
        src: "/assets/images/gallery/MOU Signing/Image5.jfif",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 606,
        src: "/assets/images/gallery/MOU Signing/Image6.jfif",
        caption: "Group photograph on National Maritime Day",
      },
    ],
  },
  {
    id: 7,
    title: "Director General of Shipping Visit to Port Center",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/Director General of Shipping/1.jpg",
    photos: [
      {
        id: 701,
        src: "/assets/images/gallery/Director General of Shipping/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 702,
        src: "/assets/images/gallery/Director General of Shipping/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 703,
        src: "/assets/images/gallery/Director General of Shipping/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 704,
        src: "/assets/images/gallery/Director General of Shipping/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 705,
        src: "/assets/images/gallery/Director General of Shipping/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 706,
        src: "/assets/images/gallery/Director General of Shipping/6.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 706,
        src: "/assets/images/gallery/Director General of Shipping/7.jpg",
        caption: "Group photograph on National Maritime Day",
      },
    ],
  },
  {
    id: 8,
    title: "MAR-a-THON 2025",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/MARA-a-THON/Image 1.jpg",
    photos: [
      {
        id: 801,
        src: "/assets/images/gallery/MARA-a-THON/Image 1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 802,
        src: "/assets/images/gallery/MARA-a-THON/Image 2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 803,
        src: "/assets/images/gallery/MARA-a-THON/Image 3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 804,
        src: "/assets/images/gallery/MARA-a-THON/Image 4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 805,
        src: "/assets/images/gallery/MARA-a-THON/Image 5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 806,
        src: "/assets/images/gallery/MARA-a-THON/Image 6.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 9,
    title: "Lt Col Kavitha Nair Visit 23-05-2025",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/Lt Col Kavitha Nair Visit/1.jpg",
    photos: [
      {
        id: 901,
        src: "/assets/images/gallery/Lt Col Kavitha Nair Visit/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 902,
        src: "/assets/images/gallery/Lt Col Kavitha Nair Visit/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 903,
        src: "/assets/images/gallery/Lt Col Kavitha Nair Visit/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 904,
        src: "/assets/images/gallery/Lt Col Kavitha Nair Visit/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 905,
        src: "/assets/images/gallery/Lt Col Kavitha Nair Visit/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 10,
    title: "Meeting for setting up Maritime Innovation Hub @ IITM 08-01-2025",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/1.jpg",
    photos: [
      {
        id: 1001,
        src: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 1002,
        src: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 1003,
        src: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 1004,
        src: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1005,
        src: "/assets/images/gallery/Sh. T K Ramachandran - Secretary (08-01-2025)/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 11,
    title: "Joint Secretary, Sagarmala, MoPSW visit 05-01-2025",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/JS Visit/1.jpg",
    photos: [
      {
        id: 1101,
        src: "/assets/images/gallery/JS Visit/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 1102,
        src: "/assets/images/gallery/JS Visit/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 1103,
        src: "/assets/images/gallery/JS Visit/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 1104,
        src: "/assets/images/gallery/JS Visit/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1105,
        src: "/assets/images/gallery/JS Visit/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1106,
        src: "/assets/images/gallery/JS Visit/6.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 12,
    title: "Ministry of Defence Visit 24.06.2024",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/Ministery of Defence - 24 June 2025/1.jpg",
    photos: [
      {
        id: 1201,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 1202,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 1203,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 1204,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1205,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1206,
        src: "/assets/images/gallery/Ministery of Defence - 24 June 2025/6.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 13,
    title: "Secretary, Ministry of Education visit 06.04.2024",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/Min of Education/1.jpg",
    photos: [
      {
        id: 1301,
        src: "/assets/images/gallery/Min of Education/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 1302,
        src: "/assets/images/gallery/Min of Education/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 1303,
        src: "/assets/images/gallery/Min of Education/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 1304,
        src: "/assets/images/gallery/Min of Education/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1305,
        src: "/assets/images/gallery/Min of Education/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1306,
        src: "/assets/images/gallery/Min of Education/6.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
  {
    id: 14,
    title: "Joint Secretary, Sagarmala, MoPSW visit 14.09.2023",
    date: "2025-04-05",
    category: "Event",
    cover: "/assets/images/gallery/JS MEET/1.jpg",
    photos: [
      {
        id: 1401,
        src: "/assets/images/gallery/JS MEET/1.jpg",
        caption: "Flag hoisting ceremony at NTCPWC",
      },
      {
        id: 1402,
        src: "/assets/images/gallery/JS MEET/2.jpg",
        caption: "Cultural programme by staff",
      },
      {
        id: 1403,
        src: "/assets/images/gallery/JS MEET/3.jpg",
        caption: "Felicitation of long-serving employees",
      },
      {
        id: 1404,
        src: "/assets/images/gallery/JS MEET/4.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1405,
        src: "/assets/images/gallery/JS MEET/5.jpg",
        caption: "Group photograph on National Maritime Day",
      },
      {
        id: 1406,
        src: "/assets/images/gallery/JS MEET/6.jpg",
        caption: "Group photograph on National Maritime Day",
      },

    ],
  },
];

const CATEGORIES = ["All", "Inauguration", "Visit", "Event"];
const YEARS = ["All", "2026", "2025", "2024"];

/* colour per category */
const catColor = {
  Inauguration: "#e8f0fe",
  "Open House": "#fce8e6",
  Visit: "#e6f4ea",
  Award: "#fef7e0",
  Launch: "#f3e8fd",
  Event: "#e8f4fd",
};
const catText = {
  Inauguration: "#1a3762",
  "Open House": "#8b1a1a",
  Visit: "#1e6b3c",
  Award: "#7d5c00",
  Launch: "#5b189b",
  Event: "#0a5a8a",
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* Placeholder SVG for missing images */
const placeholderGradients = [
  ["#c9d9f0", "#a8c4e8"],
  ["#b8d4f0", "#8fbce0"],
  ["#d4e8f4", "#a8d0ea"],
  ["#c4d8ec", "#98c0e0"],
  ["#dce8f4", "#b4cce4"],
  ["#cce0f0", "#a0cae4"],
];

function PhotoPlaceholder({ index, caption }) {
  const [a, b] = placeholderGradients[index % placeholderGradients.length];
  return (
    <div
      className="gal-photo-placeholder"
      style={{ background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)` }}
    >
      <svg
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="36"
      >
        <rect width="80" height="60" rx="4" fill="rgba(26,55,98,0.06)" />
        <path
          d="M10 48 L28 28 L40 40 L55 22 L72 48 Z"
          fill="rgba(26,55,98,0.12)"
        />
        <circle cx="60" cy="18" r="7" fill="rgba(26,55,98,0.1)" />
      </svg>
      {caption && (
        <span className="gal-photo-placeholder__caption">{caption}</span>
      )}
    </div>
  );
}

/* ── LIGHTBOX ── */
function Lightbox({ event, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const photos = event.photos;

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    [photos.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  const photo = photos[current];

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="lightbox__header">
          <div>
            <p className="lightbox__event-title">{event.title}</p>
            <p className="lightbox__counter">
              {current + 1} / {photos.length}
            </p>
          </div>
          <button
            className="lightbox__close"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* IMAGE */}
        <div className="lightbox__stage">
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={prev}
            aria-label="Previous"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="20"
              height="20"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="lightbox__img-wrap">
            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.caption}
                className="lightbox__img"
              />
            ) : (
              <PhotoPlaceholder index={current} caption="" />
            )}
          </div>

          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={next}
            aria-label="Next"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="20"
              height="20"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* CAPTION */}
        {photo.caption && (
          <div className="lightbox__caption">{photo.caption}</div>
        )}

        {/* THUMBNAILS */}
        <div className="lightbox__thumbs">
          {photos.map((p, i) => (
            <button
              key={p.id}
              className={`lightbox__thumb ${i === current ? "lightbox__thumb--active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              {p.src ? (
                <img src={p.src} alt={`Photo ${i + 1}`} />
              ) : (
                <PhotoPlaceholder index={i} caption="" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── EVENT CARD ── */
function EventCard({ event, onOpen }) {
  const [hovered, setHovered] = useState(false);
  const bg = catColor[event.category] || "#e8f0fe";
  const text = catText[event.category] || "#1a3762";

  return (
    <div
      className={`gal-card ${hovered ? "gal-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* COVER */}
      <div className="gal-card__cover" onClick={() => onOpen(event, 0)}>
        {event.cover ? (
          <img
            src={event.cover}
            alt={event.title}
            className="gal-card__cover-img"
          />
        ) : (
          <PhotoPlaceholder index={event.id} caption="" />
        )}
        <div className="gal-card__overlay">
          <span className="gal-card__view-btn">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            View all {event.photos.length} photos
          </span>
        </div>
      </div>

      {/* PHOTO STRIP */}
      <div className="gal-card__strip">
        {event.photos.slice(0, 4).map((p, i) => (
          <button
            key={p.id}
            className="gal-card__thumb"
            onClick={() => onOpen(event, i)}
          >
            {p.src ? (
              <img src={p.src} alt={`Photo ${i + 1}`} />
            ) : (
              <PhotoPlaceholder index={i} caption="" />
            )}
            {i === 3 && event.photos.length > 4 && (
              <div className="gal-card__more-overlay">
                +{event.photos.length - 4}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* INFO */}
      <div className="gal-card__info">
        <div className="gal-card__meta">
          <span
            className="gal-card__tag"
            style={{ background: bg, color: text }}
          >
            {event.category}
          </span>
          <span className="gal-card__date">
            <svg viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
              <path d="M5 .5a.5.5 0 01.5.5v1h5V1a.5.5 0 011 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h1V1A.5.5 0 015 .5zM3 4a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
            </svg>
            {formatDate(event.date)}
          </span>
          <span className="gal-card__count">
            <svg viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
              <path d="M4.502 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              <path d="M14.002 13a2 2 0 01-2 2h-10a2 2 0 01-2-2V5A2 2 0 012 3a2 2 0 012-2h6c.98 0 1.692.355 2.224.99l3.647 4.322A2 2 0 0114 7.8v5.2zm-2 1a1 1 0 001-1V8h-2a2 2 0 01-2-2V3.5l-.026-.02-.966 3.783a.5.5 0 01-.574.343l-3.467-.87.026.02L4.5 10.5l1.47.735a.5.5 0 01.286.52l-.377 3.748 2.433-1.419a.5.5 0 01.574.044l2.501 2.5.125-.648A1 1 0 0112 13z" />
            </svg>
            {event.photos.length} photos
          </span>
        </div>
        <h3 className="gal-card__title">{event.title}</h3>
      </div>
    </div>
  );
}

/* ── MARITIME ANIMATED CANVAS ── */
function GalleryHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId,
      W,
      H,
      t = 0;

    /* ── ship state ── */
    const ship = { x: -120, y: 0, speed: 0.4 };

    /* ── buoys / nav markers ── */
    const buoys = [];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      ship.y = H * 0.62;
      buoys.length = 0;
      for (let i = 0; i < 5; i++) {
        buoys.push({
          x: (W / 5) * i + W / 10,
          baseY: H * 0.58 + Math.random() * 30,
          phase: Math.random() * Math.PI * 2,
          size: 4 + Math.random() * 3,
        });
      }
    }

    /* draw a simple ship silhouette */
    function drawShip(x, y) {
      ctx.save();
      ctx.translate(x, y);
      const a = 0.28;
      const c = `rgba(93,160,203,${a})`;
      const cd = `rgba(70,120,170,${a})`;

      // ── HULL — pointed bow on RIGHT, stern on LEFT ──
      ctx.beginPath();
      ctx.moveTo(-95, 2);
      ctx.lineTo(-95, 16);
      ctx.lineTo(75, 16);
      ctx.lineTo(90, 8);
      ctx.lineTo(90, 2);
      ctx.closePath();
      ctx.fillStyle = cd;
      ctx.fill();

      // hull waterline stripe
      ctx.fillStyle = `rgba(93,160,203,${a * 0.5})`;
      ctx.fillRect(-95, 2, 185, 4);

      // ── SUPERSTRUCTURE — at the BACK (left/stern) ──
      ctx.fillStyle = c;
      ctx.fillRect(-88, -24, 30, 26);
      // bridge windows
      ctx.fillStyle = `rgba(180,220,255,${a * 1.3})`;
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(-85 + i * 9, -18, 6, 5);
      }
      // bridge top deck
      ctx.fillStyle = cd;
      ctx.fillRect(-86, -30, 26, 7);

      // ── MAST — on bridge ──
      ctx.beginPath();
      ctx.moveTo(-75, -30);
      ctx.lineTo(-75, -54);
      ctx.strokeStyle = `rgba(93,160,203,${a * 1.2})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // antenna arm
      ctx.beginPath();
      ctx.moveTo(-75, -54);
      ctx.lineTo(-63, -50);
      ctx.strokeStyle = `rgba(93,160,203,${a * 0.7})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── INDIAN FLAG — on mast top ──

      // ── CONTAINERS — middle to front (right side) ──
      const containerColors = [
        `rgba(93,160,203,${a})`,
        `rgba(70,140,190,${a * 1.1})`,
        `rgba(50,110,160,${a * 0.9})`,
      ];
      const stacks = [
        { x: -42, w: 38 },
        { x: 3, w: 38 },
        { x: 48, w: 38 },
      ];
      stacks.forEach((s, si) => {
        for (let row = 0; row < 2; row++) {
          for (let col = 0; col < 2; col++) {
            const cx2 = s.x + col * 19;
            const cy2 = -6 - row * 11;
            ctx.fillStyle = containerColors[(si + row + col) % 3];
            ctx.fillRect(cx2, cy2, 18, 10);
            ctx.strokeStyle = `rgba(20,60,100,${a * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(cx2, cy2, 18, 10);
          }
        }
      });

      // ── CRANE — mid ship ──
      ctx.beginPath();
      ctx.moveTo(-10, 2);
      ctx.lineTo(-10, -28);
      ctx.lineTo(10, -28);
      ctx.strokeStyle = `rgba(93,160,203,${a * 0.7})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // ── WAKE — behind stern (RIGHT side since ship moves right) ──
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-95 - i * 14, i * 2.5);
        ctx.lineTo(-95 - i * 14, i * 2.5 + 7);
        ctx.strokeStyle = `rgba(93,160,203,${a * (1 - i * 0.2)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    }

    /* draw wave layer */
    function drawWaves(offset, alpha, amplitude, yBase, freq) {
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 4) {
        const y =
          yBase +
          Math.sin(x * freq + offset) * amplitude +
          Math.sin(x * freq * 0.5 + offset * 0.7) * amplitude * 0.5;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H);
      ctx.lineTo(0, H);
      ctx.closePath();
      ctx.fillStyle = `rgba(93,160,203,${alpha})`;
      ctx.fill();
    }

    /* draw buoy */
    function drawBuoy(bx, by, size) {
      ctx.beginPath();
      ctx.arc(bx, by, size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(246,183,85,0.45)";
      ctx.fill();
      // pole
      ctx.beginPath();
      ctx.moveTo(bx, by - size);
      ctx.lineTo(bx, by - size - 10);
      ctx.strokeStyle = "rgba(246,183,85,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // light pulse
      ctx.beginPath();
      ctx.arc(bx, by - size - 10, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246,183,85,${0.3 + Math.sin(t * 0.06) * 0.3})`;
      ctx.fill();
    }

    /* draw radar sweep circle */
    function drawRadar() {
      const cx = W * 0.88,
        cy = H * 0.25,
        r = 38;
      // outer ring
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(93,160,203,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
      // inner rings
      [0.6, 0.3].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * f, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(93,160,203,0.08)";
        ctx.stroke();
      });
      // crosshairs
      ctx.strokeStyle = "rgba(93,160,203,0.1)";
      ctx.beginPath();
      ctx.moveTo(cx - r, cy);
      ctx.lineTo(cx + r, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx, cy + r);
      ctx.stroke();
      // sweep
      const angle = (t * 0.025) % (Math.PI * 2);
      const grad = ctx.createConicalGradient ? null : null;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, 0, Math.PI * 0.4);
      ctx.closePath();
      ctx.fillStyle = "rgba(93,160,203,0.12)";
      ctx.fill();
      // sweep line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r, 0);
      ctx.strokeStyle = "rgba(93,160,203,0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
      // blip dot
      ctx.beginPath();
      ctx.arc(cx + 14, cy - 10, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(93,160,203,${0.4 + Math.sin(t * 0.08) * 0.4})`;
      ctx.fill();
    }

    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);

      // back wave
      drawWaves(t * 0.012, 0.06, 18, H * 0.72, 0.008);
      // mid wave
      drawWaves(t * 0.018 + 1, 0.08, 13, H * 0.68, 0.011);
      // front wave
      drawWaves(t * 0.022 + 2, 0.1, 9, H * 0.65, 0.014);

      // buoys bob on waves
      for (const b of buoys) {
        const by = b.baseY + Math.sin(t * 0.022 + b.phase) * 5;
        drawBuoy(b.x, by, b.size);
      }

      // ship sails left to right
      ship.x += ship.speed;
      if (ship.x > W + 140) ship.x = -140;
      const shipBob = Math.sin(t * 0.02) * 3;
      drawShip(ship.x, ship.y + shipBob);

      // radar in top-right
      drawRadar();

      // horizon line
      ctx.beginPath();
      ctx.moveTo(0, H * 0.63);
      ctx.lineTo(W, H * 0.63);
      ctx.strokeStyle = "rgba(93,160,203,0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="gal-hero__canvas" />;
}

/* ── MAIN PAGE ── */
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState(null); // { event, index }
  const [view, setView] = useState("grid"); // 'grid' | 'list'

  const filtered = events.filter((e) => {
    const matchCat = activeCategory === "All" || e.category === activeCategory;
    const matchYear = activeYear === "All" || e.date.startsWith(activeYear);
    const matchSearch =
      search === "" || e.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchYear && matchSearch;
  });

  const totalPhotos = filtered.reduce((sum, e) => sum + e.photos.length, 0);

  return (
    <div className="gal-page">
      {/* ── HERO ── */}
      <section className="gal-hero">
        {/* Live animated canvas background */}
        <GalleryHeroCanvas />
        <div className="gal-hero__inner">
          <div className="gal-hero__left">
            <p className="gal-hero__eyebrow">Visual Archive</p>
            <h1 className="gal-hero__heading">Gallery</h1>
          </div>
          <div className="gal-hero__right">
            <p className="gal-hero__sub">
              Events, inaugurations, visits and milestones — captured from
              NTCPWC's journey in maritime innovation.
            </p>
            <p className="gal-hero__count">
              {events.length} events ·{" "}
              {events.reduce((s, e) => s + e.photos.length, 0)} photographs
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="gal-filterbar">
        <div className="gal-filterbar__inner">
          {/* CATEGORY TABS */}
          <div className="gal-tabs">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`gal-tab ${activeCategory === c ? "gal-tab--active" : ""}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
                <span className="gal-tab__n">
                  {c === "All"
                    ? events.length
                    : events.filter((e) => e.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <div className="gal-filterbar__right">
            {/* YEAR */}
            <div className="gal-years">
              {YEARS.map((y) => (
                <button
                  key={y}
                  className={`gal-year ${activeYear === y ? "gal-year--active" : ""}`}
                  onClick={() => setActiveYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="gal-search">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                width="14"
                height="14"
                className="gal-search__icon"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search events…"
                className="gal-search__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="gal-search__clear"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>

            {/* VIEW TOGGLE */}
            <div className="gal-view-toggle">
              <button
                className={`gal-view-btn ${view === "grid" ? "gal-view-btn--active" : ""}`}
                onClick={() => setView("grid")}
                aria-label="Grid view"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  width="14"
                  height="14"
                >
                  <path d="M1 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zM1 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V7zM1 12a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2zm5 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z" />
                </svg>
              </button>
              <button
                className={`gal-view-btn ${view === "list" ? "gal-view-btn--active" : ""}`}
                onClick={() => setView("list")}
                aria-label="List view"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  width="14"
                  height="14"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS INFO ── */}
      <div className="gal-results-bar">
        <div className="gal-results-inner">
          <p className="gal-results-text">
            Showing <strong>{filtered.length}</strong> events ·{" "}
            <strong>{totalPhotos}</strong> photos
            {activeCategory !== "All" && ` · ${activeCategory}`}
            {activeYear !== "All" && ` · ${activeYear}`}
          </p>
          {(activeCategory !== "All" || activeYear !== "All" || search) && (
            <button
              className="gal-clear"
              onClick={() => {
                setActiveCategory("All");
                setActiveYear("All");
                setSearch("");
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="gal-content">
        <div className="gal-content-inner">
          {filtered.length === 0 ? (
            <div className="gal-empty">
              <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#d1d5db"
                  strokeWidth="2"
                />
                <path
                  d="M16 24h16"
                  stroke="#d1d5db"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p>No events found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div
              className={`gal-grid ${view === "list" ? "gal-grid--list" : ""}`}
            >
              {filtered.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onOpen={(ev, idx) => setLightbox({ event: ev, index: idx })}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <Lightbox
          event={lightbox.event}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
