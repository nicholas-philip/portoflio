import userImg from "../assets/my-profile.jpeg";
import { FaCode, FaNodeJs, FaYarn, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { useEffect, useState } from "react";

const About = () => {
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
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 text-black dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg font-serif">Introduction</h4>
      <h1 className="text-center text-5xl font-serif">About me</h1>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <img
            src={userImg}
            alt="user"
            className="w-full rounded-3xl h-96 object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-serif">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl py-8 
  hover:text-black"
          >
            <div
              className={`border border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-black`}
            >
              <FaCode className="w-10 h-10 mx-auto text-blue-500" />
              <p className="my-4 font-semibold text-gray-800 text-lg dark:text-white">
                Languages
              </p>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-white">
                HTML, CSS, JavaScript, React Js, Next Js
              </p>
            </div>
            <div
              className={`border border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-black`}
            >
              <IoSchoolOutline className="w-10 h-10 mx-auto text-green-500" />
              <p className="my-4 font-semibold text-gray-800 text-lg dark:text-white">
                Education
              </p>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-white">
                Software Engineering
              </p>
            </div>
            <div
              className={`border border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-black`}
            >
              <BiBriefcaseAlt2 className="w-10 h-10 mx-auto text-purple-500" />
              <p className="my-4 font-semibold text-gray-800 text-lg dark:text-white">
                Projects
              </p>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-white">
                Built more than 5 projects
              </p>
            </div>
          </div>

          <h4 className="my-6 text-gray-700 font-serif dark:text-white">
            Tools I use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <VscVscode className="text-blue-500 w-12 h-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " />
            <FaNodeJs className="text-green-500 w-12 h-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " />
            <FaYarn className="text-[#2188B6] w-12 h-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " />
            <FaGitAlt className="text-[#F05033] w-12 h-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " />
            <FaGithub className="w-12 h-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 " />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
