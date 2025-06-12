import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const controls = useAnimation();
  
  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Sécurité & Confidentialité', href: '#testimonials' },
    { name: 'IA', href: '#ai-section' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({
        backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.1)',
        height: '70px',
      });
    } else {
      controls.start({
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0px)',
        boxShadow: 'none',
        height: '80px',
      });
    }
  }, [scrolled, controls, theme]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: 'transparent' }}
      animate={controls}
    >
      <div className="container-custom flex items-center justify-between h-full">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-dark-800" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-dark-800" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 transition-colors duration-300"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-dark-800 dark:text-light-300" />
            ) : (
              <Menu className="h-6 w-6 text-dark-800 dark:text-light-300" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div
        className={`fixed inset-0 z-40 bg-white dark:bg-dark-900 pt-24 px-6 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <nav>
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-xl font-heading font-medium text-dark-800 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;