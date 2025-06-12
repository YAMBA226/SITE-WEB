import { useInView } from 'react-intersection-observer';
import { useAnimation, Variant } from 'framer-motion';
import { useEffect } from 'react';

interface AnimationVariants {
  hidden: Variant;
  visible: Variant;
}

export function useScrollAnimation(threshold = 0.1, delay = 0) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: AnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay
      }
    }
  };

  return { ref, controls, variants };
}

export function useScrollAnimationLeft(threshold = 0.1, delay = 0) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: AnimationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay
      }
    }
  };

  return { ref, controls, variants };
}

export function useScrollAnimationRight(threshold = 0.1, delay = 0) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: AnimationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay
      }
    }
  };

  return { ref, controls, variants };
}

export function useScrollAnimationScale(threshold = 0.1, delay = 0) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants: AnimationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
        delay
      }
    }
  };

  return { ref, controls, variants };
}