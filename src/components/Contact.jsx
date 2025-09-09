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

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          rows="5"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg text-white"
        >
          Send Message
        </motion.button>

      </form>

    </div>
  );
};

export default Contact;
