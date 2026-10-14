import { useEffect, useRef } from 'react';
import './Products.css';

function ProductsCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, W, H, t = 0;
    const ship = { x: -120, y: 0, speed: 0.4 };
    const buoys = [];
    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      ship.y = H * 0.62;
      buoys.length = 0;
      for (let i = 0; i < 5; i++)
        buoys.push({ x: (W/5)*i+W/10, baseY: H*0.58+Math.random()*30, phase: Math.random()*Math.PI*2, size: 4+Math.random()*3 });
    }
    function drawShip(x, y) {
      ctx.save(); ctx.translate(x, y);
      const a = 0.28, c = `rgba(93,160,203,${a})`, cd = `rgba(70,120,170,${a})`;
      ctx.beginPath(); ctx.moveTo(-95,2); ctx.lineTo(-95,16); ctx.lineTo(75,16); ctx.lineTo(90,8); ctx.lineTo(90,2); ctx.closePath(); ctx.fillStyle=cd; ctx.fill();
      ctx.fillStyle=`rgba(93,160,203,${a*0.5})`; ctx.fillRect(-95,2,185,4);
      ctx.fillStyle=c; ctx.fillRect(-88,-24,30,26);
      ctx.fillStyle=`rgba(180,220,255,${a*1.3})`; for(let i=0;i<3;i++) ctx.fillRect(-85+i*9,-18,6,5);
      ctx.fillStyle=cd; ctx.fillRect(-86,-30,26,7);
      ctx.beginPath(); ctx.moveTo(-75,-30); ctx.lineTo(-75,-54); ctx.strokeStyle=`rgba(93,160,203,${a*1.2})`; ctx.lineWidth=1.5; ctx.stroke();
      const cc=[`rgba(93,160,203,${a})`,`rgba(70,140,190,${a*1.1})`,`rgba(50,110,160,${a*0.9})`];
      [{x:-42},{x:3},{x:48}].forEach((s,si)=>{for(let row=0;row<2;row++)for(let col=0;col<2;col++){ctx.fillStyle=cc[(si+row+col)%3];ctx.fillRect(s.x+col*19,-6-row*11,18,10);ctx.strokeStyle=`rgba(20,60,100,${a*0.5})`;ctx.lineWidth=0.5;ctx.strokeRect(s.x+col*19,-6-row*11,18,10);}});
      for(let i=1;i<=4;i++){ctx.beginPath();ctx.moveTo(-95-i*14,i*2.5);ctx.lineTo(-95-i*14,i*2.5+7);ctx.strokeStyle=`rgba(93,160,203,${a*(1-i*0.2)})`;ctx.lineWidth=1;ctx.stroke();}
      ctx.restore();
    }
    function drawWaves(o,a,amp,yB,f){ctx.beginPath();ctx.moveTo(0,H);for(let x=0;x<=W;x+=4){const y=yB+Math.sin((x*f)+o)*amp+Math.sin((x*f*0.5)+o*0.7)*amp*0.5;x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fillStyle=`rgba(93,160,203,${a})`;ctx.fill();}
    function drawBuoy(bx,by,size){ctx.beginPath();ctx.arc(bx,by,size,0,Math.PI*2);ctx.fillStyle='rgba(246,183,85,0.45)';ctx.fill();ctx.beginPath();ctx.moveTo(bx,by-size);ctx.lineTo(bx,by-size-10);ctx.strokeStyle='rgba(246,183,85,0.35)';ctx.lineWidth=1.5;ctx.stroke();ctx.beginPath();ctx.arc(bx,by-size-10,2.5,0,Math.PI*2);ctx.fillStyle=`rgba(246,183,85,${0.3+Math.sin(t*0.06)*0.3})`;ctx.fill();}
    function drawRadar(){const cx=W*0.88,cy=H*0.28,r=38;ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(93,160,203,0.12)';ctx.lineWidth=1;ctx.stroke();[0.6,0.3].forEach(f=>{ctx.beginPath();ctx.arc(cx,cy,r*f,0,Math.PI*2);ctx.strokeStyle='rgba(93,160,203,0.08)';ctx.stroke();});ctx.strokeStyle='rgba(93,160,203,0.1)';ctx.beginPath();ctx.moveTo(cx-r,cy);ctx.lineTo(cx+r,cy);ctx.stroke();ctx.beginPath();ctx.moveTo(cx,cy-r);ctx.lineTo(cx,cy+r);ctx.stroke();const angle=(t*0.025)%(Math.PI*2);ctx.save();ctx.translate(cx,cy);ctx.rotate(angle);ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,r,0,Math.PI*0.4);ctx.closePath();ctx.fillStyle='rgba(93,160,203,0.12)';ctx.fill();ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(r,0);ctx.strokeStyle='rgba(93,160,203,0.5)';ctx.lineWidth=1.5;ctx.stroke();ctx.restore();ctx.beginPath();ctx.arc(cx+14,cy-10,2,0,Math.PI*2);ctx.fillStyle=`rgba(93,160,203,${0.4+Math.sin(t*0.08)*0.4})`;ctx.fill();}
    function draw(){t++;ctx.clearRect(0,0,W,H);drawWaves(t*0.012,0.06,18,H*0.72,0.008);drawWaves(t*0.018+1,0.08,13,H*0.68,0.011);drawWaves(t*0.022+2,0.1,9,H*0.65,0.014);for(const b of buoys){drawBuoy(b.x,b.baseY+Math.sin(t*0.022+b.phase)*5,b.size);}ship.x+=ship.speed;if(ship.x>W+140)ship.x=-140;drawShip(ship.x,ship.y+Math.sin(t*0.02)*3);drawRadar();ctx.beginPath();ctx.moveTo(0,H*0.63);ctx.lineTo(W,H*0.63);ctx.strokeStyle='rgba(93,160,203,0.08)';ctx.lineWidth=1;ctx.stroke();animId=requestAnimationFrame(draw);}
    resize(); draw();
    const ro=new ResizeObserver(resize); ro.observe(canvas);
    return ()=>{cancelAnimationFrame(animId);ro.disconnect();};
  },[]);
  return <canvas ref={canvasRef} className="prod-canvas" />;
}

const products = [
  {
    id: 'hydrometerology',
    name: 'Next Generation Technology for Hydrometerology monitoring',
    tag: 'Traffic Management',
    tagline: "India's first fully indigenous Vessel Traffic Management System.",
    cover: '/assets/images/product/hydrometerology/Picture1.png',
    accent: '#4A9ECC',
  },
  {
    id: 'survey-vessel',
    name: 'USV-01-ASB – Autonomous Survey Vessel',
    tag: 'Port Operating System',
    tagline: 'AI-powered smart port operating platform for Indian ports.',
    cover: '/assets/images/product/USV-01-ASB/usv.jpg',
    accent: '#5BB8B2',
  },
  {
    id: 'dredging-system',
    name: 'Online Dredging Monitoring System',
    tag: 'Simulation',
    tagline: 'Real-time 3D digital twin for port infrastructure management.',
    cover: '/assets/images/product/online-dredging/2.png',
    accent: '#9B7FE8',
  },
  {
    id: 'sagarmanthan',
    name: 'Sagarmanthan – MoPSW Unified Portal',
    tag: 'Navigation Safety',
    tagline: 'Real-time under-keel clearance management for safe vessel transit.',
    cover: '/assets/images/product/sagarmanthan/sagar_1.png',
    accent: '#E8A730',
  },
  {
    id: 'smart-docking',
    name: 'Implementation Of Indigenous Smart Docking AID Berthing',
    tag: 'Traffic Management',
    tagline: '3D vessel traffic monitoring and management system.',
    cover: '/assets/images/product/smart-docking/Picture2.png',
    accent: '#4A9ECC',
  },
  {
    id: 'keel-clearance',
    name: 'REAL TIME – Underwater Keel Clearance',
    tag: 'Operations',
    tagline: 'Unified port command and control centre platform.',
    cover: '/assets/images/product/keel-clearance/Picture2.png',
    accent: '#E87070',
  },
  {
    id: 'jit-vessel',
    name: 'Just in Time (JIT) Arrival/Departure of Vessels',
    tag: 'Tracking & Monitoring',
    tagline: 'Real-time AIS-based vessel tracking and monitoring system.',
    cover: '/assets/images/product/jit/Picture1.png',
    accent: '#5BB8B2',
  },
  {
    id: 'indigeneous-vts',
    name: 'Indigenous development of Vessel Traffic Services (iVTS)',
    tag: 'Port Operations',
    tagline: 'Precision berthing assistance and smart docking management.',
    cover: '/assets/images/product/vessel-traffic/IVTS.jpeg',
    accent: '#9B7FE8',
  },
  {
    id: '3d-vtms',
    name: '3D - VTMS',
    tag: 'Port Operating System',
    tagline: 'Next-generation operating system for intelligent port management.',
    cover: '/assets/images/product/3D-VTMS/Picture1.png',
    accent: '#E8A730',
  },
  {
    id: 'command-center',
    name: 'Integrated Command and Control Center',
    tag: 'Optimisation',
    tagline: 'Just-in-time vessel arrival optimisation to reduce port congestion.',
    cover: '/assets/images/product/control-center/Picture1.png',
    accent: '#4A9ECC',
  },
  {
    id: 'digital-twin',
    name: 'Digital Twin for Ports developed by NTCPWC',
    tag: 'Environmental Monitoring',
    tagline: 'Integrated hydro-meteorological monitoring for port safety.',
    cover: '/assets/images/product/digital-twin/Digital Twin_1.gif',
    accent: '#5BB8B2',
  },
  {
    id: 'vessel-tracker',
    name: 'Vessel Tracker – Inland Waterways',
    tag: 'Hydrographic Survey',
    tagline: 'Autonomous survey vessel for coastal and port hydrographic surveys.',
    cover: '/assets/images/product/vessel-tracker/Picture3.png',
    accent: '#E87070',
  },
  {
    id: 'smart-port-os',
    name: 'Smart port operating system',
    tag: 'Maintenance',
    tagline: 'Intelligent dredging management and monitoring system.',
    cover: '/assets/images/product/smart-port/Vessel Tracker.jpg',
    accent: '#9B7FE8',
  },
  {
    id: 'marina-ai',
    name: 'Marina AI',
    tag: 'Artificial Intelligence',
    tagline: 'AI-driven marina management and berth allocation platform.',
    cover: '/assets/images/product/marina-ai/MarinaAi.png',
    accent: '#E8A730',
  },
];

export default function Products() {
  return (
    <div className="prod-page">

      {/* HERO */}
      <section className="prod-hero">
        <ProductsCanvas />
        <div className="prod-hero__inner">
          <div className="prod-hero__left">
            <p className="prod-eyebrow">Our Products</p>
            <h1 className="prod-hero__h">Products</h1>
          </div>
          <div className="prod-hero__right">
            <p className="prod-hero__sub">Indigenous technology solutions for India's ports and waterways — built entirely at IIT Madras.</p>
            <p className="prod-hero__meta">{products.length} products · IIT Madras</p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="prod-grid-section">
        <div className="prod-grid-inner">
          {products.map((p, i) => (
            <a key={p.id} href={`/products/${p.id}`} className="prod-card">
              <div className="prod-card__img-wrap">
                <img src={p.cover} alt={p.name} className="prod-card__img" />
                <div className="prod-card__overlay" />
                <span className="prod-card__tag" style={{ color: p.accent }}>{p.tag}</span>
                <span className="prod-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="prod-card__body">
                <h2 className="prod-card__name">{p.name}</h2>
                <p className="prod-card__tagline">{p.tagline}</p>
                <span className="prod-card__cta">
                  Explore product
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}