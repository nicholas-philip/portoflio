import userImg from "../assets/my-profile.jpeg";
import { FaCode, FaNodeJs, FaYarn, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Aos from "aos";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.theme === "dark";
  });

  useEffect(() => {
    Aos.refresh();
  }, []);

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
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 text-black dark:text-white"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <h4
        className="text-center mb-2 text-lg font-serif"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Introduction
      </h4>
      <h1
        className="text-center text-5xl font-serif"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        About me
      </h1>

      <div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          data-aos="flip-left"
          data-aos-delay="400"
        >
          <img
            src={userImg}
            alt="user"
            className="w-full rounded-3xl h-96 object-cover"
          />
        </div>

        <div className="flex-1" data-aos="fade-left" data-aos-delay="500">
          <p className="mb-10 max-w-2xl font-serif">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <div
            className="grid grid-cols-3 justify-center sm:grid-cols-3 gap-6 max-w-4xl py-8 hover:text-black"
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            {/* You can wrap each icon or skill block in a div and animate them individually if desired */}
            <div data-aos="fade-up" data-aos-delay="650">
              <FaCode size={40} />
              <p>HTML / CSS / JS</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
              <FaNodeJs size={40} />
              <p>Node.js</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="750">
              <FaYarn size={40} />
              <p>Yarn / npm</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <FaGitAlt size={40} />
              <p>Git</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="850">
              <FaGithub size={40} />
              <p>GitHub</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="900">
              <VscVscode size={40} />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
