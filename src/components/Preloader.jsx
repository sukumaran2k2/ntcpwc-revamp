import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Show for 2s, then slide up over 0.8s
    const fadeTimer   = setTimeout(() => setHiding(true), 1500);
    const removeTimer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "auto";
    }, 2100);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="preloader" className={hiding ? "hide-loader" : ""}>
      <div className="ship-section">
        <div className="ship-container">
          {/*
            Use <object> so the SVG runs its own embedded CSS animations.
            Place your SVG at: public/assets/ship-scene.svg
            Inside that SVG's <style> tag add the 4 keyframe blocks below.
          */}
          <object
            type="image/svg+xml"
            data="/assets/ship-scene.svg"
            className="ship-svg-obj"
            aria-label="NTCPWC Ship Scene"
          >
            {/* fallback */}
          </object>
        </div>
      </div>

      <div className="branding-footer">
        <img src="/assets/logo-light.png" alt="NTCPWC Logo" className="bottom-logo" />
        <div className="branding-text">
          National Technology Centre for Ports, Waterways and Coasts
        </div>
      </div>
    </div>
  );
}