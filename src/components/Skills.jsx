import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const skills = [
    {
      category: 'Languages',
      items: ['Python [Advanced]', 'JavaScript [Basic]', 'C++ [Intermediate]', 'Java [Basic]'],
      details: 'Proficient in Python for backend development, with solid foundations in other languages.'
    },
    {
      category: 'Frontend',
      items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      details: 'Experienced in building responsive and interactive user interfaces with modern frameworks.'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js'],
      details: 'Skilled in server-side development and API creation using Node.js and Express.'
    },
    {
      category: 'Databases',
      items: ['MongoDB'],
      details: 'Proficient in NoSQL database design and management with MongoDB.'
    },
    {
      category: 'Tools & Frameworks',
      items: ['Git & GitHub', 'Vercel', 'Netlify', 'Render', 'Postman', 'Bruno'],
      details: 'Familiar with version control, deployment platforms, and API testing tools.'
    },
    {
      category: 'APIs',
      items: ['Razorpay API'],
      details: 'Experience integrating third-party payment APIs for secure transactions.'
    }
  ];

  const toggleSkill = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleSkill(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                {expandedSkill === index ? <FaChevronUp className="text-purple-400" /> : <FaChevronDown className="text-purple-400" />}
              </div>

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
