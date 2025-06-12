import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AISection from './components/AISection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import BackgroundParticles from './components/BackgroundParticles';
import ScrollToTop from './components/ScrollToTop';

import Login from './Login';
import AdminDashboard from './admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const MainContent = () => (
  <>
    <BackgroundParticles />
    <Header />
    <main className="relative z-10"> {/* Ajout de z-index pour le contenu principal */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <AISection />
      <Contact />
    </main>
    <Footer />
    <AIAssistant />
    <ScrollToTop />
  </>
);

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="scroll-indicator fixed top-0 left-0 h-1 bg-green-500 z-50" 
        style={{ width: `${scrollProgress}%` }}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;