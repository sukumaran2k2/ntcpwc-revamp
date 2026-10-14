import { useState, useEffect, useRef } from 'react';
import './People.css';

function PeopleCanvas() {
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
  return <canvas ref={canvasRef} className="people-canvas" />;
}

const people1 = [
  { name: 'Dr. K.Murali', role: 'Professor' },
  { name: 'Dr. S.A.Sannasiraj', role: 'Professor' },
  { name: 'Dr. V.Sriram', role: 'Professor' },
  { name: 'Dr. D Kumaran Raju', role: 'Principal Project Scientist' },
  { name: 'Srinivasakannan R', role: 'Senior Project Advisor' },
  { name: 'Dr. Sri Ganesh J', role: 'Principal Project Scientist' },
];

const people=  [
    { name: "Dr. K.MURALI", role: "Professor" },
  { name: "Dr. S.A.SANNASIRAJ", role: "Professor" },
  { name: "Dr. V.SRIRAM", role: "Professor" },
  {
    name: "Dr. D KUMARAN RAJU",
    role : "Principal Project Scientist"
  },
  {
    name: "SRINIVASAKANNAN R",
    role : "Senior Project Advisor"
  },
  {
    name: "JEGANATH J B",
    role : "Project Advisor"
  },
  {
    name: "Dr. SRI GANESH J",
    role : "Principal Project Scientist"
  },
  {
    name: "MAHESHVARAN V",
    role : "Principal Project Officer"
  },
  {
    name: "MUTHUKUMAR M J",
    role : "Principal Project Officer"
  },
  {
    name: "CHANDRASEKAR JAYARAJ J",
    role : "Principal Project Officer"
  },
  {
    name: "K ARUN KUMAR",
    role : "Project Advisor"
  },
  {
    name: "RAJEEV KUMAR TIPNIS",
    role : "Project Advisor"
  },
  {
    name: "RANJITH KUMAR S",
    role : "Senior Project Officer"
  },
  {
    name: "PATIL PARTHASARATHI",
    role : "Senior Project Officer"
  },
  {
    name: "VINAYKUMAR VARMA K",
    role : "Senior Project Officer"
  },
  {
    name: "THIRUGNANAM R",
    role : "Senior Project Officer"
  },
  {
    name: "VARADHARAJULU V",
    role : "Project Manager"
  },
  {
    name: "APARNA M",
    role : "Project Officer"
  },
  {
    name: "PUSHPAVATHY A",
    role : "Accountant"
  },
  {
    name: "PARTHASARATHY G",
    role : "System Administrator"
  },
  {
    name: "AJITH SELVA VIGNESHWARAN S",
    role : "Senior Project Engineer"
  },
  {
    name: "R NARESH KUMAR",
    role : "Server Administrator"
  },
  {
    name: "PRIYA SOMASUNDARAN",
    role : "Senior Project Officer"
  },
  {
    name: "SUDHARSAN PRABHU",
    role : "Senior Software Engineer"
  },
  {
    name: "PRADHIKSHA R S",
    role : "Project Officer"
  },
  {
    name: "HAARIS MOHAIDEEN A",
    role : "Project Manager"
  },
  {
    name: "NITIN PRAVEEN SUBASH CHANDRABOSE",
    role : "Marine Officer"
  },
  {
    name: "ARUN S",
    role : "Project Officer"
  },
  {
    name: "MUTHUSARAN MUTHUKUMAR",
    role : "Hydrographic Surveyor"
  },
  {
    name: "SHYAM WILLIAM",
    role : "Senior Engineer"
  },
  {
    name: "JAYASHANKAR M",
    role : "Project Officer"
  },
  {
    name: "MATHAVAN MANI",
    role : "Project Officer"
  },
  {
    name: "SEKAR ANNAMALAI",
    role : "Project Officer"
  },
  {
    name: "VIVEK NARAYANAN J",
    role : "Senior Project Engineer"
  },
  {
    name: "KARKUVEL MUTHURAJA",
    role : "Senior Project Engineer"
  },
  {
    name: "MURUGAN K",
    role : "Project Engineer"
  },
  {
    name: "KAVIDAS A",
    role : "Project Engineer"
  },
  {
    name: "MOHAMED AKRAM N",
    role : "Project Engineer"
  },
  {
    name: "FELIX JOHNSON",
    role : "Project Engineer"
  },
  {
    name: "MD IRSHAD ALAM",
    role : "Project Engineer"
  },
  {
    name: "CHOCKKALINGAM R",
    role : "Project Manager"
  },
  {
    name: "MANIKANDAN",
    role : "Unity Developer"
  },
  {
    name: "SELVARAJ",
    role : "Unity 3D Developer"
  },
  {
    name: "SELVAGANESH",
    role : "Unity Developer"
  },
  {
    name: "VINOBALAN RANGANATHAN",
    role : "Technical Artist"
  },
  {
    name: "RATHNA KUMAR RAJENDRAN",
    role : "Project Officer"
  },
  {
    name: "MANIKANDAN RAMAMOORTHY",
    role : "Project Officer"
  },
  {
    name: "G DAKSHIN RAGAV",
    role : "Project Officer"
  },
  {
    name: "SOPHIA M",
    role : "Senior Technician"
  },
  {
    name: "GURUNATHAN M",
    role : "Senior Engineer"
  },
  {
    name: "BOOBALAN V",
    role : "Senior Engineer"
  },
  {
    name: "MUTHU KRISHNAN P",
    role : "Senior Executive"
  },
  {
    name: "JOSHUA J",
    role : "Project Officer"
  },
  {
    name: "YASHWONTH H",
    role : "Project Associate"
  },
  {
    name: "SANGEETHA",
    role : "Senior Software Developer"
  },
  {
    name: "DHARANI BALAKRISHNAN",
    role : "Project Associate"
  },
  {
    name: "HARISH R",
    role : "Project Associate"
  },
  {
    name: "HEMANTH S",
    role : "Project Associate"
  },
  {
    name: "SUSMITHA THANKACHAN",
    role : "Project Officer"
  },
  {
    name: "MOHANRAJ R",
    role : "Senior Executive"
  },
  {
    name: "J JAYANTH",
    role : "Junior Executive"
  },
  {
    name: "MOHAMED SHAHARUDEEN MOHAMED RAWOOF",
    role : "Junior Executive"
  },
  {
    name: "SREENIVASAN J",
    role : "Software Analyst"
  },
  {
    name: "SAI SHRAVANI S",
    role : "Project Associate"
  },
  {
    name: "JAYACHANDRAN N",
    role : "Project Associate"
  },
  {
    name: "VENKATESH A",
    role : "Project Manager"
  },
  {
    name: "RANJITHKUMAR",
    role : "Project Associate"
  },
  {
    name: "JERSAL MANO RANJAGAN P",
    role : "Project Engineer"
  },
  {
    name: "DARVIN V",
    role : "Junior Engineer"
  },
  {
    name: "ROWAN MATHEW B",
    role : "3D Artist"
  },
  {
    name: "ADHITHIYA ASHOK",
    role : "Project Associate"
  },
  {
    name: "AGNES RUFINA I",
    role : "Senior Executive"
  },
  {
    name: "PIU DAS",
    role : "Junior Technical Artist"
  },
  {
    name: "NANDHINI RAVI",
    role : "Junior Executive"
  },
  {
    name: "AMALESH TRIPATHY",
    role : "Senior Site Engineer"
  },
  {
    name: "MAHABUB HUSSAIN",
    role : "Junior Executive"
  },
  {
    name: "M KHANESHKA",
    role : "Junior Executive"
  },
  {
    name: "JEEVAN NITHIYANANDAM",
    role : "Junior Executive"
  },
  {
    name: "PETCHI MUTHU KUMAR S",
    role : "Project Engineer"
  },
  {
    name: "RAMPRASATH V",
    role : "Project Officer"
  },
  {
    name: "MD SAJID ALI",
    role : "Project Engineer"
  },
  {
    name: "ARUN M",
    role : "Project Engineer"
  },
  {
    name: "SAURAV SURENDRAN",
    role : "Project Engineer"
  },
  {
    name: "MANIBALAN M",
    role : "Project Engineer"
  },
  {
    name: "NEEMA K",
    role : "Project Officer"
  },
  {
    name: "AJAY ARAVINTHAN SELVARAJ",
    role : "Project Officer"
  },
  {
    name: "MOHAMED REZA TAUFIQ M",
    role : "Project Engineer"
  },
  {
    name: "VIJO V",
    role : "Project Associate"
  },
  {
    name: "PRAGADEESH C M",
    role : "Project Engineer"
  },
  {
    name: "ASWANTHI",
    role : "Project Officer"
  },
  {
    name: "RIZWAN NIZAARAHAMED",
    role : "Project Engineer"
  },
  {
    name: "PRAVIN L",
    role : "Project Engineer"
  },
  {
    name: "SAKTHIVEL RAVICHANDRAN",
    role : "Project Officer"
  },
  {
    name: "SAKTHIVEL S",
    role : "Project Engineer"
  },
  {
    name: "PRAVEEN ARUMUGAM",
    role : "Project Engineer"
  },
  {
    name: "PREETHAN",
    role : "Project Engineer"
  },
  {
    name: "MANOJKUMAR C",
    role : "Project Engineer"
  },
  {
    name: "SENDURA VEL A",
    role : "Safety Officer"
  },
  {
    name: "ARUNKUMAR",
    role : "Project Engineer"
  },
  {
    name: "SELVARAJIV V",
    role : "Project Officer"
  },
  {
    name: "MANOJKUMAR",
    role : "Project Associate"
  },
  {
    name: "NANDHAKUMAR M",
    role : "Project Engineer"
  },
  {
    name: "HARISH P",
    role : "Project Associate"
  },
  {
    name: "POOVARASAN G",
    role : "Project Officer"
  },
  {
    name: "SUDHARCHAND C",
    role : "Project Officer"
  },
  {
    name: "PARTHASARATHY K",
    role : "Project Officer"
  },
  {
    name: "PAVITHRA M",
    role : "Project Officer"
  },
  {
    name: "JADAV KHUSHAL KESHAVJI",
    role : "Project Officer"
  },
  {
    name: "P SUBASH",
    role : "Junior Engineer"
  },
  {
    name: "NEVEDHAN V",
    role : "Project Engineer"
  },
  {
    name: "SRINIVASAN SETHURAMAN",
    role : "Junior Engineer"
  },
  {
    name: "SARAN S",
    role : "Junior Engineer"
  },
  {
    name: "BALA BOMMA GIRIDHARAN",
    role : "Junior Engineer"
  },
  {
    name: "ANTO LOUDHU RICHARD",
    role : "Hydrographic Surveyor"
  },
  {
    name: "MAHENDRA SURESH",
    role : "Senior Engineer"
  },
  {
    name: "ASHOK D ALMEIDA",
    role : "Senior Engineer"
  },
  {
    name: "ARUP PRADHAN",
    role : "System Administrator"
  },
  {
    name: "BISHNUPADA CHAKRABORTY",
    role : "Office Assistant"
  },
  {
    name: "A. MANISHA",
    role : "Project Officer"
  },
  {
    name: "ADITYA KESARWANI",
    role : "Project Associate"
  },
  {
    name: "DURAIMURUGAN T",
    role : "Project Officer"
  },
  {
    name: "HARISHMARAN MANIMARAN",
    role : "Project Associate"
  },
  {
    name: "K VARATHARAJ",
    role : "Project Associate"
  },
  {
    name: "VARSHA JAYAKUMAR",
    role : "Project Associate"
  },
  {
    name: "SOORAJ S",
    role : "Project Associate"
  },
  {
    name: "PRAKASH KANNAN",
    role : "Project Officer"
  },
  {
    name: "AMARNATH T",
    role : "Project Associate"
  },
  {
    name: "MANU PRIYAM SINHA",
    role : "Project Associate"
  },
  {
    name: "VIGNESH RAVI",
    role : "Project Associate"
  },
  {
    name: "BHARATHI C",
    role : "Project Engineer"
  },
  {
    name: "SUDARSUN",
    role : "Project Associate"
  },
  {
    name: "SASI G",
    role : "Project Associate"
  },
  {
    name: "AKSAYA B",
    role : "Project Associate"
  },
  {
    name: "VASAN G K",
    role : "Junior Software Developer"
  },
  {
    name: "GOKUL AMIRTHALINGAM",
    role : "Full Stack Developer"
  },
  {
    name: "PRAVEEN",
    role : "Computer Vision Engineer"
  },
  {
    name: "ABINAYA CHANDRASEKAR",
    role : "Project Associate"
  },
  {
    name: "SHAKTHI K",
    role : "Junior Software Developer"
  },
  {
    name: "THAMIZHVANAN R",
    role : "Office Assistant"
  },
  {
    name: "D YUVARAJ",
    role : "Laboratory Assistant"
  },
  {
    name: "T JOHN BRIGHT",
    role : "Office Assistant"
  },
  {
    name: "SENTHILKUMAR P",
    role : "Office Assistant"
  },
  {
    name: "MATHIVANAN K",
    role : "Laboratory Assistant"
  },
  {
    name: "ARULRAJ RAJAMANI",
    role : "Laboratory Assistant"
  },
  {
    name: "K RAMESH",
    role : "Office Assistant"
  },
  {
    name: "VIJAYASEKAR P",
    role : "Secretarial Assistant"
  },
  {
    name: "CHITHRA P",
    role : "Office Assistant"
  },
  {
    name: "Yogeshwaran A",
    role : "Project Officer"
  },
  {
    name: "Mohana Lakshmi Tk",
    role : "Project Manager"
  },
  {
    name: "Gopinath S K",
    role : "Project Engineer"
  },
  {
    name: "Akhil A S",
    role : "Project Associate"
  },
  {
    name: "Sneha Selvam",
    role : "Project Associate"
  },
  {
    name: "Malavika H",
    role : "Project Associate"
  },
  {
    name: "Kowshik M",
    role : "Project Associate"
  },
  {
    name: "Siva Jp",
    role : "Project Officer"
  },
  {
    name: "Amal Pradeep",
    role : "Surveyor"
  }
]

const ROLES = ['All', ...Array.from(new Set(people.map(p => p.role))).sort()];

function initials(name) {
  const parts = name.replace(/^Dr\.\s*/i, '').trim().split(' ');
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
}

export default function People() {
  const [search, setSearch] = useState('');
  const [role, setRole]     = useState('All');

  const filtered = people.filter(p => {
    const matchRole   = role === 'All' || p.role === role;
    const matchSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  return (
    <div className="ppl-page">

      {/* HERO */}
      <section className="ppl-hero">
        <PeopleCanvas />
        <div className="ppl-hero__inner">
          <div className="ppl-hero__left">
            <p className="ppl-eyebrow">Our People</p>
            <h1 className="ppl-hero__h">People</h1>
          </div>
          <div className="ppl-hero__right">
            <p className="ppl-hero__sub">The dedicated team of researchers, engineers and specialists driving maritime innovation at NTCPWC.</p>
            <p className="ppl-hero__meta">{people.length} members · IIT Madras</p>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="ppl-body">
        <div className="ppl-body__inner">

          {/* FILTERS */}
          <div className="ppl-filters">
            {/* Search */}
            <div className="ppl-search">
              <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" className="ppl-search__icon">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/>
              </svg>
              <input
                type="text"
                placeholder="Search by name or role…"
                className="ppl-search__input"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && <button className="ppl-search__clear" onClick={() => setSearch('')}>×</button>}
            </div>

            {/* Role filter */}
            <div className="ppl-role-filter">
              <select
                className="ppl-select"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                {ROLES.map(r => (
                  <option key={r} value={r}>{r === 'All' ? 'All Roles' : r}</option>
                ))}
              </select>
            </div>

            {/* Count */}
            <p className="ppl-count">
              {filtered.length === people.length
                ? `${people.length} members`
                : `${filtered.length} of ${people.length} members`}
            </p>
          </div>

          {/* GRID */}
          {filtered.length === 0 ? (
            <div className="ppl-empty">No results found. Try a different search.</div>
          ) : (
            <div className="ppl-list">
              {filtered.map((p, i) => (
                <div key={i} className="ppl-row">
                  <div className="ppl-row__avatar">{initials(p.name)}</div>
                  <div className="ppl-row__info">
                    <span className="ppl-row__name">{p.name}</span>
                  </div>
                  <span className="ppl-row__role">{p.role}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}