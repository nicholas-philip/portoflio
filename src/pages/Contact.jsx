import React, { useRef, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 bg-[url('/footer-bg-colorScheme.png')] bg-cover bg-center"
      id="contact"
    >
      <div className="max-w-2xl w-full p-8" data-aos="fade-up">
        <div className="text-center mb-10">
          <div
            className="text-center mb-2 text-lg font-serif"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Connect with me
          </div>
          <h2
            className="text-center text-2xl sm:text-5xl font-serif"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Get in touch
          </h2>
          <p
            className="font-semibold m-2 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I'd love to hear from you! If you have any questions, comments, or
            feedback, please use the form below.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          ref={form}
          className="space-y-4 max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white "
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full p-4 outline-none border border-gray-400 rounded-md "
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Send Message
            </button>
            <p className="mt-4 font-semibold">{result}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
