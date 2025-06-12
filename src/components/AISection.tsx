import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Search, 
  Brain, 
  ArrowRight, 
  Cog, 
  Play 
} from 'lucide-react';

const AISection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const titleAnimation = useScrollAnimation();
  
  const steps = [
    {
      id: 1,
      title: "Détection",
      icon: <Search className="h-6 w-6" />,
      description: "Nos agents IA collectent et analysent en continu les données provenant de vos systèmes et de votre environnement.",
      animation: "Collecte et analyse de données en temps réel"
    },
    {
      id: 2,
      title: "Décision",
      icon: <Brain className="h-6 w-6" />,
      description: "L'intelligence artificielle traite les informations, identifie les patterns et prend des décisions basées sur des objectifs prédéfinis.",
      animation: "Traitement des données et prise de décision"
    },
    {
      id: 3,
      title: "Action",
      icon: <Cog className="h-6 w-6" />,
      description: "Les agents exécutent automatiquement les actions appropriées, optimisant les processus sans intervention humaine.",
      animation: "Exécution autonome d'actions optimisées"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Animation variants for the connecting lines
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="ai-section" className="section relative overflow-hidden bg-light-100 dark:bg-dark-800">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500" />
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-primary-500/10 dark:border-primary-500/5" />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="section-title"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2>Automatisation par IA</h2>
          <p>Découvrez comment nos agents IA autonomes révolutionnent l'automatisation des processus</p>
        </motion.div>

        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <motion.div
                className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {steps.map((step, index) => (
                  <React.Fragment key={step.id}>
                    <motion.div
                      className={`relative z-10 p-6 rounded-xl w-full md:w-1/3 cursor-pointer transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-neon' 
                          : 'bg-white dark:bg-dark-700 hover:shadow-lg'
                      }`}
                      variants={itemVariants}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <div className={`rounded-full p-3 ${
                          activeStep === index 
                            ? 'bg-white/20' 
                            : 'bg-primary-500/10 dark:bg-primary-500/20'
                        }`}>
                          <div className={activeStep === index ? 'text-white' : 'text-primary-500'}>
                            {step.icon}
                          </div>
                        </div>
                        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-light-200 dark:bg-dark-600 text-dark-800 dark:text-light-300">
                          {step.id}
                        </div>
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${activeStep === index ? 'text-white' : ''}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        activeStep === index 
                          ? 'text-white/90' 
                          : 'text-dark-700 dark:text-light-300'
                      }`}>
                        {step.description}
                      </p>
                    </motion.div>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden md:flex items-center">
                        <ArrowRight className="h-6 w-6 text-primary-500" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              className="relative bg-white dark:bg-dark-700 rounded-xl p-6 md:p-10 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                {steps[activeStep].animation}
              </h3>
              
              <div className="relative h-60 bg-dark-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <button className="h-16 w-16 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                      <Play className="h-8 w-8" />
                    </button>
                    <p className="mt-4 text-light-300">Regarder la démo</p>
                  </div>
                </div>
                
                {/* Animation placeholders based on step */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  {activeStep === 0 && (
                    <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full p-4">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-primary-500/50 rounded"
                          initial={{ opacity: 0.2 }}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.1 % 1
                          }}
                        />
                      ))}
                    </div>
                  )}
                  
                  {activeStep === 1 && (
                    <div className="relative w-full h-full">
                      <svg width="100%" height="100%" viewBox="0 0 800 400">
                        <motion.path
                          d="M100,200 C200,100 600,300 700,200"
                          fill="none"
                          stroke="#0062FF"
                          strokeWidth="4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: [0, 1, 0] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.circle
                          cx="100"
                          cy="200"
                          r="10"
                          fill="#0062FF"
                          initial={{ scale: 0.5 }}
                          animate={{ scale: [0.5, 1.2, 0.5] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        />
                        <motion.circle
                          cx="700"
                          cy="200"
                          r="10"
                          fill="#00F0FF"
                          initial={{ scale: 0.5 }}
                          animate={{ scale: [0.5, 1.2, 0.5] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        />
                      </svg>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="relative w-full h-full">
                      <svg width="100%" height="100%" viewBox="0 0 800 400">
                        <motion.path
                          d="M400,80 L400,320"
                          fill="none"
                          stroke="#0062FF"
                          strokeWidth="4"
                          variants={lineVariants}
                          initial="hidden"
                          animate="visible"
                        />
                        <motion.circle
                          cx="400"
                          cy="80"
                          r="20"
                          fill="#0062FF"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.circle
                          cx="400"
                          cy="320"
                          r="20"
                          fill="#00F0FF"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        />
                        <motion.circle
                          cx="400"
                          cy="200"
                          r="40"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-dark-700 dark:text-light-300">
                  {activeStep === 0 && "Les agents IA scannent et interprètent en permanence les données de votre environnement numérique, identifiant les motifs, anomalies et opportunités d'optimisation."}
                  {activeStep === 1 && "Grâce à des algorithmes avancés d'apprentissage automatique, nos agents IA évaluent les différentes options et déterminent le meilleur plan d'action selon des critères prédéfinis."}
                  {activeStep === 2 && "Sans nécessiter d'intervention humaine, les agents exécutent les tâches optimales, qu'il s'agisse d'automatiser des workflows, de résoudre des incidents ou d'optimiser des ressources."}
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="btn btn-primary">
              Discuter de votre projet d'automatisation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;