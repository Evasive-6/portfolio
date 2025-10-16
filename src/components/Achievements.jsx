import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'LeetCode Challenge',
      description: 'Completed the "100 Days of LeetCode" challenge',
      icon: FaTrophy,
      category: 'Coding'
    },
    {
      title: 'REST API Certification',
      description: 'Intermediate level certification in REST API development',
      icon: FaCertificate,
      category: 'Certification'
    },
    {
      title: 'Python Certification',
      description: 'Basic level certification in Python programming',
      icon: FaCertificate,
      category: 'Certification'
    },
    {
      title: 'Problem Solving Certification',
      description: 'Intermediate level certification in problem solving',
      icon: FaCertificate,
      category: 'Certification'
    }
  ];

  const extracurriculars = [
    'Enjoy solving chess puzzles',
    'Playing cricket',
    'Fishing in free time'
  ];

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Achievements & Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 text-center hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                borderColor: 'rgba(147, 51, 234, 0.5)'
              }}
            >
              <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <achievement.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
              <span className="text-purple-400 text-xs bg-purple-900 px-2 py-1 rounded-full">
                {achievement.category}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Extracurricular Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {extracurriculars.map((interest, index) => (
              <motion.div
                key={interest}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-300">{interest}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
