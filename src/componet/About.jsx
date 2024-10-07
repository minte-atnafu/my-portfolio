import aboutImg from "../assets/porfolio.jpg";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="w-64 h-64 rounded-full " src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{duration:0.5}}
                    className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 max-w-xl py-6">
Hi, I’m Mintesinot, an Electrical and Computer Engineer with experience in full-stack web development and hardware projects. I’ve worked with technologies like React, Node.js, and MongoDB, and I have hands-on experience coding microcontrollers and processors in C and assembly. I’m currently exploring machine learning to tackle complex problems and using drones to solve engineering challenges in agriculture. My unique skill is combining software and hardware to create efficient, scalable solutions. I’m always open to new collaborations, so feel free to reach out!</p>
                        </div> 
                    </motion.div>
            </div>
        </div>
    );
};

export default About;