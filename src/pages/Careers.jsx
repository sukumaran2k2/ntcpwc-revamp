import { useState, useEffect, useRef } from 'react';
import './Careers.css';

/* ── DATA ── */
const jobs = [
  {
    id: 1,
    title: 'Shipping Assistant – VTMS Operator',
    dept: 'Research',
    type: 'Full-time',
    location: 'Mumbai Port',
    posted: '2026-03-10',
    desc: 'The Shipping Assistant – VTMS Operator will support vessel movement operations, shipping coordination, and traffic monitoring at the Mumbai Port. The role ensures safe and efficient port operations by managing ship communications, handling basic shipping activities, and assisting in the operation of the Vessel Traffic Management System (VTMS). This position requires strong communication skills, on-site presence, and adherence to maritime safety protocols.',
    skills: ['MATLAB', 'OpenFOAM', 'Coastal Engineering', 'CFD'],
  },
  {
    id: 2,
    title: 'VTMS Operator – Second Mate Officer',
    dept: 'Technology',
    type: 'Full-time',
    location: 'Chennai Port',
    posted: '2026-03-05',
    desc: 'The VTMS Operator – Second Mate Officer will ensure safe and efficient navigation within the port area by monitoring vessel movements and maintaining real-time communication with ships and port authorities. The role involves operating VTMS equipment, analysing vessel traffic data, and facilitating smooth port operations while adhering to maritime safety standards.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'GIS'],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    dept: 'Technology',
    type: 'Fellowship',
    location: 'NTCPWC, IITM, Thayiur Campus',
    posted: '2026-02-28',
    desc: 'We are looking for a versatile and enthusiastic Full Stack Developer to build and maintain scalable web applications across both front-end and back-end layers. The role involves transforming requirements into functional digital solutions, ensuring seamless performance, security, and user experience.',
    skills: ['Python', 'ROS', 'Machine Learning', 'Embedded Systems'],
  },
];

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
        <path d="M20 4L4 14v22h32V14L20 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="14" y="24" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'IIT Madras Campus',
    body: "Work at one of India's premier research institutions with world-class infrastructure and a vibrant academic community.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
        <path d="M8 30L16 18l6 8 6-12 8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: 'Real-World Impact',
    body: 'Your work directly shapes India\'s port infrastructure — deployed at scale across major Indian ports under Sagarmala.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Flexible & Collaborative',
    body: 'A culture that values deep work, cross-disciplinary collaboration and continuous learning in maritime technology.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
        <path d="M10 20h20M20 10l10 10-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Government-Backed Research',
    body: 'Stable, well-funded research under the Ministry of Ports, Shipping and Waterways with long-term project pipelines.',
  },
];

const steps = [
  { n: '01', title: 'Browse openings', body: 'Find a role that matches your skills and interests from our current openings below.' },
  { n: '02', title: 'Prepare your application', body: 'Update your CV and prepare a short cover letter describing your interest in maritime technology.' },
  { n: '03', title: 'Apply via email', body: 'Send your application to careers@ntcpwc.iitm.ac.in with the role title in the subject line.' },
  { n: '04', title: 'Interview & onboarding', body: 'Shortlisted candidates are contacted within 2–3 weeks for a technical interview and campus visit.' },
];

const DEPTS = ['All', 'Research', 'Technology', 'Projects', 'Internship'];
const typeColor = {
  'Full-time':  { bg: '#e8f0fe', text: '#1a3762' },
  'Fellowship': { bg: '#f3e8fd', text: '#5b189b' },
  'Contract':   { bg: '#fef7e0', text: '#7d5c00' },
  'Internship': { bg: '#e6f4ea', text: '#1e6b3c' },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ── MARITIME CANVAS ── */
function CareersCanvas() {
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
        buoys.push({ x: (W/5)*i + W/10, baseY: H*0.58+Math.random()*30, phase: Math.random()*Math.PI*2, size: 4+Math.random()*3 });
      }
    }

    function drawShip(x, y) {
      ctx.save(); ctx.translate(x, y);
      const a = 0.28, c = `rgba(93,160,203,${a})`, cd = `rgba(70,120,170,${a})`;
      ctx.beginPath(); ctx.moveTo(-95,2); ctx.lineTo(-95,16); ctx.lineTo(75,16); ctx.lineTo(90,8); ctx.lineTo(90,2); ctx.closePath();
      ctx.fillStyle = cd; ctx.fill();
      ctx.fillStyle = `rgba(93,160,203,${a*0.5})`; ctx.fillRect(-95,2,185,4);
      ctx.fillStyle = c; ctx.fillRect(-88,-24,30,26);
      ctx.fillStyle = `rgba(180,220,255,${a*1.3})`;
      for(let i=0;i<3;i++) ctx.fillRect(-85+i*9,-18,6,5);
      ctx.fillStyle = cd; ctx.fillRect(-86,-30,26,7);
      ctx.beginPath(); ctx.moveTo(-75,-30); ctx.lineTo(-75,-54);
      ctx.strokeStyle=`rgba(93,160,203,${a*1.2})`; ctx.lineWidth=1.5; ctx.stroke();
      const cc=[`rgba(93,160,203,${a})`,`rgba(70,140,190,${a*1.1})`,`rgba(50,110,160,${a*0.9})`];
      [{x:-42},{x:3},{x:48}].forEach((s,si)=>{
        for(let row=0;row<2;row++)for(let col=0;col<2;col++){
          ctx.fillStyle=cc[(si+row+col)%3]; ctx.fillRect(s.x+col*19,-6-row*11,18,10);
          ctx.strokeStyle=`rgba(20,60,100,${a*0.5})`; ctx.lineWidth=0.5; ctx.strokeRect(s.x+col*19,-6-row*11,18,10);
        }
      });
      for(let i=1;i<=4;i++){ctx.beginPath();ctx.moveTo(-95-i*14,i*2.5);ctx.lineTo(-95-i*14,i*2.5+7);ctx.strokeStyle=`rgba(93,160,203,${a*(1-i*0.2)})`;ctx.lineWidth=1;ctx.stroke();}
      ctx.restore();
    }

    function drawWaves(offset,alpha,amplitude,yBase,freq){
      ctx.beginPath(); ctx.moveTo(0,H);
      for(let x=0;x<=W;x+=4){const y=yBase+Math.sin((x*freq)+offset)*amplitude+Math.sin((x*freq*0.5)+offset*0.7)*amplitude*0.5; x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
      ctx.lineTo(W,H); ctx.lineTo(0,H); ctx.closePath();
      ctx.fillStyle=`rgba(93,160,203,${alpha})`; ctx.fill();
    }

    function drawBuoy(bx,by,size){
      ctx.beginPath(); ctx.arc(bx,by,size,0,Math.PI*2); ctx.fillStyle='rgba(246,183,85,0.45)'; ctx.fill();
      ctx.beginPath(); ctx.moveTo(bx,by-size); ctx.lineTo(bx,by-size-10); ctx.strokeStyle='rgba(246,183,85,0.35)'; ctx.lineWidth=1.5; ctx.stroke();
      ctx.beginPath(); ctx.arc(bx,by-size-10,2.5,0,Math.PI*2); ctx.fillStyle=`rgba(246,183,85,${0.3+Math.sin(t*0.06)*0.3})`; ctx.fill();
    }

    function drawRadar(){
      const cx=W*0.88,cy=H*0.28,r=38;
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.strokeStyle='rgba(93,160,203,0.12)'; ctx.lineWidth=1; ctx.stroke();
      [0.6,0.3].forEach(f=>{ctx.beginPath();ctx.arc(cx,cy,r*f,0,Math.PI*2);ctx.strokeStyle='rgba(93,160,203,0.08)';ctx.stroke();});
      ctx.strokeStyle='rgba(93,160,203,0.1)';
      ctx.beginPath();ctx.moveTo(cx-r,cy);ctx.lineTo(cx+r,cy);ctx.stroke();
      ctx.beginPath();ctx.moveTo(cx,cy-r);ctx.lineTo(cx,cy+r);ctx.stroke();
      const angle=(t*0.025)%(Math.PI*2);
      ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);
      ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,r,0,Math.PI*0.4);ctx.closePath();ctx.fillStyle='rgba(93,160,203,0.12)';ctx.fill();
      ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(r,0);ctx.strokeStyle='rgba(93,160,203,0.5)';ctx.lineWidth=1.5;ctx.stroke();
      ctx.restore();
      ctx.beginPath();ctx.arc(cx+14,cy-10,2,0,Math.PI*2);ctx.fillStyle=`rgba(93,160,203,${0.4+Math.sin(t*0.08)*0.4})`;ctx.fill();
    }

    function draw(){
      t++; ctx.clearRect(0,0,W,H);
      drawWaves(t*0.012,0.06,18,H*0.72,0.008);
      drawWaves(t*0.018+1,0.08,13,H*0.68,0.011);
      drawWaves(t*0.022+2,0.1,9,H*0.65,0.014);
      for(const b of buoys){const by=b.baseY+Math.sin(t*0.022+b.phase)*5;drawBuoy(b.x,by,b.size);}
      ship.x+=ship.speed; if(ship.x>W+140) ship.x=-140;
      drawShip(ship.x,ship.y+Math.sin(t*0.02)*3);
      drawRadar();
      ctx.beginPath();ctx.moveTo(0,H*0.63);ctx.lineTo(W,H*0.63);ctx.strokeStyle='rgba(93,160,203,0.08)';ctx.lineWidth=1;ctx.stroke();
      animId=requestAnimationFrame(draw);
    }

    resize(); draw();
    const ro=new ResizeObserver(resize); ro.observe(canvas);
    return ()=>{cancelAnimationFrame(animId);ro.disconnect();};
  },[]);

  return <canvas ref={canvasRef} className="careers-canvas" />;
}

/* ── PAGE ── */
export default function Careers() {
  const [activeDept, setActiveDept] = useState('All');
  const [search, setSearch]         = useState('');
  const [expanded, setExpanded]     = useState(null);
  const filtered = jobs.filter(j => {
    const matchDept   = activeDept === 'All' || j.dept === activeDept;
    const matchSearch = search === '' || j.title.toLowerCase().includes(search.toLowerCase()) || j.dept.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <div className="careers-page">

      {/* ── HERO ── */}
      <section className="careers-hero">
        <CareersCanvas />
        <div className="careers-hero__inner">
          <div className="careers-hero__left">
            <p className="careers-eyebrow">Careers</p>
            <h1 className="careers-hero__h">Join NTCPWC</h1>
          </div>
          <div className="careers-hero__right">
            <p className="careers-hero__sub">Build the technology that powers India's ports, waterways and coasts — from IIT Madras.</p>
            <p className="careers-hero__count">{jobs.filter(j=>j.type!=='Internship').length} open positions · {jobs.filter(j=>j.type==='Internship').length} internships</p>
          </div>
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section className="careers-jobs">
        <div className="careers-jobs__inner">
          <div className="careers-jobs__header">
            <p className="c-eyebrow">Open Positions</p>
            <h2 className="c-heading">Current openings.</h2>
          </div>

          <div className="jobs-wrap">
          {/* FILTERS */}
          <div className="careers-filters">
            <div className="careers-tabs">
              {DEPTS.map(d => (
                <button
                  key={d}
                  className={`careers-tab ${activeDept === d ? 'careers-tab--on' : ''}`}
                  onClick={() => setActiveDept(d)}
                >
                  {d}
                  <span className="careers-tab__n">
                    {d === 'All' ? jobs.length : jobs.filter(j => j.dept === d).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="careers-search">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" className="careers-search__icon">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/>
              </svg>
              <input
                type="text"
                placeholder="Search roles…"
                className="careers-search__input"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && <button className="careers-search__clear" onClick={() => setSearch('')}>×</button>}
            </div>
          </div>

          {/* JOB LIST */}
          <div className="jobs-list">
            {filtered.length === 0 ? (
              <div className="jobs-empty">No openings found. Try a different filter.</div>
            ) : filtered.map(job => {
              const tag = typeColor[job.type];
              const isOpen = expanded === job.id;
              return (
                <div key={job.id} className={`job-row ${isOpen ? 'job-row--open' : ''}`}>
                  {/* HEADER — always visible */}
                  <div className="job-row__head" onClick={() => setExpanded(isOpen ? null : job.id)}>
                    <div className="job-row__left">
                      <h3 className="job-row__title">{job.title}</h3>
                      <div className="job-row__meta">
                        <span className="job-row__tag" style={{ background: tag.bg, color: tag.text }}>{job.type}</span>
                        <span className="job-row__dot">·</span>
                        <span>{job.dept}</span>
                        <span className="job-row__dot">·</span>
                        <span>{job.location}</span>
                        <span className="job-row__dot">·</span>
                        <span>{formatDate(job.posted)}</span>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" width="18" height="18"
                      className="job-row__chevron"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)' }}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* DROPDOWN — description + apply */}
                  <div className="job-row__body">
                    <div className="job-row__body-inner">
                      <p className="job-row__desc">{job.desc}</p>
                      <div className="job-row__skills">
                        {job.skills.map(s => <span key={s} className="job-skill">{s}</span>)}
                      </div>
                      <a
                        href={`mailto:careers@ntcpwc.iitm.ac.in?subject=Application for ${encodeURIComponent(job.title)}`}
                        className="job-apply-btn"
                        onClickCapture={e => e.stopPropagation()}
                      >
                        Apply for this role →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{/* jobs-list */}
          </div>{/* jobs-wrap */}
        </div>
      </section>

    </div>
  );
}