import { useEffect, useRef } from 'react';
import './ServerError.css';

function ErrorCanvas() {
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
        const y = yB + Math.sin((x * f) + o) * amp + Math.sin((x * f * 0.5) + o * 0.7) * amp * 0.4;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineTo(W, H); ctx.lineTo(0, H); ctx.closePath();
      ctx.fillStyle = `rgba(${a})`; ctx.fill();
    }
    function draw() {
      t++;
      ctx.clearRect(0, 0, W, H);
      drawWaves(t * 0.012, '180,40,40,0.07',  20, H * 0.75, 0.008);
      drawWaves(t * 0.018 + 1, '180,40,40,0.09', 14, H * 0.72, 0.011);
      drawWaves(t * 0.022 + 2, '180,40,40,0.11', 9,  H * 0.69, 0.014);
      animId = requestAnimationFrame(draw);
    }
    resize(); draw();
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="se-canvas" />;
}

export default function ServerError() {
  return (
    <div className="se-page">
      <ErrorCanvas />
      <div className="se-content">
        <p className="se-eyebrow">Error 500</p>
        <h1 className="se-code">500</h1>
        <h2 className="se-title">Something went wrong.</h2>
        <p className="se-sub">Our servers hit an unexpected wave. We're already working on it — please try again in a moment.</p>
        <div className="se-btns">
          <a href="/" className="se-btn se-btn--primary">Back to Home</a>
          <a href="mailto:ntcpwc@iitm.ac.in" className="se-btn se-btn--ghost">Contact Support</a>
        </div>
        <p className="se-hint">If this keeps happening, email us at <a href="mailto:ntcpwc@iitm.ac.in">ntcpwc@iitm.ac.in</a></p>
      </div>
    </div>
  );
}
