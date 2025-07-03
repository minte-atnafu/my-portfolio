import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
    return (
        <section id="projects" className="min-h-screen pt-20">
        <div className="border-b border-neutral-900 pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="pt-20"
            >
                <h1 className="text-center text-5xl md:text-6xl font-thin mb-4">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Projects</span>
                </h1>
                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-16"></div>
                </div>
            </motion.div>

            <div className="px-4 md:px-8 lg:px-16">
                {PROJECTS && PROJECTS.length > 0 ? (
                    PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-16 group"
                        >
                            <div className="flex flex-col lg:flex-row gap-8 items-start bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-blue-400/30">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                    className="w-full lg:w-1/3 overflow-hidden rounded-xl"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-cover rounded-xl shadow-lg group-hover:shadow-blue-400/20 transition-shadow duration-300"
                                    />
                                </motion.div>
                                
                                <div className="w-full lg:w-2/3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-cyan-300 transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    
                                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-blue-300 border border-blue-400/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors group/github"
                                        >
                                            <svg className="w-5 h-5 mr-2 group-hover/github:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                            </svg>
                                            View on GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-400 text-xl">No projects available yet</p>
                        <p className="text-gray-500 mt-2">Check back soon for updates!</p>
                    </motion.div>
                )}
            </div>
            </div>
            </section>
    );
};

export default Project;