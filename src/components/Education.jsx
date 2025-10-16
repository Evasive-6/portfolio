import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science (Software Product Engineering)",
      institution: "Kalvium's UG program",
      period: "2024-2028",
      details: "Campus: Jalandhar | Bachelor’s enrollment: B.Tech CSE, Lovely Professional University"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                borderColor: 'rgba(147, 51, 234, 0.5)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-purple-400 text-lg mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.period}</p>
                  <p className="text-gray-300">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
