import aboutImg from "../assets/porfolio.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
          <section id="about" className="min-h-screen pt-20">
        <div className="border-b border-neutral-900 pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="pt-20"
            >
                <h1 className="text-center text-5xl md:text-6xl font-thin mb-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Me</span>
                </h1>
                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                </div>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center px-8 lg:px-16 mt-16">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 lg:p-8 relative"
                >
                    <div className="flex items-center justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-all duration-300"></div>
                            <img 
                                className="relative w-64 h-64 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-amber-400 to-orange-500 p-1 z-10 hover:scale-105 transition-transform duration-300" 
                                src={aboutImg} 
                                alt="Mintesinot Atnafu" 
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 mt-12 lg:mt-0"
                >
                    <div className="flex justify-center lg:justify-start">
                        <div className="max-w-xl">
                            <motion.p 
                                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-medium">Hi, I'm Mintesinot</span>, an Electrical and Computer Engineer with a passion for bridging the digital and physical worlds through innovative technology solutions.
                            </motion.p>
                            
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                                    </div>
                                    <p className="ml-3 text-gray-300">
                                        Experienced in full-stack development with <span className="text-amber-300">React</span>, <span className="text-emerald-300">Node.js</span>, <span className="text-emerald-300">Django</span> and <span className="text-green-300">MongoDB</span>, <span className="text-green-300">PostgresSQL</span> creating scalable web applications.
                                    </p>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                                    </div>
                                    <p className="ml-3 text-gray-300">
                                        Proficient in embedded systems programming with <span className="text-blue-300">C</span> and <span className="text-purple-300">assembly</span> for microcontrollers and processors.
                                    </p>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                                    </div>
                                    <p className="ml-3 text-gray-300">
                                        Currently exploring <span className="text-pink-300">machine learning</span> applications and <span className="text-sky-300">AI technologies</span> to solve engineering challenges.
                                    </p>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
                                    </div>
                                    <p className="ml-3 text-gray-300">
                                        My unique strength lies in combining <span className="text-amber-200">software</span> and <span className="text-orange-300">hardware</span> expertise to create efficient, innovative solutions.
                                    </p>
                                </div>
                            </motion.div>
                            
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* <button className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                                    Let's Collaborate
                                </button> */}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            </div>
            </section>
    );
};

export default About;