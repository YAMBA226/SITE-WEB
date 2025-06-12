import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Code, 
  Cloud, 
  Bot, 
  Cpu, 
  Shield, 
  BarChart, 
  ChevronRight 
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const titleAnimation = useScrollAnimation();
  
  const services: Service[] = [
    {
      id: 1,
      title: "Développement Web & Mobile",
      icon: <Code className="h-6 w-6 text-primary-500" />,
      description: "Création d'applications web et mobiles modernes, évolutives et performantes adaptées à vos besoins spécifiques.",
      features: [
        "Sites vitrines et institutionnels",
        "Applications web progressives (PWA)",
        "E-commerce et plateformes de réservation",
        "Applications mobiles natives et hybrides",
        "Interfaces utilisateur sur mesure (UI/UX)"
      ]
    },
    {
      id: 2,
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-primary-500" />,
      description: "Solutions cloud évolutives et sécurisées avec une infrastructure optimisée pour la performance et la fiabilité.",
      features: [
        "Migration vers le cloud (AWS, Azure, GCP)",
        "Architecture microservices",
        "CI/CD et automatisation des déploiements",
        "Gestion des conteneurs (Docker, Kubernetes)",
        "Monitoring et optimisation des performances"
      ]
    },
    {
      id: 3,
      title: "Agents Intelligents (IA)",
      icon: <Bot className="h-6 w-6 text-primary-500" />,
      description: "Développement d'agents IA autonomes qui automatisent vos processus métier et augmentent votre productivité.",
      features: [
        "Assistants virtuels personnalisés",
        "Automatisation des processus métier",
        "IA conversationnelle (chatbots)",
        "Traitement du langage naturel (NLP)",
        "Systèmes de recommandation intelligents"
      ]
    },
    {
      id: 4,
      title: "Domotique & IoT",
      icon: <Cpu className="h-6 w-6 text-primary-500" />,
      description: "Connectez votre environnement physique au monde numérique grâce à nos solutions IoT personnalisées.",
      features: [
        "Objets connectés sur mesure",
        "Systèmes domotiques intelligents",
        "Capteurs et monitoring industriel",
        "Applications de contrôle à distance",
        "Intégration IoT avec vos systèmes existants"
      ]
    },
    {
      id: 5,
      title: "Cybersécurité",
      icon: <Shield className="h-6 w-6 text-primary-500" />,
      description: "Protection de vos données et systèmes contre les menaces numériques avec des solutions de sécurité robustes.",
      features: [
        "Audit de sécurité et tests d'intrusion",
        "Mise en conformité (RGPD, ISO 27001)",
        "Sécurisation des applications et API",
        "Protection contre les cyberattaques",
        "Formation et sensibilisation à la sécurité"
      ]
    },
    {
      id: 6,
      title: "Conseil Technologique",
      icon: <BarChart className="h-6 w-6 text-primary-500" />,
      description: "Accompagnement stratégique pour votre transformation numérique et l'optimisation de vos systèmes d'information.",
      features: [
        "Stratégie de transformation digitale",
        "Architecture technique et fonctionnelle",
        "Optimisation des processus IT",
        "Veille technologique et innovation",
        "Formation et transfert de compétences"
      ]
    }
  ];

  const toggleService = (id: number) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <section id="services" className="section">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2>Nos Expertises</h2>
          <p>Solutions intelligentes et innovantes pour répondre à tous vos besoins technologiques</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`card overflow-hidden transition-all duration-300 ${
                activeService === service.id ? 'shadow-neon' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="p-8 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-primary-500/10 dark:bg-primary-500/20 p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-5 w-5 text-primary-500" />
                  </motion.div>
                </div>
                <p className="text-dark-700 dark:text-light-300 mb-4">
                  {service.description}
                </p>
              </div>
              
              <motion.div
                className="px-8 pb-8"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeService === service.id ? 'auto' : 0,
                  opacity: activeService === service.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="pt-2 border-t border-light-300 dark:border-dark-700">
                  <h4 className="text-lg font-medium mb-3">Nos services :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="text-dark-700 dark:text-light-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;