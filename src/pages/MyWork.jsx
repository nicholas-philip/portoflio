import React from "react";
import { TbWorld } from "react-icons/tb";
import img from "../assets/susugroup.png";
import market from "../assets/MarketPress.png";
import Game from "../assets/game (2).png";
import { motion } from "framer-motion";
const MyWork = () => {
  const projects = [
    {
      title: "Susugroup WebApp",
      date: "Jan 2024 - Feb 2024",
      description:
        "I built a digital savings platform that helps users participate in ROSCA (Rotating Savings and Credit Associations). The platform allows users to create, join, and manage savings groups effectively.",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Google Icons"],
      image: img,
      links: {
        website: "https://nicholas-philip.github.io/-Susugroupapp/",
      },
    },
    {
      title: "Auto Part Website",
      date: "June 2023 - Present",
      description:
        "Developed a responsive website for an auto parts business, featuring a product catalog, search functionality, and secure checkout system.",
      tags: ["HTML", "Vanilla CSS", "Flowbite", "Google Fonts", "Google Icons"],
      image: market,
      links: {
        website: "https://nicholas-philip.github.io/marketpress/",
        source: "#",
      },
    },
    {
      title: "TIC TAC TOE",
      date: "June 2023 - Present",
      description:
        "Developed a classic Tic Tac Toe game. The game features interactive gameplay with a responsive design, allowing players to compete against each other in real-time. It also includes a clean, intuitive interface for an engaging user experience.",
      tags: ["JavaScript", "HTML", "TailwindCSS"],
      image: Game,
      links: {
        website: "#",
        source: "#",
      },
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="mywork"
      className="py-10 px-4 max-w-5xl mx-auto"
    >
      <div className="text-center mb-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-serif dark:text-white"
        >
          My Projects
        </motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-2xl sm:text-5xl font-serif dark:text-white"
        >
          Check out my latest work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="font-semibold m-2 text-center dark:text-white"
        >
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 md:ml-12"
      >
        {projects.map((project, index) => (
          <motion.div
            whileInHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="rounded-xl border shadow-sm md:w-[380px] max-h-[500px] border-black dark:border-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-xl h-40 md:h-48 w-full mb-4"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-black mb-2 dark:text-white">
                {project.date}
              </p>
              <p className="text-black mb-2 dark:text-white">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-300 text-black px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white w-full sm:w-28 flex justify-center items-center h-10 rounded-2xl font-semibold gap-3 p-3"
                >
                  <TbWorld /> Website
                </a>
                {project.links.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white w-full sm:w-28 flex justify-center items-center h-10 rounded-2xl font-semibold gap-3 p-3"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default MyWork;
