import { useEffect, useRef } from 'react';
import './Services.css';

function ServicesCanvas() {
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
  return <canvas ref={canvasRef} className="svc-canvas" />;
}

const services = [
  {
    id: '3D-numerical',
    name: 'DEVELOPMENT OF A CUSTOMIZABLE 3D NUMERICAL HYDRODYNAMICS AND SILTATION TOOL',
    tag: 'Engineering',
    tagline: 'End-to-end design solutions for ports, jetties and coastal infrastructure.',
    cover: '/assets/images/research/1.jpg',
    accent: '#4A9ECC',
  },
  {
    id: 'inlet-dynamics',
    name: 'Inlet dynamics and shoal processes a complete numerical laboratory and field study',
    tag: 'Consultancy',
    tagline: 'Expert advisory and management for successful project execution.',
    cover: '/assets/images/research/2.jpg',
    accent: '#5BB8B2',
  },
  {
    id: 'inland-waterways',
    name: 'Assessment tool for assessing the impact of ShipBoat Wake Waves on the banks and protection measures for Inland Waterways',
    tag: 'Assessment',
    tagline: 'Scientific evaluation of port and coastal structure integrity.',
    cover: '/assets/images/research/3.jpg',
    accent: '#9B7FE8',
  },
    {
    id: 'hydrodynamic',
    name: 'Hydrodynamic study and simulation of multiple ship interactions in inland waterways and shallow waters',
    tag: 'Assessment',
    tagline: 'Scientific evaluation of port and coastal structure integrity.',
    cover: '/assets/images/research/4.jpg',
    accent: '#9B7FE8',
  },
  {
    id: 'maintenance-dredging',
    name: 'Comprehensive study of the maintenance dredging requirements of all major ports and national waterways and strategies and technical solutions to reduce the cost in short term and long term',
    tag: 'Assessment',
    tagline: 'Scientific evaluation of port and coastal structure integrity.',
    cover: 'assets/images/research/5.jpg',
    accent: '#9B7FE8',
  },


];

export default function Services() {
  return (
    <div className="svc-page">

      {/* HERO */}
      <section className="svc-hero">
        <ServicesCanvas />
        <div className="svc-hero__inner">
          <div className="svc-hero__left">
            <p className="svc-eyebrow">Our Research</p>
            <h1 className="svc-hero__h">Research</h1>
          </div>
          <div className="svc-hero__right">
            <p className="svc-hero__sub">Comprehensive technical services for India's ports, waterways and coastal infrastructure — backed by IIT Madras research.</p>
            <p className="svc-hero__meta">{services.length} service areas · IIT Madras</p>
          </div>
        </div>
      </section>

      {/* GRID — exactly like Products/Facilities */}
      <section className="svc-grid-section">
        <div className="svc-grid-inner">
          {services.map((s, i) => (
            <a key={s.id} href={`/research/${s.id}`} className="svc-card">
              <div className="svc-card__img-wrap">
                <img src={s.cover} alt={s.name} className="svc-card__img" />
                <div className="svc-card__overlay" />
                <span className="svc-card__tag" style={{ color: s.accent }}>{s.tag}</span>
                <span className="svc-card__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="svc-card__body">
                <h2 className="svc-card__name">{s.name}</h2>
                <p className="svc-card__tagline">{s.tagline}</p>
                <span className="svc-card__cta">
                  Explore service
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
