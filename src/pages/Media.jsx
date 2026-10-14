import { useState, useMemo, useEffect, useRef } from 'react';
import './Media.css';

/* ── SAMPLE DATA — replace with real articles ── */
const articles = [
  {
    id: 1,
    category: 'Press Coverage',
    source: 'The Hindu',
    sourceLogo: null,
    date: '2025-09-12',
    title: 'Secretary, MoPSW Reviews performance,Inaugurates Projects at Chennai Port Authority',
    excerpt: 'NTCPWC has developed a fully indigenous VTS system now deployed across three major Indian ports, reducing vessel wait times by up to 40%.',
    image: '/assets/images/PressRelease/MoPSW.jpg',
    featured: true,
    href: '/assets/pdf/Press Release/Press Release_Press Information Bureau.pdf',
  },
  {
    id: 2,
    category: 'Press Release',
    source: 'NTCPWC',
    sourceLogo: null,
    date: '2025-11-26',
    title: 'IIT-Madras develops and deploys India’s first indigenous Vessel Traffic Management System for ports',
    excerpt: 'The Sagarmanthan platform integrates real-time hydrographic data, vessel scheduling and berth management in a single unified interface.',
    image: '/assets/images/PressRelease/vesselTrafficManagement.png',
    featured: false,
    href: 'https://www.thehindubusinessline.com/economy/logistics/iit-madras-develops-and-deploys-indias-first-indigenous-vessel-traffic-management-system-for-ports/article70325756.ece',
  },
  {
    id: 3,
    category: 'Press Coverage',
    source: 'Times of India',
    sourceLogo: null,
    date: '2025-11-27',
    title: 'IIT-M develops, deploys indigenous vessel traffic management system',
    excerpt: 'The world-class simulator facility replicates real port conditions with centimetre-level accuracy, training over 200 pilots annually.',
    image: '/assets/images/PressRelease/vesselTrafficManagement1.png',
    featured: false,
    href: 'https://www.newindianexpress.com/amp/story/states/tamil-nadu/2025/Nov/27/iit-m-develops-deploys-indigenous-vessel-traffic-management-system',
  },
  {
    id: 4,
    category: 'Award',
    source: 'Ministry of Ports',
    sourceLogo: null,
    date: '2025-11-27',
    title: 'IIT-M develops and deploys vessel management system for ports',
    excerpt: 'Recognised at the National Maritime Day ceremony for outstanding contribution to smart port infrastructure and indigenous technology.',
    image: '/assets/images/PressRelease/vesselTrafficManagement2.png',
    featured: false,
    href: 'https://www.thehindu.com/news/national/tamil-nadu/iit-m-develops-and-deploys-vessel-management-system-for-ports/article70327230.ece/amp/',
  },
  {
    id: 5,
    category: 'Press Coverage',
    source: 'Doordarshan',
    sourceLogo: null,
    date: '2024-12-18',
    title: 'Mormugao Port Authority Hosts Grand ‘Roadshow’ Event Ahead of ‘India Maritime Week 2025',
    excerpt: 'A 12-minute prime-time feature covering the wave basin, digital twin research, and the Keel Clearance system deployed at Paradip Port.',
    image: '/assets/images/PressRelease/roadShow.jpg',
    featured: false,
    href: '/assets/pdf/Press Release/Press Release_Press Information Bureau.pdf',
  },
  {
    id: 6,
    category: 'Press Coverage',
    source: 'Economic Times',
    sourceLogo: null,
    date: '2025-08-12',
    title: 'Fast-track funds for ferry service to Lanka',
    excerpt: 'NTCPWC\'s decade of research into autonomous harbour systems and hydrodynamic modelling is now influencing national port policy.',
    image: '/assets/images/PressRelease/fastTrackFunds.png',
    featured: false,
    href: 'https://www.newindianexpress.com/states/tamil-nadu/2025/Aug/12/fast-track-funds-for-ferry-service-to-lanka-minister-ev-velu',
  },
  {
    id: 7,
    category: 'Press Release',
    source: 'NTCPWC',
    sourceLogo: null,
    date: '2025-10-25',
    title: 'MoPSW Launches MAR-a-THON 2025 at IIT Madras to Foster Maritime Innovation',
    excerpt: 'The agreement covers joint development of an AI-assisted smart docking system aimed at eliminating manual berthing errors.',
    image: '/assets/images/PressRelease/marathon.jpg',
    featured: false,
    href: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2160758&reg=3&lang=2',
  },
  {
    id: 8,
    category: 'Press Coverage',
    source: 'Mint',
    sourceLogo: null,
    date: '2025-07-21',
    title: 'CSL Hosts First Edition of USHUS SANGAMAM Showcasing Startup Innovations',
    excerpt: 'The centre\'s 3D-VTMS and digital twin platform is being evaluated for adoption at six major ports under Sagarmala.',
    image: '/assets/images/PressRelease/ushusSangam.png',
    featured: false,
    href: '/assets/pdf/Press Release/Press Release_ CSL NTCPWC IITM- July 21,2025-2.pdf',
  },
  {
    id: 9,
    category: 'Award',
    source: 'IIT Madras',
    sourceLogo: null,
    date: '2025-03-5',
    title: 'Kolkata Port launches night navigation on River Hooghly,significant increase in trade expected',
    excerpt: 'The JIT Vessel Arrival system was recognised as the most impactful port efficiency innovation among 120 competing entries.',
    image: '/assets/images/PressRelease/nightNavigation.png',
    featured: false,
    href: '/assets/pdf/Press Release/8. Kolkata Port launches night navigation on River Hooghly, significant increase in trade expected _ Kolkata News - The Indian Express.pdf',
  },
  {
    id: 10,
    category: 'Press Coverage',
    source: 'NDTV',
    sourceLogo: null,
    date: '2025-01-07',
    title: 'Vizhinjam port to use radar-based technology & AI',
    excerpt: 'Reporter Priya Menon gets exclusive access to the wave basin and ship simulator — facilities that benchmark with global leaders.',
    image: '/assets/images/PressRelease/radarBasedAI.png',
    featured: false,
    href: '/assets/pdf/Press Release/7. Vizhinjam Port_ Vizhinjam Port Implements AI and Radar Technology for Efficient Container Management _ Thiruvananthapuram News - Times of India.pdf',
  },
  {
    id: 11,
    category: 'Press Coverage',
    source: 'Business Standard',
    sourceLogo: null,
    date: '2025-01-7',
    title: 'IWAI takes key decisions for advancing Inland Water Transport in its 197th Board Meeting',
    excerpt: 'Deployed at three ports, the under-keel clearance management system has prevented grounding incidents and improved cargo throughput.',
    image: '/assets/images/PressRelease/inlandWaterTransport.png',
    featured: false,
    href: '/assets/pdf/Press Release/10. Press Release_Press Information Bureau_IWT borad meeting.pdf',
  },
];

const CATEGORIES = ['All', 'Press Coverage', 'Press Release', 'Video', 'Award'];
const YEARS = ['All', '2025', '2024', '2023'];

const categoryColors = {
  'Press Coverage': { bg: '#e8f0fe', text: '#1a3762' },
  'Press Release':  { bg: '#e6f4ea', text: '#1e6b3c' },
  'Video':          { bg: '#fce8e6', text: '#8b1a1a' },
  'Award':          { bg: '#fef7e0', text: '#7d5c00' },
};


/* ── MARITIME ANIMATED CANVAS ── */
function MediaHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, W, H, t = 0;
    const ship = { x: -120, y: 0, speed: 0.4 };
    const buoys = [];

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
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
      ctx.fillStyle = cd; ctx.fill();

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
      ctx.moveTo(-75, -30); ctx.lineTo(-75, -54);
      ctx.strokeStyle = `rgba(93,160,203,${a * 1.2})`;
      ctx.lineWidth = 1.5; ctx.stroke();
      // antenna arm
      ctx.beginPath();
      ctx.moveTo(-75, -54); ctx.lineTo(-63, -50);
      ctx.strokeStyle = `rgba(93,160,203,${a * 0.7})`;
      ctx.lineWidth = 1; ctx.stroke();

      // ── INDIAN FLAG — on mast top ──

      // ── CONTAINERS — middle to front (right side) ──
      const containerColors = [
        `rgba(93,160,203,${a})`,
        `rgba(70,140,190,${a * 1.1})`,
        `rgba(50,110,160,${a * 0.9})`,
      ];
      const stacks = [
        { x: -42, w: 38 },
        { x:   3, w: 38 },
        { x:  48, w: 38 },
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
      ctx.moveTo(-10, 2); ctx.lineTo(-10, -28); ctx.lineTo(10, -28);
      ctx.strokeStyle = `rgba(93,160,203,${a * 0.7})`;
      ctx.lineWidth = 1.2; ctx.stroke();

      // ── WAKE — behind stern (RIGHT side since ship moves right) ──
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(-95 - i * 14, i * 2.5);
        ctx.lineTo(-95 - i * 14, i * 2.5 + 7);
        ctx.strokeStyle = `rgba(93,160,203,${a * (1 - i * 0.2)})`;
        ctx.lineWidth = 1; ctx.stroke();
      }

      ctx.restore();
    }

    function drawWaves(offset, alpha, amplitude, yBase, freq) {
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 4) {
        const y = yBase
          + Math.sin((x * freq) + offset) * amplitude
          + Math.sin((x * freq * 0.5) + offset * 0.7) * amplitude * 0.5;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      ctx.fillStyle = `rgba(93,160,203,${alpha})`;
      ctx.fill();
    }

    function drawBuoy(bx, by, size) {
      ctx.beginPath();
      ctx.arc(bx, by, size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(246,183,85,0.45)'; ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx, by - size); ctx.lineTo(bx, by - size - 10);
      ctx.strokeStyle = 'rgba(246,183,85,0.35)';
      ctx.lineWidth = 1.5; ctx.stroke();
      ctx.beginPath();
      ctx.arc(bx, by - size - 10, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246,183,85,${0.3 + Math.sin(t * 0.06) * 0.3})`;
      ctx.fill();
    }

    function drawRadar() {
      const cx = W * 0.88, cy = H * 0.28, r = 38;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(93,160,203,0.12)'; ctx.lineWidth = 1; ctx.stroke();
      [0.6, 0.3].forEach(f => {
        ctx.beginPath(); ctx.arc(cx, cy, r * f, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(93,160,203,0.08)'; ctx.stroke();
      });
      ctx.strokeStyle = 'rgba(93,160,203,0.1)';
      ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();
      const angle = (t * 0.025) % (Math.PI * 2);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(angle);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, r, 0, Math.PI * 0.4); ctx.closePath();
      ctx.fillStyle = 'rgba(93,160,203,0.12)'; ctx.fill();
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(r, 0);
      ctx.strokeStyle = 'rgba(93,160,203,0.5)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.restore();
      ctx.beginPath(); ctx.arc(cx + 14, cy - 10, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(93,160,203,${0.4 + Math.sin(t * 0.08) * 0.4})`; ctx.fill();
    }

    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);
      drawWaves(t * 0.012, 0.06, 18, H * 0.72, 0.008);
      drawWaves(t * 0.018 + 1, 0.08, 13, H * 0.68, 0.011);
      drawWaves(t * 0.022 + 2, 0.1, 9, H * 0.65, 0.014);
      for (const b of buoys) {
        const by = b.baseY + Math.sin(t * 0.022 + b.phase) * 5;
        drawBuoy(b.x, by, b.size);
      }
      ship.x += ship.speed;
      if (ship.x > W + 140) ship.x = -140;
      const shipBob = Math.sin(t * 0.02) * 3;
      drawShip(ship.x, ship.y + shipBob);
      drawRadar();
      ctx.beginPath();
      ctx.moveTo(0, H * 0.63); ctx.lineTo(W, H * 0.63);
      ctx.strokeStyle = 'rgba(93,160,203,0.08)'; ctx.lineWidth = 1; ctx.stroke();
      animId = requestAnimationFrame(draw);
    }

    resize(); draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="media-hero__canvas" />;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function ArticleCard({ article, large }) {
  const tag = categoryColors[article.category];
  return (
    <a href={article.href} className={`media-card ${large ? 'media-card--large' : ''}`} target="_blank" rel="noopener noreferrer">
      {/* IMAGE / PLACEHOLDER */}
      <div className="media-card__img">
        {article.image
          ? <img src={article.image} alt={article.title} />
          : (
            <div className="media-card__img-placeholder">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <path d="M8 40L18 26l7 9 10-13 13 18H8z" fill="rgba(26,55,98,0.12)"/>
                <circle cx="34" cy="16" r="5" fill="rgba(26,55,98,0.1)"/>
              </svg>
            </div>
          )
        }
        {article.category === 'Video' && (
          <div className="media-card__play">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="media-card__body">
        <div className="media-card__meta">
          <span className="media-card__tag" style={{ background: tag.bg, color: tag.text }}>
            {article.category}
          </span>
          <span className="media-card__source">{article.source}</span>
          <span className="media-card__dot">·</span>
          <span className="media-card__date">{formatDate(article.date)}</span>
        </div>
        <h3 className="media-card__title">{article.title}</h3>
        {large && <p className="media-card__excerpt">{article.excerpt}</p>}
        <div className="media-card__read">
          Read {article.category === 'Video' ? 'coverage' : 'article'}
          <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
            <path fillRule="evenodd" d="M3.75 8a.75.75 0 01.75-.75h5.19L7.47 5.03a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06-1.06l2.22-2.22H4.5A.75.75 0 013.75 8z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Media() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeYear, setActiveYear]         = useState('All');
  const [search, setSearch]                 = useState('');

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat  = activeCategory === 'All' || a.category === activeCategory;
      const matchYear = activeYear === 'All' || a.date.startsWith(activeYear);
      const matchSearch = search === '' ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.source.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchYear && matchSearch;
    });
  }, [activeCategory, activeYear, search]);

  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <div className="media-page">

      {/* ── HERO ── */}
      <section className="media-hero">
        <MediaHeroCanvas />
        <div className="media-hero__inner">
          <div className="media-hero__left">
            <p className="media-hero__eyebrow">Media Centre</p>
            <h1 className="media-hero__heading">Media</h1>
          </div>
          <div className="media-hero__right">
            <p className="media-hero__sub">Press coverage, official releases, video features and recognitions from across India's maritime sector.</p>
            <p className="media-hero__count">{articles.length} articles · {articles.filter(a => a.category === 'Video').length} videos</p>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="media-filters-wrap">
        <div className="media-filters">

          {/* CATEGORY TABS */}
          <div className="media-tabs">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`media-tab ${activeCategory === c ? 'media-tab--active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
                <span className="media-tab__count">
                  {c === 'All' ? articles.length : articles.filter(a => a.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <div className="media-filters__right">
            {/* YEAR FILTER */}
            <div className="media-year-group">
              {YEARS.map((y) => (
                <button
                  key={y}
                  className={`media-year-btn ${activeYear === y ? 'media-year-btn--active' : ''}`}
                  onClick={() => setActiveYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* SEARCH */}
            <div className="media-search">
              <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15" className="media-search__icon">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles…"
                className="media-search__input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="media-search__clear" onClick={() => setSearch('')}>×</button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── RESULTS COUNT ── */}
      <div className="media-results-bar">
        <div className="media-results-inner">
          <span className="media-results-count">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {activeYear !== 'All' && ` · ${activeYear}`}
            {search && ` for "${search}"`}
          </span>
          {(activeCategory !== 'All' || activeYear !== 'All' || search) && (
            <button className="media-clear-all" onClick={() => { setActiveCategory('All'); setActiveYear('All'); setSearch(''); }}>
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* ── CONTENT GRID ── */}
      <section className="media-content">
        <div className="media-content-inner">

          {filtered.length === 0 ? (
            <div className="media-empty">
              <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                <circle cx="24" cy="24" r="20" stroke="#d1d5db" strokeWidth="2"/>
                <path d="M16 24h16M24 16v16" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p>No articles found. Try adjusting your filters.</p>
            </div>
          ) : (
            <>
              {/* FEATURED CARD */}
              {featured && activeCategory === 'All' && activeYear === 'All' && !search && (
                <div className="media-featured">
                  <ArticleCard article={featured} large />
                </div>
              )}

              {/* GRID */}
              <div className="media-grid">
                {(featured && activeCategory === 'All' && activeYear === 'All' && !search ? rest : filtered).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}

        </div>
      </section>

      {/* ── PRESS CONTACT BANNER ── */}
      <section className="media-contact">
        <div className="media-contact-inner">
          <div>
            <h3 className="media-contact__heading">Press &amp; media enquiries</h3>
            <p className="media-contact__sub">For interviews, press kits, or high-resolution assets — reach our communications team.</p>
          </div>
          <a href="mailto:communications@ntcpwc.iitm.ac.in" className="media-contact__btn">
            Contact Press Team →
          </a>
        </div>
      </section>

    </div>
  );
}