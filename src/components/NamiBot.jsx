import { useState, useRef, useEffect } from 'react';
import './NamiBot.css';

/* ── MARINA AI ICON — custom maritime AI icon ── */
const RobotIcon = ({ size = 22, forTrigger = false }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    {/* Anchor base */}
    <circle cx="24" cy="24" r="22" fill={forTrigger ? 'rgba(255,255,255,0.12)' : 'none'} />
    {/* Head */}
    <rect x="14" y="10" width="20" height="15" rx="6" fill="white" opacity="0.95"/>
    {/* Eyes */}
    <circle cx="19.5" cy="17" r="2.5" fill="#0067b8"/>
    <circle cx="28.5" cy="17" r="2.5" fill="#0067b8"/>
    {/* Eye shine */}
    <circle cx="20.3" cy="16.2" r="0.8" fill="white"/>
    <circle cx="29.3" cy="16.2" r="0.8" fill="white"/>
    {/* Smile */}
    <path d="M19 21 Q24 24.5 29 21" stroke="#0067b8" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Antenna */}
    <line x1="24" y1="10" x2="24" y2="6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="24" cy="5" r="2" fill="#4A9ECC"/>
    {/* Neck */}
    <rect x="21" y="25" width="6" height="4" rx="1" fill="white" opacity="0.8"/>
    {/* Body */}
    <rect x="12" y="29" width="24" height="12" rx="5" fill="white" opacity="0.9"/>
    {/* Body detail — wave lines */}
    <path d="M17 34 Q20 31.5 24 34 Q28 36.5 31 34" stroke="#0067b8" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    {/* Arms */}
    <rect x="6" y="30" width="6" height="9" rx="3" fill="white" opacity="0.7"/>
    <rect x="36" y="30" width="6" height="9" rx="3" fill="white" opacity="0.7"/>
  </svg>
);

/* ── SITE KNOWLEDGE ── */
const SITE_KNOWLEDGE = `You are Marina, the AI assistant for NTCPWC (National Technology Centre for Ports, Waterways and Coasts) at IIT Madras.

Speak like a knowledgeable, warm NTCPWC team member. Be concise (2-3 sentences). Always include links when mentioning pages.

FACILITIES: 360° Ship Simulator(/facilities/ship-simulator), Wave Basin(/facilities/wave-basin), Marine ICT Lab(/facilities/marine-ict-lab), Field Research Lab(/facilities/field-research-lab)

PRODUCTS: Indigenous VTS(/products/indigeneous-vts), Sagarmanthan(/products/sagarmanthan), Digital Twin(/products/digital-twin), Keel Clearance(/products/keel-clearance), 3D-VTMS(/products/3d-vtms), Command Center(/products/command-center), Vessel Tracker(/products/vessel-tracker), Smart Docking(/products/smart-docking), Smart Port OS(/products/smart-port-os), JIT Vessel(/products/jit-vessel), Hydrometerology(/products/hydrometerology), Survey Vessel(/products/survey-vessel), Dredging System(/products/dredging-system), Marina AI(/products/marina-ai)

SERVICES: Design & Engineering(/services/design-engineering), Project Management(/services/project-management), Condition Assessment(/services/condition-assessment), Hydrodynamic Studies(/services/hydrodynamic-studies)

PAGES: Home(/), About(/about), Facilities(/facilities), Services(/services), Products(/products), Media(/media), Gallery(/gallery), Careers(/careers), People(/people)

Contact: ntcpwc@iitm.ac.in | +91 44 22578915 | IIT Madras Campus, Chennai

Format links as [Name](url). You are Marina — never claim to be any other AI.`;

const SUGGESTIONS = [
  "What facilities does NTCPWC have?",
  "Tell me about the Ship Simulator",
  "What is Sagarmanthan?",
  "How can I apply for a job?",
];

/* ── FREE API — Hugging Face Inference (no key needed for public models) ── */
const callFreeAPI = async (messages, context) => {
  // Build prompt in chat format
  const history = messages.slice(-6).map(m =>
    m.role === 'user' ? `User: ${m.text}` : `Marina: ${m.text}`
  ).join('\n');

  const prompt = `${context}\n\nConversation:\n${history}\nMarina:`;

  try {
    // Using Hugging Face free inference API with Mistral-7B
    const res = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inputs: `<s>[INST] ${SITE_KNOWLEDGE}\n\nUser question: ${messages[messages.length-1]?.text} [/INST]`,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.7,
            return_full_text: false,
          },
        }),
      }
    );

    if (!res.ok) throw new Error('API error');
    const data = await res.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      let text = data[0].generated_text.trim();
      // Clean up any trailing incomplete sentences
      const lastPunct = Math.max(text.lastIndexOf('.'), text.lastIndexOf('!'), text.lastIndexOf('?'));
      if (lastPunct > text.length * 0.5) text = text.slice(0, lastPunct + 1);
      return text || fallbackResponse(messages[messages.length-1]?.text);
    }

    // Model still loading
    if (data?.error?.includes('loading')) {
      return "I'm warming up — please try again in a few seconds! In the meantime, you can explore [our facilities](/facilities) or [contact us](mailto:ntcpwc@iitm.ac.in).";
    }

    return fallbackResponse(messages[messages.length-1]?.text);
  } catch {
    return fallbackResponse(messages[messages.length-1]?.text);
  }
};

/* ── SMART FALLBACK — keyword matching ── */
const fallbackResponse = (question = '') => {
  const q = question.toLowerCase();
  if (q.includes('simulator') || q.includes('ship sim'))
    return "Our [360° Ship Simulator](/facilities/ship-simulator) is one of South Asia's most advanced — used for pilot training with 25+ Indian port environments at centimetre-level accuracy.";
  if (q.includes('wave basin') || q.includes('wave'))
    return "The [Wave Basin](/facilities/wave-basin) is a 40m × 20m facility for studying sediment transport, dredging behaviour and coastal dynamics.";
  if (q.includes('sagarmanthan'))
    return "[Sagarmanthan](/products/sagarmanthan) is our AI-powered Port Operating System — unifying berth management, vessel scheduling and hydrographic data for Indian ports.";
  if (q.includes('vts') || q.includes('vessel traffic'))
    return "The [Indigenous VTS](/products/indigeneous-vts) is India's first home-grown Vessel Traffic System, deployed at Chennai, Paradip and Kamarajar ports.";
  if (q.includes('career') || q.includes('job') || q.includes('apply'))
    return "We regularly recruit researchers, engineers and project officers. Visit our [Careers page](/careers) to see current openings.";
  if (q.includes('facility') || q.includes('facilities'))
    return "NTCPWC has four world-class facilities — [360° Ship Simulator](/facilities/ship-simulator), [Wave Basin](/facilities/wave-basin), [Marine ICT Lab](/facilities/marine-ict-lab) and [Field Research Lab](/facilities/field-research-lab).";
  if (q.includes('service') || q.includes('consult'))
    return "We offer [Design & Engineering](/services/design-engineering), [Project Management](/services/project-management), [Condition Assessment](/services/condition-assessment) and [Hydrodynamic Studies](/services/hydrodynamic-studies).";
  if (q.includes('product'))
    return "We've built 14 indigenous maritime technology products. Explore all of them on our [Products page](/products).";
  if (q.includes('contact') || q.includes('reach') || q.includes('email'))
    return "Reach us at ntcpwc@iitm.ac.in or call +91 44 22578915. We're at [IIT Madras Campus](/about), Chennai.";
  if (q.includes('about') || q.includes('ntcpwc') || q.includes('what'))
    return "NTCPWC is India's premier maritime technology research centre at IIT Madras, building indigenous solutions for Indian ports under the Ministry of Ports, Shipping and Waterways. [Learn more](/about).";
  return "Great question! For the most accurate answer, please [contact our team](mailto:ntcpwc@iitm.ac.in) or explore our [website](/) directly.";
};

/* ── PARSE MARKDOWN LINKS ── */
function parseLinks(text) {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0, match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push({ type: 'text', content: text.slice(last, match.index) });
    parts.push({ type: 'link', label: match[1], href: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push({ type: 'text', content: text.slice(last) });
  return parts;
}

function Message({ msg }) {
  const parts = parseLinks(msg.text);
  return (
    <div className={`nami-msg nami-msg--${msg.role}`}>
      {msg.role === 'assistant' && (
        <div className="nami-msg__avatar">
          <RobotIcon size={13} />
        </div>
      )}
      <div className="nami-msg__bubble">
        {parts.map((p, i) =>
          p.type === 'link'
            ? <a key={i} href={p.href} className="nami-msg__link">{p.label} →</a>
            : <span key={i}>{p.content}</span>
        )}
      </div>
    </div>
  );
}

export default function NamiBot() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState([{
    role: 'assistant',
    text: "Hi! I'm Marina, your NTCPWC guide. Ask me about our facilities, products, services or research — I'm here to help!",
  }]);
  const [input, setInput]       = useState('');
  const [loading, setLoading]   = useState(false);
  const bottomRef               = useRef(null);
  const inputRef                = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || loading) return;
    setInput('');
    const next = [...messages, { role: 'user', text: q }];
    setMessages(next);
    setLoading(true);
    try {
      const reply = await callFreeAPI(next, SITE_KNOWLEDGE);
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I ran into an issue. Please try again or email ntcpwc@iitm.ac.in." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 2147483647 }}>

      {/* CHAT WINDOW */}
      <div className={`nami-window ${open ? 'nami-window--open' : ''}`}>
        <div className="nami-header">
          <div className="nami-header__avatar">
            <RobotIcon size={16} />
            <span className="nami-header__status" />
          </div>
          <div className="nami-header__info">
            <p className="nami-header__name">Marina AI</p>
            <p className="nami-header__sub">NTCPWC Assistant · IIT Madras</p>
          </div>
          <button className="nami-header__close" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
            </svg>
          </button>
        </div>

        <div className="nami-messages">
          {messages.map((m, i) => <Message key={i} msg={m} />)}
          {loading && (
            <div className="nami-msg nami-msg--assistant">
              <div className="nami-msg__avatar"><RobotIcon size={13} /></div>
              <div className="nami-msg__bubble nami-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          {messages.length === 1 && !loading && (
            <div className="nami-suggestions">
              {SUGGESTIONS.map((s, i) => (
                <button key={i} className="nami-suggestion" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="nami-input-wrap">
          <input
            ref={inputRef}
            type="text"
            className="nami-input"
            placeholder="Ask anything about NTCPWC…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }}}
            disabled={loading}
          />
          <button
            className={`nami-send ${input.trim() ? 'nami-send--active' : ''}`}
            onClick={() => send()}
            disabled={!input.trim() || loading}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* TRIGGER */}
      <button
        className={`nami-trigger ${open ? 'nami-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Chat with Marina AI"
      >
        {!open && <div className="nami-trigger__ring" />}
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
          </svg>
        ) : (
          <RobotIcon size={22} forTrigger={true} />
        )}
      </button>

    </div>
  );
}