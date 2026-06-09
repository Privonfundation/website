import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './components/LanguageContext';

const AboutPage = lazy(() => import('./components/AboutPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/TermsAndConditions'));
const EthicsPage = lazy(() => import('./components/EthicsPage'));
const ContributionsPage = lazy(() => import('./components/ContributionsPage'));
const CommunityPage = lazy(() => import('./components/CommunityPage'));
const CrytoToolPage = lazy(() => import('./components/CrytoToolPage'));

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/ethics" element={<EthicsPage />} />
            <Route path="/contributions" element={<ContributionsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/crytotool" element={<CrytoToolPage />} />
          </Routes>
          </Suspense>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
