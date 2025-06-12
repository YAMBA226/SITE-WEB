import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

type Filter = 'all' | 'web' | 'mobile' | 'ai' | 'iot' | 'cloud';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const titleAnimation = useScrollAnimation();

  const projects: Project[] = [
    {
      id: 1,
      title: "Plateforme E-commerce NextGen",
      category: "web",
      description: "Plateforme e-commerce ultra-performante avec intégration IA pour recommandations personnalisées et expérience utilisateur optimisée.",
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "Application Mobile de Santé Connectée",
      category: "mobile",
      description: "Application mobile qui connecte les patients à leurs appareils médicaux IoT et fournit des analyses en temps réel.",
      imageUrl: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React Native", "Firebase", "TensorFlow", "Bluetooth LE"]
    },
    {
      id: 3,
      title: "Système Prédictif pour Industrie",
      category: "ai",
      description: "Solution d'IA prédictive qui anticipe les pannes de machines industrielles et optimise la maintenance préventive.",
      imageUrl: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"]
    },
    {
      id: 4,
      title: "Smart Home Hub",
      category: "iot",
      description: "Système central de domotique intégrant tous les appareils connectés de la maison avec contrôle vocal et automatisation.",
      imageUrl: "https://images.pexels.com/photos/1358816/pexels-photo-1358816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Raspberry Pi", "Node.js", "MQTT", "Google Assistant"]
    },
    {
      id: 5,
      title: "Plateforme SaaS Multi-tenant",
      category: "cloud",
      description: "Infrastructure cloud évolutive pour application SaaS avec isolation des données et haute disponibilité.",
      imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["AWS", "Kubernetes", "Terraform", "Microservices"]
    },
    {
      id: 6,
      title: "Assistant Virtuel d'Entreprise",
      category: "ai",
      description: "Assistant IA capable d'automatiser les tâches administratives et de répondre aux questions des employés.",
      imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["GPT-4", "Python", "NLP", "React"]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-light-100 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2>Nos Projets Récents</h2>
          <p>Découvrez nos réalisations et les solutions sur mesure que nous avons développées pour nos clients</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {(['all', 'web', 'mobile', 'ai', 'iot', 'cloud'] as Filter[]).map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300 hover:bg-light-300 dark:hover:bg-dark-600'
              }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'Tous' : 
               category === 'web' ? 'Web' : 
               category === 'mobile' ? 'Mobile' : 
               category === 'ai' ? 'IA' : 
               category === 'iot' ? 'IoT' : 'Cloud'}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="card overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <a href="#" className="flex items-center justify-center w-full text-white font-medium">
                        <span className="mr-2">Voir le projet</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="text-xs font-medium bg-primary-500/10 text-primary-500 px-2 py-1 rounded">
                      {project.category === 'web' ? 'Web' : 
                       project.category === 'mobile' ? 'Mobile' : 
                       project.category === 'ai' ? 'IA' : 
                       project.category === 'iot' ? 'IoT' : 'Cloud'}
                    </span>
                  </div>
                  <p className="text-dark-700 dark:text-light-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-light-200 dark:bg-dark-700 text-dark-700 dark:text-light-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;