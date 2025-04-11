import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "9470bafe-f6de-4e8e-8339-86c5d8ccd659");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center min-h-screen px-4 bg-[url('/footer-bg-colorScheme.png')] bg-cover bg-center"
      id="contact"
    >
      <div className="max-w-2xl w-full p-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-2 text-lg font-serif"
          >
            Connect with me
          </motion.div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-2xl sm:text-5xl font-serif"
          >
            Get in touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-semibold m-2 text-center"
          >
            I'd love to hear from you! If you have any questions, comments, or
            feedback, please use the form below.
          </motion.p>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onSubmit={onSubmit}
          ref={form}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white "
              required
            />
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white "
              required
            />
          </div>
          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full p-4 outline-none border border-gray-400 rounded-md "
            required
          ></motion.textarea>

          <div className="text-center">
            <motion.button
              whileInHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </motion.button>
            <p className="mt-4 font-semibold">{result}</p>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
