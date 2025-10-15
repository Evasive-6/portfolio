import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const contactInfo = [
    { icon: FaEnvelope, text: 'albinshiju@example.com', href: 'mailto:albinshiju@example.com' },
    { icon: FaPhone, text: '+91 12345 67890', href: 'tel:+911234567890' },
    { icon: FaGithub, text: 'github.com/albinshiju', href: 'https://github.com/albinshiju' },
    { icon: FaLinkedin, text: 'linkedin.com/in/albinshiju', href: 'https://linkedin.com/in/albinshiju' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.text}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <contact.icon className="text-purple-400 text-3xl mb-4 mx-auto group-hover:text-purple-300 transition-colors" />
              <p className="text-gray-300 group-hover:text-white transition-colors">{contact.text}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © 2024 Albin Shiju. Built with React, Vite, and lots of ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
