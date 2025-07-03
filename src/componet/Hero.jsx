import React from 'react';
import photo from '../assets/DSC_0214 copy.jpg';
import { motion } from "framer-motion";

// Enhanced container animation
const container = (delay) => ({
  hidden: { 
    x: -100, 
    opacity: 0,
    filter: 'blur(4px)'
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: delay 
    },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full lg:w-1/2 px-8 lg:px-16'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className='pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
              Mintesinot Atnafu
            </motion.h1>
            
            <motion.span 
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className='text-3xl tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-yellow-400'>
              Electrical & Computer Engineer
            </motion.span>
            
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className='my-6 max-w-xl py-6 font-light text-gray-300 text-lg leading-relaxed'>
              <p className='mb-4'>
                I'm an electrical and computer engineer passionate about bridging hardware and software. 
              </p>
              <p className='mb-4'>
                With experience in full-stack development and embedded systems, I create solutions that span from silicon to screen.
              </p>
              <p>
                Currently exploring machine learning to solve complex, real-world problems at the intersection of technology and human needs.
              </p>
            </motion.div>
            
            {/* Replaced buttons with interactive tech stack visualization */}
            <motion.div
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className='mt-8 w-full'>
              <div className='relative h-2 w-full bg-gray-800 rounded-full overflow-hidden'>
                <motion.div 
                  className='absolute h-full bg-gradient-to-r from-violet-500 to-indigo-600'
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                />
              </div>
              <motion.div 
                className='flex justify-between mt-2 text-xs text-gray-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}>
                <span>Hardware</span>
                <span>Full-Stack</span>
                <span>Embedded</span>
                <span>AI/ML</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <div className='w-full lg:w-1/2 p-8 lg:p-16'>
          <motion.div 
            className='flex justify-center'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 50,
              delay: 1.2
            }}>
            <div className='relative'>
              <div className='absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 opacity-70 blur-xl'></div>
              <div className='relative'>
                <motion.img 
                  className='w-80 h-80 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-pink-500 to-violet-600 p-1'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  src={photo} 
                  alt="Mintesinot Atnafu" />
              </div>
              <motion.div 
                className='absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full p-3 shadow-lg'
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1.8
                }}>
                <span className='text-xl'>👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Enhanced tech badges with hover effects */}
          <motion.div 
            className='flex flex-wrap justify-center gap-4 mt-16'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}>
            {['React', 'Node.js', 'Django', 'C/C++', 'Python', 'TensorFlow', 'Embedded', 'IoT'].map((tech, index) => (
              <motion.div 
                key={index}
                className='px-4 py-2 bg-gray-800/50 rounded-full text-sm text-gray-300 backdrop-blur-sm cursor-default'
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(109, 40, 217, 0.5)',
                  color: '#ffffff'
                }}
                transition={{ type: 'spring', stiffness: 300 }}>
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero;