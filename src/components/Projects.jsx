import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Eva Esports',
      description: 'A full-stack esports tournament platform for players to register teams or join teams and compete in tournaments.',
      period: 'April 2025 – August 2025',
      technologies: ['React', 'Express.js', 'MongoDB', 'Firebase Auth', 'JWT'],
      achievements: [
        'Built a scalable registration and tournament management system for three major esports titles',
        'Integrated Firebase Authentication with JWT, leading to a 60% reduction in unauthorized access',
        'Designed robust backend schemas and logic to support 150+ teams and 50+ matches',
        'Enabled match tracking and scheduling admin operations'
      ],
      github: 'https://github.com/albinshiju/eva-esports',
      live: '#'
    },
    {
      title: 'Ecom Web',
      description: 'A full-stack scalable Ecommerce website for customers and sellers to sell and buy products.',
      period: 'July 2025 – August 2025',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Razorpay API'],
      achievements: [
        'Added a modular MERN-based e-commerce platform, enabling a 40% faster feature deployment cycle',
        'Implemented JWT-secured role-based access, reducing unauthorized access incidents by 70%',
        'Developed product management tools with full CRUD operations, live stock tracking, and advanced filtering',
        'Made a responsive cart and checkout system using React & CSS, reducing mobile checkout drop-offs by 25%',
        'Integrated Razorpay API for secure payments with instant feedback and fallback handling',
        'Engineered RESTful APIs for order processing, authentication, and admin operations',
        'Implemented optimistic UI updates on cart actions, improving perceived speed and user satisfaction'
      ],
      github: 'https://github.com/albinshiju/ecom-web',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-400 mb-4">{project.period}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                </div>

                <div className="flex gap-4 mt-4 lg:mt-0">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      className="text-gray-300 flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="text-purple-400 mr-2">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
