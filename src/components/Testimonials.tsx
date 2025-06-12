import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Shield, Lock, Fingerprint, Server } from 'lucide-react';

interface SecurityFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SecurityConfidentiality: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const titleAnimation = useScrollAnimation();

  const securityFeatures: SecurityFeature[] = [
    {
      id: 1,
      title: "Chiffrement de bout en bout",
      description: "Toutes vos données sont chiffrées en transit et au repos avec des algorithmes de pointe (AES-256). Nous garantissons que seuls vous et les destinataires autorisés pouvez accéder à vos informations sensibles.",
      icon: <Lock className="h-8 w-8 text-primary-500" />
    },
    {
      id: 2,
      title: "Authentification renforcée",
      description: "Protégez vos accès avec notre système d'authentification multi-facteurs (MFA) et biométrique. Nous supportons les clés de sécurité physiques, les applications d'authentification et la reconnaissance faciale.",
      icon: <Fingerprint className="h-8 w-8 text-primary-500" />
    },
    {
      id: 3,
      title: "Infrastructure sécurisée",
      description: "Notre infrastructure cloud est hébergée dans des centres de données certifiés ISO 27001 et SOC 2. Des pare-feux de dernière génération et des systèmes de détection d'intrusion surveillent en permanence nos réseaux.",
      icon: <Server className="h-8 w-8 text-primary-500" />
    },
    {
      id: 4,
      title: "Conformité réglementaire",
      description: "Nous respectons les réglementations les plus strictes (RGPD, HIPAA, PCI-DSS) et effectuons des audits de sécurité réguliers. Nos politiques de confidentialité sont transparentes et vous gardez le contrôle total sur vos données.",
      icon: <Shield className="h-8 w-8 text-primary-500" />
    }
  ];

  const nextFeature = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % securityFeatures.length);
    setAutoplay(false);
  };

  const prevFeature = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? securityFeatures.length - 1 : prev - 1));
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % securityFeatures.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, securityFeatures.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0
    })
  };

  return (
    <section id="security" className="section">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2>Sécurité & Confidentialité</h2>
          <p>Notre engagement pour la protection de vos données et la confidentialité de vos informations</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mt-12">
          <div className="absolute top-0 left-0 -z-10 opacity-10">
            <Shield className="h-24 w-24 text-primary-500" />
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-dark-800 shadow-lg p-6 sm:p-10 min-h-[350px] sm:min-h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-full sm:w-1/3 flex flex-col items-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary-100 dark:bg-primary-900/50 mb-4">
                    {securityFeatures[current].icon}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-center">{securityFeatures[current].title}</h3>
                </div>
                
                <div className="w-full sm:w-2/3">
                  <p className="text-dark-700 dark:text-light-300 leading-relaxed">
                    {securityFeatures[current].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            {securityFeatures.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-primary-500 w-6'
                    : 'bg-dark-300 dark:bg-dark-600 hover:bg-primary-400'
                }`}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                  setAutoplay(false);
                }}
                aria-label={`Voir la fonctionnalité ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <button
              className="h-10 w-10 rounded-full bg-white dark:bg-dark-700 shadow-md flex items-center justify-center text-dark-800 dark:text-light-300 hover:text-primary-500 pointer-events-auto transition-all duration-300 hover:scale-110"
              onClick={prevFeature}
              aria-label="Fonctionnalité précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="h-10 w-10 rounded-full bg-white dark:bg-dark-700 shadow-md flex items-center justify-center text-dark-800 dark:text-light-300 hover:text-primary-500 pointer-events-auto transition-all duration-300 hover:scale-110"
              onClick={nextFeature}
              aria-label="Fonctionnalité suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityConfidentiality;