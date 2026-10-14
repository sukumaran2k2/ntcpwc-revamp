import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

export function AppProvider({ children }) {

  /* ── THEME ── */
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('ntcpwc-theme') || 'light'
  );
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ntcpwc-theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  /* ── FONT SIZE ── */
  const [fontSize, setFontSize] = useState(() =>
    parseInt(localStorage.getItem('ntcpwc-fontsize') || '16', 10)
  );
  useEffect(() => {
    document.documentElement.style.setProperty('--fs-base', fontSize + 'px');
    document.documentElement.style.fontSize = fontSize + 'px';
    localStorage.setItem('ntcpwc-fontsize', fontSize);
  }, [fontSize]);
  const changeFontSize = (delta) => {
    if (delta === 'reset') { setFontSize(16); return; }
    setFontSize(fs => Math.min(Math.max(fs + delta, 12), 24));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, fontSize, changeFontSize }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);