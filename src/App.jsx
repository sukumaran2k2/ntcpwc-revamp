import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Preloader      from './components/Preloader';
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import CookieBanner   from './components/CookieBanner';
import NamiBot        from './components/NamiBot';

import Home           from './pages/Home';
import About          from './pages/About';
import Services       from './pages/Services';
import ServiceDetail  from './pages/ServiceDetail';
import Research       from './pages/Research';
import ResearchDetail  from './pages/ResearchDetail';
import Facilities     from './pages/Facilities';
import FacilityDetail from './pages/FacilityDetail';
import Training       from './pages/Training';
import Programs       from './pages/Programs';
import Media          from './pages/Media';
import Gallery        from './pages/Gallery';
import Careers        from './pages/Careers';
import People         from './pages/People';
import Products       from './pages/Products';
import ProductDetail  from './pages/ProductDetail';
import NotFound       from './pages/NotFound';
import Login          from './pages/Login';
import PrivacyPolicy  from './pages/PrivacyPolicy';
import TermsOfUse     from './pages/TermsOfUse';
import ServerError    from './pages/ServerError';

const KNOWN_ROUTES = [
  '/', '/about', '/services','/research' ,'/facilities','/training','/Programs',
  '/media', '/gallery', '/careers', '/people', '/products',
  '/privacy-policy', '/terms-of-use',
];

function Layout() {
  const { pathname } = useLocation();
  const [preloaderDone, setPreloaderDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const isLogin = pathname === '/login';
  const is500   = pathname === '/500';
  const is404 = !isLogin && !is500 && !KNOWN_ROUTES.includes(pathname) &&
    !pathname.startsWith('/services/') &&
    !pathname.startsWith('/research/') &&
    !pathname.startsWith('/facilities/') &&
    !pathname.startsWith('/training') &&
    !pathname.startsWith('/programs') &&
    !pathname.startsWith('/products/');

  const showChrome = !is404 && !isLogin && !is500;

  return (
    <>
      {showChrome && <Preloader />}
      {showChrome && <Navbar />}
      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/about"          element={<About />} />
          <Route path="/services"       element={<Services />} />
          <Route path="/services/:id"   element={<ServiceDetail />} />
          <Route path="/research"       element={<Research />} />
          <Route path="/research/:id"   element={<ResearchDetail />} />
          <Route path="/facilities"     element={<Facilities />} />
          <Route path="/facilities/:id" element={<FacilityDetail />} />
          <Route path="/training"     element={<Training />} />
          <Route path="/Programs"     element={<Programs />} />
          <Route path="/media"          element={<Media />} />
          <Route path="/gallery"        element={<Gallery />} />
          <Route path="/careers"        element={<Careers />} />
          <Route path="/people"         element={<People />} />
          <Route path="/products"       element={<Products />} />
          <Route path="/products/:id"   element={<ProductDetail />} />
          <Route path="/login"          element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/500"            element={<ServerError />} />
          <Route path="/terms-of-use"   element={<TermsOfUse />} />
          <Route path="*"               element={<NotFound />} />
        </Routes>
      </main>
      {showChrome && <Footer />}
      {showChrome && preloaderDone && <CookieBanner />}
      {showChrome && preloaderDone && <NamiBot />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;