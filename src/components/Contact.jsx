import React from 'react';
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mldwawgn"); // Use your Formspree form ID

  if (state.succeeded) {
    return (
      <section id="contactus" className="text-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">Thank you for your message!</h2>
          <p className="text-gray-300 text-lg">I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <div className="container mx-auto py-20 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-blue-400"
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Get in Touch</h3>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Me</p>
                <a href="mailto:yadavyogesh0913@gmail.com" className="text-white hover:text-blue-400 font-medium">yadavyogesh0913@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Call/WhatsApp</p>
                <a href="tel:+919967658225" className="text-white hover:text-blue-400 font-medium">+91 9967658225</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Kalyan(E), Maharashtra, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            rows="5"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg text-white transition"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

      </div>

    </div>
  );
};

export default Contact;
