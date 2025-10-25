import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'TriviaSwift — Interactive Full‑Stack Quiz Platform',
      description: 'TriviaSwift is an engaging, full-stack MERN trivia platform built for fast-paced and customizable quiz sessions. Users can test their knowledge across multiple categories and difficulties while competing in real time via a dynamic leaderboard and persistent multi-session state management.',
      period: 'Recent – Ongoing',
      technologies: ['React 19', 'Vite 7', 'Tailwind CSS v4', 'React Router DOM', 'Context API', 'Lucide React', 'Node.js', 'Express.js 4.21', 'MongoDB Atlas', 'Mongoose 7.8', 'JWT 9', 'bcryptjs 2.4'],
      achievements: [
        'Led a team of 7 developers in building a scalable MERN trivia platform with real-time gameplay and leaderboard',
        'Architected backend API structure and implemented /api/game/start logic for instant question serving',
        'Transitioned from static question sets to MongoDB dynamic querying with filtering algorithms',
        'Achieved sub-millisecond API response times and optimized frontend re-renders using React Context',
        'Implemented JWT-ready authentication and error-handling middleware for secure sessions',
        'Directed QA and documentation standards, ensuring clear, professional documentation'
      ],
      github: 'https://github.com/Evasive-6/TriviaSwift',
      live: 'https://trivia-swift.vercel.app/'
    },
    {
      title: 'Color Memory Challenge',
      description: 'A fun and engaging mini game app built with Django backend and React Native + Expo frontend. Test your memory by repeating increasingly complex color sequences!',
      period: 'Recent – Ongoing',
      technologies: ['Django', 'Django REST Framework', 'SQLite', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'NativeWind'],
      achievements: [
        'Developed a cross-platform mobile app deployable as APK with modern UI featuring gradients, animations, and smooth interactions',
        'Implemented user authentication for saving progress and score tracking',
        'Built responsive design ensuring seamless experience across devices',
        'Created RESTful APIs for game management and score submission',
        'Integrated Expo Router for efficient file-based routing in React Native'
      ],
      github: 'https://github.com/Evasive-6/game',
      live: 'https://expo.dev/accounts/eva1234/projects/frontend/builds/dafa94de-3340-464d-9a3b-e2af8deb2b78'
    },
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
      github: 'https://github.com/kalviumcommunity/S66_AlbinShiju_Capstone_EVA_Esports',
      live: 'https://eesports.netlify.app/'
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
      github: 'https://github.com/Evasive-6/ecom-web',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)'
                      }}
                    >
                      {tech}
                    </motion.span>
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
