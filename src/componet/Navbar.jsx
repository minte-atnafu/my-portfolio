import { motion } from "framer-motion";
import { Link } from 'react-scroll'; // Added react-scroll
import logo from "../assets/mintesinotLogo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mintesinot-atnafu-056211311", color: "text-blue-600 hover:text-blue-400" },
        { icon: <FaGithub />, url: "https://github.com/minte-atnafu", color: "text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400" },
        { icon: <FaTwitter />, url: "https://twitter.com/@atnafu55161", color: "text-sky-500 hover:text-sky-400" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/mintesinotatnafu/", color: "text-pink-600 hover:text-pink-400" }
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 py-4 px-4 md:px-8 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center"
                >
                    <img 
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md" 
                        src={logo} 
                        alt="Mintesinot Logo" 
                    />
                    <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300">
                        Mintesinot Atnafu
                    </span>
                </motion.div>

                {/* Navigation Links and Social Icons */}
                <div className="flex items-center space-x-6">
                    {/* Navigation Links - Updated with react-scroll */}
                    <div className="hidden md:flex space-x-8">
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500}
                            offset={-80} // Adjust this if you have a fixed header height
                            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors cursor-pointer"
                        >
                            About
                        </Link>
                        <Link 
                            to="projects" 
                            smooth={true} 
                            duration={500}
                            offset={-80}
                            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors cursor-pointer"
                        >
                            Projects
                        </Link>
                        <Link 
                            to="technologies" 
                            smooth={true} 
                            duration={500}
                            offset={-80}
                            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors cursor-pointer"
                        >
                            Skills
                        </Link>
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={500}
                            offset={-80}
                            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors cursor-pointer"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4 ml-6">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-2xl ${link.color} transition-colors`}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                        
                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;