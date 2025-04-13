import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/my-profile.jpeg";
import handIcon from "../assets/hand-icon.png";
import rightArrow from "../assets/right-arrow-bold.png";
import downloadIcon from "../assets/download-icon.png";
import { motion } from "framer-motion";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl h-screen flex items-center justify-center mx-auto text-center gap-4 flex-col dark:text-white"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <img src={profileImg} alt="" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-serif font-semibold flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi! I'm Philip Nicholas <img src={handIcon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-serif"
      >
        frontend web developer based in Ghana
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-2xl mx-auto font-serif"
      >
        I am a software engineer based in Accra, Ghana, passionate about
        building responsive and user-friendly web applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.Link
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          to={"/contact"}
          className="px-10 py-3 border rounded-full border-gwhite flex items-center gap-2 bg-black text-white dark:text-white"
        >
          Contact me
          <img src={rightArrow} alt="" className="rounded-full w-4" />
        </motion.Link>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-black flex items-center gap-2 dark:border-white"
        >
          Download CV
          <img src={downloadIcon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
