import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiTypescript, SiDocker, SiDjango, SiGithub } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10, opacity: 0 },
    animate: {
        y: [10, -10],
        opacity: 1,
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
});

const techStack = [
    { icon: <RiReactjsLine className="text-6xl" />, name: "React", color: "text-cyan-400", duration: 2.5 },
    { icon: <TbBrandNextjs className="text-6xl" />, name: "Next.js", color: "text-white", duration: 3 },
    { icon: <SiTypescript className="text-6xl" />, name: "TypeScript", color: "text-blue-500", duration: 3.5 },
    { icon: <SiTailwindcss className="text-6xl" />, name: "Tailwind", color: "text-sky-400", duration: 2 },
    { icon: <FaNodeJs className="text-6xl" />, name: "Node.js", color: "text-green-500", duration: 4 },
    { icon: <SiDjango className="text-6xl" />, name: "Django", color: "text-emerald-500", duration: 3.5 },
    { icon: <SiMongodb className="text-6xl" />, name: "MongoDB", color: "text-green-500", duration: 3.2 },
    { icon: <BiLogoPostgresql className="text-6xl" />, name: "PostgreSQL", color: "text-sky-600", duration: 4.5 },
    { icon: <DiRedis className="text-6xl" />, name: "Redis", color: "text-red-500", duration: 2.8 },
    { icon: <SiDocker className="text-6xl" />, name: "Docker", color: "text-blue-400", duration: 3.7 },
    { icon: <FaPython className="text-6xl" />, name: "Python", color: "text-yellow-400", duration: 4.2 },
    { icon: <SiGithub className="text-6xl" />, name: "GitHub", color: "text-gray-200", duration: 3.0 },
];

const Technologies = () => {
    return (
         <section id="technologies" className="min-h-screen pt-20">
        <div className="border-b border-neutral-800 pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="pt-20"
            >
                <h1 className="text-center text-5xl md:text-6xl font-thin mb-4">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Stack</span>
                </h1>
                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-16"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-8"
            >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(tech.duration)}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        className="group relative"
                    >
                        <div className={`rounded-2xl p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-${tech.color.split('-')[1]}-400/30 transition-all duration-300 h-full flex flex-col items-center justify-center`}>
                            <div className={`${tech.color} mb-2`}>
                                {tech.icon}
                            </div>
                            <p className="text-white text-center font-medium mt-2">{tech.name}</p>
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-400 text-lg">And many more technologies in my toolkit</p>
                <p className="text-gray-500 mt-2">Always learning and expanding my skills</p>
            </motion.div>
            </div>
            </section>
    );
};

export default Technologies;