import React from "react";
import { CiGlobe } from "react-icons/ci";
import { AiFillAndroid } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import { motion } from "framer-motion";
const Services = () => {
  const boxData = [
    {
      icons: <CiGlobe size={28} />,
      title: "Web Development",
      description: "I can create high-quality websites and web applications.",
      read: "read more ",
    },
    {
      icons: <AiFillAndroid />,
      title: "Mobile App Development",
      description:
        "I can help you develop mobile apps using React Native or Flutter.",
      read: "read more ",
    },
    {
      icons: <CgIfDesign />,
      title: "UI/UX Design",
      description:
        "I can create beautiful and user-friendly interfaces for your web and mobile applications.",
      read: "read more ",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="bg:px-[12%] bg:py-10 scroll-mt-20 text-black dark:text-white flex flex-col items-center"
      id="services"
    >
      <motion.h4
        initial={{ y: -20, scale: 0 }}
        whileInView={{ y: -0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-serif"
      >
        What I Offer
      </motion.h4>

      <motion.h1
        initial={{ y: -20, scale: 0 }}
        whileInView={{ y: -20, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-2xl sm:text-5xl font-serif"
      >
        My Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="font-semibold m-2 text-center"
      >
        I'm a passionate Frontend Developer dedicated to crafting engaging,
        responsive, and user-friendly web experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
      >
        {boxData.map((box, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="bg-white dark:bg-gray-800 p-8 flex flex-col items-start gap-6 border h-[300px] w-[250px] border-gray-300 rounded-xl cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-white dark:border-white dark:hover:shadow-white"
          >
            <div className="h-17 w-8 flex  p-1 justify-center items-center bg-black rounded-md text-white text-3xl dark:bg-white dark:text-black">
              {box.icons}
            </div>
            <h2 className="text-xl font-bold">{box.title}</h2>
            <p className="text-black dark:text-white">{box.description}</p>
            <span
              className={`cursor-pointer ${
                index === 0
                  ? " text-blue-500 font-semibold  mt-7"
                  : "text-blue-500 font-semibold "
              }`}
            >
              {box.read}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
