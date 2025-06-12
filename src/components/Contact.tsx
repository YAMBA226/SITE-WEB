import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Check,
  Loader2
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const titleAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation(0.1, 0.2);
  const infoAnimation = useScrollAnimation(0.1, 0.4);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary-500" />,
      title: "Email",
      content: (
        <a 
          href="mailto:inovex-solution@gmail.com" 
          className="hover:text-primary-500 transition-colors"
        >
          inovex-solution@gmail.com
        </a>
      )
    },
    {
      icon: <Phone className="h-5 w-5 text-primary-500" />,
      title: "Téléphone",
      content: (
        <a 
          href="tel:+22654487985" 
          className="hover:text-primary-500 transition-colors"
        >
          +226 54 48 79 85
        </a>
      )
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary-500" />,
      title: "Adresse",
      content: "Ouaga 2000, 01 BP 120, OUAGADOUGOU"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "#"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "#"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      url: "#"
    }
  ];

  const subjects = [
    "Développement Web & Mobile",
    "Cloud & DevOps",
    "Agents Intelligents (IA)",
    "Domotique & IoT",
    "Cybersécurité",
    "Conseil Technologique",
    "Autre sujet"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          ref={titleAnimation.ref}
          initial="hidden"
          animate={titleAnimation.controls}
          variants={titleAnimation.variants}
        >
          <h2 className="text-4xl font-bold mb-4 text-dark-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons comment nous pouvons vous aider
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            ref={infoAnimation.ref}
            initial="hidden"
            animate={infoAnimation.controls}
            variants={infoAnimation.variants}
          >
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-dark-900 dark:text-white">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-dark-800 dark:text-gray-200">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium mb-4 text-dark-800 dark:text-gray-200">
                  Suivez-nous
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="h-10 w-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            ref={formAnimation.ref}
            initial="hidden"
            animate={formAnimation.controls}
            variants={formAnimation.variants}
          >
            {submitted ? (
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-dark-900 dark:text-white">
                  Message envoyé!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Merci pour votre message. Nous vous répondrons rapidement.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-semibold mb-8 text-dark-900 dark:text-white">
                  Envoyez-nous un message
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject.toLowerCase().replace(/\s+/g, '-')}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      'Envoyer le message'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;