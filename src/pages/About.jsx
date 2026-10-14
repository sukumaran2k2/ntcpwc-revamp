import { useEffect, useRef } from "react";
import "./About.css";

function AboutCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId,
      W,
      H,
      t = 0;
    const ship = { x: -120, y: 0, speed: 0.4 };
    const buoys = [];
    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      ship.y = H * 0.62;
      buoys.length = 0;
      for (let i = 0; i < 5; i++)
        buoys.push({
          x: (W / 5) * i + W / 10,
          baseY: H * 0.58 + Math.random() * 30,
          phase: Math.random() * Math.PI * 2,
          size: 4 + Math.random() * 3,
        });
    }
    function drawShip(x, y) {
      ctx.save();
      ctx.translate(x, y);
      const a = 0.28,
        c = `rgba(93,160,203,${a})`,
        cd = `rgba(70,120,170,${a})`;
      ctx.beginPath();
      ctx.moveTo(-95, 2);
      ctx.lineTo(-95, 16);
      ctx.lineTo(75, 16);
      ctx.lineTo(90, 8);
      ctx.lineTo(90, 2);
      ctx.closePath();
      ctx.fillStyle = cd;
      ctx.fill();
      ctx.fillStyle = `rgba(93,160,203,${a * 0.5})`;
      ctx.fillRect(-95, 2, 185, 4);
      ctx.fillStyle = c;
      ctx.fillRect(-88, -24, 30, 26);
      ctx.fillStyle = `rgba(180,220,255,${a * 1.3})`;
      for (let i = 0; i < 3; i++) ctx.fillRect(-85 + i * 9, -18, 6, 5);
      ctx.fillStyle = cd;
      ctx.fillRect(-86, -30, 26, 7);
      ctx.beginPath();
      ctx.moveTo(-75, -30);
      ctx.lineTo(-75, -54);
      ctx.strokeStyle = `rgba(93,160,203,${a * 1.2})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const cc = [
        `rgba(93,160,203,${a})`,
        `rgba(70,140,190,${a * 1.1})`,
        `rgba(50,110,160,${a * 0.9})`,
      ];
      [{ x: -42 }, { x: 3 }, { x: 48 }].forEach((s, si) => {
        for (let row = 0; row < 2; row++)
          for (let col = 0; col < 2; col++) {
            ctx.fillStyle = cc[(si + row + col) % 3];
            ctx.fillRect(s.x + col * 19, -6 - row * 11, 18, 10);
            ctx.strokeStyle = `rgba(20,60,100,${a * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.strokeRect(s.x + col * 19, -6 - row * 11, 18, 10);
          }
      });
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
    function drawBuoy(bx, by, size) {
      ctx.beginPath();
      ctx.arc(bx, by, size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(246,183,85,0.45)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx, by - size);
      ctx.lineTo(bx, by - size - 10);
      ctx.strokeStyle = "rgba(246,183,85,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(bx, by - size - 10, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246,183,85,${0.3 + Math.sin(t * 0.06) * 0.3})`;
      ctx.fill();
    }
    function drawRadar() {
      const cx = W * 0.88,
        cy = H * 0.28,
        r = 38;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(93,160,203,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();
      [0.6, 0.3].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * f, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(93,160,203,0.08)";
        ctx.stroke();
      });
      ctx.strokeStyle = "rgba(93,160,203,0.1)";
      ctx.beginPath();
      ctx.moveTo(cx - r, cy);
      ctx.lineTo(cx + r, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx, cy + r);
      ctx.stroke();
      const angle = (t * 0.025) % (Math.PI * 2);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, 0, Math.PI * 0.4);
      ctx.closePath();
      ctx.fillStyle = "rgba(93,160,203,0.12)";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(r, 0);
      ctx.strokeStyle = "rgba(93,160,203,0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
      ctx.beginPath();
      ctx.arc(cx + 14, cy - 10, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(93,160,203,${0.4 + Math.sin(t * 0.08) * 0.4})`;
      ctx.fill();
    }
    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);
      drawWaves(t * 0.012, 0.06, 18, H * 0.72, 0.008);
      drawWaves(t * 0.018 + 1, 0.08, 13, H * 0.68, 0.011);
      drawWaves(t * 0.022 + 2, 0.1, 9, H * 0.65, 0.014);
      for (const b of buoys) {
        drawBuoy(b.x, b.baseY + Math.sin(t * 0.022 + b.phase) * 5, b.size);
      }
      ship.x += ship.speed;
      if (ship.x > W + 140) ship.x = -140;
      drawShip(ship.x, ship.y + Math.sin(t * 0.02) * 3);
      drawRadar();
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
  return <canvas ref={canvasRef} className="about-canvas" />;
}

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <AboutCanvas />
        <div className="about-hero__inner">
          <div className="about-hero__left">
            <p className="about-eyebrow">About NTCPWC</p>
            <h1 className="about-hero__h">About Us</h1>
          </div>
          <div className="about-hero__right">
            <p className="about-hero__sub">
              National Technology Centre for Ports, Waterways & Coasts — a
              Centre of Excellence at IIT Madras.
            </p>
            <p className="about-hero__meta">Est. 2018 · IIT Madras · Chennai</p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — big text + image side by side */}
      <section className="about-who">
        <div className="about-who__inner">
          <div className="about-who__left">
            <p className="ab-label">Who We Are</p>
            <h2 className="about-who__h">
              India's technology arm for ports, waterways and coasts.
            </h2>
            <div className="about-who__divider" />
            <p className="about-who__body">
              The National Technology Centre for Ports, Waterways & Coasts
              (NTCPWC) has been envisioned as the centre for technological
              innovations and evolution of new ideas and breakthroughs for the
              port and maritime sector. It works as the technology arm of
              Ministry of Shipping and providing the needful technological
              support to ports, IWAI and other institutions. This Centre gives
              effective solutions to an extensive range of problems being faced
              in the industry through scientiﬁc support and also providing
              valuable education, applied research and technology transfer in
              maritime transportation at the local, regional, national and
              International levels. This Centre was set up as an Centre for
              Excellence at the Indian Institute of Technology Madras (IITM),
              Chennai during 2018 and expanded its activities both in research
              and development.
            </p>
          </div>
          <div className="about-who__right">
            <div className="about-who__img-wrap">
              <img
                src="/assets/images/ntcpwc_block.jpeg"
                alt="NTCPWC"
                className="about-who__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION — dark, full width, clean list */}
      <section className="about-mission">
        <div className="about-mission__inner">
          <div className="about-mission__left">
            <p className="ab-label ab-label--light">Mission Statement</p>
            <h2 className="about-mission__h">
              What we
              <br />
              stand for.
            </h2>
          </div>
          <div className="about-mission__right">
            <ul className="mission-list">
              <li className="mission-item">
                <span className="mission-item__bar" />
                <p>
                  To empower ‘Make in India’ for Port, Coastal and Inland water
                  transport and engineering by developing state-of-the-art
                  technologies and application products.
                </p>
              </li>
              <li className="mission-item">
                <span className="mission-item__bar" />
                <p>
                  To enable fast-track innovations in order to provide most
                  appropriate solutions to various challenges.
                </p>
              </li>
              <li className="mission-item">
                <span className="mission-item__bar" />
                <p>
                  To create a pool of competent manpower equipped with
                  state-of-the-art theoretical and practical knowhow.
                </p>
              </li>
              <li className="mission-item">
                <span className="mission-item__bar" />
                <p>
                 Self-sufficiency in providing:
                 <ul style={{listStyleType:'none'}}>
                  <li>- Short term solutions through scientific studies</li>
                  <li>- Technology development</li>
                  <li>- Technical arm in identifying complex problems and solving issues</li>
                </ul>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="about-fullimg">
        <img
          src="/assets/Wavebasin.jpg"
          alt="NTCPWC Facility"
          className="about-fullimg__img"
        />
        <div className="about-fullimg__over">
          <p className="about-fullimg__cap">
            Wave Basin Facility · IIT Madras Campus · Chennai
          </p>
        </div>
      </section>
    </div>
  );
}
