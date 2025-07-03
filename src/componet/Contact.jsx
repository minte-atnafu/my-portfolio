import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
 )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

    return (
      <section id="contact" className="min-h-screen pt-20">
    <div className="border-b border-neutral-900 pb-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-20"
      >
        <h1 className="text-center text-5xl md:text-6xl font-thin mb-4">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Touch</span>
        </h1>
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mb-16"></div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start">
            <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
              <FaMapMarkerAlt className="text-2xl text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Location</h3>
              <p className="text-gray-400">{CONTACT.address}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
              <FaPhoneAlt className="text-2xl text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Phone</h3>
              <p className="text-gray-400">{CONTACT.PhoneNo}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
              <FaEnvelope className="text-2xl text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-2">Email</h3>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-medium text-white mb-4">Let's Connect</h3>
            <div className="flex space-x-4">
              {CONTACT.socials?.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-xl transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
        >
          <h3 className="text-2xl font-medium text-white mb-6">Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-lg" />
            </motion.button>
          </form>
        </motion.div>
      </div>
            </div>
            </section>
  );
};

export default Contact;