import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useApp } from "../context/AppContext";

// Logos live in /public/assets/ — referenced as static URLs
const logoLight = "/assets/logo-light.png";
const logoDark = "/assets/logo-dark.png";

// ─── DATA ────────────────────────────────────────────────────────────────────

const facilitiesItems = [
  {
    img: '/assets/images/Facility/360/1.jpg',
    title: "360° Full Bridge Ship Simulator",
    sub: "Simulation",
    href: "/facilities/ship-simulator",
  },
  {
    img: '/assets/images/Facility/semteb/Semateb.jpg',
    title: "Sedimentation & Erosion Management Test Basin",
    sub: "Testing",
    href: "/facilities/wave-basin",
  },
  {
    img: '/assets/images/Facility/ict.png',
    title: "Marine Engineering and ICT Laboratory",
    sub: "Digital",
    href: "/facilities/marine-ict-lab",
  },
  {
    img: '/assets/images/Facility/frl.png',
    title: "Field Research Laboratory",
    sub: "Research",
    href: "/facilities/field-research-lab",
  },
];

const productsItems = [
  { title: "Hydrometerology",img:'/assets/images/product/hydrometerology/Picture1.png',href: "/products/hydrometerology" },
  { title: "Survey Vessel",img:'/assets/images/product/USV-01-ASB/usv.jpg',href: "/products/survey-vessel" },
  { title: "Dredging System",img:'/assets/images/product/online-dredging/2.png',href: "/products/dredging-system" },
  { title: "Sagarmanthan",img:'/assets/images/product/sagarmanthan/sagar_1.png',href: "/products/sagarmanthan" },
  { title: "Smart Docking",img:'/assets/images/product/smart-docking/Picture2.png',href: "/products/smart-docking" },
  { title: "Keel Clearance",img:'/assets/images/product/keel-clearance/Picture2.png',href: "/products/keel-clearance" },
  { title: "JIT Vessel",img:'/assets/images/product/jit/Picture1.png',href: "/products/jit-vessel" },
  { title: "Indigenous VTS",img:'/assets/images/product/vessel-traffic/IVTS.jpeg',href: "/products/indigeneous-vts" },
  { title: "3D - VTMS",img:'/assets/images/product/3D-VTMS/Picture1.png',href: "/products/3d-vtms" },
  { title: "Command Center",img:'/assets/images/product/control-center/Picture1.png',href: "/products/command-center" },
  { title: "Digital Twin",img:'/assets/images/product/digital-twin/Digital Twin_1.gif',href: "/products/digital-twin" },
  { title: "Vessel Tracker",img:'/assets/images/product/vessel-tracker/Picture3.png',href: "/products/vessel-tracker" },
  { title: "Smart Port OS",img:'/assets/images/product/smart-port/Vessel Tracker.jpg',href: "/products/smart-port-os" },
  { title: "Marina AI",img:'/assets/images/product/marina-ai/MarinaAi.png',href: "/products/marina-ai" },
];

const moreItems = [
  { label: "Training & Education", href: "/training" },
  { label: "People", href: "/people" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Programs", href: "/programs" },
  { label: "Careers", href: "/careers" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function Chevron() {
  return <div className="chevron" />;
}

// ─── MOBILE ACCORDION ────────────────────────────────────────────────────────

function MobAccordion({ label, children, singleCol = false }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mob-accordion">
      <div
        className={`mob-trigger${open ? " active" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        {label} <i />
      </div>
      <div
        className={`mob-content${open ? " open" : ""}${singleCol ? " single-col" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Navbar() {
  const { theme, toggleTheme, changeFontSize } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef(null);
  const langRef = useRef(null);
  const path = window.location.pathname;
  const isActive = (href) =>
    href !== "#" && (path === href || path.startsWith(href + "/"));

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "ta", label: "தமிழ்" },
    { code: "te", label: "తెలుగు" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "ml", label: "മലയാളം" },
    { code: "mr", label: "मराठी" },
    { code: "bn", label: "বাংলা" },
    { code: "gu", label: "ગુજરાતી" },
    { code: "pa", label: "ਪੰਜਾਬੀ" },
    { code: "or", label: "ଓଡ଼ିଆ" },
    { code: "ur", label: "اردو" },
  ];

  const [activeLang, setActiveLang] = useState(
    () => localStorage.getItem("ntcpwc-lang") || "en",
  );

  // Trigger Google Translate instantly via the hidden select element
  const applyGoogleTranslate = (code) => {
    // Try the combo select first (fastest)
    const sel = document.querySelector(".goog-te-combo");
    if (sel) {
      sel.value = code === "en" ? "" : code;
      sel.dispatchEvent(new Event("change"));
      return;
    }
    // Fallback: set cookie and reload once
    const exp = new Date(Date.now() + 365 * 864e5).toUTCString();
    document.cookie = `googtrans=/en/${code};expires=${exp};path=/`;
    document.cookie = `googtrans=/en/${code};expires=${exp};domain=${location.hostname};path=/`;
    window.location.reload();
  };

  const switchLang = (code) => {
    setActiveLang(code);
    localStorage.setItem("ntcpwc-lang", code);
    setLangOpen(false);
    if (code === "en") {
      // Restore to English
      const frame = document.querySelector(".goog-te-banner-frame");
      const restore = frame?.contentDocument?.querySelector(
        "#restoreButton, .restore",
      );
      if (restore) {
        restore.click();
        return;
      }
      const sel = document.querySelector(".goog-te-combo");
      if (sel) {
        sel.value = "";
        sel.dispatchEvent(new Event("change"));
        return;
      }
    }
    applyGoogleTranslate(code);
  };

  // On mount: reapply saved language if not English
  useEffect(() => {
    const saved = localStorage.getItem("ntcpwc-lang");
    if (saved && saved !== "en") {
      // Wait for Google Translate to initialise
      const attempt = () => {
        const sel = document.querySelector(".goog-te-combo");
        if (sel) {
          sel.value = saved;
          sel.dispatchEvent(new Event("change"));
        } else setTimeout(attempt, 500);
      };
      setTimeout(attempt, 800);
    }
  }, []);

  const currentLang = languages.find((l) => l.code === activeLang);

  return (
    <>
      {/* ── OVERLAY ── */}
      <div
        id="menu-overlay"
        className={menuOpen ? "open" : ""}
        onClick={closeMenu}
      />

      {/* ── HEADER ── */}
      <header ref={navRef}>
        <div className="nav-inner">
          {/* LOGO */}
          <a href="/" className="logo-box" onClick={closeMenu}>
            <img
              src={logoLight}
              className="nav-logo-img logo-light"
              alt="NTCPWC Logo"
            />
            <img
              src={logoDark}
              className="nav-logo-img logo-dark"
              alt="NTCPWC Logo"
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="right-group">
            <ul className="nav-main">
              <li>
                <a
                  href="/"
                  className={isActive("/") && path === "/" ? "accent-link" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={isActive("/about") ? "accent-link" : ""}
                >
                  About
                </a>
              </li>

              {/* Facilities mega */}
              <li>
                <a
                  href="/facilities"
                  className={isActive("/facilities") ? "accent-link" : ""}
                >
                  Facilities <Chevron />
                </a>
                <div className="mega-menu mega-facility">
                  {facilitiesItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="menu-item"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = item.href;
                      }}
                    >
                      <img
                        src={item.img}
                        className="item-img"
                        alt={item.title}
                      />
                      <div className="item-text">
                        <h4>{item.title}</h4>
                        {item.sub && <p>{item.sub}</p>}
                      </div>
                    </a>
                  ))}
                </div>
              </li>

              <li>
                <a
                  href="/services"
                  className={isActive("/services") ? "accent-link" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className={isActive("/research") ? "accent-link" : ""}
                >
                  Research
                </a>
              </li>

              {/* Products mega */}
              <li>
                <a
                  href="/products"
                  className={isActive("/products") ? "accent-link" : ""}
                >
                  Products <Chevron />
                </a>
                <div className="mega-menu mega-products">
                  {productsItems.map((item) => (
                    <a key={item.title} href={item.href} className="menu-item">
                      <img
                        src={item.img}
                        className="item-img"
                        alt={item.title}
                      />
                      <div className="item-text">
                        <h4>{item.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </li>

              {/* More dropdown */}
              <li>
                <a
                  href="#"
                  className={
                    [
                      "/gallery",
                      "/media",
                      "/careers",
                      "/training",
                      "/programs",
                      "/people",
                    ].some((p) => path.startsWith(p))
                      ? "accent-link"
                      : ""
                  }
                >
                  More <Chevron />
                </a>
                <div className="standard-dropdown">
                  {moreItems.map((item) => (
                    <a key={item.label} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                  <a href="/login" className="staff-login-btn">
                    Staff Login
                  </a>
                </div>
              </li>
            </ul>

            {/* DESKTOP ACCESSIBILITY UTILS */}
            <div className="nav-utils">
              <button
                className="util-btn"
                onClick={() => changeFontSize(-2)}
                title="Decrease font size"
              >
                A-
              </button>
              <button
                className="util-btn"
                onClick={() => changeFontSize("reset")}
                title="Reset font size"
              >
                A
              </button>
              <button
                className="util-btn"
                onClick={() => changeFontSize(2)}
                title="Increase font size"
              >
                A+
              </button>
              <button
                className="util-btn theme-btn"
                onClick={toggleTheme}
                title={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                {theme === "light" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="15"
                    height="15"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path
                      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>

              {/* LANGUAGE SWITCHER */}
              <div className="lang-wrap" ref={langRef}>
                <button
                  className="util-btn lang-btn"
                  onClick={() => setLangOpen((o) => !o)}
                  title="Change language"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="12"
                    height="12"
                  >
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 1.5c.98 0 2.05.87 2.84 2.5H7.16C7.95 4.37 9.02 3.5 10 3.5zm-3.2 4h6.4c.16.63.25 1.3.25 2s-.09 1.37-.25 2H6.8A10.6 10.6 0 016.55 9.5c0-.7.09-1.37.25-2zm-3.54 0h1.9a12 12 0 000 4h-1.9A6.53 6.53 0 013 9.5c0-.7.09-1.37.26-2zm10.58 0h1.9c.17.63.26 1.3.26 2s-.09 1.37-.26 2h-1.9a12 12 0 000-4zM7.16 13h5.68C12.05 14.63 11 15.5 10 15.5c-.98 0-2.05-.87-2.84-2.5z" />
                  </svg>
                  <span className="lang-btn__label">{currentLang?.label}</span>
                </button>
                {langOpen && (
                  <div className="lang-dropdown">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        className={`lang-option ${activeLang === l.code ? "lang-option--active" : ""}`}
                        onClick={() => switchLang(l.code)}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* HAMBURGER */}
          <div
            className={`hamburger${menuOpen ? " open" : ""}`}
            id="ham-trigger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <nav
        id="mobile-nav"
        className={menuOpen ? "open" : ""}
        aria-hidden={!menuOpen}
      >
        <div className="mob-menu-container">
          <a href="/" className="mob-link home-link" onClick={closeMenu}>
            Home
          </a>
          <a href="/about" className="mob-link" onClick={closeMenu}>
            About Us
          </a>

          <MobAccordion label="Facilities">
            {facilitiesItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="mob-sub-item"
                onClick={closeMenu}
              >
                {item.title}
              </a>
            ))}
          </MobAccordion>

          <a href="/services" className="mob-link" onClick={closeMenu}>
            Services
          </a>
          <a href="/research" className="mob-link" onClick={closeMenu}>
            Research
          </a>

          <MobAccordion label="Products">
            {productsItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="mob-sub-item"
                onClick={closeMenu}
              >
                {item.title}
              </a>
            ))}
          </MobAccordion>

          <MobAccordion label="More Resources" singleCol>
            {moreItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mob-sub-item"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </MobAccordion>
        </div>

        {/* MOBILE FOOTER (A11Y + LOGIN) */}
        <div className="mob-footer">
          <div className="mob-acc-grid">
            <button className="mob-btn" onClick={() => changeFontSize(-2)}>
              A-
            </button>
            <button className="mob-btn" onClick={() => changeFontSize("reset")}>
              A
            </button>
            <button className="mob-btn" onClick={() => changeFontSize(2)}>
              A+
            </button>
            <button
              className="mob-btn"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
          <button className="mob-btn staff-login-mobile" onClick={closeMenu}>
            Staff Login
          </button>
        </div>
      </nav>
    </>
  );
}
