import Hero from "./componet/Hero";
import Navbar from "./componet/Navbar";
import About from "./componet/About";
import Technologies from "./componet/Technologies";
import Project from "./componet/Project";
import Contact from "./componet/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900 selection:text-cyan-100">
      {/* Animated scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 origin-left" 
        style={{ scaleX }}
      />

      {/* Background elements */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[url('./assets/grid.svg')] opacity-20"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content container - fixed left edge */}
      <div className="w-full">
        <Navbar />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Hero />
          <About />
          <Technologies />
          <Project />
          <Contact />
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-500/30 z-40"
        >
          <FiArrowUp className="text-xl" />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm w-full">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          Designed & Built with ❤️ by Mintesinot Atnafu
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} All rights reserved
        </motion.p>
      </footer>
    </div>
  );
};

export default App;