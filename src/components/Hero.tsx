import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent dark:from-primary-500/10 dark:to-transparent" />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="text-dark-900 dark:text-white">L'intelligence au service de vos </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              ambitions numériques
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-dark-700 dark:text-light-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Nous concevons des solutions technologiques innovantes et sur mesure pour transformer votre vision en réalité. Du développement web à l'intelligence artificielle, en passant par la cybersécurité.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <a 
              href="#services" 
              className="btn btn-primary shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Découvrir nos solutions
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <a href="#about" aria-label="Défiler vers le bas">
              <ChevronDown className="h-8 w-8 text-primary-500" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;