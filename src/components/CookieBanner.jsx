import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,   // always on
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('ntcpwc-cookie-consent');
    if (!saved) {
      // slight delay so page loads first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, functional: true, date: new Date().toISOString() };
    localStorage.setItem('ntcpwc-cookie-consent', JSON.stringify(consent));
    setVisible(false);
  };

  const savePrefs = () => {
    const consent = { ...prefs, necessary: true, date: new Date().toISOString() };
    localStorage.setItem('ntcpwc-cookie-consent', JSON.stringify(consent));
    setVisible(false);
  };

  const rejectAll = () => {
    const consent = { necessary: true, analytics: false, functional: false, date: new Date().toISOString() };
    localStorage.setItem('ntcpwc-cookie-consent', JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={`cookie-banner ${showDetails ? 'cookie-banner--expanded' : ''}`}>

      {/* HEADER */}
      <div className="cookie-banner__header">
        <div className="cookie-banner__icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
          </svg>
        </div>
        <div>
          <p className="cookie-banner__title">We use cookies</p>
          <p className="cookie-banner__sub">NTCPWC uses cookies to improve your experience on our site.</p>
        </div>
        <button className="cookie-banner__close" onClick={rejectAll} aria-label="Close">
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
          </svg>
        </button>
      </div>

      {/* DETAILS — expandable */}
      {showDetails && (
        <div className="cookie-banner__details">
          <div className="cookie-row">
            <div className="cookie-row__info">
              <p className="cookie-row__name">Necessary</p>
              <p className="cookie-row__desc">Essential for the site to function. Cannot be disabled.</p>
            </div>
            <div className="cookie-toggle cookie-toggle--on cookie-toggle--disabled">
              <span className="cookie-toggle__knob" />
            </div>
          </div>

          <div className="cookie-row">
            <div className="cookie-row__info">
              <p className="cookie-row__name">Analytics</p>
              <p className="cookie-row__desc">Helps us understand how visitors interact with the site.</p>
            </div>
            <button
              className={`cookie-toggle ${prefs.analytics ? 'cookie-toggle--on' : ''}`}
              onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
              aria-label="Toggle analytics"
            >
              <span className="cookie-toggle__knob" />
            </button>
          </div>

          <div className="cookie-row">
            <div className="cookie-row__info">
              <p className="cookie-row__name">Functional</p>
              <p className="cookie-row__desc">Enables enhanced features like language preferences and accessibility settings.</p>
            </div>
            <button
              className={`cookie-toggle ${prefs.functional ? 'cookie-toggle--on' : ''}`}
              onClick={() => setPrefs(p => ({ ...p, functional: !p.functional }))}
              aria-label="Toggle functional"
            >
              <span className="cookie-toggle__knob" />
            </button>
          </div>
        </div>
      )}

      {/* ACTIONS */}
      <div className="cookie-banner__actions">
        <button className="cookie-btn cookie-btn--ghost" onClick={() => setShowDetails(d => !d)}>
          {showDetails ? 'Hide options' : 'Manage preferences'}
        </button>
        {showDetails ? (
          <button className="cookie-btn cookie-btn--primary" onClick={savePrefs}>Save</button>
        ) : (
          <>
            <button className="cookie-btn cookie-btn--outline" onClick={rejectAll}>Reject</button>
            <button className="cookie-btn cookie-btn--primary" onClick={acceptAll}>Accept all</button>
          </>
        )}
      </div>

    </div>
  );
}
