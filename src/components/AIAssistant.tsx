import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      content: 'Bonjour 👋 Je suis l\'assistant virtuel d\'Inovex Solution. Comment puis-je vous aider aujourd\'hui?',
      timestamp: new Date()
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleOpen = () => {
    if (isMinimized) {
      setIsMinimized(false);
    }
    setIsOpen(!isOpen);
  };
  
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message
    const newUserMessage = {
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Merci pour votre message ! Un membre de notre équipe vous contactera bientôt.",
        "Pour vous aider au mieux, pourriez-vous me donner plus de détails ?",
        "Souhaitez-vous planifier un appel avec notre équipe ?",
        "Je serais ravi de vous mettre en contact avec un spécialiste.",
        "Voulez-vous en savoir plus sur nos solutions ?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage = {
        type: 'bot',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all ${isOpen ? 'rotate-0' : 'rotate-0'}`}
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-24 right-8 z-30 w-full max-w-sm bg-white dark:bg-dark-800 rounded-xl shadow-xl overflow-hidden flex flex-col ${isMinimized ? 'h-16' : 'h-[500px]'}`}
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              height: isMinimized ? 64 : 500
            }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary-500 text-white">
              <div className="flex items-center">
                <div className="mr-3 bg-white/20 rounded-full p-2">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Assistant Inovex</h3>
                  <div className="flex items-center text-xs">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                    <span>En ligne</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  onClick={toggleMinimize}
                  aria-label={isMinimized ? "Agrandir" : "Réduire"}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  onClick={toggleOpen}
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Messages area */}
            {!isMinimized && (
              <>
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.type === 'user'
                              ? 'bg-primary-500 text-white'
                              : 'bg-light-200 dark:bg-dark-700 text-dark-800 dark:text-light-300'
                          }`}
                        >
                          <p>{message.content}</p>
                          <div
                            className={`text-xs mt-1 ${
                              message.type === 'user' ? 'text-white/70' : 'text-dark-500 dark:text-light-400'
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                
                {/* Input area - Fixed at bottom */}
                <div className="p-4 border-t border-light-300 dark:border-dark-700 bg-white dark:bg-dark-800">
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleInputChange}
                      placeholder="Écrivez votre message..."
                      className="flex-1 px-4 py-2 bg-light-100 dark:bg-dark-700 border border-light-300 dark:border-dark-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      aria-label="Message input"
                    />
                    <button
                      type="submit"
                      className="h-10 w-10 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors"
                      aria-label="Envoyer"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;