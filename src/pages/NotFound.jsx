import { useEffect, useRef } from 'react';
import './NotFound.css';

function NotFoundCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, W, H, t = 0;
    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    function drawWaves(o, a, amp, yB, f) {
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 4) {
        const y = yB + Math.sin((x * f) + o) * amp + Math.sin((x * f * 0.5) + o * 0.7) * amp * 0.5;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      ctx.fillStyle = `rgba(93,160,203,${a})`; ctx.fill();
    }
    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);
      drawWaves(t * 0.012, 0.07, 22, H * 0.75, 0.008);
      drawWaves(t * 0.018 + 1, 0.09, 15, H * 0.72, 0.011);
      drawWaves(t * 0.022 + 2, 0.12, 10, H * 0.69, 0.014);
      animId = requestAnimationFrame(draw);
    }
    resize(); draw();
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="nf-canvas" />;
}

export default function NotFound() {
  return (
    <div className="nf-page">
      <NotFoundCanvas />
      <div className="nf-content">
        <p className="nf-eyebrow">Error 404</p>
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Lost at sea.</h2>
        <p className="nf-sub">The page you're looking for has drifted off course. It may have been moved, renamed or doesn't exist.</p>
        <div className="nf-btns">
          <a href="/" className="nf-btn nf-btn--primary">Back to Home</a>
          <a href="/about" className="nf-btn nf-btn--ghost">About NTCPWC</a>
        </div>
      </div>
    </div>
  );
}
