import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useScrollAnimationLeft, useScrollAnimationRight } from '../hooks/useScrollAnimation';
import { Rocket, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  const mainAnimation = useScrollAnimation();
  const missionAnimation = useScrollAnimationLeft(0.2, 0.2);
  const visionAnimation = useScrollAnimation(0.2, 0.4);
  const valuesAnimation = useScrollAnimationRight(0.2, 0.6);

  return (
    <section id="about" className="section bg-light-100 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          ref={mainAnimation.ref}
          initial="hidden"
          animate={mainAnimation.controls}
          variants={mainAnimation.variants}
        >
          <h2>À propos d'Inovex Solution</h2>
          <p>Une entreprise multidisciplinaire axée sur l'innovation et l'excellence technologique</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Mission */}
          <motion.div
            className="card p-8"
            ref={missionAnimation.ref}
            initial="hidden"
            animate={missionAnimation.controls}
            variants={missionAnimation.variants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-500/10 dark:bg-primary-500/20 p-3 rounded-full mr-4">
                <Rocket className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold">Notre Mission</h3>
            </div>
            <p className="text-dark-700 dark:text-light-300">
              Transformer les défis numériques en opportunités grâce à des solutions technologiques innovantes et sur mesure qui propulsent nos clients vers l'avenir.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="card p-8"
            ref={visionAnimation.ref}
            initial="hidden"
            animate={visionAnimation.controls}
            variants={visionAnimation.variants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-500/10 dark:bg-primary-500/20 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold">Notre Vision</h3>
            </div>
            <p className="text-dark-700 dark:text-light-300">
              Devenir le partenaire technologique privilégié des entreprises visionnaires, en créant un avenir numérique plus intelligent, plus connecté et plus sécurisé.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="card p-8"
            ref={valuesAnimation.ref}
            initial="hidden"
            animate={valuesAnimation.controls}
            variants={valuesAnimation.variants}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-500/10 dark:bg-primary-500/20 p-3 rounded-full mr-4">
                <Zap className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold">Nos Valeurs</h3>
            </div>
            <ul className="text-dark-700 dark:text-light-300 space-y-2">
              <li>• Innovation constante</li>
              <li>• Excellence technique</li>
              <li>• Intégrité et transparence</li>
              <li>• Approche collaborative</li>
              <li>• Impact positif</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-dark-700 dark:text-light-300 max-w-3xl mx-auto mb-8">
            Depuis notre création, nous aidons nos clients à naviguer dans l'écosystème technologique complexe avec des solutions sur mesure qui répondent précisément à leurs besoins.
          </p>
          <a href="#services" className="btn btn-outline">
            Découvrir nos expertises
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;