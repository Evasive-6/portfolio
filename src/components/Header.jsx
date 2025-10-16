import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaCode, FaProjectDiagram, FaGraduationCap, FaTrophy, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', icon: FaHome, href: '#home' },
    { name: 'Skills', icon: FaCode, href: '#skills' },
    { name: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { name: 'Education', icon: FaGraduationCap, href: '#education' },
    { name: 'Achievements', icon: FaTrophy, href: '#achievements' },
    { name: 'Contact', icon: FaEnvelope, href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-gradient-to-r from-black/90 via-purple-900/80 to-black/90 backdrop-blur-md z-50 border-b border-purple-500/20"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Albin Shiju
        </motion.h1>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{
                scale: 1.1,
                color: '#8b5cf6',
                textShadow: '0 0 8px rgba(139, 92, 246, 0.5)'
              }}
              className="flex items-center gap-2 text-white hover:text-purple-400 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                animate={item.name === 'Home' ? {
                  textShadow: ['0 0 8px rgba(139, 92, 246, 0.3)', '0 0 12px rgba(139, 92, 246, 0.6)', '0 0 8px rgba(139, 92, 246, 0.3)']
                } : {}}
                transition={item.name === 'Home' ? {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                } : {}}
              >
                <item.icon className="text-lg group-hover:text-purple-400 transition-colors" />
              </motion.div>
              <span>{item.name}</span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 py-3 text-white hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-lg" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
