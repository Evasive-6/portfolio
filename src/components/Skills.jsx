import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      items: ['Python [Advanced]', 'JavaScript [Basic]', 'C++ [Intermediate]', 'Java [Basic]'],
      details: 'Proficient in Python for backend development, with solid foundations in other languages.'
    },
    {
      category: 'Frontend',
      color: 'from-green-500 to-emerald-500',
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native'],
      details: 'Experienced in building responsive and interactive user interfaces with modern frameworks, including mobile development.'
    },
    {
      category: 'Backend',
      color: 'from-purple-500 to-pink-500',
      items: ['Node.js', 'Express.js', 'Django', 'Fast API'],
      details: 'Skilled in server-side development and API creation using various frameworks including Node.js, Express, Django, and FastAPI.'
    },
    {
      category: 'Databases',
      color: 'from-orange-500 to-red-500',
      items: ['MongoDB', 'SQL'],
      details: 'Proficient in both NoSQL and SQL database design and management.'
    },
    {
      category: 'Tools & Frameworks',
      color: 'from-indigo-500 to-purple-500',
      items: ['Git & GitHub', 'Vercel', 'Netlify', 'Render', 'Postman', 'Bruno', 'Motion', 'Expo', 'Android Studio', 'Docker', 'Firebase'],
      details: 'Familiar with version control, deployment platforms, API testing tools, animation libraries, mobile development tools, and containerization.'
    },
    {
      category: 'APIs',
      color: 'from-teal-500 to-blue-500',
      items: ['Razorpay API', 'Gemini API'],
      details: 'Experience integrating third-party payment APIs for secure transactions and AI APIs for intelligent features.'
    }
  ];

  const toggleSkill = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => toggleSkill(index)}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{
                scale: 1.02,
                boxShadow: hoveredSkill === index ? '0 15px 40px rgba(147, 51, 234, 0.3)' : '0 10px 30px rgba(0,0,0,0.3)',
                borderColor: 'rgba(147, 51, 234, 0.5)'
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <motion.h3
                  className={`text-xl font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.category}
                </motion.h3>
                <motion.div
                  animate={{ rotate: expandedSkill === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedSkill === index ? <FaChevronUp className="text-purple-400" /> : <FaChevronDown className="text-purple-400" />}
                </motion.div>
              </div>

              {skill.category === 'Tools & Frameworks' ? (
                <div className="text-gray-300 mb-4 grid grid-cols-2 gap-4">
                  <ul>
                    {skill.items.slice(0, 5).map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                  <ul>
                    {skill.items.slice(5).map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        className="mb-1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + ((itemIndex + 5) * 0.05) }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ul className="text-gray-300 mb-4">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="mb-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </ul>
              )}

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedSkill === index ? 'auto' : 0,
                  opacity: expandedSkill === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 text-sm">{skill.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
