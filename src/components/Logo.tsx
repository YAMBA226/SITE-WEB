import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Layers } from 'lucide-react';

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const circleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      yoyo: Infinity
    }
  }
};

const Logo: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="relative mr-2" 
        variants={logoVariants}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-70 blur-sm"
          variants={circleVariants}
        />
        <div className="relative bg-light-50 dark:bg-dark-800 rounded-full p-2">
          <Layers className="h-6 w-6 text-primary-500" />
        </div>
      </motion.div>
      <motion.div variants={logoVariants}>
        <span className="font-heading text-xl font-bold text-dark-900 dark:text-white">
          Inovex<span className="text-primary-500">Solution</span>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;